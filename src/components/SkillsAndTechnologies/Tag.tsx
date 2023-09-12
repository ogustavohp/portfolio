import React from 'react'
import Typography from '../Typography'

interface ITag {
  skillName:
    | 'HTML5'
    | 'CSS3'
    | 'Sass'
    | 'JavaScript'
    | 'TypeScript'
    | 'React'
    | 'Next.js'
    | 'Tailwind CSS'
    | 'GraphQL'
    | 'Node.js'
    | 'Fastify'
    | 'Express'
    | 'Prisma'
    | 'Git'
    | 'React Native'
    | 'Expo'
    | 'ESLint'
    | 'Prettier'
}

export default function Tag({ skillName }: ITag) {
  const colorVariants = {
    HTML5: 'bg-red-500',
    CSS3: 'bg-purple-500',
    Sass: 'bg-pink-500',
    JavaScript: 'bg-yellow-500',
    TypeScript: 'bg-blue-700',
    React: 'bg-blue-300',
    'Next.js': 'bg-purple-500',
    'Tailwind CSS': 'bg-purple-500',
    GraphQL: 'bg-purple-500',
    'Node.js': 'bg-purple-500',
    Fastify: 'bg-purple-500',
    Express: 'bg-purple-500',
    Prisma: 'bg-purple-500',
    Git: 'bg-purple-500',
    'React Native': 'bg-purple-500',
    Expo: 'bg-purple-500',
    ESLint: 'bg-purple-500',
    Prettier: 'bg-purple-500',
  }
  return (
    <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
      <div className={`h-2 w-2 rounded-full ${colorVariants[skillName]}`} />
      <Typography Tag="p" apparentTag="skillName">
        {skillName}
      </Typography>
    </div>
  )
}
