import React from 'react'
import Typography from '../Typography'
import Image from 'next/image'

interface IHighlightCard {
  icon?: string
  topText?: string
  bottomText: string
}

export default function HighlightCard({
  icon,
  topText,
  bottomText,
}: IHighlightCard) {
  return (
    <div className="flex gap-4 rounded-lg border border-iconcolor-400 p-2">
      {icon && <Image alt="icone de uma balão de conversa" src={icon} />}

      <div className="flex flex-col">
        {topText && (
          <span className="self-center">
            <Typography Tag="p" apparentTag="h1">
              {topText}
            </Typography>
          </span>
        )}
        <span className="self-center">
          <Typography Tag="p" apparentTag="p">
            {bottomText}
          </Typography>
        </span>
      </div>
    </div>
  )
}
