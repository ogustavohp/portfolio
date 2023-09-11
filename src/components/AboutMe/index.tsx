import React from 'react'
import ProfileImage from './ProfileImage'
import TextAboutMeSummarized from './TextAboutMeSummarized'
import Highlights from './Highlights'
import CurriculumAboutMe from './CurriculumAboutMe'

export default function AboutMe() {
  return (
    <section className="mt-10 flex flex-col items-center gap-3">
      <ProfileImage />
      <TextAboutMeSummarized />
      <Highlights />
      <CurriculumAboutMe />
    </section>
  )
}
