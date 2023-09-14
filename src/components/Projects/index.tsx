import React from 'react'
import Typography from '../Typography'
import cardBanner from '@/assets/Banner Card.png'
import ProjectCard from './ProjectCard'
import { ITag } from '@/lib/tag'
import Link from 'next/link'

interface IProjectsComponent {
  noProjectTitle?: boolean
}

export default function Projects({
  noProjectTitle = false,
}: IProjectsComponent) {
  const formatter: ITag[] = [
    {
      skillName: 'ESLint',
    },
    {
      skillName: 'Prettier',
    },
  ]
  return (
    <section className="flex flex-col items-center gap-3">
      {!noProjectTitle && (
        <Link href={'/projects'}>
          <Typography Tag="h2" apparentTag="h1" ornament botBorder>
            Projetos
          </Typography>
        </Link>
      )}

      {/* Botão ver todos os projetos */}
      <div></div>
      {/* Card */}
      <div className="flex flex-wrap justify-center gap-3 ">
        <ProjectCard
          imgBanner={cardBanner}
          skills={formatter}
          title="Time Vault"
          inProgress
          sideProject
          id="1"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempora
          accusamus saepe eveniet nobis vel quisquam deserunt minus
          necessitatibus distinctio, laudantium voluptas sit vitae aperiam
          facere illum! Quia, sequi suscipit!
        </ProjectCard>

        <ProjectCard
          id="2"
          imgBanner={cardBanner}
          skills={formatter}
          title="Time Vault"
          inProgress
          sideProject
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempora
          accusamus saepe eveniet nobis vel quisquam deserunt minus
          necessitatibus distinctio, laudantium voluptas sit vitae aperiam
          facere illum! Quia, sequi suscipit!
        </ProjectCard>

        <ProjectCard
          id="3"
          imgBanner={cardBanner}
          skills={formatter}
          title="Time Vault"
          inProgress
          sideProject
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempora
          accusamus saepe eveniet nobis vel quisquam deserunt minus
          necessitatibus distinctio, laudantium voluptas sit vitae aperiam
          facere illum! Quia, sequi suscipit!
        </ProjectCard>
      </div>
      {/* Botão carregar mais */}
      <div></div>
    </section>
  )
}
