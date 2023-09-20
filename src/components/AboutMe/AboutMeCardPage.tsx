import React from 'react'
import HighlightCard from './HighlightCard'
import ProfileImage from './ProfileImage'
import CurriculumLinks from './CurriculumLinks'

export default function AboutMeCardPage() {
  return (
    <div className="my-5 flex flex-col items-center gap-5">
      <ProfileImage />
      <div className="flex w-72 flex-1 flex-wrap justify-center gap-2 self-center">
        <HighlightCard bottomText="24 anos" />
        <HighlightCard bottomText="Brasileiro" />
        <HighlightCard bottomText="Barbacena, MG" />
      </div>

      <CurriculumLinks />
    </div>
  )
}
