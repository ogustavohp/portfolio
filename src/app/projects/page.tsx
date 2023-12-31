import Typography from '@/components/Typography'
import React from 'react'
import Projects from '@/components/Projects'
// import ProjectInputSearch from '@/components/Projects/ProjectInputSearch'

export default function Page() {
  return (
    <main className="mx-5 flex flex-col gap-4">
      {/* titulo */}
      <div className="flex justify-center">
        <Typography Tag="h1" apparentTag="h1" botBorder ornament>
          Projetos
        </Typography>
      </div>

      {/* Input de busca */}
      {/* <ProjectInputSearch /> */}

      {/* projetos card */}
      <Projects noProjectTitle />
    </main>
  )
}
