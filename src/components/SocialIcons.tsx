'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

interface SocialLink {
  icon: React.ElementType
  href: string
  label: string
  color?: string
}

interface SocialIconsProps {
  socialLinks?: SocialLink[]
}

export default function SocialIcons({ socialLinks: propsSocialLinks }: SocialIconsProps) {
  const defaultSocialLinks = [
    { icon: FaGithub, href: 'https://github.com/tanmoy0205', label: 'GitHub', color: '#06b6d4' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/tanmoy-saha-developer/', label: 'LinkedIn', color: '#06b6d4' },
    { icon: FaEnvelope, href: 'mailto:dv.tanmoy.saha@gmail.com', label: 'Email', color: '#06b6d4' },
  ]

  const socialLinks = propsSocialLinks || defaultSocialLinks

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="fixed left-6 z-40 hidden lg:flex flex-col gap-6 items-center"
      style={{
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    >
      {/* Top line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 24 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="w-0.5 bg-gradient-to-b from-transparent to-gray-700"
      />
      
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.9 + index * 0.15, type: "spring", stiffness: 200, damping: 15 }}
          whileHover={{ 
            scale: 1.15, 
            y: -8,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
          aria-label={social.label}
        >
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity"
            style={{ backgroundColor: social.color || '#06b6d4' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Icon container */}
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-700 group-hover:border-accent-cyan text-gray-400 group-hover:text-accent-cyan transition-all duration-300 bg-dark-200/80 backdrop-blur-md shadow-lg group-hover:shadow-xl group-hover:shadow-accent-cyan/50 z-10">
            <social.icon size={22} className="transition-transform duration-300" />
          </div>
        </motion.a>
      ))}

      {/* Bottom line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 24 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="w-0.5 bg-gradient-to-t from-transparent to-gray-700"
      />
    </motion.div>
  )
}

