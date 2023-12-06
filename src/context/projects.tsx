'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import db from '@/db/db.json'

const projectsDb = db.projects.projectsList

interface Projects {
  id: string
  title: string
  imageBannerUrl: string
  filter: string[]
  sideProject: boolean
  inProgress: boolean
  gitHubLink: string
  projectLink: string
  youTubeLink: string
  shortDescription: string
  note: string
  fullDescription: {
    text: string
    gif?: {
      gifLink: string
      gifAlt: string
    }
  }[]
  technologies: {
    id: string
    skillName: string
  }[]
}

interface ProjectsContextType {
  projects: Projects[]
  setProjects: React.Dispatch<React.SetStateAction<Projects[]>>
  filterProjects: (e: string) => void
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(
  undefined,
)

export function ProjectsProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Projects[]>(projectsDb)

  function filterProjects(search: string) {
    const searchNormalize = search.toLocaleLowerCase()
    setProjects(
      projectsDb.filter((project) => {
        return project.filter.some((projectStringFilter) =>
          projectStringFilter.toLowerCase().includes(searchNormalize),
        )
      }),
    )
  }

  return (
    <ProjectsContext.Provider value={{ projects, setProjects, filterProjects }}>
      {children}
    </ProjectsContext.Provider>
  )
}

export function useProjects() {
  const context = useContext(ProjectsContext)
  if (!context) {
    throw new Error('useProjects deve ser usado dentro de um ProjectsProvider')
  }
  return context
}
