import React from 'react'
import Typography from '../Typography'
import OrnamentE from '../Typography/OrnamentE'
import Technologies from './Technologies'

export default function SkillsAndTechnologies() {
  return (
    <section className="flex flex-col items-center gap-3">
      <Typography Tag="h2" aparentTag="h2" ornament botBorder>
        Habilidades <OrnamentE /> Tecnologias
      </Typography>
      <Technologies />
    </section>
  )
}
