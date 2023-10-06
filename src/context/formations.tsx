'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import db from '@/db/db.json'

const formationsDb = db.formations

interface Formation {
  id: string
  tags: string[]
  filter: string[]
  courseTitle: string
  courseLicensed: string
  licensedLink: string
  certificateLink: string
  courseLink: string
  courseTopics: {
    id: string
    courseTopic: string
  }[]
}

interface FormationContextType {
  formations: Formation[]
  setFormations: React.Dispatch<React.SetStateAction<Formation[]>>
  filterFormations: (e: string) => void
}

const FormationContext = createContext<FormationContextType | undefined>(
  undefined,
)

export function FormationProvider({ children }: { children: ReactNode }) {
  const [formations, setFormations] = useState<Formation[]>(formationsDb)

  function filterFormations(search: string) {
    const searchNormalize = search.toLocaleLowerCase()
    setFormations(
      formationsDb.filter((formation) => {
        return formation.filter.some((formationString) =>
          formationString.toLowerCase().includes(searchNormalize),
        )
      }),
    )
  }

  return (
    <FormationContext.Provider
      value={{ formations, setFormations, filterFormations }}
    >
      {children}
    </FormationContext.Provider>
  )
}

export function useFormations() {
  const context = useContext(FormationContext)
  if (!context) {
    throw new Error(
      'useFormations deve ser usado dentro de um FormationProvider',
    )
  }
  return context
}
