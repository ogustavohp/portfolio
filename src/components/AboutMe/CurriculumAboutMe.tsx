import React from 'react'
import Button from '../Button'
import eye from '@/assets/eye.svg'
import download from '@/assets/download.svg'

export default function CurriculumAboutMe() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button icon={eye}>Ver Curriculo Online</Button>
      <Button icon={download} secondaryColor>
        Baixar Curriculo
      </Button>
    </div>
  )
}
