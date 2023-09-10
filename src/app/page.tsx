import Image from 'next/image'
import cam from '@/assets/cam.svg'
import Typography from '@/components/Typography'
import Link from 'next/link'
import book from '@/assets/book.svg'
import balloons from '@/assets/balloons.svg'
import eye from '@/assets/eye.svg'
import OrnamentE from '@/components/Typography/OrnamentE'
import tag from '@/assets/tag.svg'

export default function Home() {
  return (
    <main className="mx-5 flex flex-col gap-10">
      <div className="bg-iconcolor-700 border-primary-500 mx-auto my-0 flex h-52 w-52 items-center justify-center rounded-full border">
        <Image alt="foto" src={cam} className="items-center" />
      </div>
      {/* Sobre mim */}
      <section className="flex flex-col items-center gap-3">
        <Typography Tag="h2" aparentTag="h1" ornament>
          Olá! Eu sou o Gustavo
        </Typography>
        <Typography Tag="p" aparentTag="p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          dolores explicabo repellendus repudiandae ut tempore id. Est
          repudiandae a, voluptatem perferendis error nesciunt facere maxime,
          asperiores velit, iste ratione rerum. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ab explicabo sint voluptas ipsum nobis
          odit quas, numquam a, repellat magni itaque reiciendis eveniet
          voluptate exercitationem hic atque! Amet, laudantium commodi.
        </Typography>
        <Link
          href={'#'}
          className="text-primary-500 self-start font-bold leading-relaxed"
        >
          Ver mais
        </Link>
        {/* destaques */}
        <div className="flex flex-wrap justify-center gap-2">
          <div className="border-iconcolor-400 flex gap-4 rounded-lg  border p-2">
            <Image alt="icone de um livro" src={book} />
            <div className="flex flex-col">
              <span className="self-center">
                <Typography Tag="p" aparentTag="h1">
                  + de 100
                </Typography>
              </span>
              <Typography Tag="p" aparentTag="p">
                cursos finalizados
              </Typography>
            </div>
          </div>
          <div className="border-iconcolor-400 flex gap-4 rounded-lg border p-2">
            <Image alt="icone de uma balão de conversa" src={balloons} />
            <div className="flex flex-col">
              <span className="self-center">
                <Typography Tag="p" aparentTag="h1">
                  Inglês
                </Typography>
              </span>
              <Typography Tag="p" aparentTag="p">
                Intermediário
              </Typography>
            </div>
          </div>
        </div>
        {/* curriculo */}
        <div className="flex flex-col gap-4">
          <div className="bg-secondary-500 flex gap-2 rounded-full px-4 py-1">
            <Image alt="" src={eye} />
            <Typography Tag="p" aparentTag="p" style="text-bgcolor-900">
              Ver Curriculo Online
            </Typography>
          </div>
          <div className="bg-bluebutton-500 flex gap-2 rounded-full px-4 py-1">
            <Image alt="" src={eye} />
            <Typography Tag="p" aparentTag="p" style="text-bgcolor-900">
              Baixar Curriculo
            </Typography>
          </div>
        </div>
      </section>
      {/* Habilidades e tecnologias */}
      <section className="flex flex-col items-center gap-3">
        <Typography Tag="h2" aparentTag="h2" ornament>
          Habilidades <OrnamentE /> Tecnologias
        </Typography>
        {/* Card */}
        <div className="to-bgcolor-500 border-iconcolor-500 flex min-h-[16rem] w-60 flex-col gap-3 rounded-xl border bg-gradient-to-b from-slate-900 px-3 py-6">
          <div className="text-center">
            <Typography Tag="h3" aparentTag="subTitleCard">
              Linguagens e Frameworks Front-end
            </Typography>
          </div>
          {/* skills */}
          <div className="justify flex flex-wrap gap-x-1 gap-y-2">
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <Typography Tag="p" aparentTag="skillName">
                HTML5
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <Typography Tag="p" aparentTag="skillName">
                CSS3
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-pink-500" />
              <Typography Tag="p" aparentTag="skillName">
                Sass
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <Typography Tag="p" aparentTag="skillName">
                JavaScript
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-700" />
              <Typography Tag="p" aparentTag="skillName">
                TypeScript
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-300" />
              <Typography Tag="p" aparentTag="skillName">
                React
              </Typography>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="to-bgcolor-500 border-iconcolor-500 flex min-h-[16rem] w-60 flex-col gap-3 rounded-xl border bg-gradient-to-b from-slate-900 px-3 py-6">
          <div className="text-center">
            <Typography Tag="h3" aparentTag="subTitleCard">
              Linguagens e Frameworks Front-end
            </Typography>
          </div>
          {/* skills */}
          <div className="justify flex flex-wrap gap-x-1 gap-y-2">
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <Typography Tag="p" aparentTag="skillName">
                HTML5
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <Typography Tag="p" aparentTag="skillName">
                CSS3
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-pink-500" />
              <Typography Tag="p" aparentTag="skillName">
                Sass
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <Typography Tag="p" aparentTag="skillName">
                JavaScript
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-700" />
              <Typography Tag="p" aparentTag="skillName">
                TypeScript
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-300" />
              <Typography Tag="p" aparentTag="skillName">
                React
              </Typography>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="to-bgcolor-500 border-iconcolor-500 flex min-h-[16rem] w-60 flex-col gap-3 rounded-xl border bg-gradient-to-b from-slate-900 px-3 py-6">
          <div className="text-center">
            <Typography Tag="h3" aparentTag="subTitleCard">
              Linguagens e Frameworks Front-end
            </Typography>
          </div>
          {/* skills */}
          <div className="justify flex flex-wrap gap-x-1 gap-y-2">
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <Typography Tag="p" aparentTag="skillName">
                HTML5
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <Typography Tag="p" aparentTag="skillName">
                CSS3
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-pink-500" />
              <Typography Tag="p" aparentTag="skillName">
                Sass
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <Typography Tag="p" aparentTag="skillName">
                JavaScript
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-700" />
              <Typography Tag="p" aparentTag="skillName">
                TypeScript
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-300" />
              <Typography Tag="p" aparentTag="skillName">
                React
              </Typography>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="to-bgcolor-500 border-iconcolor-500 flex min-h-[16rem] w-60 flex-col gap-3 rounded-xl border bg-gradient-to-b from-slate-900 px-3 py-6">
          <div className="text-center">
            <Typography Tag="h3" aparentTag="subTitleCard">
              Linguagens e Frameworks Front-end
            </Typography>
          </div>
          {/* skills */}
          <div className="justify flex flex-wrap gap-x-1 gap-y-2">
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <Typography Tag="p" aparentTag="skillName">
                HTML5
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <Typography Tag="p" aparentTag="skillName">
                CSS3
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-pink-500" />
              <Typography Tag="p" aparentTag="skillName">
                Sass
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <Typography Tag="p" aparentTag="skillName">
                JavaScript
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-700" />
              <Typography Tag="p" aparentTag="skillName">
                TypeScript
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-300" />
              <Typography Tag="p" aparentTag="skillName">
                React
              </Typography>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="to-bgcolor-500 border-iconcolor-500 flex min-h-[16rem] w-60 flex-col gap-3 rounded-xl border bg-gradient-to-b from-slate-900 px-3 py-6">
          <div className="text-center">
            <Typography Tag="h3" aparentTag="subTitleCard">
              Linguagens e Frameworks Front-end
            </Typography>
          </div>
          {/* skills */}
          <div className="justify flex flex-wrap gap-x-1 gap-y-2">
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <Typography Tag="p" aparentTag="skillName">
                HTML5
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <Typography Tag="p" aparentTag="skillName">
                CSS3
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-pink-500" />
              <Typography Tag="p" aparentTag="skillName">
                Sass
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <Typography Tag="p" aparentTag="skillName">
                JavaScript
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-700" />
              <Typography Tag="p" aparentTag="skillName">
                TypeScript
              </Typography>
            </div>
            {/* skill */}
            <div className="border-iconcolor-500 flex items-center gap-2 rounded-3xl border bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-300" />
              <Typography Tag="p" aparentTag="skillName">
                React
              </Typography>
            </div>
          </div>
        </div>
      </section>
      {/* Diferenciais */}
      <section className="flex flex-col items-center gap-3">
        <Typography Tag="h2" aparentTag="h1" ornament>
          Diferenciais
        </Typography>
        <div className="to-bgcolor-500 border-iconcolor-500 flex w-60 flex-col items-center gap-3 rounded-xl border bg-gradient-to-b from-slate-900 px-2 pb-3 pt-2">
          <Image alt="Icone </>" src={tag} />
          <div className="text-center">
            <Typography
              Tag="h3"
              aparentTag="cardDifferencesTitle"
              style={'text-primary-500'}
            >
              Clean Code
            </Typography>
            <Typography Tag="p" aparentTag="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              doloremque nesciunt ipsam illum, aliquid ipsa numquam quaerat
              dolore at sapiente dolorum reiciendis animi architecto neque
              maxime? Totam sit nam a.
            </Typography>
          </div>
        </div>
      </section>
    </main>
  )
}
