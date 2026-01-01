'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React, { ReactNode, useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface TechItem {
  name: string
  icon: ReactNode
  color: string
  description: string
  category: string
  experience: string
}

interface TechGlobeProps {
  technologies: TechItem[]
}

interface TooltipProps {
  tech: TechItem
  badgeRef: React.RefObject<HTMLDivElement>
}

function Tooltip({ tech, badgeRef }: TooltipProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = () => {
      if (badgeRef?.current) {
        const rect = badgeRef.current.getBoundingClientRect()
        setPosition({
          x: rect.left + rect.width / 2,
          y: rect.top - 10
        })
      }
    }
    updatePosition()
    const interval = setInterval(updatePosition, 50)
    const handleScroll = () => updatePosition()
    const handleResize = () => updatePosition()
    
    window.addEventListener('scroll', handleScroll, true)
    window.addEventListener('resize', handleResize)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('scroll', handleScroll, true)
      window.removeEventListener('resize', handleResize)
    }
  }, [badgeRef])

  if (typeof window === 'undefined' || !badgeRef?.current) return null

  const tooltipContent = (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="fixed w-72 p-4 bg-dark-100 border border-gray-700 rounded-xl shadow-2xl pointer-events-none"
      style={{
        zIndex: 99999,
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -100%)',
        boxShadow: `0 10px 40px ${tech.color}20, 0 0 0 1px ${tech.color}30`
      }}
    >
      <div className="space-y-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="text-xl" style={{ color: tech.color }}>
            {tech.icon}
          </div>
          <span className="text-lg font-bold text-white">{tech.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
            Category
          </span>
          <span className="text-sm text-white">{tech.category}</span>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">
          {tech.description}
        </p>
        <div className="flex items-center gap-2 pt-2 border-t border-gray-700">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
            Experience
          </span>
          <span className="text-sm text-white font-medium">{tech.experience}</span>
        </div>
      </div>
      <div 
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-dark-100 border-l border-b border-gray-700 rotate-45"
      />
    </motion.div>
  )

  return createPortal(tooltipContent, document.body)
}

export default function TechGlobe({ technologies }: TechGlobeProps) {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<HTMLDivElement>(null)
  const badgeRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({})
  const isDragging = useRef(false)

  useEffect(() => {
    setMounted(true)
    technologies.forEach(tech => {
      if (!badgeRefs.current[tech.name]) {
        badgeRefs.current[tech.name] = React.createRef<HTMLDivElement>()
      }
    })
  }, [technologies])

  // Calculate positions on sphere using Fibonacci sphere algorithm for even distribution
  const getSpherePosition = (index: number, total: number) => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5)) // Golden angle in radians
    const theta = goldenAngle * index
    const y = 1 - (index / (total - 1)) * 2 // y goes from 1 to -1
    const radiusAtY = Math.sqrt(1 - y * y) // radius at y
    
    const radius = 200 // Sphere radius in pixels
    const x = radius * Math.cos(theta) * radiusAtY
    const z = radius * Math.sin(theta) * radiusAtY
    const yPos = radius * y
    
    return { x, y: yPos, z, theta, phi: Math.acos(y) }
  }

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating || isDragging.current || !mounted || hoveredTech) return
    
    const interval = setInterval(() => {
      setRotation((prev) => ({
        x: prev.x,
        y: prev.y + 0.3
      }))
    }, 50)

    return () => clearInterval(interval)
  }, [isAutoRotating, mounted, hoveredTech])

  // Mouse drag interaction
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    setIsAutoRotating(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY
    
    setRotation({
      x: Math.max(-30, Math.min(30, deltaY * 0.1)),
      y: deltaX * 0.1
    })
  }

  const handleMouseUp = () => {
    isDragging.current = false
    if (!hoveredTech) {
      setTimeout(() => setIsAutoRotating(true), 2000)
    }
  }

  // Handle hover to stop rotation
  const handleTechHover = (techName: string | null) => {
    setHoveredTech(techName)
    if (techName) {
      setIsAutoRotating(false)
    } else {
      setTimeout(() => setIsAutoRotating(true), 500)
    }
  }

  // Generate wireframe connections between nearby nodes
  const getConnections = () => {
    const connections: Array<{ from: number; to: number }> = []
    const positions = technologies.map((_, i) => getSpherePosition(i, technologies.length))
    
    // Connect each node to its nearest neighbors
    for (let i = 0; i < technologies.length; i++) {
      const distances: Array<{ index: number; dist: number }> = []
      
      for (let j = 0; j < technologies.length; j++) {
        if (i === j) continue
        
        const dist = Math.sqrt(
          Math.pow(positions[i].x - positions[j].x, 2) +
          Math.pow(positions[i].y - positions[j].y, 2) +
          Math.pow(positions[i].z - positions[j].z, 2)
        )
        
        distances.push({ index: j, dist })
      }
      
      // Sort by distance and connect to 3-4 nearest neighbors
      distances.sort((a, b) => a.dist - b.dist)
      const neighborsToConnect = Math.min(4, distances.length)
      
      for (let k = 0; k < neighborsToConnect; k++) {
        const neighbor = distances[k]
        // Only add if not already connected (avoid duplicates)
        if (!connections.some(c => 
          (c.from === i && c.to === neighbor.index) || 
          (c.from === neighbor.index && c.to === i)
        )) {
          connections.push({ from: i, to: neighbor.index })
        }
      }
    }
    
    return connections
  }

  if (!mounted) {
    return (
      <div className="w-full h-[700px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  const connections = getConnections()
  const positions = technologies.map((_, i) => getSpherePosition(i, technologies.length))

  return (
    <div className="relative w-full h-[700px] flex items-center justify-center perspective-1000 overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Globe Container with 3D transform - centered */}
        <div
          ref={globeRef}
          className="relative preserve-3d"
          style={{
            width: '800px',
            height: '800px',
            transformStyle: 'preserve-3d',
            transform: `translate(-50%, -50%) translateZ(0) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transition: isAutoRotating && !hoveredTech ? 'none' : 'transform 0.1s ease-out'
          }}
        >
          {/* Wireframe Connections */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            style={{ zIndex: 1, width: '800px', height: '800px' }}
          >
            {connections.map((conn, idx) => {
              const fromPos = positions[conn.from]
              const toPos = positions[conn.to]
              
              // Project 3D to 2D (centered at 400, 400)
              const centerX = 400
              const centerY = 400
              const fromX = centerX + fromPos.x
              const fromY = centerY + fromPos.y
              const toX = centerX + toPos.x
              const toY = centerY + toPos.y
              
              // Calculate opacity and blur based on average z-depth
              const avgZ = (fromPos.z + toPos.z) / 2
              const opacity = Math.max(0.1, Math.min(0.6, 0.3 + (avgZ / 200) * 0.3))
              
              return (
                <motion.line
                  key={`${conn.from}-${conn.to}-${idx}`}
                  x1={fromX}
                  y1={fromY}
                  x2={toX}
                  y2={toY}
                  stroke="url(#wireframeGradient)"
                  strokeWidth="1.5"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: opacity,
                  }}
                  transition={{ 
                    duration: 0.5,
                    delay: idx * 0.01
                  }}
                  style={{
                    filter: avgZ < -50 ? 'blur(2px)' : 'blur(0px)'
                  }}
                />
              )
            })}
            <defs>
              <linearGradient id="wireframeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Tech Icons positioned on sphere */}
          {technologies.map((tech, index) => {
            const pos = positions[index]
            const centerX = 400
            const centerY = 400
            const x = centerX + pos.x
            const y = centerY + pos.y
            const scale = 0.9 + (pos.z / 200) * 0.3 // Scale based on z-depth
            const opacity = 0.8 + (pos.z / 200) * 0.2 // Opacity based on z-depth
            const blurAmount = pos.z < -100 ? Math.abs(pos.z / 50) : 0 // Blur when behind
            
            if (!badgeRefs.current[tech.name]) {
              badgeRefs.current[tech.name] = React.createRef<HTMLDivElement>()
            }
            
            return (
              <motion.div
                key={tech.name}
                ref={badgeRefs.current[tech.name]}
                className="absolute"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%) translateZ(${pos.z}px) scale(${scale})`,
                  zIndex: Math.round(100 + pos.z),
                  transformStyle: 'preserve-3d',
                  opacity: opacity,
                  filter: blurAmount > 0 ? `blur(${blurAmount}px)` : 'blur(0px)',
                  transition: 'filter 0.3s ease-out'
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: opacity, 
                  scale: scale,
                }}
                transition={{ 
                  delay: index * 0.03,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }}
                onMouseEnter={() => handleTechHover(tech.name)}
                onMouseLeave={() => handleTechHover(null)}
                whileHover={{ scale: scale * 1.3, z: 50 }}
              >
                {/* Circular bubble with icon */}
                <motion.div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-sm"
                  style={{
                    backgroundColor: hoveredTech === tech.name 
                      ? `${tech.color}20` 
                      : 'rgba(15, 15, 16, 0.85)',
                    border: `2px solid ${hoveredTech === tech.name ? tech.color : `${tech.color}60`}`,
                    boxShadow: hoveredTech === tech.name 
                      ? `0 0 25px ${tech.color}80, 0 0 50px ${tech.color}40, inset 0 0 20px ${tech.color}20`
                      : `0 4px 15px rgba(0,0,0,0.4), 0 0 10px ${tech.color}30`
                  }}
                  animate={{
                    borderColor: hoveredTech === tech.name ? tech.color : `${tech.color}60`,
                    backgroundColor: hoveredTech === tech.name 
                      ? `${tech.color}20` 
                      : 'rgba(15, 15, 16, 0.85)',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Icon with proper visibility */}
                  <motion.div
                    className="text-2xl flex items-center justify-center"
                    style={{ 
                      color: tech.color,
                      filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.3))'
                    }}
                    animate={hoveredTech === tech.name ? { 
                      rotate: [0, -15, 15, -15, 0],
                      scale: [1, 1.2, 1]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {tech.icon}
                  </motion.div>
                  
                  {/* Pulsing ring effect on hover */}
                  {hoveredTech === tech.name && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2"
                      style={{ borderColor: tech.color }}
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ 
                        scale: [1, 1.5, 1.5],
                        opacity: [0.8, 0, 0]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                  )}
                  
                  {/* Glow effect for better visibility */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-30"
                    style={{
                      background: `radial-gradient(circle, ${tech.color}40 0%, transparent 70%)`,
                      filter: 'blur(8px)'
                    }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Tooltips rendered via portal to appear above everything */}
      {mounted && hoveredTech && (() => {
        const tech = technologies.find(t => t.name === hoveredTech)
        if (!tech || !badgeRefs.current[hoveredTech]) return null
        return (
          <AnimatePresence key={hoveredTech}>
            <Tooltip
              tech={tech}
              badgeRef={badgeRefs.current[hoveredTech]}
            />
          </AnimatePresence>
        )
      })()}

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 text-center z-10"
      >
        <p className="flex items-center gap-2">
          <span>🖱️ Drag to rotate</span>
          <span>•</span>
          <span>👆 Hover icons for details</span>
        </p>
      </motion.div>
    </div>
  )
}
