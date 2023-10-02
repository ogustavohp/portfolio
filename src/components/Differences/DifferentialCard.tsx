import React, { ReactNode } from 'react'
import Typography from '../Typography'
import DifferentialIcon from './DifferentialIcon'

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
  return (
    <div className="flex w-60 flex-col items-center gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-2 pb-3 pt-2">
      <DifferentialIcon icon={icon} />

      <div className="text-center">
        <Typography
          Tag="h3"
          apparentTag="cardDifferencesTitle"
          style={'text-primary-500'}
        >
          {title}
        </Typography>
        <span className="hyphens-auto">
          <Typography Tag="p" apparentTag="p">
            {children}
          </Typography>
        </span>
      </div>
    </div>
  )
}
