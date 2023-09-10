import React, { ReactNode } from 'react'
import OrnamentTag from './OrnamentTag'

interface ITypography {
  children: ReactNode
  Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  aparentTag:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p'
    | 'subTitleCard'
    | 'skillName'
    | 'cardDifferencesTitle'
  ornament?: boolean
  style?: string | null
}

export default function Typography({
  children,
  aparentTag,
  Tag,
  ornament = false,
  style = null,
}: ITypography) {
  const tagStyle = {
    h1: 'text-2xl font-bold',
    h2: 'text-xl font-bold',
    h3: '',
    h4: '',
    p: 'leading-relaxed',
    subTitleCard: 'font-bold leading-relaxed',
    skillName: 'text-sm',
    cardDifferencesTitle: 'text-xl',
  }
  if (ornament) {
    return (
      <OrnamentTag>
        <Tag
          className={`${tagStyle[aparentTag]} inline-block ${
            style || 'text-white'
          }`}
        >
          {children}
        </Tag>
      </OrnamentTag>
    )
  }

  return (
    <Tag
      className={`${tagStyle[aparentTag]} inline-block ${
        style || 'text-white'
      }`}
    >
      {children}
    </Tag>
  )
}
