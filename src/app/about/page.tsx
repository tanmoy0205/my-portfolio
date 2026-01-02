'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SocialIcons from '@/components/SocialIcons'
import DeveloperBackground from '@/components/DeveloperBackground'
import TechStackSection from '@/components/TechStackSection'
import TypingText from '@/components/TypingText'
import EducationCard from '@/components/EducationCard'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

const aboutContent = [
  "I am a BCA undergraduate with a strong foundation in web development and a growing focus on AI and Machine Learning.",
  "I have hands-on experience building projects that translate ideas into practical, working solutions, and I actively contribute to campus initiatives, technical clubs, and collaborative problem-solving challenges.",
  "With skills in full-stack development, programming, and analytical thinking, I bring a proactive and adaptable approach to every project. My experiences have strengthened my ability to collaborate in teams, manage projects, and deliver results under deadlines.",
  "I am actively seeking opportunities to apply my skills, contribute to innovative projects, and grow professionally. I welcome connections and discussions with professionals, recruiters, and organizations interested in web development, AI/ML projects, or technical collaborations."
]

export default function AboutPage() {
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
      
      <section className="relative min-h-screen flex items-center justify-center z-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24"
          >
            {/* Profile Image & Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col items-center gap-8"
            >
              {/* Profile Image */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
                {/* Animated Backdrop Glow - Behind the image */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-2xl -z-10"
                  animate={{
                    background: [
                      'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(59, 130, 246, 0.3) 40%, rgba(139, 92, 246, 0.2) 70%, transparent 100%)',
                      'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(139, 92, 246, 0.3) 40%, rgba(6, 182, 212, 0.2) 70%, transparent 100%)',
                      'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(6, 182, 212, 0.3) 40%, rgba(59, 130, 246, 0.2) 70%, transparent 100%)',
                      'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(59, 130, 246, 0.3) 40%, rgba(139, 92, 246, 0.2) 70%, transparent 100%)',
                    ],
                    scale: [1, 1.1, 0.95, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    transform: 'scale(1.2)',
                  }}
                />
                {/* Secondary animated glow layer */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-xl -z-10"
                  animate={{
                    opacity: [0.6, 0.8, 0.7, 0.6],
                    scale: [1, 1.15, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
                    transform: 'scale(1.3)',
                  }}
                />
                {/* Profile Image - Clean, no overlays */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-accent-cyan/50 shadow-2xl z-10">
                  <Image
                    src="/profile-image.jpg"
                    alt="Tanmoy Saha"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
                  />
                </div>
              </div>

              {/* Education Card */}
              <EducationCard
                degree="Bachelor of Computer Applications (BCA)"
                institution="Inspiria Knowledge Campus"
                location="Siliguri, West Bengal, India"
                period="2023 - 2027 (Expected)"
                delay={0.3}
              />
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8"
              >
                <span className="text-white">About</span>
                {' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Me
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="space-y-4 sm:space-y-5 md:space-y-6"
              >
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  <TypingText 
                    text={aboutContent[0]} 
                    speed={15}
                    delay={800}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300"
                  />
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                  <TypingText 
                    text={aboutContent[1]} 
                    speed={15}
                    delay={aboutContent[0].length * 15 + 800 + 300}
                    className="text-sm sm:text-base md:text-lg text-gray-400"
                  />
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                  <TypingText 
                    text={aboutContent[2]} 
                    speed={15}
                    delay={aboutContent[0].length * 15 + aboutContent[1].length * 15 + 800 + 600}
                    className="text-sm sm:text-base md:text-lg text-gray-400"
                  />
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                  <TypingText 
                    text={aboutContent[3]} 
                    speed={15}
                    delay={aboutContent[0].length * 15 + aboutContent[1].length * 15 + aboutContent[2].length * 15 + 800 + 900}
                    className="text-sm sm:text-base md:text-lg text-gray-400"
                  />
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Tech Stack & Technical Skills Section */}
          <div className="mt-32">
            <TechStackSection />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
