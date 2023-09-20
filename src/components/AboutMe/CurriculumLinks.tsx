import React from 'react'
import Button from '../Button'
import eye from '@/assets/eye.svg'
import download from '@/assets/download.svg'
import db from '@/db/db.json'

interface ICurriculum {
  col?: boolean
}

export default function CurriculumLinks({ col = false }: ICurriculum) {
  return (
    <div
      className={`flex flex-wrap justify-center gap-3 ${
        col ? 'flex-col items-start ' : ''
      }`}
    >
      <Button icon={eye}>{db.aboutMe.cvOnline.text}</Button>
      <Button icon={download} variant="FillSecondary">
        {db.aboutMe.cvDownload.text}
      </Button>
    </div>
  )
}
