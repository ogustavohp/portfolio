import React from 'react'
import Typography from '../Typography'
import { MessageCircle, BookOpenCheck } from 'lucide-react'

interface IHighlightCard {
  icon?: 'book' | 'balloons'
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
      {icon === 'book' && (
        <MessageCircle className="self-center" color="#fff" size={50} />
      )}
      {icon === 'balloons' && (
        <BookOpenCheck className="self-center" color="#fff" size={50} />
      )}
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
