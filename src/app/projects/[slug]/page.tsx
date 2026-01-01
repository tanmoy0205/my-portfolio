'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getProjectBySlug } from '@/hooks/useProjects'
import { Project } from '@/lib/supabaseClient'
import { HiExternalLink, HiCode, HiArrowLeft } from 'react-icons/hi'

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProject() {
      const data = await getProjectBySlug(slug)
      setProject(data)
      setLoading(false)
    }
    fetchProject()
  }, [slug])

  if (loading) {
    return (
        <div className="min-h-screen bg-dark-200 text-white">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-accent-cyan"></div>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-200 text-white">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <div className="text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">Project Not Found</h1>
            <Link href="/projects">
              <button className="text-accent-cyan hover:text-accent-cyan/80 transition-colors text-sm sm:text-base">
                ← Back to Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-200 text-white overflow-x-hidden relative">
      <Navbar />
      
      <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/projects">
            <motion.button
              whileHover={{ x: -5 }}
              className="mb-6 sm:mb-8 flex items-center gap-2 text-gray-300 hover:text-accent-cyan transition-colors text-sm sm:text-base"
            >
              <HiArrowLeft />
              Back to Projects
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {project.cover_image && (
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 w-full rounded-xl overflow-hidden mb-6 sm:mb-8">
                <Image
                  src={project.cover_image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 896px"
                />
              </div>
            )}

            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">{project.title}</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6">
                {project.short_description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 sm:px-3 py-1 bg-accent-cyan/20 text-accent-cyan rounded-full text-xs sm:text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                {project.live_url && (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-accent-cyan text-dark-200 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-accent-cyan/90 transition-colors text-sm sm:text-base font-semibold"
                  >
                    <HiExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    Live Demo
                  </a>
                )}
                {project.repo_url && (
                  <a
                    href={project.repo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border-2 border-accent-cyan text-accent-cyan px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-accent-cyan/10 transition-colors text-sm sm:text-base font-semibold"
                  >
                    <HiCode className="w-4 h-4 sm:w-5 sm:h-5" />
                    View Code
                  </a>
                )}
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">About This Project</h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

