import React, { ReactNode } from 'react'

interface IOrnament {
  children: ReactNode
}

export default function OrnamentTag({ children }: IOrnament) {
  return (
    <span>
      <span className="text-2xl font-bold text-primary-500">&lt; </span>
      {children}
      <span className="text-2xl font-bold text-primary-500"> /&gt;</span>
    </span>
  )
}
