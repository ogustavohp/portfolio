import React from 'react'
import Typography from '../Typography'

interface ICourseTitleSection {
  title: string
}

export default function CourseTitleSection({ title }: ICourseTitleSection) {
  return (
    <div className="text-center">
      <Typography Tag="h2" apparentTag="h1" botBorder>
        {title}
      </Typography>
    </div>
  )
}
