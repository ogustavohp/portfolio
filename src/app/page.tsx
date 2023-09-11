import Image from 'next/image'
import Typography from '@/components/Typography'
import Link from 'next/link'
import tag from '@/assets/tag.svg'
import cardBanner from '@/assets/Banner Card.png'
import AboutMe from '@/components/AboutMe'
import SkillsAndTechnologies from '@/components/SkillsAndTechnologies'

export default function Home() {
  return (
    <main className="mx-5 flex flex-col gap-10">
      {/* Sobre mim */}
      <AboutMe />
      {/* Habilidades e tecnologias */}
      <SkillsAndTechnologies />
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
