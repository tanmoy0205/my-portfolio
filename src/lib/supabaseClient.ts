import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  if (process.env.NODE_ENV === 'development') {
    console.error('Missing Supabase environment variables')
    console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? 'Set' : 'Missing')
    console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Set' : 'Missing')
  }
}

// Create a singleton instance to prevent multiple clients
let supabaseInstance: SupabaseClient | null = null

export const supabase = (() => {
  if (!supabaseInstance) {
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase environment variables. Please check your .env.local file.')
    }
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
    })
  }
  return supabaseInstance
})()

// Types for our database
export interface Project {
  id: string
  title: string
  slug: string
  description: string
  short_description: string
  tags: string[]
  repo_url?: string
  live_url?: string
  cover_image?: string
  featured: boolean
  inserted_at: string
}

export interface Message {
  id: string
  name: string
  email: string
  subject: string
  message: string
  created_at: string
}
