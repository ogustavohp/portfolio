'use client'
import React from 'react'
import SkillCard from './SkillCard'
import { useSkills } from '@/context/skills'

export default function SkillsTechnologies() {
  const { skills } = useSkills()
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
