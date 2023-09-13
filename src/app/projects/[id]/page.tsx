import React from 'react'
import bannerTimeVault from '@/assets/banner timevault.png'
import Image from 'next/image'
import Typography from '@/components/Typography'
import Tag from '@/components/SkillsAndTechnologies/Tag'
import Button from '@/components/Button'

interface ParamsType {
  id: string
}

export default function Page({ params }: { params: ParamsType }) {
  return (
    <main className="flex flex-col gap-4">
      {/* Imagem */}
      <div className="relative">
        <Image
          alt="Banner do projeto"
          src={bannerTimeVault}
          className="w-full"
        />
        <div className="absolute inset-0">
          <div className="h-1/2" />
          <div className="h-1/2 bg-gradient-to-t from-inherit" />
        </div>
      </div>

      {/*  */}
      <div>
        <Typography Tag="h1" apparentTag="h1" ornament>
          Time Vault
        </Typography>
      </div>
      {/* Tags */}
      <div className="flex">
        <Tag skillName="HTML5" />
        <Tag skillName="CSS3" />
        <Tag skillName="Sass" />
      </div>
      {/* buttons e pseudo buttons */}
      <div>
        <Button variant="primary">Projeto Pessoal</Button>
      </div>
    </main>
  )
}
