import AboutMe from '@/components/AboutMe'
import SkillsAndTechnologies from '@/components/SkillsAndTechnologies'
import Differences from '@/components/Differences'
import WhatIDo from '@/components/WhatIDo'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main className="mx-5 flex flex-col gap-10">
      {/* Sobre mim */}
      <AboutMe />

      {/* Habilidades e tecnologias */}
      <SkillsAndTechnologies />

      {/* Diferenciais */}
      <Differences />

      {/* O que eu faço */}
      <WhatIDo />

      {/* Projetos */}
      <Projects />
    </main>
  )
}
