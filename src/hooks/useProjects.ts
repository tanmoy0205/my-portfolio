import { useEffect, useState } from 'react'
import { supabase, Project } from '@/lib/supabaseClient'

export function useProjects(featured?: boolean) {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null
    let isMounted = true

    async function fetchProjects() {
      try {
        setLoading(true)
        setError(null)

        // Check if Supabase URL is configured
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        if (!supabaseUrl || supabaseUrl.includes('xxxxx') || supabaseUrl.includes('your-project')) {
          if (process.env.NODE_ENV === 'development') {
            console.warn('Supabase URL not configured. Using empty project list.')
          }
          setProjects([])
          setLoading(false)
          return
        }

        let query = supabase.from('projects').select('*').order('inserted_at', { ascending: false })
        
        if (featured !== undefined) {
          query = query.eq('featured', featured)
        }

        // Add timeout to prevent infinite loading (8 seconds)
        timeoutId = setTimeout(() => {
          if (isMounted) {
            if (process.env.NODE_ENV === 'development') {
              console.warn('⏱️ Supabase request timeout. Project may be paused or unreachable.')
            }
            setProjects([])
            setLoading(false)
          }
        }, 8000)

        const { data, error: fetchError } = await query
        
        if (timeoutId) clearTimeout(timeoutId)

        if (!isMounted) return

        if (fetchError) {
          // Handle connection errors gracefully (suppress noisy console errors)
          if (fetchError.message.includes('Failed to fetch') || 
              fetchError.message.includes('ERR_NAME_NOT_RESOLVED') ||
              fetchError.message.includes('network') ||
              fetchError.code === 'PGRST116' ||
              fetchError.message.includes('fetch')) {
            // Connection issue - project likely paused or URL unreachable
            // Silently handle - app will show empty state gracefully
            setProjects([])
            setError(null) // Don't show error to user, just empty state
            setLoading(false)
            return
          } else if (fetchError.code === '42P01') {
            // Table doesn't exist
            if (process.env.NODE_ENV === 'development') {
              console.error('❌ Projects table does not exist. Please run schema.sql in Supabase SQL Editor.')
            }
            setProjects([])
            setError(null)
            setLoading(false)
            return
          } else if (fetchError.code === '42501' || fetchError.message.includes('permission')) {
            // Permission denied (RLS issue)
            if (process.env.NODE_ENV === 'development') {
              console.error('🔒 Permission denied. Check Row Level Security policies in Supabase.')
            }
            setProjects([])
            setError(null)
            setLoading(false)
            return
          } else {
            // Other errors - log in development only
            if (process.env.NODE_ENV === 'development') {
              console.error('Supabase error:', {
                message: fetchError.message,
                code: fetchError.code,
                details: fetchError.details,
                hint: fetchError.hint,
              })
            }
            setError(fetchError.message)
            setProjects([])
            setLoading(false)
            return
          }
        }

        setProjects(data || [])
        setError(null)
        setLoading(false)
      } catch (err: any) {
        if (timeoutId) clearTimeout(timeoutId)
        
        if (!isMounted) return

        // Handle network/connection errors and timeouts
        const isNetworkError = err.message && (
          err.message.includes('Failed to fetch') || 
          err.message.includes('ERR_NAME_NOT_RESOLVED') ||
          err.message.includes('network') ||
          err.message.includes('timeout') ||
          err.message.includes('Request timeout')
        )
        
        if (process.env.NODE_ENV === 'development') {
          if (isNetworkError) {
            console.warn('⚠️ Supabase connection timeout or network error. Check if your Supabase project is active.')
          } else {
            console.error('Error fetching projects:', err)
          }
        }
        
        // Only set error for non-network issues
        if (err.message && !isNetworkError) {
          setError(err.message)
        } else {
          setError(null)
        }
        
        setProjects([]) // Set empty array on error so page doesn't break
        setLoading(false)
      }
    }

    fetchProjects()

    return () => {
      isMounted = false
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [featured])

  return { projects, loading, error }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) throw error
    return data
  } catch (err: any) {
    console.error('Error fetching project:', err)
    return null
  }
}
