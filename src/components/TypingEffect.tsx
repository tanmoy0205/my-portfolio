'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingEffectProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export default function TypingEffect({ 
  words, 
  typingSpeed = 100, 
  deletingSpeed = 50,
  pauseTime = 2000 
}: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseTime)
      return () => clearTimeout(pauseTimeout)
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText.length < currentWord.length) {
        // Typing
        setCurrentText(currentWord.slice(0, currentText.length + 1))
      } else if (!isDeleting && currentText.length === currentWord.length) {
        // Finished typing, pause before deleting
        setIsPaused(true)
      } else if (isDeleting && currentText.length > 0) {
        // Deleting
        setCurrentText(currentText.slice(0, currentText.length - 1))
      } else if (isDeleting && currentText.length === 0) {
        // Finished deleting, move to next word
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className="inline-block">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-[1.2em] bg-accent-cyan ml-1 align-middle"
      />
    </span>
  )
}

