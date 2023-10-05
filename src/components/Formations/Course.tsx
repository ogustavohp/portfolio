import React from 'react'
import Button from '../Button'
import Typography from '../Typography'

interface CourseProps {
  tags: string[]
  courseTitle: string
  courseLicensed: string
  licensedLink: string
  certificateLink: string
  courseLink: string
  courseTopics: {
    id: string
    courseTopic: string
  }[]
}

export default function Course({
  tags,
  courseTitle,
  courseLicensed,
  licensedLink,
  certificateLink,
  courseLink,
  courseTopics,
}: CourseProps) {
  console.log(tags)
  return (
    <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
      {/* titulo */}
      <div className="rounded-full border border-iconcolor-400 px-4 py-1">
        <a href={courseLink} target="_blank">
          <Typography Tag="h3" apparentTag="p">
            {courseTitle}
          </Typography>
        </a>
      </div>

      {/* licenciado */}
      <div className="">
        <Typography
          Tag="span"
          apparentTag="p"
          style={'text-primary-500 font-bold'}
        >
          Lecionado por{' '}
          <a href={licensedLink} target="_blank">
            {courseLicensed}
          </a>
        </Typography>
      </div>

      {/* Lista de tópicos */}
      <ul className="ml-5 list-outside list-disc text-white">
        {courseTopics.map((e) => (
          <li key={e.id}>{e.courseTopic}</li>
        ))}
      </ul>

      {/* Certificado */}
      <div className="flex">
        <a href={certificateLink} target="_blank">
          <Button variant="FillSecondary">Certificado</Button>
        </a>
      </div>
    </div>
  )
}
