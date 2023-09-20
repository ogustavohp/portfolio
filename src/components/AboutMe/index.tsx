import React from 'react'
import ProfileImage from './ProfileImage'
import TextAboutMeSummarized from './TextAboutMeSummarized'
import Highlights from './Highlights'
import CurriculumLinks from './CurriculumLinks'

export default function AboutMe() {
  return (
    <section className="mt-10 flex flex-wrap items-center justify-evenly gap-9">
      <ProfileImage />
      <div className="flex max-w-[30rem] flex-col items-center gap-3">
        <TextAboutMeSummarized />
        <Highlights />
        <CurriculumLinks />
      </div>
    </section>
  )
}
