import Link from 'next/link'
import React from 'react'
import Typography from '../Typography'

export default function TextAboutMeSummarized() {
  return (
    <>
      <Link href={'/aboutme'}>
        <Typography Tag="h2" apparentTag="h1" ornament botBorder>
          Olá! Eu sou o Gustavo
        </Typography>
      </Link>
      <Typography Tag="p" apparentTag="p">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
        dolores explicabo repellendus repudiandae ut tempore id. Est repudiandae
        a, voluptatem perferendis error nesciunt facere maxime, asperiores
        velit, iste ratione rerum. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Ab explicabo sint voluptas ipsum nobis odit quas,
        numquam a, repellat magni itaque reiciendis eveniet voluptate
        exercitationem hic atque! Amet, laudantium commodi.
      </Typography>
      <Link
        href={'/aboutme'}
        className="self-start font-bold leading-relaxed text-primary-500"
      >
        Ver mais
      </Link>
    </>
  )
}
