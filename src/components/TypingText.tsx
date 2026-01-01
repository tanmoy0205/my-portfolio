'use client'

import { useState, useEffect } from 'react'

interface TypingTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
}

export default function TypingText({ 
  text, 
  speed = 30, 
  delay = 0,
  className = '',
  onComplete
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  // Start typing after delay
  useEffect(() => {
    if (delay > 0 && !hasStarted) {
      const delayTimeout = setTimeout(() => {
        setHasStarted(true)
      }, delay)
      return () => clearTimeout(delayTimeout)
    } else if (delay === 0) {
      setHasStarted(true)
    }
  }, [delay, hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    if (displayedText.length === text.length) {
      setIsComplete(true)
      if (onComplete) {
        onComplete()
      }
      return
    }

    const timeout = setTimeout(() => {
      setDisplayedText(text.slice(0, displayedText.length + 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayedText, text, speed, onComplete, hasStarted])

  if (!hasStarted) {
    return <span className={className}></span>
  }

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && <span className="inline-block w-0.5 h-[1.2em] bg-accent-cyan ml-1 align-middle animate-pulse" />}
    </span>
  )
}