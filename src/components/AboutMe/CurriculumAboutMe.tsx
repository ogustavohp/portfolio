import React from 'react'
import Button from '../Button'
import eye from '@/assets/eye.svg'
import download from '@/assets/download.svg'

export default function CurriculumAboutMe() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Button icon={eye}>Ver Currículo Online</Button>
      <Button icon={download} variant="FillSecondary">
        Baixar Currículo
      </Button>
    </div>
  )
}
