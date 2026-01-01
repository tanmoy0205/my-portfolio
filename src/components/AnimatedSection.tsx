'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={isInView ? { y: 0, x: 0, opacity: 1 } : directionVariants[direction]}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.21, 1.11, 0.81, 0.99] // Custom easing similar to Reflect
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

