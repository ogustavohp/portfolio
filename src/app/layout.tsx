import Typography from '@/components/Typography'
import './globals.css'
import type { Metadata } from 'next'
import { Fira_Sans as FiraSans } from 'next/font/google'
import Image from 'next/image'
import menuH from '@/assets/menuh.svg'

const firaSans = FiraSans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className="min-h-screen bg-gradient-to-b from-slate-900 to-bgcolor-500"
    >
      <body className={firaSans.className}>
        <header className="m-4 flex items-center justify-between">
          <Image alt="Menu" src={menuH} />
          <div>
            <Typography Tag="h1" apparentTag="h1" ornament>
              Gustavo Pereira
            </Typography>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
