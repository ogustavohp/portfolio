import React from 'react'
import Typography from '../Typography'

interface ITag {
  skillName: string
}

export default function Tag({ skillName }: ITag) {
  const colorVariants = {
    HTML5: 'bg-orange-600',
    CSS3: 'bg-purple-500',
    Sass: 'bg-pink-400',
    JavaScript: 'bg-yellow-500',
    TypeScript: 'bg-indigo-500',
    React: 'bg-blue-400',
    'Next.js': 'bg-gray-400',
    'Tailwind CSS': 'bg-teal-300',
    GraphQL: 'bg-pink-500',
    'Node.js': 'bg-green-500',
    Fastify: 'bg-red-500', //
    Express: 'bg-gray-500',
    Prisma: 'bg-teal-500',
    Git: 'bg-white', //
    'React Native': 'bg-blue-400',
    Expo: 'bg-slate-400',
    ESLint: 'bg-indigo-700',
    Prettier: 'bg-cyan-700',
    Docker: 'bg-sky-500',
  }

  if (
    skillName === 'HTML5' ||
    skillName === 'CSS3' ||
    skillName === 'Sass' ||
    skillName === 'JavaScript' ||
    skillName === 'TypeScript' ||
    skillName === 'React' ||
    skillName === 'Next.js' ||
    skillName === 'Tailwind CSS' ||
    skillName === 'GraphQL' ||
    skillName === 'Node.js' ||
    skillName === 'Fastify' ||
    skillName === 'Express' ||
    skillName === 'Prisma' ||
    skillName === 'Git' ||
    skillName === 'React Native' ||
    skillName === 'Expo' ||
    skillName === 'ESLint' ||
    skillName === 'Prettier' ||
    skillName === 'Docker'
  ) {
    return (
      <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
        <div className={`h-2 w-2 rounded-full ${colorVariants[skillName]}`} />
        <Typography Tag="p" apparentTag="skillName">
          {skillName}
        </Typography>
      </div>
    )
  } else {
    throw new Error(
      `tag não aceita ${skillName} como valor em Tag @/components/SkillsAndTechnologies/Tag.tsx. O Erro veio de @/db/db.json da parte de skillsAndTechnologiesList.technologies.skillName`,
    )
  }
}
