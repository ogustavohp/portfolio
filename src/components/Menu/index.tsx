'use client'
import React, { useState } from 'react'
import Typography from '../Typography'
import Image from 'next/image'
import iconMenuh from '@/assets/menuh.svg'
import Link from 'next/link'
import Button from '../Button'

export default function Menu() {
  const [visible, setVisible] = useState<boolean>(false)
  function change() {
    setVisible(!visible)
  }
  return (
    <header>
      {/* parte superior */}
      <div className="m-4 flex items-center justify-between">
        <div className="" onClick={change}>
          <Image alt="Menu" src={iconMenuh} />
        </div>
        <div>
          <Link href={'/'}>
            <Typography Tag="h1" apparentTag="h1" ornament>
              Gustavo Pereira
            </Typography>
          </Link>
        </div>
      </div>

      <div
        className={`absolute flex w-full flex-col items-start gap-5 bg-slate-900/95 pb-4 pl-16 transition-all ${
          visible ? 'left-0' : '-left-full'
        }`}
      >
        <Link href={'/aboutme'}>
          <Typography Tag="span" apparentTag="cardDifferencesTitle">
            Sobre mim
          </Typography>
        </Link>
        <Link href={'/formations'}>
          <Typography Tag="span" apparentTag="cardDifferencesTitle">
            Formações
          </Typography>
        </Link>
        <Link href={'/skills'}>
          <Typography Tag="span" apparentTag="cardDifferencesTitle">
            Habilidades
          </Typography>
        </Link>
        <Link href={'/projects'}>
          <Typography Tag="span" apparentTag="cardDifferencesTitle">
            Projetos
          </Typography>
        </Link>
        <Link href={'#'}>
          <Button large>Currículo</Button>
        </Link>
        <Link href={'#'}>
          <Button variant="primary" large>
            Contato
          </Button>
        </Link>
      </div>
      {/* )} */}
    </header>
  )
}
