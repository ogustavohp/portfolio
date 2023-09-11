import React from 'react'
import Typography from '../Typography'
import OrnamentE from '../Typography/OrnamentE'
import TechnologieCard from './TechnologieCard'
import { ITag } from '@/lib/tag'

export default function SkillsAndTechnologies() {
  const TagList: ITag[] = [
    {
      skillName: 'HTML5',
    },
    {
      skillName: 'CSS3',
    },
    {
      skillName: 'Sass',
    },
    {
      skillName: 'JavaScript',
    },
    {
      skillName: 'TypeScript',
    },
    {
      skillName: 'React',
    },
  ]
  return (
    <section className="flex flex-col items-center gap-3">
      <Typography Tag="h2" aparentTag="h2" ornament>
        Habilidades <OrnamentE /> Tecnologias
      </Typography>
      {/* Card */}
      <TechnologieCard title="AAA" list={TagList} />
      {/* Card */}
      <div className="flex min-h-[16rem] w-60 flex-col gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-3 py-6">
        <div className="text-center">
          <Typography Tag="h3" aparentTag="subTitleCard">
            Linguagens e Frameworks Front-end
          </Typography>
        </div>
        {/* skills */}
        <div className="justify flex flex-wrap gap-x-1 gap-y-2">
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <Typography Tag="p" aparentTag="skillName">
              HTML5
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-purple-500" />
            <Typography Tag="p" aparentTag="skillName">
              CSS3
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-pink-500" />
            <Typography Tag="p" aparentTag="skillName">
              Sass
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <Typography Tag="p" aparentTag="skillName">
              JavaScript
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-blue-700" />
            <Typography Tag="p" aparentTag="skillName">
              TypeScript
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-blue-300" />
            <Typography Tag="p" aparentTag="skillName">
              React
            </Typography>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="flex min-h-[16rem] w-60 flex-col gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-3 py-6">
        <div className="text-center">
          <Typography Tag="h3" aparentTag="subTitleCard">
            Linguagens e Frameworks Front-end
          </Typography>
        </div>
        {/* skills */}
        <div className="justify flex flex-wrap gap-x-1 gap-y-2">
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <Typography Tag="p" aparentTag="skillName">
              HTML5
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-purple-500" />
            <Typography Tag="p" aparentTag="skillName">
              CSS3
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-pink-500" />
            <Typography Tag="p" aparentTag="skillName">
              Sass
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <Typography Tag="p" aparentTag="skillName">
              JavaScript
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-blue-700" />
            <Typography Tag="p" aparentTag="skillName">
              TypeScript
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-blue-300" />
            <Typography Tag="p" aparentTag="skillName">
              React
            </Typography>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="flex min-h-[16rem] w-60 flex-col gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-3 py-6">
        <div className="text-center">
          <Typography Tag="h3" aparentTag="subTitleCard">
            Linguagens e Frameworks Front-end
          </Typography>
        </div>
        {/* skills */}
        <div className="justify flex flex-wrap gap-x-1 gap-y-2">
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <Typography Tag="p" aparentTag="skillName">
              HTML5
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-purple-500" />
            <Typography Tag="p" aparentTag="skillName">
              CSS3
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-pink-500" />
            <Typography Tag="p" aparentTag="skillName">
              Sass
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <Typography Tag="p" aparentTag="skillName">
              JavaScript
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-blue-700" />
            <Typography Tag="p" aparentTag="skillName">
              TypeScript
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-blue-300" />
            <Typography Tag="p" aparentTag="skillName">
              React
            </Typography>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="flex min-h-[16rem] w-60 flex-col gap-3 rounded-xl border border-iconcolor-500 bg-gradient-to-b from-slate-900 to-bgcolor-500 px-3 py-6">
        <div className="text-center">
          <Typography Tag="h3" aparentTag="subTitleCard">
            Linguagens e Frameworks Front-end
          </Typography>
        </div>
        {/* skills */}
        <div className="justify flex flex-wrap gap-x-1 gap-y-2">
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <Typography Tag="p" aparentTag="skillName">
              HTML5
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-purple-500" />
            <Typography Tag="p" aparentTag="skillName">
              CSS3
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-pink-500" />
            <Typography Tag="p" aparentTag="skillName">
              Sass
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <Typography Tag="p" aparentTag="skillName">
              JavaScript
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-blue-700" />
            <Typography Tag="p" aparentTag="skillName">
              TypeScript
            </Typography>
          </div>
          {/* skill */}
          <div className="flex items-center gap-2 rounded-3xl border border-iconcolor-500 bg-slate-900 px-4 py-1">
            <div className="h-2 w-2 rounded-full bg-blue-300" />
            <Typography Tag="p" aparentTag="skillName">
              React
            </Typography>
          </div>
        </div>
      </div>
    </section>
  )
}
