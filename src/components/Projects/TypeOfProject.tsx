import React from 'react'
import Typography from '../Typography'

interface ITypeOfProject {
  sideProject?: boolean
  inProgress?: boolean
}

export default function TypeOfProject({
  sideProject = false,
  inProgress = false,
}: ITypeOfProject) {
  return (
    <div className="mb-2 flex gap-2">
      <div className="rounded-3xl border border-iconcolor-500 bg-slate-900 px-3">
        <Typography Tag="span" apparentTag="skillName">
          {sideProject ? 'Side project' : 'Work'}
        </Typography>
      </div>
      <div
        className={`rounded-3xl border border-iconcolor-500 ${
          inProgress ? 'bg-yellow-200' : 'bg-secondary-500'
        } px-3`}
      >
        <Typography
          Tag="span"
          apparentTag="skillName"
          style={'text-bgcolor-900'}
        >
          {inProgress ? 'Em andamento' : 'Finalizado'}
        </Typography>
      </div>
    </div>
  )
}
