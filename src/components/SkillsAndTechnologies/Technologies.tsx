import React from 'react'
import TechnologieCard from './TechnologieCard'
import { ITag } from '@/lib/tag'

export default function Technologies() {
  const frontEnd: ITag[] = [
    {
      skillName: 'HTML5',
    },
    {
      skillName: 'CSS3',
    },
    {
      skillName: 'Sass',
    },
    {
      skillName: 'JavaScript',
    },
    {
      skillName: 'TypeScript',
    },
    {
      skillName: 'React',
    },
    {
      skillName: 'Next.js',
    },
    {
      skillName: 'GraphQL',
    },
    {
      skillName: 'Tailwind CSS',
    },
  ]
  const backEnd: ITag[] = [
    {
      skillName: 'Node.js',
    },
    {
      skillName: 'Fastify',
    },
    {
      skillName: 'Prisma',
    },
    {
      skillName: 'Express',
    },
    {
      skillName: 'TypeScript',
    },
    {
      skillName: 'GraphQL',
    },
    {
      skillName: 'JavaScript',
    },
  ]
  const versioning: ITag[] = [
    {
      skillName: 'Git',
    },
  ]
  const mobile: ITag[] = [
    {
      skillName: 'React Native',
    },
    {
      skillName: 'Expo',
    },
  ]
  const formatter: ITag[] = [
    {
      skillName: 'ESLint',
    },
    {
      skillName: 'Prettier',
    },
  ]
  return (
    <>
      <TechnologieCard
        title="Linguagens e Frameworks Front-end"
        list={frontEnd}
      />
      <TechnologieCard
        title="Linguagens e Frameworks Back-end"
        list={backEnd}
      />
      <TechnologieCard
        title="Ferramentas e Tecnologias de Versionamento"
        list={versioning}
      />
      <TechnologieCard title="Mobile Development" list={mobile} />
      <TechnologieCard
        title="Ferramentas de Desenvolvimento e Formatação de Código"
        list={formatter}
      />
    </>
  )
}
