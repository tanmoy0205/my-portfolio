'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SocialIcons from '@/components/SocialIcons'
import DeveloperBackground from '@/components/DeveloperBackground'
import { useProjects } from '@/hooks/useProjects'

export default function ProjectsPage() {
  const { projects, loading } = useProjects()
  const [activeFilter, setActiveFilter] = useState('All Projects')

  const filters = ['All Projects', 'Mobile', 'Web'] // 'Blockchain', 'AI' commented out

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => 
        project.tags?.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()))
      )

  return (
    <div className="min-h-screen bg-dark-200 text-white overflow-x-hidden relative">
      {/* Developer-themed Background */}
      <DeveloperBackground />

      <Navbar />
      
      <SocialIcons socialLinks={[
        { icon: FaGithub, href: 'https://github.com/tanmoy0205', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/tanmoy-saha-developer/', label: 'LinkedIn' },
        { icon: FaEnvelope, href: 'mailto:dv.tanmoy.saha@gmail.com', label: 'Email' },
      ]} />
      
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-5 md:mb-6"
            >
              <span className="text-white">Featured</span>
              {' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4"
            >
              Showcasing innovative solutions from mobile apps to blockchain implementations, each project demonstrates real-world impact.
            </motion.p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12 md:mb-16 px-4"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                  activeFilter === filter
                    ? 'bg-accent-cyan text-dark-200 shadow-lg shadow-accent-cyan/50'
                    : 'bg-dark-100/50 border border-gray-800/50 text-gray-300 hover:border-accent-cyan/50 hover:text-white'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-cyan mx-auto"></div>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects found. {projects.length === 0 ? 'Check your Supabase connection.' : 'Try a different filter.'}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="group relative"
                >
                  <motion.div
                    className="relative h-full bg-dark-100/70 backdrop-blur-md border border-gray-800/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-accent-cyan/10 transition-all duration-300"
                    whileHover={{ y: -8, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-2xl opacity-0 group-hover:opacity-100" />
                    
                    {/* Project Image */}
                    {project.cover_image && (
                      <motion.div
                        className="relative h-48 w-full overflow-hidden"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Image
                          src={project.cover_image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-dark-100/50 to-transparent" />
                      </motion.div>
                    )}

                    {/* Card Content */}
                    <div className="p-4 sm:p-5 md:p-6 relative z-10">
                      {/* Project Title */}
                      <motion.h3
                        className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-accent-cyan transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Project Description */}
                      <motion.p
                        className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm line-clamp-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {project.short_description || project.description}
                      </motion.p>

                      {/* Tags */}
                      {project.tags && project.tags.length > 0 && (
                        <motion.div
                          className="flex flex-wrap gap-2 mb-6"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.35 }}
                        >
                          {project.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 text-xs font-medium bg-dark-200/50 border border-gray-700/50 text-gray-300 rounded-full hover:border-accent-cyan/50 hover:text-accent-cyan transition-all duration-200"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-3 py-1 text-xs font-medium text-gray-500">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </motion.div>
                      )}

                      {/* Action Buttons */}
                      <motion.div
                        className="flex flex-col sm:flex-row gap-2 sm:gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        {project.live_url && (
                          <motion.a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 px-3 py-2 sm:px-4 sm:py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
                          >
                            <HiExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Live Demo
                          </motion.a>
                        )}
                        {project.repo_url && (
                          <motion.a
                            href={project.repo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 px-3 py-2 sm:px-4 sm:py-2.5 border-2 border-gray-700 text-gray-300 rounded-lg font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-300"
                          >
                            <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Code
                          </motion.a>
                        )}
                      </motion.div>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-cyan/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
