import React from 'react'
import Button from '../Button'
import eye from '@/assets/eye.svg'
import download from '@/assets/download.svg'
import db from '@/db/db.json'

export default function CurriculumAboutMe() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Button icon={eye}>{db.aboutMe.cvOnline.text}</Button>
      <Button icon={download} variant="FillSecondary">
        {db.aboutMe.cvDownload.text}
      </Button>
    </div>
  )
}
