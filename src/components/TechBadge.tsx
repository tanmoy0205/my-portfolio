'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode, useState } from 'react'

interface TechBadgeProps {
  name: string
  icon?: ReactNode
  color: string
  delay?: number
  description?: string
  category?: string
  experience?: string
}

export default function TechBadge({ 
  name, 
  icon, 
  color, 
  delay = 0,
  description = '',
  category = '',
  experience = ''
}: TechBadgeProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay,
        type: 'spring',
        stiffness: 200,
        damping: 15
      }}
      whileHover={{
        scale: 1.15,
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300 rounded-xl"
        style={{ background: color }}
      />
      
      {/* Badge */}
      <div 
        className="relative px-6 py-4 bg-dark-50/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-primary-500/50 transition-all shadow-lg"
        style={{
          boxShadow: isHovered ? `0 0 20px ${color}40` : 'none'
        }}
      >
        <div className="flex items-center gap-3">
          {icon && (
            <motion.div 
              className="text-2xl"
              animate={isHovered ? { rotate: [0, -10, 10, -10, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
          )}
          <span className="text-white font-semibold">{name}</span>
        </div>
      </div>

      {/* Hover Tooltip */}
      <AnimatePresence>
        {isHovered && (description || category || experience) && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 p-4 bg-dark-100 border border-gray-700 rounded-xl shadow-2xl"
            style={{
              boxShadow: `0 10px 40px ${color}20, 0 0 0 1px ${color}30`
            }}
          >
            <div className="space-y-2">
              {category && (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Category</span>
                  <span className="text-sm text-white">{category}</span>
                </div>
              )}
              {description && (
                <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
              )}
              {experience && (
                <div className="flex items-center gap-2 pt-2 border-t border-gray-700">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Experience</span>
                  <span className="text-sm text-white font-medium">{experience}</span>
                </div>
              )}
            </div>
            {/* Arrow */}
            <div 
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-dark-100 border-l border-t border-gray-700 rotate-45"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
