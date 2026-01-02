'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram, FaFacebookF, FaTrophy, FaAward, FaUsers, FaCertificate, FaHandshake, FaBriefcase } from 'react-icons/fa'
import Image from 'next/image'

const achievementImages = [
  '/AchievementsG/pic-1.jpeg',
  '/AchievementsG/pic-2.jpeg',
  '/AchievementsG/pic-3.jpeg',
  '/AchievementsG/pic-4.jpeg',
  '/AchievementsG/pic-5.jpeg',
  '/AchievementsG/pic-6.jpeg',
  '/AchievementsG/pic-7.jpeg',
  '/AchievementsG/pic-8.jpeg',
  '/AchievementsG/pic-9.jpeg',
  '/AchievementsG/pic-10.jpeg',
  '/AchievementsG/pic-11.jpeg',
  '/AchievementsG/pic-12.jpeg',
]

const achievements = [
  { 
    title: 'AIgnite Hackathon 2025', 
    description: 'Participated in AIgnite Hackathon 2025, showcasing innovative solutions and problem-solving skills', 
    category: 'Hackathon',
    color: 'from-yellow-500 to-orange-500'
  },
  { 
    title: 'Viksit Bharat Youth Parliament', 
    description: 'Selected participant in Viksit Bharat Youth Parliament, demonstrating leadership and civic engagement', 
    category: 'Leadership',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    title: 'National Integration Camp', 
    description: 'Attended National Integration Camp in Maharashtra - represented West Bengal NSS team, promoting national unity', 
    category: 'NSS',
    color: 'from-green-500 to-emerald-500'
  },
  { 
    title: 'NSS Volunteer', 
    description: 'Active NSS Volunteer since 2023, contributing to social causes and community service', 
    category: 'Service',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    title: 'Placement Chair', 
    description: 'Placement Chair for Bachelor of Computer Applications program, facilitating career opportunities for students', 
    category: 'Leadership',
    color: 'from-indigo-500 to-blue-500'
  },
  { 
    title: 'Event Organizer', 
    description: 'Organized events like Free Fire Tournament and Data Visualization competitions, managing teams and logistics', 
    category: 'Event Management',
    color: 'from-red-500 to-pink-500'
  },
]

export default function AchievementsGalleryNew() {
  // Duplicate images three times for seamless infinite scroll
  const duplicatedImages = [...achievementImages, ...achievementImages, ...achievementImages]
  
  // Extract YouTube video ID from URL
  const youtubeUrl = "https://youtu.be/ZHzHPIFZUuI"
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }
  
  const videoId = getYouTubeVideoId(youtubeUrl)
  const embedUrl = videoId 
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&start=4&controls=0&modestbranding=1&rel=0`
    : ''

  return (
    <section 
      id="achievements"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
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
            className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
          >
            Highlights of my journey, accomplishments, and contributions
          </motion.p>
        </motion.div>
      </div>

      {/* Moving Gallery with Video in Middle - Full Width */}
      <div className="relative mb-16 sm:mb-20 md:mb-24 w-screen overflow-hidden" style={{ minHeight: '600px', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
        {/* Container for all three gallery rows */}
        <div className="relative w-full">
          {/* Top Row - Moving Left */}
          <div className="relative w-full h-[200px] sm:h-[240px] md:h-[260px] mb-6 overflow-hidden">
            <div 
              className="flex gap-4 h-full animate-scroll-left"
              style={{ width: '300%' }}
            >
              {duplicatedImages.map((img, index) => (
                <motion.div
                  key={`top-${index}`}
                  className="relative w-48 sm:w-64 md:w-80 h-full flex-shrink-0 rounded-lg overflow-hidden border border-gray-800/50 hover:border-accent-cyan/50 transition-all group"
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                >
                  <Image
                    src={img}
                    alt={`Achievement ${index + 1}`}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-200/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Middle Row - Moving Right */}
          <div className="relative w-full h-[200px] sm:h-[240px] md:h-[260px] mb-6 overflow-hidden">
            <div 
              className="flex gap-4 h-full animate-scroll-right"
              style={{ width: '300%' }}
            >
              {duplicatedImages.map((img, index) => (
                <motion.div
                  key={`middle-${index}`}
                  className="relative w-48 sm:w-64 md:w-80 h-full flex-shrink-0 rounded-lg overflow-hidden border border-gray-800/50 hover:border-accent-cyan/50 transition-all group"
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                >
                  <Image
                    src={img}
                    alt={`Achievement ${index + 1}`}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-200/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Moving Left */}
          <div className="relative w-full h-[200px] sm:h-[240px] md:h-[260px] overflow-hidden">
            <div 
              className="flex gap-4 h-full animate-scroll-left"
              style={{ width: '300%' }}
            >
              {duplicatedImages.map((img, index) => (
                <motion.div
                  key={`bottom-${index}`}
                  className="relative w-48 sm:w-64 md:w-80 h-full flex-shrink-0 rounded-lg overflow-hidden border border-gray-800/50 hover:border-accent-cyan/50 transition-all group"
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                >
                  <Image
                    src={img}
                    alt={`Achievement ${index + 1}`}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-dark-200/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Video - Centered and Overlaying the Gallery */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-[80%] sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-[40%] aspect-video">
          <motion.a
            href="https://www.instagram.com/reel/DQbXYeBE6nh/?igsh=ZG95NHN4MG0xbWx5"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full h-full overflow-hidden rounded-xl border-4 border-accent-cyan/50 shadow-2xl bg-dark-200 cursor-pointer block"
          >
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: 'none' }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 pointer-events-none" />
          </motion.a>
        </div>
      </div>

      {/* Achievement Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-16 sm:mb-20 md:mb-24">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              className="group relative"
            >
              <div className="relative h-full bg-dark-100/50 backdrop-blur-md border border-gray-800/50 rounded-2xl p-5 sm:p-6 hover:border-accent-cyan/50 transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <span className={`inline-block px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-xs font-semibold rounded-full mb-3`}>
                    {achievement.category}
                  </span>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-accent-cyan transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${achievement.color} opacity-5 rounded-bl-full`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Let's Connect Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center mt-16 sm:mt-20 md:mt-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            <span className="text-white">Let's</span>
            {' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto"
          >
            Let's connect and collaborate! Reach out through any of these platforms.
          </motion.p>

          {/* Social Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {/* LinkedIn Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative"
            >
              <div className="bg-dark-100/50 backdrop-blur-md border border-gray-800/50 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4">
                    <FaLinkedin className="text-blue-500 text-4xl sm:text-5xl md:text-6xl" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">LinkedIn</h3>

                  <div className="mb-6">
                    <p className="text-3xl sm:text-4xl font-bold text-white mb-1">1.5K+</p>
                    <p className="text-gray-400 text-sm">Connections</p>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/tanmoy-saha-developer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Profile
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Instagram Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative"
            >
              <div className="bg-dark-100/50 backdrop-blur-md border border-gray-800/50 rounded-2xl p-6 sm:p-8 hover:border-pink-500/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 via-purple-600/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4">
                    <FaInstagram className="text-pink-500 text-4xl sm:text-5xl md:text-6xl" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Instagram</h3>

                  <div className="mb-6">
                    <p className="text-3xl sm:text-4xl font-bold text-white mb-1">500+</p>
                    <p className="text-gray-400 text-sm">Followers</p>
                  </div>

                  <a
                    href="https://www.instagram.com/t_a_n_m_o_y05?igsh=MWZyNnpzMm91cmY3Mw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 text-white font-semibold rounded-lg hover:from-pink-700 hover:via-purple-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Profile
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Facebook Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative"
            >
              <div className="bg-dark-100/50 backdrop-blur-md border border-gray-800/50 rounded-2xl p-6 sm:p-8 hover:border-blue-600/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700/10 to-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4">
                    <FaFacebookF className="text-blue-600 text-4xl sm:text-5xl md:text-6xl" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Facebook</h3>

                  <div className="mb-6">
                    <p className="text-3xl sm:text-4xl font-bold text-white mb-1">800+</p>
                    <p className="text-gray-400 text-sm">Friends</p>
                  </div>

                  <a
                    href="https://www.facebook.com/share/1F2qRBrtVK/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-800 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-blue-600/50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Profile
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

