import React from 'react'
import TechnologyCard from './TechnologyCard'
import db from '@/db/db.json'

export default function Technologies() {
  return db.skillsAndTechnologies.skillsAndTechnologiesList.map((e) => (
    <TechnologyCard key={e.id} list={e.technologies} title={e.title} />
  ))
}
