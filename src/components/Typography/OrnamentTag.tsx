import React, { ReactNode } from 'react'

interface IOrnament {
  children: ReactNode
}

export default function OrnamentTag({ children }: IOrnament) {
  return (
    <span>
      <span className="text-primary-500 text-2xl font-bold">&lt; </span>
      {children}
      <span className="text-primary-500 text-2xl font-bold"> /&gt;</span>
    </span>
  )
}
