import React from 'react'
import Typography from '../Typography'
import Button from '../Button'
import db from '@/db/db.json'
import CurriculumLinks from '../AboutMe/CurriculumLinks'
import { Phone, Mail, Linkedin, Github } from 'lucide-react'
import colors from '@/db/colors.json'
import Form from './Form'
import Link from 'next/link'

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

      {/* Form */}
      <Form />

      {/* tel / email */}
      <div className="flex flex-col items-start justify-center">
        {/* Telefone */}
        <div className="ml-5 mt-5 flex gap-2">
          <Phone color={colors.primary[500]} className="self-center" />
          <Typography Tag="span" apparentTag="contact">
            +55 (11) 93333-3333
          </Typography>
        </div>

        {/* email */}
        <div className="ml-5 flex gap-2">
          <Mail color={colors.primary[500]} className="self-center" />
          <Typography Tag="span" apparentTag="contact">
            email@gmail.com
          </Typography>
        </div>
        <div className="ml-5 mt-7 flex flex-col items-start gap-4">
          <Link href={'/projects'}>
            <Button variant="primary" hover>
              {contact.seeAllProjects}
            </Button>
          </Link>
          <CurriculumLinks col />
        </div>
      </div>

      {/* Me encontre em */}
      <div className="mt-7 flex w-full flex-col items-center">
        <Typography Tag="h2" apparentTag="h1" ornament>
          {findMeOn.title}
        </Typography>
        <div className="my-5 flex items-center gap-3">
          <a
            href="#"
            target="_blank"
            className="flex h-14 w-14 justify-center rounded-full bg-othersIconColors-1"
          >
            <Linkedin size={38} className="self-center" strokeWidth={1.5} />
          </a>
          <a
            href="#"
            target="_blank"
            className="flex h-14 w-14 justify-center rounded-full bg-othersIconColors-1"
          >
            <Github className="self-center" size={44} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  )
}
