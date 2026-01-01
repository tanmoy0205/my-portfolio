'use client'

import { motion } from 'framer-motion'
import { FaTrophy, FaAward, FaUsers, FaCertificate, FaHandshake, FaBriefcase } from 'react-icons/fa'

const achievements = [
  { 
    title: 'AIgnite Hackathon 2025', 
    description: 'Participated in AIgnite Hackathon 2025, showcasing innovative solutions and problem-solving skills', 
    icon: FaTrophy,
    category: 'Hackathon',
    color: 'from-yellow-500 to-orange-500'
  },
  { 
    title: 'Viksit Bharat Youth Parliament', 
    description: 'Selected participant in Viksit Bharat Youth Parliament, demonstrating leadership and civic engagement', 
    icon: FaAward,
    category: 'Leadership',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    title: 'National Integration Camp', 
    description: 'Attended National Integration Camp in Maharashtra - represented West Bengal NSS team, promoting national unity', 
    icon: FaCertificate,
    category: 'NSS',
    color: 'from-green-500 to-emerald-500'
  },
  { 
    title: 'NSS Volunteer', 
    description: 'Active NSS Volunteer since 2023, contributing to social causes and community service', 
    icon: FaHandshake,
    category: 'Service',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    title: 'Placement Chair', 
    description: 'Placement Chair for Bachelor of Computer Applications program, facilitating career opportunities for students', 
    icon: FaBriefcase,
    category: 'Leadership',
    color: 'from-indigo-500 to-blue-500'
  },
  { 
    title: 'Event Organizer', 
    description: 'Organized events like Free Fire Tournament and Data Visualization competitions, managing teams and logistics', 
    icon: FaUsers,
    category: 'Event Management',
    color: 'from-red-500 to-pink-500'
  },
]

export default function AchievementsSection() {
  return (
    <section 
      id="achievements"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4"
          >
            <span className="text-white">My</span>
            {' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4"
          >
            Highlights of my journey, accomplishments, and contributions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-dark-100/50 backdrop-blur-md border border-gray-800/50 rounded-2xl p-4 sm:p-5 md:p-6 hover:border-accent-cyan/50 transition-all duration-300 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                    className={`relative mb-3 sm:mb-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    <Icon size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className={`inline-block px-2.5 sm:px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-xs font-semibold rounded-full mb-2 sm:mb-3`}
                    >
                      {achievement.category}
                    </motion.span>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-accent-cyan transition-colors"
                    >
                      {achievement.title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="text-gray-300 text-xs sm:text-sm leading-relaxed"
                    >
                      {achievement.description}
                    </motion.p>
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${achievement.color} opacity-5 rounded-bl-full`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

