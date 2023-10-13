import React from 'react'
import bannerTimeVault from '@/assets/banner_timeVault.png'
import Image from 'next/image'
import Typography from '@/components/Typography'
import Tag from '@/components/SkillsAndTechnologies/Tag'
import TypeOfProject from '@/components/Projects/TypeOfProject'
import { Eye, Github } from 'lucide-react'
import db from '@/db/db.json'

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

export default function Page({ params }: { params: ParamsType }) {
  const project = projects.find((project) => project.id === params.id)
  console.log(project)
  return (
    <main className="flex flex-col gap-4">
      {/* Imagem */}
      <div className="relative">
        <Image
          alt="Banner do projeto"
          src={bannerTimeVault}
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
            Time Vault
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            hic ducimus eaque dicta vero provident nostrum officia quod? Quae
            debitis velit quaerat error neque eum eaque. Ipsum molestiae
            consequatur eaque! Sit, dolore error blanditiis veniam maxime
            corporis ipsa, delectus ducimus est ea perspiciatis. A velit beatae,
            iste, esse nulla dolorem excepturi, repudiandae cumque provident
            aperiam tempore doloribus reiciendis nostrum perferendis! Doloribus
            autem magnam officiis temporibus nostrum cupiditate laboriosam porro
            distinctio ipsum eius quam aspernatur delectus corrupti velit,
            possimus similique sequi adipisci, qui architecto. Exercitationem
            dignissimos et aliquid soluta quis tenetur.
          </Typography>
          <Typography Tag="p" apparentTag="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus minima ad perferendis cum, optio nemo distinctio?
            Deleniti, excepturi aspernatur veritatis corporis nostrum dolores
            sequi, voluptatibus, natus minus iste dignissimos! Mollitia.
            Pariatur recusandae dolor corporis, nulla necessitatibus quos
            tempore ea commodi nihil consequuntur est enim ut. Et eum rem odit
            obcaecati at voluptatum. Quasi saepe harum inventore! Ea neque nemo
            rerum! Dolores vel illo debitis a eum nemo ipsa blanditiis. Aliquam
            corrupti recusandae nesciunt, nobis assumenda possimus rem dolorem
            harum magni. Optio quidem eos dolore ipsa! Corporis impedit facilis
            natus praesentium.
          </Typography>
          <Typography Tag="p" apparentTag="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            magni. Fugiat modi laboriosam incidunt nisi vitae quasi cum neque
            saepe? Ipsum animi earum fuga, similique dolorem recusandae quos
            quis inventore! Officiis explicabo sed consequuntur esse odio, iure
            voluptatem ullam aperiam et sint necessitatibus provident
            accusantium nisi dolor. Incidunt doloribus eum, id pariatur quaerat
            quos dolor, sed impedit ex consequatur reprehenderit.
          </Typography>
          <Typography Tag="p" apparentTag="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptate voluptatibus veritatis inventore asperiores adipisci
            veniam aperiam? Minus officia atque debitis eius sint, magni culpa
            temporibus blanditiis architecto odit autem. Odit aliquid at, ipsa
            nihil doloribus harum quam obcaecati. Consequatur, id? Sed nulla,
            odit voluptas blanditiis ut non deserunt modi officiis maxime quidem
            sunt quaerat neque? Laudantium modi sint ipsa! A vel iure amet
            accusamus molestias et eaque fuga consequatur. Quod dolorum pariatur
            culpa similique sunt aut deleniti? Et illum sunt explicabo adipisci!
            Aperiam omnis sed deserunt totam! Ex, veritatis.
          </Typography>
        </div>
      </section>
    </main>
  )
}
