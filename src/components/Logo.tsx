'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Logo({ className = '' }: { className?: string }) {
  const [imgError, setImgError] = useState(false)

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      {!imgError ? (
        <div className="w-8 h-8 relative flex items-center justify-center logo-container">
          <Image
            src="/logo-ts.png"
            alt="TS Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain logo-image"
            priority
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <span className="w-8 h-8 text-accent-cyan font-bold text-lg flex items-center justify-center">
          TS
        </span>
      )}
      <span className="text-xl font-bold text-white hover:text-accent-cyan transition-colors">
        Tanmoy Saha
      </span>
    </Link>
  )
}
