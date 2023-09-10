import Image from 'next/image'
import cam from '@/assets/cam.svg'
import Typography from '@/components/Typography'
import Link from 'next/link'
import book from '@/assets/book.svg'
import balloons from '@/assets/balloons.svg'
import eye from '@/assets/eye.svg'
import OrnamentE from '@/components/Typography/OrnamentE'
import tag from '@/assets/tag.svg'
import cardBanner from '@/assets/Banner Card.png'

export default function Home() {
  return (
    <main className="mx-5 flex flex-col gap-10">
      <div className="mx-auto my-0 flex h-52 w-52 items-center justify-center rounded-full border border-primary-500 bg-iconcolor-700">
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
          className="self-start font-bold leading-relaxed text-primary-500"
        >
          Ver mais
        </Link>
        {/* destaques */}
        <div className="flex flex-wrap justify-center gap-2">
          <div className="flex gap-4 rounded-lg border  border-iconcolor-400 p-2">
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
          <div className="flex gap-4 rounded-lg border border-iconcolor-400 p-2">
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
          <div className="flex gap-2 rounded-full bg-secondary-500 px-4 py-1">
            <Image alt="" src={eye} />
            <Typography Tag="p" aparentTag="p" style="text-bgcolor-900">
              Ver Curriculo Online
            </Typography>
          </div>
          <div className="flex gap-2 rounded-full bg-bluebutton-500 px-4 py-1">
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
        <div className="flex min-h-[16rem] w-60 flex-col gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-3 py-6">
          <div className="text-center">
            <Typography Tag="h3" aparentTag="subTitleCard">
              Linguagens e Frameworks Front-end
            </Typography>
          </div>
          {/* skills */}
          <div className="justify flex flex-wrap gap-x-1 gap-y-2">
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <Typography Tag="p" aparentTag="skillName">
                HTML5
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <Typography Tag="p" aparentTag="skillName">
                CSS3
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-pink-500" />
              <Typography Tag="p" aparentTag="skillName">
                Sass
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <Typography Tag="p" aparentTag="skillName">
                JavaScript
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-700" />
              <Typography Tag="p" aparentTag="skillName">
                TypeScript
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-300" />
              <Typography Tag="p" aparentTag="skillName">
                React
              </Typography>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="flex min-h-[16rem] w-60 flex-col gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-3 py-6">
          <div className="text-center">
            <Typography Tag="h3" aparentTag="subTitleCard">
              Linguagens e Frameworks Front-end
            </Typography>
          </div>
          {/* skills */}
          <div className="justify flex flex-wrap gap-x-1 gap-y-2">
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <Typography Tag="p" aparentTag="skillName">
                HTML5
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <Typography Tag="p" aparentTag="skillName">
                CSS3
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-pink-500" />
              <Typography Tag="p" aparentTag="skillName">
                Sass
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <Typography Tag="p" aparentTag="skillName">
                JavaScript
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-700" />
              <Typography Tag="p" aparentTag="skillName">
                TypeScript
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-300" />
              <Typography Tag="p" aparentTag="skillName">
                React
              </Typography>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="flex min-h-[16rem] w-60 flex-col gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-3 py-6">
          <div className="text-center">
            <Typography Tag="h3" aparentTag="subTitleCard">
              Linguagens e Frameworks Front-end
            </Typography>
          </div>
          {/* skills */}
          <div className="justify flex flex-wrap gap-x-1 gap-y-2">
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <Typography Tag="p" aparentTag="skillName">
                HTML5
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <Typography Tag="p" aparentTag="skillName">
                CSS3
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-pink-500" />
              <Typography Tag="p" aparentTag="skillName">
                Sass
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <Typography Tag="p" aparentTag="skillName">
                JavaScript
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-700" />
              <Typography Tag="p" aparentTag="skillName">
                TypeScript
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-300" />
              <Typography Tag="p" aparentTag="skillName">
                React
              </Typography>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="flex min-h-[16rem] w-60 flex-col gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-3 py-6">
          <div className="text-center">
            <Typography Tag="h3" aparentTag="subTitleCard">
              Linguagens e Frameworks Front-end
            </Typography>
          </div>
          {/* skills */}
          <div className="justify flex flex-wrap gap-x-1 gap-y-2">
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <Typography Tag="p" aparentTag="skillName">
                HTML5
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <Typography Tag="p" aparentTag="skillName">
                CSS3
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-pink-500" />
              <Typography Tag="p" aparentTag="skillName">
                Sass
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <Typography Tag="p" aparentTag="skillName">
                JavaScript
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-700" />
              <Typography Tag="p" aparentTag="skillName">
                TypeScript
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-300" />
              <Typography Tag="p" aparentTag="skillName">
                React
              </Typography>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="flex min-h-[16rem] w-60 flex-col gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-3 py-6">
          <div className="text-center">
            <Typography Tag="h3" aparentTag="subTitleCard">
              Linguagens e Frameworks Front-end
            </Typography>
          </div>
          {/* skills */}
          <div className="justify flex flex-wrap gap-x-1 gap-y-2">
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <Typography Tag="p" aparentTag="skillName">
                HTML5
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <Typography Tag="p" aparentTag="skillName">
                CSS3
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-pink-500" />
              <Typography Tag="p" aparentTag="skillName">
                Sass
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <Typography Tag="p" aparentTag="skillName">
                JavaScript
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-blue-700" />
              <Typography Tag="p" aparentTag="skillName">
                TypeScript
              </Typography>
            </div>
            {/* skill */}
            <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
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
        {/* diferencial card */}
        <div className="flex w-60 flex-col items-center gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-2 pb-3 pt-2">
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
        <div className="flex w-60 flex-col items-center gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-2 pb-3 pt-2">
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
        <div className="flex w-60 flex-col items-center gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-2 pb-3 pt-2">
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
        <div className="flex w-60 flex-col items-center gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-2 pb-3 pt-2">
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
        <div className="flex w-60 flex-col items-center gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-2 pb-3 pt-2">
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
      <section className="flex flex-col items-center gap-3">
        <Typography Tag="h2" aparentTag="h2" ornament>
          O Que eu faço
        </Typography>
        {/* Card oq eu faço */}
        <div className="w-64 text-center">
          <Typography Tag="h3" aparentTag="h2" style={'text-primary-500 mt-7'}>
            Back-end
          </Typography>
          <Typography Tag="p" aparentTag="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iusto
            ut incidunt magnam doloremque consectetur odit id similique laborum
            vitae aut necessitatibus, ipsam facere esse doloribus cumque! Sed,
            ut laudantium?
          </Typography>
        </div>
        <div className="w-64 text-center">
          <Typography Tag="h3" aparentTag="h2" style={'text-primary-500'}>
            Back-end
          </Typography>
          <Typography Tag="p" aparentTag="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iusto
            ut incidunt magnam doloremque consectetur odit id similique laborum
            vitae aut necessitatibus, ipsam facere esse doloribus cumque! Sed,
            ut laudantium?
          </Typography>
        </div>
      </section>
      {/* Projetos */}
      <section className="flex flex-col items-center gap-3">
        <Typography Tag="h2" aparentTag="h1" ornament>
          Projetos
        </Typography>
        {/* Botão ver todos os projetos */}
        <div></div>
        {/* Card */}
        <div className="flex w-72 flex-col hover:scale-105">
          {/* Imagem do card */}
          <Image alt="Imagem do Projeto" src={cardBanner} className="w-full" />
          {/* Parte de baixo do Card */}
          <div className="rounded-b-[10px] border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500">
            <div className="m-2">
              <Typography
                Tag="h3"
                aparentTag="h2"
                style={'text-primary-500 mb-2'}
              >
                Time Vault
              </Typography>
              {/* Tipo do projeto */}
              <div className="mb-2 flex gap-2">
                <div className="rounded-3xl border border-iconcolor-500 bg-slate-900 px-3">
                  <Typography Tag="span" aparentTag="skillName">
                    Projeto Pessoal
                  </Typography>
                </div>
                <div className="rounded-3xl border border-iconcolor-500 bg-yellow-200 px-3">
                  <Typography
                    Tag="span"
                    aparentTag="skillName"
                    style={'text-bgcolor-900'}
                  >
                    Em andamento
                  </Typography>
                </div>
              </div>
              {/* Texto */}
              <div>
                <Typography Tag="p" aparentTag="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus distinctio provident ullam excepturi accusantium id
                  eos alias illo nesciunt incidunt ut, illum, cupiditate veniam
                  voluptas reprehenderit culpa architecto maxime cum.
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
                <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <Typography Tag="p" aparentTag="skillName">
                    HTML5
                  </Typography>
                </div>
                {/* skill */}
                <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
                  <div className="h-2 w-2 rounded-full bg-purple-500" />
                  <Typography Tag="p" aparentTag="skillName">
                    CSS3
                  </Typography>
                </div>
                {/* skill */}
                <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
                  <div className="h-2 w-2 rounded-full bg-pink-500" />
                  <Typography Tag="p" aparentTag="skillName">
                    Sass
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
