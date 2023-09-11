import React from 'react'
import book from '@/assets/book.svg'
import balloons from '@/assets/balloons.svg'
import HighlightCard from './HighlightCard'

export default function Highlights() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <HighlightCard
        topText="+ de 100"
        bottomText="cursos finalizados"
        icon={book}
      />
      <HighlightCard
        topText="Inglês"
        bottomText="Intermediário"
        icon={balloons}
      />
    </div>
  )
}
