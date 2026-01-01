'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedBackground() {
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

    // Stars
    const stars: Array<{ x: number; y: number; radius: number; speed: number; opacity: number }> = []
    const starCount = 200
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.5,
      })
    }

    // Asteroids/Meteors
    const meteors: Array<{ x: number; y: number; length: number; speed: number; opacity: number }> = []
    const meteorCount = 5

    for (let i = 0; i < meteorCount; i++) {
      meteors.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.5,
      })
    }

    // Galaxy particles
    const particles: Array<{ x: number; y: number; radius: number; vx: number; vy: number }> = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw galaxy particles
      ctx.fillStyle = 'rgba(139, 92, 246, 0.3)'
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Reset if out of bounds
        if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
          particle.x = canvas.width / 2
          particle.y = canvas.height / 2
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw stars
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
      stars.forEach((star) => {
        star.opacity += Math.sin(Date.now() * 0.001 + star.x) * 0.02
        star.opacity = Math.max(0.3, Math.min(1, star.opacity))
        
        ctx.globalAlpha = star.opacity
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.globalAlpha = 1

      // Draw meteors
      meteors.forEach((meteor) => {
        meteor.x += meteor.speed
        meteor.y += meteor.speed * 0.5

        // Reset if out of bounds
        if (meteor.x > canvas.width || meteor.y > canvas.height) {
          meteor.x = Math.random() * canvas.width * 0.5 - canvas.width * 0.5
          meteor.y = Math.random() * canvas.height * 0.3
        }

        // Draw meteor trail
        const gradient = ctx.createLinearGradient(
          meteor.x,
          meteor.y,
          meteor.x - meteor.length,
          meteor.y - meteor.length
        )
        gradient.addColorStop(0, `rgba(59, 130, 246, ${meteor.opacity})`)
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)')

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(meteor.x, meteor.y)
        ctx.lineTo(meteor.x - meteor.length, meteor.y - meteor.length)
        ctx.stroke()

        // Draw meteor head
        ctx.fillStyle = `rgba(139, 92, 246, ${meteor.opacity})`
        ctx.beginPath()
        ctx.arc(meteor.x, meteor.y, 3, 0, Math.PI * 2)
        ctx.fill()
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
      {/* Galaxy gradient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 30%, transparent 70%)',
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 80% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Canvas for animated stars and meteors */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Additional static stars layer */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[length:50px_50px] opacity-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(139,92,246,0.1)_1px,_transparent_0)] bg-[length:30px_30px] opacity-60"></div>
      </div>
    </>
  )
}

