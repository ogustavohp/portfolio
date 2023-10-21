import Image from 'next/image'
import React from 'react'
import errorIcon from '@/assets/404icon.svg'
import Button from '@/components/Button'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="mx-5 mt-10 flex flex-wrap justify-center gap-10">
      <Image alt="Ícone de um computador com um emoji triste" src={errorIcon} />
      <div className="flex flex-col gap-5">
        <span className="text-8xl font-bold text-primary-500">404</span>
        <p className="text-2xl text-white">
          Ops! Parece que não tem nada aqui!
        </p>
        <p className="text-base text-white">
          Navegue pelos links do nosso menu ou entre em contato para
          conversarmos!
        </p>
        <Link href={'/'} className="self-start">
          <Button variant="FillSecondary" large hover>
            Voltar para o início
          </Button>
        </Link>
      </div>
    </main>
  )
}
