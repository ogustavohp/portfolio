import React, { ReactNode } from 'react'

interface ICourses {
  children: ReactNode
}

export default function Courses({ children }: ICourses) {
  return <div className="flex flex-wrap justify-center gap-8">{children}</div>
}
