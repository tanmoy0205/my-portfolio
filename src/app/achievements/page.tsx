'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DeveloperBackground from '@/components/DeveloperBackground'
import AchievementsGalleryNew from '@/components/AchievementsGalleryNew'

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-dark-200 text-white overflow-x-hidden relative">
      <DeveloperBackground />
      <Navbar />
      <AchievementsGalleryNew />
      <Footer />
    </div>
  )
}

