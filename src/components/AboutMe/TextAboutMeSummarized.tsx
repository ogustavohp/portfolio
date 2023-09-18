import Link from 'next/link'
import React from 'react'
import Typography from '../Typography'
import db from '@/db/db.json'

export default function TextAboutMeSummarized() {
  return (
    <>
      <Link href={'/aboutme'}>
        <Typography Tag="h2" apparentTag="h1" ornament botBorder>
          {db.aboutMe.title}
        </Typography>
      </Link>
      <Typography Tag="p" apparentTag="p">
        {db.aboutMe.bio}
      </Typography>
      <Link
        href={'/aboutme'}
        className="self-start font-bold leading-relaxed text-primary-500"
      >
        {db.aboutMe.readMore}
      </Link>
    </>
  )
}
