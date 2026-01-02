'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SocialIcons from '@/components/SocialIcons'
import DeveloperBackground from '@/components/DeveloperBackground'
import AchievementsGalleryNew from '@/components/AchievementsGalleryNew'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-dark-200 text-white overflow-x-hidden relative">
      <DeveloperBackground />
      <Navbar />
      
      <SocialIcons socialLinks={[
        { icon: FaGithub, href: 'https://github.com/tanmoy0205', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/tanmoy-saha-developer/', label: 'LinkedIn' },
        { icon: FaEnvelope, href: 'mailto:dv.tanmoy.saha@gmail.com', label: 'Email' },
      ]} />
      
      <AchievementsGalleryNew />
      <Footer />
    </div>
  )
}

