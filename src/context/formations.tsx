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
}

const FormationContext = createContext<FormationContextType | undefined>(
  undefined,
)

export function FormationProvider({ children }: { children: ReactNode }) {
  const [formations, setFormations] = useState<Formation[]>(formationsDb)

  return (
    <FormationContext.Provider value={{ formations, setFormations }}>
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
