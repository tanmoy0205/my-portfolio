'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { HiExternalLink, HiStar } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SocialIcons from '@/components/SocialIcons'
import DeveloperBackground from '@/components/DeveloperBackground'
import AchievementsSection from '@/components/AchievementsSection'
import TypingEffect from '@/components/TypingEffect'
import { useProjects } from '@/hooks/useProjects'
import Image from 'next/image'
import Link from 'next/link'

function GradientText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.span
      className="inline-block bg-clip-text text-transparent"
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
        delay: delay / 8,
      }}
      style={{
        backgroundImage: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #06b6d4)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </motion.span>
  )
}

export default function Home() {
  const { projects, loading } = useProjects()
  const heroRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const achievementsRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-dark-200 text-white overflow-x-hidden relative">
      {/* Developer-themed Background */}
      <DeveloperBackground />

      {/* Navbar */}
      <Navbar 
        scrollToSection={scrollToSection} 
        heroRef={heroRef} 
        projectsRef={projectsRef} 
        achievementsRef={achievementsRef}
      />
      
      {/* Social Media Icons - Left Side */}
      <SocialIcons socialLinks={[
        { icon: FaGithub, href: 'https://github.com/tanmoy0205', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/tanmoy-saha-developer/', label: 'LinkedIn' },
        { icon: FaEnvelope, href: 'mailto:dv.tanmoy.saha@gmail.com', label: 'Email' },
      ]} />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        id="home"
        className="relative min-h-screen flex items-center justify-center z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 mb-4"
            >
              Hello, I&apos;m
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6"
            >
              <GradientText>Tanmoy</GradientText>
              {' '}
              <GradientText delay={4}>Saha</GradientText>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-accent-cyan mb-6 sm:mb-8 flex items-center justify-center gap-2 min-h-[2rem] sm:min-h-[2.5rem]"
            >
              <TypingEffect
                words={[
                  'Full Stack Developer',
                  'MERN Developer',
                  'AI/ML Enthusiast',
                  'Problem Solver',
                  'Tech Innovator',
                  'Frontend Developer'
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseTime={2000}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-accent-cyan text-dark-200 rounded-lg font-semibold text-base sm:text-lg shadow-lg shadow-accent-cyan/50"
                >
                  View Projects
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        ref={projectsRef}
        id="projects"
        className="relative py-16 sm:py-20 md:py-24 lg:py-32 z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="mb-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="flex items-center gap-2"
              >
                <div className="flex items-center gap-2 px-3 py-1.5 bg-dark-100/70 backdrop-blur-md border border-gray-800/50 rounded-lg">
                  <HiStar className="text-accent-cyan text-sm" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">SELECTED WORK</span>
                </div>
              </motion.div>
            </div>

            {/* Title and Description */}
            <div className="text-left max-w-4xl">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
              >
                <span className="text-white">Featured</span>
                {' '}
                <span className="text-gray-400">Projects</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base sm:text-lg text-gray-400 leading-relaxed"
              >
                Frontend-focused projects where I craft <span className="text-white font-semibold">interactive</span>, <span className="text-white font-semibold">scalable UI</span> with <span className="text-white font-semibold">clean design systems</span> and smooth user flows — from portfolios to full-scale platforms.
              </motion.p>
            </div>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-cyan mx-auto"></div>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <p className="text-gray-400 text-lg mb-4">No projects available at the moment.</p>
                <p className="text-gray-500 text-sm">
                  Projects will appear here once they are added to the database.
                </p>
              </motion.div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
              {projects
                .filter((project) => 
                  project.slug === 'portfolio-website' || 
                  project.slug === 'ecommerce-platform' || 
                  project.slug === 'student-management-system'
                )
                .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                  className="group relative"
                >
                  <motion.div
                    className="relative bg-dark-100/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border-white/20 transition-all duration-300 flex flex-col h-full group"
                    whileHover={{ y: -4 }}
                  >
                    {/* Project Image */}
                    {project.cover_image && (
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={project.cover_image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent" />
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow min-h-0">
                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-accent-cyan transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Project Description */}
                      <p className="text-gray-400 mb-4 sm:mb-5 leading-relaxed text-xs sm:text-sm line-clamp-2 flex-grow">
                        {project.short_description || project.description}
                      </p>

                      {/* Tags */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.slice(0, 4).map((tag: string, tagIndex: number) => (
                            <span
                              key={tagIndex}
                              className="px-2.5 py-1 text-xs font-medium bg-dark-200/60 border border-gray-700/50 text-gray-300 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                        {project.live_url && (
                          <motion.a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex-1 px-3 py-2 sm:px-4 sm:py-2.5 bg-accent-cyan text-dark-200 rounded-lg font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-accent-cyan/90 transition-colors duration-300"
                          >
                            <HiExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Live
                          </motion.a>
                        )}
                        {project.repo_url && (
                          <motion.a
                            href={project.repo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex-1 px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-700 text-gray-300 rounded-lg font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/5 transition-all duration-300"
                          >
                            <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Code
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>


      {/* Achievements Section */}
      <div ref={achievementsRef}>
        <AchievementsSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
