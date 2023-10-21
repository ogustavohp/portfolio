import React, { ReactNode } from 'react'

interface IButton {
  children: ReactNode
  variant?: 'FillPrimary' | 'FillSecondary' | 'primary' | 'secondary'
  large?: boolean
  hover?: boolean
}

export default function Button({
  children,
  variant = 'FillPrimary',
  large = false,
  hover = false,
}: IButton) {
  const colorVariants = {
    FillPrimary: 'bg-secondary-500',
    FillSecondary: 'bg-bluebutton-500',
    primary: 'border border-secondary-500',
    secondary: 'border border-bluebutton-500',
  }

  return (
    <div
      className={`flex gap-2 rounded-full ${colorVariants[variant]} ${
        large ? 'text-xl' : ''
      } ${
        hover && 'transition-all hover:bg-primary-500'
      } px-4 py-1 leading-relaxed
      ${
        variant === 'FillPrimary' || variant === 'FillSecondary'
          ? 'text-bgcolor-900'
          : ''
      } ${
        (hover && variant === 'primary') || (hover && variant === 'secondary')
          ? ' text-white transition-all hover:text-bgcolor-900'
          : ''
      }`}
    >
      {children}
    </div>
  )
}
