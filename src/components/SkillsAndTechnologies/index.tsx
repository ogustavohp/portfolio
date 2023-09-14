import React from 'react'
import Typography from '../Typography'
import OrnamentE from '../Typography/OrnamentE'
import Technologies from './Technologies'
import Link from 'next/link'

export default function SkillsAndTechnologies() {
  return (
    <section className="flex flex-col items-center gap-3">
      <Link href={'/skills'}>
        <Typography Tag="h2" apparentTag="h2" ornament botBorder>
          Habilidades <OrnamentE /> Tecnologias
        </Typography>
      </Link>

      <div className="flex flex-wrap justify-center gap-3 ">
        <Technologies />
      </div>
    </section>
  )
}
