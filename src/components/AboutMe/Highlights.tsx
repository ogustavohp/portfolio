import React from 'react'
import HighlightCard from './HighlightCard'
import db from '@/db/db.json'

export default function Highlights() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <HighlightCard
        topText={db.aboutMe.bookCard.topText}
        bottomText={db.aboutMe.bookCard.botText}
        icon="book"
      />
      <HighlightCard
        topText={db.aboutMe.balloonsCard.topText}
        bottomText={db.aboutMe.balloonsCard.botText}
        icon="balloons"
      />
    </div>
  )
}
