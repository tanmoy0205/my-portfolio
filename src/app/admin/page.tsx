'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { useAdminAuth } from '@/hooks/useAdminAuth'
import { useProjects } from '@/hooks/useProjects'
import { useMessages } from '@/hooks/useMessages'
import { supabase, Project } from '@/lib/supabaseClient'
import { HiLogout, HiTrash, HiPlus, HiPencil } from 'react-icons/hi'

export default function AdminPage() {
  const router = useRouter()
  const { user, loading: authLoading, signIn, signOut } = useAdminAuth()
  const { projects, loading: projectsLoading } = useProjects()
  const { messages, loading: messagesLoading } = useMessages()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState<'projects' | 'messages'>('projects')
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)

  useEffect(() => {
    if (!authLoading && !user) {
      setIsLogin(true)
    }
  }, [user, authLoading])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await signIn(email, password)
    if (error) {
      toast.error('Invalid credentials')
    } else {
      toast.success('Logged in successfully')
      setIsLogin(false)
    }
  }

  const handleDeleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return

    try {
      const { error } = await supabase.from('projects').delete().eq('id', id)
      if (error) throw error
      toast.success('Project deleted successfully')
    } catch (err: any) {
      toast.error('Failed to delete project')
    }
  }

  const handleDeleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return

    try {
      const { error } = await supabase.from('messages').delete().eq('id', id)
      if (error) throw error
      toast.success('Message deleted successfully')
    } catch (err: any) {
      toast.error('Failed to delete message')
    }
  }

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (isLogin || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full"
        >
          <h1 className="text-3xl font-bold mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <button
            onClick={signOut}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <HiLogout />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-300 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('projects')}
            className={`pb-4 px-4 font-semibold transition-colors ${
              activeTab === 'projects'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`pb-4 px-4 font-semibold transition-colors ${
              activeTab === 'messages'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            Messages ({messages.length})
          </button>
        </div>

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Projects</h2>
              <button
                onClick={() => {
                  setEditingProject(null)
                  setShowProjectForm(true)
                }}
                className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <HiPlus />
                Add Project
              </button>
            </div>

            {projectsLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                  >
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.short_description}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingProject(project)
                          setShowProjectForm(true)
                        }}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <HiPencil />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <HiTrash />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Messages</h2>
            {messagesLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{message.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{message.email}</p>
                        {message.subject && (
                          <p className="text-primary-600 mt-1">{message.subject}</p>
                        )}
                      </div>
                      <button
                        onClick={() => handleDeleteMessage(message.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <HiTrash size={20} />
                      </button>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{message.message}</p>
                    <p className="text-sm text-gray-500 mt-4">
                      {new Date(message.created_at).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Project Form Modal */}
        {showProjectForm && (
          <ProjectFormModal
            project={editingProject}
            onClose={() => {
              setShowProjectForm(false)
              setEditingProject(null)
            }}
          />
        )}
      </div>
    </div>
  )
}

function ProjectFormModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    slug: project?.slug || '',
    description: project?.description || '',
    short_description: project?.short_description || '',
    tags: project?.tags.join(', ') || '',
    repo_url: project?.repo_url || '',
    live_url: project?.live_url || '',
    cover_image: project?.cover_image || '',
    featured: project?.featured || false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const projectData = {
        ...formData,
        tags: formData.tags.split(',').map((tag) => tag.trim()).filter(Boolean),
      }

      if (project) {
        const { error } = await supabase
          .from('projects')
          .update(projectData)
          .eq('id', project.id)
        if (error) throw error
        toast.success('Project updated successfully')
      } else {
        const { error } = await supabase.from('projects').insert([projectData])
        if (error) throw error
        toast.success('Project created successfully')
      }
      onClose()
      window.location.reload()
    } catch (err: any) {
      toast.error(err.message || 'Failed to save project')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <h2 className="text-2xl font-bold mb-6">
          {project ? 'Edit Project' : 'Add New Project'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Slug *</label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Short Description *</label>
            <input
              type="text"
              value={formData.short_description}
              onChange={(e) =>
                setFormData({ ...formData, short_description: e.target.value })
              }
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              placeholder="React, Next.js, TypeScript"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Repo URL</label>
              <input
                type="url"
                value={formData.repo_url}
                onChange={(e) => setFormData({ ...formData, repo_url: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Live URL</label>
              <input
                type="url"
                value={formData.live_url}
                onChange={(e) => setFormData({ ...formData, live_url: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Cover Image URL</label>
            <input
              type="url"
              value={formData.cover_image}
              onChange={(e) => setFormData({ ...formData, cover_image: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4"
            />
            <label htmlFor="featured" className="text-sm font-medium">
              Featured Project
            </label>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              {project ? 'Update' : 'Create'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

