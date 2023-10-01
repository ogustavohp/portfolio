import Typography from '@/components/Typography'
import OrnamentE from '@/components/Typography/OrnamentE'
import React from 'react'
import Formations from '@/components/Formations'
import { Search } from 'lucide-react'
import colors from '@/db/colors.json'

export default function Page() {
  return (
    <main className="mx-5 mt-8 flex flex-col items-center gap-7">
      <Typography Tag="h1" apparentTag="h1" ornament>
        Formações <OrnamentE /> Certificados
      </Typography>
      {/* input search */}
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
          placeholder="Busque por tecnologia (Ex.: HTML, CSS, Next.js)"
          className="w-full  bg-transparent px-2 py-1 text-base text-white placeholder:text-iconcolor-400"
        />
        <Search color={colors.iconColor[400]} />
      </div>
      <Formations />
    </main>
  )
}
