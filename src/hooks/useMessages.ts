import { useEffect, useState } from 'react'
import { supabase, Message } from '@/lib/supabaseClient'

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchMessages() {
      try {
        setLoading(true)
        const { data, error: fetchError } = await supabase
          .from('messages')
          .select('*')
          .order('created_at', { ascending: false })

        if (fetchError) throw fetchError
        setMessages(data || [])
        setError(null)
      } catch (err: any) {
        setError(err.message)
        console.error('Error fetching messages:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchMessages()
  }, [])

  const sendMessage = async (messageData: {
    name: string
    email: string
    subject?: string
    message: string
  }) => {
    try {
      const { data, error: insertError } = await supabase
        .from('messages')
        .insert([messageData])
        .select()
        .single()

      if (insertError) throw insertError
      return { data, error: null }
    } catch (err: any) {
      return { data: null, error: err.message }
    }
  }

  return { messages, loading, error, sendMessage }
}

