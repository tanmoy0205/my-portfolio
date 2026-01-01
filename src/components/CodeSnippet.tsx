'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface CodeSnippetProps {
  code: string
  language?: string
  delay?: number
}

export default function CodeSnippet({ code, language = 'typescript', delay = 0 }: CodeSnippetProps) {
  const [displayedCode, setDisplayedCode] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < code.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => prev + code[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 10)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, code])

  const lines = displayedCode.split('\n')
  const totalLines = code.split('\n').length

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="relative group"
      whileHover={{ scale: 1.02 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-xl" />
      
      <div className="relative bg-dark-100 rounded-xl border border-gray-800 overflow-hidden hover:border-primary-500/50 transition-all shadow-lg">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-dark-50 border-b border-gray-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-xs text-gray-400 font-mono font-semibold">{language}</span>
          <motion.div 
            className="ml-auto text-xs text-gray-500 flex items-center gap-1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Live</span>
          </motion.div>
        </div>
        
        {/* Code Content */}
        <div className="p-4 font-mono text-sm bg-gradient-to-br from-dark-200 to-dark-100 overflow-x-auto">
          <pre className="text-gray-300">
            <code>
              {lines.map((line, lineIndex) => (
                <div key={lineIndex} className="flex items-start group/line">
                  <span className="text-gray-600 mr-4 select-none text-right min-w-[2rem]">
                    {lineIndex + 1}
                  </span>
                  <span className="flex-1">{line || '\u00A0'}</span>
                </div>
              ))}
              {currentIndex < code.length && (
                <div className="flex items-start">
                  <span className="text-gray-600 mr-4 select-none text-right min-w-[2rem]">
                    {lines.length + 1}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                    className="inline-block w-2 h-5 bg-primary-500"
                  />
                </div>
              )}
            </code>
          </pre>
        </div>
      </div>
    </motion.div>
  )
}
