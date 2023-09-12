import React from 'react'
import Typography from '../Typography'
import cardBanner from '@/assets/Banner Card.png'
import ProjectCard from './ProjectCard'
import { ITag } from '@/lib/tag'

export default function Projects() {
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
      <Typography Tag="h2" apparentTag="h1" ornament>
        Projetos
      </Typography>
      {/* Botão ver todos os projetos */}
      <div></div>
      {/* Card */}
      <ProjectCard
        imgBanner={cardBanner}
        skills={formatter}
        title="Time Vault"
        inProgress
        SideProject
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempora
        accusamus saepe eveniet nobis vel quisquam deserunt minus necessitatibus
        distinctio, laudantium voluptas sit vitae aperiam facere illum! Quia,
        sequi suscipit!
      </ProjectCard>

      <ProjectCard
        imgBanner={cardBanner}
        skills={formatter}
        title="Time Vault"
        inProgress
        SideProject
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempora
        accusamus saepe eveniet nobis vel quisquam deserunt minus necessitatibus
        distinctio, laudantium voluptas sit vitae aperiam facere illum! Quia,
        sequi suscipit!
      </ProjectCard>

      <ProjectCard
        imgBanner={cardBanner}
        skills={formatter}
        title="Time Vault"
        inProgress
        SideProject
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempora
        accusamus saepe eveniet nobis vel quisquam deserunt minus necessitatibus
        distinctio, laudantium voluptas sit vitae aperiam facere illum! Quia,
        sequi suscipit!
      </ProjectCard>
    </section>
  )
}
