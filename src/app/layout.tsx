import './globals.css'
import type { Metadata } from 'next'
import { Fira_Sans as FiraSans } from 'next/font/google'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import { FormationProvider } from '@/context/formations'
import { ProjectsProvider } from '@/context/projects'
import { SkillsProvider } from '@/context/skills'

const firaSans = FiraSans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Gustavo Pereira',
  description: 'ogustavohp portfólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className="scroll-smooth bg-gradient-to-b from-slate-900 to-bgcolor-500"
    >
      <body
        className={`${firaSans.className} bg-[url(../assets/bg-stars.svg)] bg-repeat`}
      >
        <div className="mx-auto min-h-screen max-w-[1436px]">
          <Menu />
          <ProjectsProvider>
            <SkillsProvider>
              <FormationProvider>{children}</FormationProvider>
            </SkillsProvider>
          </ProjectsProvider>
          <Footer />
        </div>
      </body>
    </html>
  )
}
