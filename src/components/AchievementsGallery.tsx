'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiViewGrid, HiViewList } from 'react-icons/hi'

const achievements = [
  { 
    title: 'AIgnite Hackathon 2025', 
    description: 'Participated in AIgnite Hackathon 2025, showcasing innovative solutions', 
    icon: '🚀',
    category: 'Hackathon'
  },
  { 
    title: 'Viksit Bharat Youth Parliament', 
    description: 'Selected participant in Viksit Bharat Youth Parliament', 
    icon: '🏛️',
    category: 'Leadership'
  },
  { 
    title: 'National Integration Camp', 
    description: 'Attended National Integration Camp, Maharashtra - represented West Bengal NSS team', 
    icon: '🎖️',
    category: 'NSS'
  },
  { 
    title: 'NSS Volunteer', 
    description: 'Active NSS Volunteer since 2023, contributing to social causes', 
    icon: '🤝',
    category: 'Service'
  },
  { 
    title: 'Placement Chair', 
    description: 'Placement Chair for Bachelor of Computer Applications program', 
    icon: '💼',
    category: 'Leadership'
  },
  { 
    title: 'Event Organizer', 
    description: 'Organized events like Free Fire Tournament and Data Viz competitions', 
    icon: '🎯',
    category: 'Event Management'
  },
]

export default function AchievementsGallery() {
  const [viewMode, setViewMode] = useState<'grid' | 'gallery'>('grid')

  return (
    <section 
      id="achievements"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
          >
            <span className="text-white">Achievements</span>
          </motion.h2>

          {/* View Toggle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-2 bg-dark-100/50 backdrop-blur-md border border-gray-800/50 rounded-lg p-1 self-start sm:self-center"
          >
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-all ${
                viewMode === 'grid'
                  ? 'bg-accent-cyan text-dark-200'
                  : 'text-gray-400 hover:text-white'
              }`}
              aria-label="Grid view"
            >
              <HiViewGrid size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => setViewMode('gallery')}
              className={`p-2 rounded transition-all ${
                viewMode === 'gallery'
                  ? 'bg-accent-cyan text-dark-200'
                  : 'text-gray-400 hover:text-white'
              }`}
              aria-label="Gallery view"
            >
              <HiViewList size={18} className="sm:w-5 sm:h-5" />
            </button>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                  className="bg-dark-100/50 backdrop-blur-md border border-gray-800/50 rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:border-accent-cyan/50 transition-all group"
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div 
                    className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  >
                    {achievement.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-lg sm:text-xl font-bold text-white mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {achievement.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 text-xs sm:text-sm mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {achievement.description}
                  </motion.p>
                  <motion.span
                    className="inline-block px-2.5 sm:px-3 py-1 bg-accent-cyan/20 text-accent-cyan text-xs rounded-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {achievement.category}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-dark-100/50 backdrop-blur-md border border-gray-800/50 rounded-2xl p-4 sm:p-6 hover:border-accent-cyan/50 transition-all group"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.div 
                      className="text-3xl sm:text-4xl flex-shrink-0"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-2">
                        <motion.h3 
                          className="text-lg sm:text-xl font-bold text-white"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          {achievement.title}
                        </motion.h3>
                        <motion.span
                          className="px-2.5 sm:px-3 py-1 bg-accent-cyan/20 text-accent-cyan text-xs rounded-full self-start sm:self-center whitespace-nowrap"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                        >
                          {achievement.category}
                        </motion.span>
                      </div>
                      <motion.p 
                        className="text-gray-300 text-sm sm:text-base"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        {achievement.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

