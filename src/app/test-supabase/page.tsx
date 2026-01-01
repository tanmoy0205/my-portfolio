'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function TestSupabase() {
  const [status, setStatus] = useState<string>('Testing...')
  const [details, setDetails] = useState<any>(null)

  useEffect(() => {
    async function testConnection() {
      try {
        setStatus('Connecting to Supabase...')
        
        // First, test a simple query
        const { data, error, count } = await supabase
          .from('projects')
          .select('*', { count: 'exact' })
          .limit(5)

        if (error) {
          setStatus('Error: ' + error.message)
          setDetails({
            code: error.code,
            message: error.message,
            details: error.details,
            hint: error.hint,
            troubleshooting: getTroubleshootingTip(error),
          })
          return
        }

        // Get total count
        const { count: totalCount } = await supabase
          .from('projects')
          .select('*', { count: 'exact', head: true })

        setStatus('Success! Connected to Supabase.')
        setDetails({
          projectsCount: totalCount || 0,
          sampleData: data?.[0] || null,
          allData: data,
        })
      } catch (err: any) {
        setStatus('Connection failed: ' + err.message)
        setDetails({ 
          error: err.message,
          stack: err.stack,
        })
      }
    }

    function getTroubleshootingTip(error: any): string {
      if (error.code === '42P01') {
        return 'Table does not exist. Run schema.sql in Supabase SQL Editor.'
      }
      if (error.code === '42501' || error.message.includes('permission')) {
        return 'Permission denied. Check Row Level Security policies in Supabase.'
      }
      if (error.message.includes('Failed to fetch') || error.message.includes('network')) {
        return 'Network error. Check if Supabase project is active (not paused) at https://supabase.com/dashboard'
      }
      if (error.code === 'PGRST116') {
        return 'Invalid API request. Check your Supabase URL and API key.'
      }
      return 'Check Supabase dashboard for project status and run schema.sql if tables are missing.'
    }

    testConnection()
  }, [])

  return (
    <div className="min-h-screen bg-dark-200 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Supabase Connection Test</h1>
        <div className="bg-dark-100 p-6 rounded-lg border border-gray-800">
          <h2 className="text-xl font-semibold mb-4">Status: {status}</h2>
          {details && (
            <pre className="bg-dark-200 p-4 rounded overflow-auto text-sm">
              {JSON.stringify(details, null, 2)}
            </pre>
          )}
        </div>
        <div className="mt-6 text-gray-400 text-sm">
          <p>URL: {process.env.NEXT_PUBLIC_SUPABASE_URL || 'Not set'}</p>
          <p>Key: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set (hidden)' : 'Not set'}</p>
        </div>
      </div>
    </div>
  )
}

