import Link from 'next/link'
import React, { ReactNode } from 'react'
import Typography from '../Typography'
import Image from 'next/image'
import { ITag } from '@/lib/tag'
import Tag from '../SkillsAndTechnologies/Tag'
import TypeOfProject from './TypeOfProject'
import db from '@/db/db.json'

interface IProjectCard {
  title: string
  children: ReactNode
  imgBanner: string
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
    <Link href={`/projects/${id}`} className="flex grow justify-center">
      <div className="flex w-72 flex-col hover:scale-105">
        {/* Card image */}
        <Image
          alt="Imagem do Projeto"
          src={imgBanner}
          width={269}
          height={0}
          className="w-full rounded-t-[10px] border-l border-r border-t border-iconcolor-500"
        />

        <div className="grow rounded-b-[10px] border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500">
          <div className="m-2">
            <Typography
              Tag="h3"
              apparentTag="h2"
              style={'text-primary-500 mb-2'}
            >
              {title}
            </Typography>
            <TypeOfProject inProgress={inProgress} sideProject={sideProject} />
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
