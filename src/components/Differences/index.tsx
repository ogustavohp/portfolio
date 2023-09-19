import React from 'react'
import Typography from '../Typography'
import DifferentialCard from './DifferentialCard'
import db from '@/db/db.json'

export default function Differences() {
  return (
    <section className="flex flex-col items-center justify-between gap-3">
      <Typography Tag="h2" apparentTag="h1" ornament botBorder>
        {db.differences.title}
      </Typography>

      <div className="flex flex-wrap justify-center gap-3 ">
        {db.differences.differencesList.map((e) => (
          <DifferentialCard key={e.id} icon={e.icon} title={e.title}>
            {e.description}
          </DifferentialCard>
        ))}
      </div>
    </section>
  )
}
