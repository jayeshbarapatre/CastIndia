import React from 'react'

export default function Loader({ fullScreen = false }) {
  const loaderContent = (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Cinematic Golden Ring Spinner */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-[var(--color-gold-muted)] opacity-20"></div>
        <div className="absolute inset-0 rounded-full border-2 border-[var(--color-gold)] border-t-transparent animate-spin"></div>
        {/* Inner glow */}
        <div className="absolute inset-2 rounded-full bg-[var(--color-gold)] opacity-10 animate-pulse"></div>
      </div>
      <p className="meta text-[var(--color-gold)] tracking-[0.2em] uppercase font-bold animate-pulse">
        Loading...
      </p>
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)] bg-opacity-90 backdrop-blur-md">
        {loaderContent}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center p-8 w-full h-full">
      {loaderContent}
    </div>
  )
}
