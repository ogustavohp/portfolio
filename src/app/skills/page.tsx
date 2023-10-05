import React from 'react'
import SkillsTechnologies from '@/components/Skills/SkillsTechnologies'
import SkillInputSearch from '@/components/Skills/SkillInputSearch'

export default function Skills() {
  return (
    <main className="mx-5 mt-8 flex flex-col items-center gap-7">
      {/* Input de busca */}

      <SkillInputSearch />

      {/* technology */}
      <SkillsTechnologies />
    </main>
  )
}
