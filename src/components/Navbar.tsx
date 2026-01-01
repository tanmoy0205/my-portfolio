'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { useAdminAuth } from '@/hooks/useAdminAuth'

interface NavbarProps {
  scrollToSection?: (ref: React.RefObject<HTMLDivElement>) => void
  heroRef?: React.RefObject<HTMLDivElement>
  projectsRef?: React.RefObject<HTMLDivElement>
  achievementsRef?: React.RefObject<HTMLDivElement>
}

export default function Navbar({ 
  scrollToSection, 
  heroRef, 
  projectsRef, 
  achievementsRef 
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { user } = useAdminAuth()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home', isPage: true },
    { href: '/about', label: 'About', isPage: true },
    { href: '/experience', label: 'Experience', isPage: true },
    { href: '/projects', label: 'Projects', isPage: true },
    { href: '/#achievements', label: 'Achievements', isPage: false, ref: achievementsRef },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, ref?: React.RefObject<HTMLDivElement>) => {
    e.preventDefault()
    setIsOpen(false)
    
    if (pathname !== '/') {
      // If not on homepage, redirect to homepage achievements section
      window.location.href = '/#achievements'
      return
    }
    
    // If on homepage, scroll to achievements section
    if (ref && scrollToSection) {
      scrollToSection(ref)
    }
  }

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname === href || pathname?.startsWith(href)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      >
        <motion.div
          className="relative flex items-center justify-between h-14 px-6 md:px-3 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-300"
          style={{ 
            maxWidth: 'fit-content',
          }}
        >
          {/* Logo/Favicon - Left */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/favicon.svg"
              alt="Tanmoy Saha"
              width={28}
              height={28}
              className="w-7 h-7"
              priority
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 ml-8">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              
              if (link.isPage) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative transition-colors duration-200 ${
                      active ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-cyan"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              }
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.ref)}
                  className={`relative transition-colors duration-200 ${
                    pathname === '/' && active ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {pathname === '/' && active && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-cyan"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
            {user && (
              <Link
                href="/admin"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Admin
              </Link>
            )}
            <Link
              href="/Tanmoy Saha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-accent-cyan text-white rounded-lg font-medium text-sm transition-all hover:bg-accent-cyan/90"
              >
                Resume
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors ml-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 md:hidden bg-dark-200/95 backdrop-blur-md border border-cyan-400/30 rounded-xl shadow-lg z-40"
            style={{ maxWidth: '90%' }}
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => {
                const active = isActive(link.href)
                if (link.isPage) {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block transition-colors py-2 ${
                        active ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                }
                
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.ref)}
                    className="block text-gray-400 hover:text-white transition-colors py-2"
                  >
                    {link.label}
                  </a>
                )
              })}
              {user && (
                <Link
                  href="/admin"
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-400 hover:text-white transition-colors py-2"
                >
                  Admin
                </Link>
              )}
              <Link
                href="/Tanmoy Saha_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-2 bg-accent-cyan text-white rounded-lg font-medium text-center"
                >
                  Resume
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
