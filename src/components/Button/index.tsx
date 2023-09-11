import React, { ReactNode } from 'react'
import Typography from '../Typography'
import Image from 'next/image'

interface IButton {
  icon?: string
  children: ReactNode
  secondaryColor?: boolean
  noFill?: boolean
}

export default function Button({
  icon,
  children,
  secondaryColor = false,
  noFill = false,
}: IButton) {
  let color: string = 'secondary-500'
  if (secondaryColor) {
    color = 'bluebutton-500'
  }
  let style: string = `bg-${color}`
  if (noFill) {
    style = `border border-${color}`
  }

  return (
    <div className={`flex gap-2 rounded-full ${style} px-4 py-1`}>
      {icon && <Image alt="icone de um olho" src={icon} />}
      <Typography
        Tag="p"
        aparentTag="p"
        style={noFill ? '' : 'text-bgcolor-900'}
      >
        {children}
      </Typography>
    </div>
  )
}
