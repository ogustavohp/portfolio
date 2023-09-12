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
          <Typography Tag="h1" apparentTag="h1" ornament>
            Gustavo Pereira
          </Typography>
        </div>
      </div>
      {/* Parte inferior */}
      {/* {visible && ( */}
      <div
        className={`absolute flex w-full flex-col items-start gap-5 bg-slate-900/95 pb-4 pl-16 transition-all ${
          visible ? 'left-0' : '-left-full'
        }`}
      >
        <Link href={'#'}>
          <Typography Tag="span" apparentTag="cardDifferencesTitle">
            Sobre mim
          </Typography>
        </Link>
        <Link href={'#'}>
          <Typography Tag="span" apparentTag="cardDifferencesTitle">
            Formações
          </Typography>
        </Link>
        <Link href={'#'}>
          <Typography Tag="span" apparentTag="cardDifferencesTitle">
            Habilidades
          </Typography>
        </Link>
        <Link href={'#'}>
          <Typography Tag="span" apparentTag="cardDifferencesTitle">
            Projetos
          </Typography>
        </Link>
        <Button large>Currículo</Button>
        <Button variant="primary" large>
          Contato
        </Button>
      </div>
      {/* )} */}
    </header>
  )
}
