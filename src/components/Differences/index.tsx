import React from 'react'
import Typography from '../Typography'
import DifferentialCard from './DifferentialCard'
import iconTag from '@/assets/tag.svg'

export default function Differences() {
  return (
    <section className="flex flex-col items-center gap-3">
      <Typography Tag="h2" aparentTag="h1" ornament botBorder>
        Diferenciais
      </Typography>

      <DifferentialCard icon={iconTag} title="Clean Code">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae odio
        laudantium tenetur quas suscipit sint ut consequatur neque officia id
        placeat nesciunt eos in, aliquam nam nulla blanditiis quod minus?
      </DifferentialCard>

      <DifferentialCard icon={iconTag} title="Clean Code">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae odio
        laudantium tenetur quas suscipit sint ut consequatur neque officia id
        placeat nesciunt eos in, aliquam nam nulla blanditiis quod minus?
      </DifferentialCard>

      <DifferentialCard icon={iconTag} title="Clean Code">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae odio
        laudantium tenetur quas suscipit sint ut consequatur neque officia id
        placeat nesciunt eos in, aliquam nam nulla blanditiis quod minus?
      </DifferentialCard>

      <DifferentialCard icon={iconTag} title="Clean Code">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae odio
        laudantium tenetur quas suscipit sint ut consequatur neque officia id
        placeat nesciunt eos in, aliquam nam nulla blanditiis quod minus?
      </DifferentialCard>
    </section>
  )
}
