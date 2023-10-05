'use client'
import React from 'react'
import { useProjects } from '@/context/projects'
import InputSearch from '../InputSearch'

export default function ProjectInputSearch() {
  const { filterProjects } = useProjects()

  return (
    <InputSearch
      filterFunction={filterProjects}
      placeholder="Busque por tecnologia ou projeto (Ex.: JavaScript, Time Vault)"
    />
  )
}
