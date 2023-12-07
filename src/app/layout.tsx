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
  title: 'Gustavo Henrique',
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
          {/* <span className="fixed right-1/2 m-auto translate-x-1/2 rounded-full border border-primary-500 bg-primary-500 px-2 py-1 text-black">
            Enviando...
          </span> */}
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
