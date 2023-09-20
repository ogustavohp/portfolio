'use client'
import React, { useState } from 'react'
import Typography from '../Typography'
import Image from 'next/image'
import iconMenuh from '@/assets/menuh.svg'
import Link from 'next/link'
import Button from '../Button'
import db from '@/db/db.json'

const menu = db.menu

export default function Menu() {
  const [visible, setVisible] = useState<boolean>(false)
  function change() {
    setVisible(!visible)
  }
  return (
    <header>
      {/* parte superior */}
      <div className="m-4 flex flex-wrap items-center justify-between gap-5 md:justify-center lg:justify-between">
        <div className=" md:hidden" onClick={change}>
          <Image alt="Menu" src={iconMenuh} />
        </div>
        <div>
          <Link href={'/'}>
            <Typography Tag="h1" apparentTag="h1" ornament>
              Gustavo Pereira
            </Typography>
          </Link>
        </div>
        <div
          className={`absolute z-50 flex w-full flex-col items-start gap-5 bg-slate-900/95 pb-4 pl-16 transition-all ${
            visible ? 'left-0 top-16' : '-left-full'
          } md:static md:w-auto md:flex-row md:items-center md:justify-center md:bg-transparent md:pb-0 md:pl-0`}
        >
          <Link href={'/aboutme'} className="pt-4 md:pt-0" onClick={change}>
            <Typography Tag="span" apparentTag="cardDifferencesTitle">
              {menu.aboutMe}
            </Typography>
          </Link>
          <Link href={'/formations'} onClick={change}>
            <Typography Tag="span" apparentTag="cardDifferencesTitle">
              {menu.formations}
            </Typography>
          </Link>
          <Link href={'/skills'} onClick={change}>
            <Typography Tag="span" apparentTag="cardDifferencesTitle">
              {menu.skills}
            </Typography>
          </Link>
          <Link href={'/projects'} onClick={change}>
            <Typography Tag="span" apparentTag="cardDifferencesTitle">
              {menu.projects}
            </Typography>
          </Link>
          <Link href={'#'} onClick={change}>
            <Button large variant="FillSecondary">
              {menu.cv}
            </Button>
          </Link>
          <Link href={'#contact'} onClick={change}>
            <Button variant="primary" large>
              {menu.contact}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
