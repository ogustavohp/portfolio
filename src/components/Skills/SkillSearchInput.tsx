'use client'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import colors from '@/db/colors.json'
import { useFormations } from '@/context/formations'

export default function SkillSearchInput() {
  const { filterFormations } = useFormations()
  const [search, setSearch] = useState('')

  useEffect(() => {
    filterFormations(search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
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
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Busque por tecnologia (Ex.: HTML, CSS, Next.js)"
        className="w-full  bg-transparent px-2 py-1 text-base text-white placeholder:text-iconcolor-400"
      />
      <Search color={colors.iconColor[400]} />
    </div>
  )
}
