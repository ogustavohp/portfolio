'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import db from '@/db/db.json'

const skillsDb = db.skills

interface Skills {
  id: string
  technology: string
  filter: string[]
  icon: string
  topics: {
    id: string
    title: string
    text: string
    link?: string
    linkText?: string
    text2?: string
  }
}

interface SkillsContextType {
  skills: Skills[]
  setSkills: React.Dispatch<React.SetStateAction<Skills[]>>
  filterSkills: (e: string) => void
}

const SkillsContext = createContext<SkillsContextType | undefined>(undefined)

export function SkillsProvider({ children }: { children: ReactNode }) {
  const [skills, setSkills] = useState<Skills[]>(skillsDb)

  function filterSkills(search: string) {
    const searchNormalize = search.toLocaleLowerCase()
    setSkills(
      skillsDb.filter((skill) => {
        return skill.filter.some((skillStringFilter) =>
          skillStringFilter.includes(searchNormalize),
        )
      }),
    )
    console.log('a')
  }

  return (
    <SkillsContext.Provider value={{ skills, setSkills, filterSkills }}>
      {children}
    </SkillsContext.Provider>
  )
}

export function useSkills() {
  const context = useContext(SkillsContext)
  if (!context) {
    throw new Error('useSkills deve ser usado dentro de um SkillsProvider')
  }
  return context
}
