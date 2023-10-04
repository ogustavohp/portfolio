import React from 'react'
import db from '@/db/db.json'
import SkillCard from './SkillCard'

const skills = db.skills

export default function SkillsTechnologies() {
  return (
    <section className="mt-10 space-y-8">
      {/* Card technology */}
      {skills.map((e) => (
        <SkillCard
          key={e.id}
          icon={e.icon}
          technology={e.technology}
          topics={e.topics}
        />
      ))}
    </section>
  )
}
