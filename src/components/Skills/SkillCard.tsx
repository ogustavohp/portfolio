import React from 'react'
import SkillIcon from './SkillIcon'
import SkillText from './SkillText'

interface ISkillCard {
  technology: string
  icon: string
  topics: {
    id: string
    title: string
    text: string
  }[]
}

export default function SkillCard({ technology, icon, topics }: ISkillCard) {
  return (
    <div className="flex flex-col items-start gap-5">
      {/* Tag technology with image */}
      <SkillIcon icon={icon} title={technology} />

      {topics.map((e) => (
        <SkillText key={e.id} text={e.text} title={e.title} />
      ))}
    </div>
  )
}
