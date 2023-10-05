'use client'
import React from 'react'
import InputSearch from '../InputSearch'
import { useFormations } from '@/context/formations'

export default function FormationInputSearch() {
  const { filterFormations } = useFormations()
  return <InputSearch filterFunction={filterFormations} />
}
