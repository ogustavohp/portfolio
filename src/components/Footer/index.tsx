import React from 'react'
import Typography from '../Typography'
import Image from 'next/image'
import iconTel from '@/assets/tel.svg'
import iconEmail from '@/assets/emailIcon.svg'
import Button from '../Button'
import iconLinkedIn from '@/assets/linkedinIcon.svg'
import iconGitHub from '@/assets/githubIcon.svg'
import db from '@/db/db.json'
import CurriculumLinks from '../AboutMe/CurriculumLinks'

const contact = db.contact
const findMeOn = db.findMeOn

export default function Footer() {
  return (
    <footer
      className="mx-5 mt-10 flex flex-wrap justify-center gap-x-20 gap-y-3"
      id="contact"
    >
      {/* title */}
      <div className="mb-7 flex w-full justify-center">
        <Typography Tag="h2" apparentTag="h1" ornament botBorder>
          {contact.title}
        </Typography>
      </div>

      {/* Inputs */}
      <div className="flex w-full flex-col md:w-1/2">
        {/* input name */}
        <div className="flex w-full flex-col items-start">
          <label htmlFor="name" className="ml-2 text-base text-primary-500">
            {contact.name}
          </label>
          <input
            type="text"
            id="name"
            placeholder={contact.namePlaceholder}
            className="w-full border-b border-iconcolor-400 bg-transparent px-2 py-1 text-base text-white placeholder:text-iconcolor-400"
          />
        </div>

        {/* input email */}
        <div className="mt-3 flex w-full flex-col items-start">
          <label htmlFor="email" className="mx-2 text-base text-primary-500">
            {contact.email}
          </label>
          <input
            type="email"
            id="email"
            placeholder={contact.emailPlaceholder}
            className="w-full border-b border-iconcolor-400 bg-transparent px-2 py-1 text-base text-white placeholder:text-iconcolor-400"
          />
        </div>

        {/* textarea */}
        <div className="mt-3 flex w-full flex-col items-start">
          <label htmlFor="mensagem" className="mx-2 text-base text-primary-500">
            {contact.message}
          </label>
          <textarea
            name="mensagem"
            id="mensagem"
            placeholder={contact.messagePlaceHolder}
            className="h-60 w-full resize-none border border-iconcolor-400 bg-transparent px-2 py-1 text-base text-white placeholder:text-iconcolor-400"
          />
        </div>
      </div>

      {/* tel / email */}
      <div className="flex flex-col items-start justify-center">
        {/* Telefone */}
        <div className="ml-5 mt-5 flex gap-2">
          <Image alt="ícone de um telefone" src={iconTel} />
          <Typography Tag="span" apparentTag="contact">
            +55 (11) 93333-3333
          </Typography>
        </div>

        {/* email */}
        <div className="ml-5 flex gap-2">
          <Image alt="ícone de uma carta" src={iconEmail} />
          <Typography Tag="span" apparentTag="contact">
            email@gmail.com
          </Typography>
        </div>
        <div className="ml-5 mt-7 flex flex-col items-start gap-4">
          <Button variant="primary">{contact.seeAllProjects}</Button>
          <CurriculumLinks col />
        </div>
      </div>

      {/* Me encontre em */}
      <div className="mt-7 flex w-full flex-col items-center">
        <Typography Tag="h2" apparentTag="h1" ornament>
          {findMeOn.title}
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
    </footer>
  )
}
