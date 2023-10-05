import React from 'react'
import SkillsTechnologies from '@/components/Skills/SkillsTechnologies'
import SkillInputSearch from '@/components/Skills/SkillInputSearch'
import Typography from '@/components/Typography'
import db from '@/db/db.json'

const skillsAndTechnologiesDb = db.skillsAndTechnologies.title1

export default function Skills() {
  return (
    <main className="mx-5 mt-8 flex flex-col items-center gap-7">
      <Typography Tag="h1" apparentTag="h1" ornament botBorder>
        {skillsAndTechnologiesDb}
      </Typography>
      {/* Input de busca */}
      <SkillInputSearch />

      {/* technology */}
      <SkillsTechnologies />
    </main>
  )
}
