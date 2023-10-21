import React from 'react'
import Button from '../Button'
import Typography from '../Typography'
import Tag from '../SkillsAndTechnologies/Tag'

interface CourseProps {
  usedIn: string
  tags: {
    id: string
    tag: string
  }[]
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
  usedIn,
  tags,
  courseTitle,
  courseLicensed,
  licensedLink,
  certificateLink,
  courseLink,
  courseTopics,
}: CourseProps) {
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

      {/* Tags */}
      <div className="flex gap-2">
        {tags.map((e) => (
          <Tag key={e.id} skillName={e.tag} />
        ))}
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

      <p className="text-gray-400">
        Adquiri conhecimentos aplicáveis principalmente em: {usedIn}
      </p>

      {/* Certificado */}
      <div className="flex">
        <a href={certificateLink} target="_blank">
          <Button variant="FillSecondary" hover>
            Certificado
          </Button>
        </a>
      </div>
    </div>
  )
}
