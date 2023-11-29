import React from 'react'
import Image from 'next/image'
import Typography from '@/components/Typography'
import Tag from '@/components/SkillsAndTechnologies/Tag'
import TypeOfProject from '@/components/Projects/TypeOfProject'
import { Eye, Github } from 'lucide-react'
import db from '@/db/db.json'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const projects = db.projects.projectsList

interface ParamsType {
  id: string
}

export async function generateMetadata({ params }: { params: ParamsType }) {
  const project = projects.find((project) => project.id === params.id)
  return {
    title: `Gustavo Pereira | ${project?.title}`,
  }
}

// export async function getStaticPaths() {
//   const paths = db.projects.projectsList.map((e) => {
//     return { params: { id: `${e.id}` } }
//   })
//   return {
//     paths,
//     fallback: false,
//   }
// }

export default function Page({ params }: { params: ParamsType }) {
  const project = projects.find((project) => project.id === params.id)

  if (!project) redirect('/404')

  return (
    <main className="flex flex-col gap-4">
      {/* Imagem */}
      <div className="relative">
        <Image
          alt="Banner do projeto"
          src={`${project.imageBannerUrl}`}
          priority={true}
          width={1436}
          height={0}
          className="w-full"
        />
        <div className="absolute inset-0">
          <div className="h-1/2" />
          <div className="h-1/2 bg-gradient-to-t from-inherit" />
        </div>
      </div>

      <section className="mx-5 flex flex-col gap-4">
        {/* Titulo */}
        <div>
          <Typography Tag="h1" apparentTag="h1" ornament>
            {project.title}
          </Typography>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((e) => (
            <Tag skillName={e.skillName} key={e.id} />
          ))}
        </div>

        {/* buttons e pseudo buttons */}
        <TypeOfProject
          sideProject={project.sideProject}
          inProgress={project.inProgress}
        />

        <div className="flex gap-6">
          <Link
            href={`${project.gitHubLink}`}
            target="_blank"
            className="flex gap-2 rounded-full bg-secondary-400 px-2 transition-all hover:bg-blue-400"
          >
            <Github className="self-center" />
            <Typography Tag="span" apparentTag="p" style={'text-slate-900'}>
              GitHub
            </Typography>
          </Link>
          {project.projectLink && (
            <Link
              href={`${project.projectLink}`}
              className="flex gap-2 rounded-full bg-primary-500 px-2 transition-all hover:bg-blue-400"
            >
              <Eye className="self-center" />
              <Typography Tag="span" apparentTag="p" style={'text-slate-900'}>
                Ver Projeto Online
              </Typography>
            </Link>
          )}
        </div>

        {/* Texto e imagens sobre o projeto */}
        <div className="flex flex-col flex-wrap gap-5">
          {project.fullDescription.map((description) => (
            <span key={description.text} className="space-y-5">
              <Typography Tag="p" apparentTag="p">
                {description.text}
              </Typography>
              {description.gif && (
                <Image
                  alt={description.gif.gifAlt}
                  src={description.gif.gifLink}
                  width={0}
                  height={0}
                  className="m-auto h-auto w-auto"
                />
              )}
            </span>
          ))}

          <div className="m-auto aspect-video w-full max-w-3xl">
            <iframe
              className="h-full w-full touch-none"
              src={project.youTubeLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
// }
