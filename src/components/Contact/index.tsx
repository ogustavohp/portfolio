import React from 'react'
import Typography from '../Typography'
import Image from 'next/image'
import iconTel from '@/assets/tel.svg'
import iconEmail from '@/assets/emailIcon.svg'
import Button from '../Button'
import iconEye from '@/assets/eye.svg'
import iconDownload from '@/assets/download.svg'
import iconLinkedIn from '@/assets/linkedinIcon.svg'
import iconGitHub from '@/assets/githubIcon.svg'

export default function Contact() {
  return (
    <section className="flex flex-col gap-3">
      {/* title */}
      <div className="mb-7 self-center">
        <Typography Tag="h2" apparentTag="h1" ornament>
          Contato
        </Typography>
      </div>

      {/* input name */}
      <div className="flex w-full flex-col items-start">
        <label htmlFor="name" className="ml-2 text-base text-primary-500">
          Nome
        </label>
        <input
          type="text"
          id="name"
          placeholder="Seu nome"
          className="w-full border-b border-iconcolor-400 bg-transparent px-2 py-1 text-base text-white placeholder:text-iconcolor-400"
        />
      </div>

      {/* input email */}
      <div className="mt-3 flex w-full flex-col items-start">
        <label htmlFor="email" className="mx-2 text-base text-primary-500">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          placeholder="email@exemplo.com"
          className="w-full border-b border-iconcolor-400 bg-transparent px-2 py-1 text-base text-white placeholder:text-iconcolor-400"
        />
      </div>

      {/* textarea */}
      <div className="mt-3 flex w-full flex-col items-start">
        <label htmlFor="mensagem" className="mx-2 text-base text-primary-500">
          Mensagem
        </label>
        <textarea
          name="mensagem"
          id="mensagem"
          placeholder="Digite o seu texto"
          className="h-60 w-full resize-none border border-iconcolor-400 bg-transparent px-2 py-1 text-base text-white placeholder:text-iconcolor-400"
        />
      </div>

      {/* Telefone */}
      <div className="ml-5 flex gap-2">
        <Image alt="icone de um telefone" src={iconTel} />
        <Typography Tag="span" apparentTag="contact">
          +55 (11) 93333-3333
        </Typography>
      </div>

      {/* email */}
      <div className="ml-5 flex gap-2">
        <Image alt="icone de uma carta" src={iconEmail} />
        <Typography Tag="span" apparentTag="contact">
          email@gmail.com
        </Typography>
      </div>

      {/* buttons */}
      <div className="ml-5 mt-7 flex flex-col items-start gap-4">
        <Button variant="primary">Ver todos os projetos</Button>
        <Button icon={iconEye} variant="FillPrimary">
          Ver Currículo Online
        </Button>
        <Button icon={iconDownload} variant="FillSecondary">
          Baixar Currículo
        </Button>
      </div>

      {/* Me encontre em */}
      <div className="flex flex-col items-center">
        <Typography Tag="h2" apparentTag="h1" ornament>
          Me encontre em:
        </Typography>
        <div className="my-5 flex items-center gap-3">
          <a href="#" target="_blank">
            <Image alt="icone do LinkedIn" src={iconLinkedIn} />
          </a>
          <a href="#" target="_blank">
            <Image alt="icone do GitHub" src={iconGitHub} />
          </a>
        </div>
      </div>
    </section>
  )
}
