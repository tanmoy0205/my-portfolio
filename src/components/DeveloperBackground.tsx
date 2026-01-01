'use client'

import { useEffect, useRef } from 'react'

export default function DeveloperBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Code particles (like terminal code characters floating)
    const particles: Array<{ x: number; y: number; char: string; speed: number; opacity: number; size: number }> = []
    const chars = ['<', '>', '{', '}', '(', ')', '/', '\\', '=', ';', ':', '*', '#', '&', '%', '[', ']', '|', '+', '-', '_']
    const particleCount = 150

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        char: chars[Math.floor(Math.random() * chars.length)],
        speed: Math.random() * 0.8 + 0.3,
        opacity: Math.random() * 0.4 + 0.2,
        size: Math.random() * 14 + 12,
      })
    }

    // Grid lines (like code editor)
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.03)'
      ctx.lineWidth = 1
      const gridSize = 50

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      drawGrid()

      // Draw and update particles
      particles.forEach((particle) => {
        particle.y += particle.speed

        // Reset if out of bounds
        if (particle.y > canvas.height) {
          particle.y = -20
          particle.x = Math.random() * canvas.width
        }

        // Fade effect
        particle.opacity += Math.sin(Date.now() * 0.002 + particle.x) * 0.015
        particle.opacity = Math.max(0.15, Math.min(0.6, particle.opacity))

        ctx.fillStyle = `rgba(6, 182, 212, ${particle.opacity})`
        ctx.font = `${particle.size}px monospace`
        ctx.fillText(particle.char, particle.x, particle.y)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      {/* Base gradient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-br from-dark-200 via-dark-100 to-dark-200" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Canvas for animated code particles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-50"
      />

      {/* Subtle gradient overlays for depth */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
          }}
        />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: 'radial-gradient(ellipse at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          }}
        />
      </div>
    </>
  )
}

