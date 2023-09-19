import React from 'react'
import Typography from '../Typography'

interface ITag {
  skillName: string
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
    skillName === 'Prettier'
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
