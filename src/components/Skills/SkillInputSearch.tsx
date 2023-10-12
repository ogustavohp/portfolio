'use client'
import React from 'react'
import { useSkills } from '@/context/skills'
import InputSearch from '../InputSearch'

export default function SkillInputSearch() {
  const { filterSkills } = useSkills()

  return (
    <InputSearch
      filterFunction={filterSkills}
      placeholder={'Busque por tecnologia (Ex.: JavaScript, CSS3)'}
    />
  )
}
