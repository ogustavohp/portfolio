import React, { ReactNode } from 'react'
import Typography from '../Typography'
import Image from 'next/image'

interface IButton {
  icon?: string
  children: ReactNode
  variant?: 'FillPrimary' | 'FillSecondary' | 'primary' | 'secondary'
}

export default function Button({
  icon,
  children,
  variant = 'FillPrimary',
}: IButton) {
  const colorVariants = {
    FillPrimary: 'bg-secondary-500',
    FillSecondary: 'bg-bluebutton-500',
    primary: 'border border-secondary-500',
    secondary: 'border border-bluebutton-500',
  }

  return (
    <div
      className={`flex gap-2 rounded-full ${colorVariants[variant]} px-4 py-1`}
    >
      {icon && <Image alt="icone de um olho" src={icon} />}
      <Typography
        Tag="p"
        apparentTag="p"
        style={
          variant === 'FillPrimary' || variant === 'FillSecondary'
            ? 'text-bgcolor-900'
            : ''
        }
      >
        {children}
      </Typography>
    </div>
  )
}
