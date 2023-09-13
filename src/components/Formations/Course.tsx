import React from 'react'
import Button from '../Button'
import Typography from '../Typography'
import { ICourse } from '@/lib/course'

export default function Course({
  courseTitle,
  courseLicensed,
  courseTopics,
}: ICourse) {
  return (
    <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
      {/* titulo */}
      <div className="rounded-full border border-iconcolor-400 px-4 py-1">
        <Typography Tag="h3" apparentTag="p">
          {courseTitle}
        </Typography>
      </div>
      {/* licenciado */}
      <div className="">
        <Typography
          Tag="span"
          apparentTag="p"
          style={'text-primary-500 font-bold'}
        >
          Lecionado por <a href="#">{courseLicensed}</a>
        </Typography>
      </div>
      {/* Lista de tópicos */}
      <ul className="ml-5 list-outside list-disc text-white">
        {courseTopics.map((e) => (
          <li key={e.id}>{e.courseTopics}</li>
        ))}
      </ul>
      {/* Certificado */}
      <div className="flex">
        <Button variant="FillSecondary">Certificado</Button>
      </div>
    </div>
  )
}
