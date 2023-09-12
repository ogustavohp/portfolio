import React, { ReactNode } from 'react'
import Typography from '../Typography'

interface IWhatIDoCard {
  title: string
  children: ReactNode
}

export default function WhatIDoCard({ title, children }: IWhatIDoCard) {
  return (
    <div className="w-64 text-center">
      <Typography Tag="h3" apparentTag="h2" style={'text-primary-500 mt-5'}>
        {title}
      </Typography>
      <Typography Tag="p" apparentTag="p">
        {children}
      </Typography>
    </div>
  )
}
