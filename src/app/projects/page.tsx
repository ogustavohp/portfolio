import Typography from '@/components/Typography'
import React from 'react'
import Projects from '@/components/Projects'
import { Search } from 'lucide-react'
import colors from '@/db/colors.json'

export default function Page() {
  return (
    <main className="mx-5 flex flex-col gap-4">
      {/* titulo */}
      <div className="flex justify-center">
        <Typography Tag="h1" apparentTag="h1" botBorder ornament>
          Projetos
        </Typography>
      </div>

      {/* Input de busca */}
      <div className="mt-3 flex w-full max-w-[27rem] items-center self-center border-b border-iconcolor-400">
        <label
          htmlFor="search"
          className="sr-only mx-2 text-base text-primary-500"
        >
          Busca
        </label>
        <input
          type="text"
          id="search"
          placeholder="Busque por projeto ou tecnologia (Ex.: HTML, CSS, Next.js)"
          className="w-full  bg-transparent px-2 py-1 text-base text-white placeholder:text-iconcolor-400"
        />
        <Search color={colors.iconColor[400]} />
      </div>

      {/* projetos card */}
      <Projects noProjectTitle />
    </main>
  )
}
