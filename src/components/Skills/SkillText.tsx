import React from 'react'
import Typography from '../Typography'

interface ISkillText {
  title: string
  text: string
  link?: string
  linkText?: string
  text2?: string
}

export default function SkillText({
  title,
  text,
  link,
  linkText,
  text2,
}: ISkillText) {
  return (
    <>
      <Typography
        Tag="h3"
        apparentTag="subTitleCard"
        style={'text-primary-500'}
      >
        {title}
      </Typography>
      {/* texto do tópico */}
      <Typography Tag="p" apparentTag="p">
        {text}
        {link && (
          <a
            href={link}
            target="_blank"
            className="text-primary-500 transition-all hover:text-primary-200"
          >
            {linkText}
          </a>
        )}
        {text2 && text2}
      </Typography>
    </>
  )
}
