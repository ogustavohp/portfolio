import React from 'react'
import Image from 'next/image'
import Typography from '@/components/Typography'
import Tag from '@/components/SkillsAndTechnologies/Tag'
import TypeOfProject from '@/components/Projects/TypeOfProject'
import { Eye, Github } from 'lucide-react'
import db from '@/db/db.json'
import gifLogin from '@/assets/timeVaultGif1.gif'
import gifRegisterMemory from '@/assets/timeVaultGif2.gif'

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

export async function getStaticPaths() {
  const paths = db.projects.projectsList.map((e) => {
    return { params: { id: `${e.id}` } }
  })
  return {
    paths,
    fallback: false,
  }
}

export default function Page({ params }: { params: ParamsType }) {
  const project = projects.find((project) => project.id === params.id)

  return (
    <main className="flex flex-col gap-4">
      {/* Imagem */}
      <div className="relative">
        <Image
          alt="Banner do projeto"
          src={'/timeVault/banner.png'}
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
            {project?.title}
          </Typography>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Tag skillName="HTML5" />
          <Tag skillName="CSS3" />
          <Tag skillName="Sass" />
        </div>
        {/* buttons e pseudo buttons */}
        <TypeOfProject sideProject />
        <div className="flex gap-6">
          <div className="flex gap-2 rounded-full bg-primary-500 px-2">
            <Github className="self-center" />
            <Typography Tag="span" apparentTag="p" style={'text-slate-900'}>
              GitHub
            </Typography>
          </div>
          <div className="flex gap-2 rounded-full bg-secondary-500 px-2">
            <Eye className="self-center" />
            <Typography Tag="span" apparentTag="p" style={'text-slate-900'}>
              Ver Projeto Online
            </Typography>
          </div>
          {/* text */}
        </div>
        {/* Texto e imagens sobre o projeto */}
        <div className="flex flex-wrap gap-5">
          <Typography Tag="p" apparentTag="p">
            O &quot;Time Vault&quot; é muito mais do que apenas uma aplicação -
            é um refúgio seguro para suas memórias e lembranças mais preciosas.
            Desenvolvido com uma ampla gama de tecnologias modernas, incluindo
            Fastify, Prisma, Next.js, TypeScript, React, Expo, Tailwind CSS,
            Node.js, ESlint e Prettier, este projeto é a união perfeita entre
            tecnologia e nostalgia.
          </Typography>
          <Typography Tag="p" apparentTag="p">
            Uma das principais características do &quot;Time Vault&quot; é a
            capacidade de fazer login com sua conta do GitHub, simplificando o
            acesso à plataforma. Uma vez dentro, você pode começar a cadastrar
            suas memórias de forma organizada e segura.
          </Typography>
          <Image
            alt="gif logando no projeto pelo github"
            src={gifLogin}
            className="m-auto"
          />
          <Typography Tag="p" apparentTag="p">
            Além disso, o &quot;Time Vault&quot; permite que você adicione
            imagens às suas memórias, dando vida às lembranças de uma maneira
            única e envolvente. Assim, você pode reviver momentos especiais e
            compartilhá-los com o mundo ou manter essas memórias preciosas para
            você.
          </Typography>
          <Image
            alt="gif cadastrando uma memoria no projeto"
            src={gifRegisterMemory}
            className="m-auto"
          />
          <Typography Tag="p" apparentTag="p">
            Para colocar o &quot;Time Vault&quot; em produção, seria necessário
            hospedar o servidor back-end em uma plataforma como Heroku ou
            Render, e o front-end em um serviço como Vercel. Além disso, para
            armazenar as imagens cadastradas pelos usuários de maneira escalável
            e confiável, seriam necessários serviços de armazenamento em nuvem
            como Amazon S3, Google Cloud Storage ou Cloudflare R2. Infelizmente,
            esses serviços são pagos e podem acarretar custos significativos ao
            longo do tempo.
          </Typography>
          <Typography Tag="p" apparentTag="p">
            No entanto, uma ótima notícia é que você pode facilmente acessar e
            executar o projeto &quot;Time Vault&quot; em sua própria máquina
            local. Para isso, basta seguir o passo a passo fornecido no
            repositório GitHub do projeto. Isso permitirá que você experimente
            todas as funcionalidades e recursos do &quot;Time Vault&quot; em um
            ambiente de desenvolvimento, permitindo que você explore e desfrute
            de todas as suas capacidades sem custos associados.
          </Typography>
          <div className="m-auto aspect-video w-full max-w-3xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/oKluokDoWXg?si=0KR-BW3E4IBS-wv6"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}
// }
