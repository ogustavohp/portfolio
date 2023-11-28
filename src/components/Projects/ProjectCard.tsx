import Link from 'next/link'
import React, { ReactNode } from 'react'
import Typography from '../Typography'
import Image, { StaticImageData } from 'next/image'
import { ITag } from '@/lib/tag'
import Tag from '../SkillsAndTechnologies/Tag'
import TypeOfProject from './TypeOfProject'
import db from '@/db/db.json'

interface IProjectCard {
  title: string
  children: ReactNode
  imgBanner: StaticImageData
  technologies: ITag[]
  sideProject?: boolean
  inProgress?: boolean
  id: string
}

export default function ProjectCard({
  id,
  title,
  children,
  imgBanner,
  technologies,
  sideProject = false,
  inProgress = false,
}: IProjectCard) {
  return (
    <Link href={`/projects/${id}`} className="flex grow">
      <div className="flex w-72 flex-col hover:scale-105">
        {/* Imagem do card */}
        <Image alt="Imagem do Projeto" src={imgBanner} className="w-full" />
        {/* Parte de baixo do Card */}
        <div className="grow rounded-b-[10px] border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500">
          <div className="m-2">
            <Typography
              Tag="h3"
              apparentTag="h2"
              style={'text-primary-500 mb-2'}
            >
              {title}
            </Typography>
            {/* Tipo do projeto */}
            <TypeOfProject inProgress={inProgress} sideProject={sideProject} />
            {/* Texto */}
            <div>
              <Typography Tag="p" apparentTag="p">
                {children}
              </Typography>
              <span className="self-start leading-relaxed text-primary-500">
                {db.projects.LearnMore}
              </span>
            </div>
            <div className="mb-4 mt-2 flex flex-wrap">
              {/* skill */}
              {technologies.map((e) => (
                <Tag key={e.id} skillName={e.skillName} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
