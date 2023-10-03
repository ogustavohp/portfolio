import React from 'react'
import Typography from '../Typography'

interface ISkillText {
  title: string
  text: string
}

export default function SkillText({ title, text }: ISkillText) {
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
      </Typography>
    </>
  )
}
