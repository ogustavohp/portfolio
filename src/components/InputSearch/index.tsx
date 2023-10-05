'use client'
import React, { useEffect, useState } from 'react'
import colors from '@/db/colors.json'
import { Search } from 'lucide-react'

interface InputSearchType {
  filterFunction: (e: string) => void
  placeholder: string
}

export default function InputSearch({
  filterFunction,
  placeholder,
}: InputSearchType) {
  const [search, setSearch] = useState('')

  useEffect(() => {
    filterFunction(search)
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
        placeholder={placeholder}
        className="w-full  bg-transparent px-2 py-1 text-base text-white placeholder:text-iconcolor-400"
      />
      <Search color={colors.iconColor[400]} />
    </div>
  )
}
