'use client'

import { motion } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaJava, FaGithub, 
  FaBootstrap, FaPhp
} from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiExpress, SiJavascript, SiCplusplus, SiC, SiNextdotjs } from 'react-icons/si'

const techStack = [
  { name: 'React', icon: FaReact, color: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Language' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', category: 'Backend' },
  { name: 'Express.js', icon: SiExpress, color: '#000000', category: 'Backend' },
  { name: 'Python', icon: FaPython, color: '#3776AB', category: 'Language' },
  { name: 'Java', icon: FaJava, color: '#ED8B00', category: 'Language' },
  { name: 'PHP', icon: FaPhp, color: '#777BB4', category: 'Backend' },
  { name: 'HTML', icon: FaHtml5, color: '#E34F26', category: 'Frontend' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3', category: 'Frontend' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Database' },
  { name: 'Git', icon: FaGithub, color: '#F05032', category: 'Tools' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C', category: 'Language' },
  { name: 'C', icon: SiC, color: '#A8B9CC', category: 'Language' },
]

const technicalSkills = [
  { skill: 'Frontend Development', level: 85 },
  { skill: 'Backend Development', level: 80 },
  { skill: 'Database Management', level: 75 },
  { skill: 'API Integration', level: 85 },
  { skill: 'Version Control (Git)', level: 90 },
  { skill: 'Problem Solving', level: 88 },
  { skill: 'UI/UX Design', level: 70 },
  { skill: 'Full Stack Development', level: 82 },
]

export default function TechStackSection() {
  return (
    <section className="relative py-32 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-12 text-center"
          >
            <span className="text-white">Tech</span>
            {' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Stack
            </span>
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center p-4 bg-dark-100/70 backdrop-blur-md border border-gray-800/50 rounded-xl hover:border-accent-cyan/70 transition-all hover:shadow-lg hover:shadow-accent-cyan/20 space-y-3 h-full">
                    <div className="flex items-center justify-center w-16 h-16">
                      <Icon 
                        className="text-4xl transition-all duration-300" 
                        style={{ 
                          color: tech.color,
                          filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))'
                        }} 
                      />
                    </div>
                    <span className="text-white font-medium text-sm text-center">{tech.name}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-12 text-center"
          >
            <span className="text-white">Technical</span>
            {' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-dark-100/50 backdrop-blur-md border border-gray-800/50 rounded-xl p-6 hover:border-accent-cyan/50 transition-all relative overflow-hidden"
              >
                {/* Loading shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '200%' }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.2, 
                    duration: 1.5, 
                    ease: "easeInOut",
                    repeat: 1,
                    repeatDelay: 0.5
                  }}
                  style={{ width: '50%' }}
                />
                
                <div className="flex justify-between items-center mb-2 relative z-10">
                  <span className="text-white font-semibold">{item.skill}</span>
                  <span className="text-accent-cyan font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden relative">
                  {/* Animated gradient progress bar with light changing effect */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        background: [
                          'linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
                          'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
                          'linear-gradient(90deg, #8b5cf6 0%, #06b6d4 50%, #3b82f6 100%)',
                          'linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    {/* Shimmer effect on progress bar */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 1,
                      }}
                      style={{ width: '50%' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

