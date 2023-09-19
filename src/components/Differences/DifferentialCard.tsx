import React, { ReactNode } from 'react'
import Typography from '../Typography'
import Image from 'next/image'
import iconTag from '@/assets/tag.svg'

interface IDifferentialCard {
  title: string
  icon: string
  children: ReactNode
}

export default function DifferentialCard({
  title,
  icon,
  children,
}: IDifferentialCard) {
  if (icon === 'iconTag') {
    const icons = {
      iconTag,
    }

    return (
      <div className="flex w-60 flex-col items-center gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-2 pb-3 pt-2">
        <Image alt="Icone </>" src={icons[icon]} />
        <div className="text-center">
          <Typography
            Tag="h3"
            apparentTag="cardDifferencesTitle"
            style={'text-primary-500'}
          >
            {title}
          </Typography>
          <Typography Tag="p" apparentTag="p">
            {children}
          </Typography>
        </div>
      </div>
    )
  } else {
    throw new Error(
      `Ícone não aceito em DifferentialCard @/components/differences/DifferentialCard.tsx o ícone veio de @/db/db.json differences.differencesList>icon`,
    )
  }
}
