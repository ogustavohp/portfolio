import React from 'react'
import Typography from '../Typography'
import Tag from './Tag'
import { ITag } from '@/lib/tag'

interface ITechnologieCard {
  title: string
  list: ITag[]
}

export default function TechnologieCard({ title, list }: ITechnologieCard) {
  return (
    <div className="flex min-h-[16rem] w-60 flex-col gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-3 py-6">
      <div className="text-center">
        <Typography Tag="h3" aparentTag="subTitleCard">
          {title}
        </Typography>
      </div>

      <div className="justify flex flex-wrap gap-x-1 gap-y-2">
        {list.map((e) => (
          <Tag key={e.skillName} skillName={e.skillName} />
        ))}
      </div>
    </div>
  )
}
