'use client'

import { motion } from 'framer-motion'

interface AnimatedGradientTextProps {
  children: React.ReactNode
  className?: string
}

export default function AnimatedGradientText({ children, className = '' }: AnimatedGradientTextProps) {
  return (
    <motion.span
      className={`bg-clip-text text-transparent ${className}`}
      animate={{
        backgroundImage: [
          'linear-gradient(90deg, #06b6d4, #3b82f6, #06b6d4)',
          'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
          'linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4)',
          'linear-gradient(90deg, #ec4899, #06b6d4, #3b82f6)',
          'linear-gradient(90deg, #06b6d4, #3b82f6, #06b6d4)',
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundImage: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #06b6d4)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'gradient-shift 8s linear infinite',
      }}
    >
      {children}
    </motion.span>
  )
}

