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
    text2?: string
    link?: string
    linkText?: string
  }
}

export default function SkillCard({ technology, icon, topics }: ISkillCard) {
  return (
    <div className="flex flex-col items-start gap-5">
      {/* Tag technology with image */}
      <SkillIcon icon={icon} title={technology} />

      <SkillText
        key={topics.id}
        text={topics.text}
        title={topics.title}
        link={topics.link}
        linkText={topics.linkText}
        text2={topics.text2}
      />

      {/* {topics.map((e) => (
        <SkillText
          key={e.id}
          text={e.text}
          title={e.title}
          link={e.link}
          linkText={e.linkText}
          text2={e.text2}
        />
      ))} */}
    </div>
  )
}
