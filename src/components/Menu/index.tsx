'use client'
import React, { useState } from 'react'
import Typography from '../Typography'
import Link from 'next/link'
import Button from '../Button'
import db from '@/db/db.json'
import { Menu as MenuHamburger } from 'lucide-react'
import colors from '@/db/colors.json'
import { usePathname } from 'next/navigation'

const menu = db.menu

export default function Menu() {
  const [visible, setVisible] = useState<boolean>(false)
  function change() {
    setVisible(!visible)
  }
  function disableMenuHamburger() {
    setVisible(false)
  }

  const pathName = usePathname()

  return (
    <header>
      {/* parte superior */}
      <div className="m-4 flex flex-wrap items-center justify-between gap-5 md:justify-center lg:justify-between">
        <div className=" md:hidden" onClick={change}>
          <MenuHamburger
            color={colors.primary[500]}
            strokeWidth={2.5}
            size={32}
          />
        </div>
        <div>
          <Link href={'/'} onClick={disableMenuHamburger}>
            <Typography
              Tag="h1"
              apparentTag="h1"
              ornament
              botBorder={pathName === '/'}
              style={'text-white hover:text-primary-500 transition-all'}
            >
              Gustavo Pereira
            </Typography>
          </Link>
        </div>
        <div
          className={`absolute top-16 z-50 flex w-full flex-col items-start gap-5 bg-slate-900/95 pb-4 pl-16 transition-all ${
            visible ? 'left-0' : '-left-full'
          } md:static md:w-auto md:flex-row md:items-center md:justify-center md:bg-transparent md:pb-0 md:pl-0`}
        >
          <Link href={'/aboutme'} onClick={disableMenuHamburger}>
            <Typography
              Tag="span"
              apparentTag="cardDifferencesTitle"
              botBorder={pathName === '/aboutme'}
              style={'text-white hover:text-primary-500 transition-all'}
            >
              {menu.aboutMe}
            </Typography>
          </Link>
          <Link href={'/formations'} onClick={disableMenuHamburger}>
            <Typography
              Tag="span"
              apparentTag="cardDifferencesTitle"
              botBorder={pathName === '/formations'}
              style={'text-white hover:text-primary-500 transition-all'}
            >
              {menu.formations}
            </Typography>
          </Link>
          <Link href={'/skills'} onClick={disableMenuHamburger}>
            <Typography
              Tag="span"
              apparentTag="cardDifferencesTitle"
              botBorder={pathName === '/skills'}
              style={'text-white hover:text-primary-500 transition-all'}
            >
              {menu.skills}
            </Typography>
          </Link>
          <Link href={'/projects'} onClick={disableMenuHamburger}>
            <Typography
              Tag="span"
              apparentTag="cardDifferencesTitle"
              botBorder={pathName === '/projects'}
              style={'text-white hover:text-primary-500 transition-all'}
            >
              {menu.projects}
            </Typography>
          </Link>
          <Link href={'#'} onClick={disableMenuHamburger}>
            <Button large variant="FillSecondary" hover>
              {menu.cv}
            </Button>
          </Link>
          <Link href={'#contact'} onClick={disableMenuHamburger}>
            <Button variant="primary" large hover>
              {menu.contact}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
