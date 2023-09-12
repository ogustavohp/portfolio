import Link from 'next/link'
import React, { ReactNode } from 'react'
import Typography from '../Typography'
import Image, { StaticImageData } from 'next/image'
import { ITag } from '@/lib/tag'
import Tag from '../SkillsAndTechnologies/Tag'

interface IProjectCard {
  title: string
  children: ReactNode
  imgBanner: StaticImageData
  skills: ITag[]
  SideProject?: boolean
  inProgress?: boolean
}

export default function ProjectCard({
  title,
  children,
  imgBanner,
  skills,
  SideProject = false,
  inProgress = false,
}: IProjectCard) {
  return (
    <div className="flex w-72 flex-col hover:scale-105">
      {/* Imagem do card */}
      <Image alt="Imagem do Projeto" src={imgBanner} className="w-full" />
      {/* Parte de baixo do Card */}
      <div className="rounded-b-[10px] border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500">
        <div className="m-2">
          <Typography Tag="h3" apparentTag="h2" style={'text-primary-500 mb-2'}>
            {title}
          </Typography>
          {/* Tipo do projeto */}
          <div className="mb-2 flex gap-2">
            <div className="rounded-3xl border border-iconcolor-500 bg-slate-900 px-3">
              <Typography Tag="span" apparentTag="skillName">
                {SideProject ? 'Side project' : 'Work'}
              </Typography>
            </div>
            <div className="rounded-3xl border border-iconcolor-500 bg-yellow-200 px-3">
              <Typography
                Tag="span"
                apparentTag="skillName"
                style={'text-bgcolor-900'}
              >
                {inProgress ? 'Em andamento' : 'Finalizado'}
              </Typography>
            </div>
          </div>
          {/* Texto */}
          <div>
            <Typography Tag="p" apparentTag="p">
              {children}
            </Typography>
            <Link
              href={'#'}
              className="self-start leading-relaxed text-primary-500"
            >
              Ver mais
            </Link>
          </div>
          <div className="mb-4 mt-2 flex flex-wrap">
            {/* skill */}
            {skills.map((e) => (
              <Tag key={e.skillName} skillName={e.skillName} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
