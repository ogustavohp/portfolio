import Typography from '@/components/Typography'
import Image from 'next/image'
import React from 'react'
import searchIcon from '@/assets/searchIcon.svg'
import Projects from '@/components/Projects'

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
      <div className="mt-3 flex w-full items-center border-b border-iconcolor-400">
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
        <Image alt="icone de uma lupa" src={searchIcon} className="" />
      </div>

      {/* projetos card */}
      <Projects />
    </main>
  )
}
