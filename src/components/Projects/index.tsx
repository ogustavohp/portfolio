'use client'
import React, { useEffect } from 'react'
import Typography from '../Typography'
import cardBanner from '@/assets/Banner Card.png'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import db from '@/db/db.json'
import { useProjects } from '@/context/projects'

interface IProjectsComponent {
  noProjectTitle?: boolean
}

export default function Projects({
  noProjectTitle = false,
}: IProjectsComponent) {
  const { projects, filterProjects } = useProjects()

  useEffect(() => {
    filterProjects('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="flex flex-col items-center gap-3">
      {!noProjectTitle && (
        <Link href={'/projects'}>
          <Typography
            Tag="h2"
            apparentTag="h1"
            ornament
            botBorder
            style={'text-white hover:text-primary-500 transition-all'}
          >
            {db.projects.title}
          </Typography>
        </Link>
      )}

      {/* Botão ver todos os projetos */}
      <div></div>
      {/* Card */}
      <div className="flex flex-wrap justify-center gap-3">
        {projects.map((e) => (
          <ProjectCard
            key={e.id}
            imgBanner={cardBanner}
            title={e.title}
            id={e.id}
            technologies={e.technologies}
          >
            {e.shortDescription}
          </ProjectCard>
        ))}
      </div>
      {/* Botão carregar mais */}
      <div></div>
    </section>
  )
}
