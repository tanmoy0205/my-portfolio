'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

interface EducationCardProps {
  degree: string
  institution: string
  location: string
  period: string
  delay?: number
}

export default function EducationCard({
  degree,
  institution,
  location,
  period,
  delay = 0
}: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-dark-100/50 backdrop-blur-md border border-gray-800/50 rounded-xl p-4 hover:border-accent-cyan/50 transition-all duration-300 group">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-lg"
          >
            <FaGraduationCap size={18} />
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Degree */}
            <h3 className="text-base font-bold text-white mb-1 leading-tight">
              {degree}
            </h3>
            
            {/* Institution */}
            <p className="text-accent-cyan text-sm font-semibold mb-2">
              {institution}
            </p>

            {/* Details */}
            <div className="space-y-1.5">
              {/* Period */}
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <FaCalendarAlt className="text-accent-cyan flex-shrink-0" size={12} />
                <span>{period}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <FaMapMarkerAlt className="text-accent-cyan flex-shrink-0" size={12} />
                <span>{location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

