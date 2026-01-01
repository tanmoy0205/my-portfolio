'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiPhone } from 'react-icons/hi'

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/#achievements', label: 'Achievements' },
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/tanmoy0205', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/tanmoy-saha-developer/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:dv.tanmoy.saha@gmail.com', label: 'Email' },
  ]

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'dv.tanmoy.saha@gmail.com',
      href: 'mailto:dv.tanmoy.saha@gmail.com',
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+91 7365820051',
      href: 'tel:7365820051',
    },
  ]

  return (
    <footer className="relative bg-dark-100/80 backdrop-blur-md border-t border-gray-800/50 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5 text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2.5 sm:space-y-3">
              {quickLinks.map((link, index) => {
                if (link.href.startsWith('/#')) {
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 text-sm sm:text-base flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-accent-cyan transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </motion.a>
                  )
                }
                
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 text-sm sm:text-base flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-accent-cyan transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5 text-white">Get In Touch</h4>
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-400 hover:text-accent-cyan transition-colors duration-300 group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-dark-200/50 border border-gray-800/50 group-hover:border-accent-cyan/50 group-hover:bg-accent-cyan/10 transition-all duration-300">
                      <Icon className="text-base sm:text-lg group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm text-gray-500">{info.label}</span>
                      <span className="text-sm sm:text-base font-medium">{info.value}</span>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5 text-white">Connect</h4>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 sm:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-4 py-2.5 sm:py-3 bg-dark-200/50 border border-gray-800/50 rounded-lg hover:border-accent-cyan/50 hover:bg-accent-cyan/10 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-dark-100/50 group-hover:bg-accent-cyan/20 transition-colors duration-300">
                      <Icon className="text-gray-400 group-hover:text-accent-cyan transition-colors duration-300 text-base sm:text-lg" />
                    </div>
                    <span className="text-gray-400 group-hover:text-accent-cyan transition-colors duration-300 text-sm sm:text-base font-medium">
                      {social.label}
                    </span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 mb-6 sm:mb-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Tanmoy Saha</span>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
