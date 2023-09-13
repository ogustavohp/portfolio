import Typography from '@/components/Typography'
import OrnamentE from '@/components/Typography/OrnamentE'
import React from 'react'
import searchIcon from '@/assets/searchIcon.svg'
import Image from 'next/image'
import Button from '@/components/Button'

export default function Page() {
  return (
    <main className="mx-5 mt-8 flex flex-col items-center gap-7">
      <Typography Tag="h1" apparentTag="h1" ornament>
        Formações <OrnamentE /> Certificados
      </Typography>
      {/* input search */}
      <div className="mt-3 flex w-full items-center border-b border-iconcolor-400">
        <label
          htmlFor="search"
          className="sr-only mx-2 text-base text-primary-500"
        >
          Busca
        </label>
        <input
          type="text"
          id="search"
          placeholder="Busque por tecnologia (Ex.: HTML, CSS, Next.js)"
          className="w-full  bg-transparent px-2 py-1 text-base text-white placeholder:text-iconcolor-400"
        />
        <Image alt="icone de uma lupa" src={searchIcon} className="" />
      </div>
      {/* Front-end */}
      <section>
        {/* Front-end */}
        <div className="flex flex-col gap-7">
          <div className="text-center">
            <Typography Tag="h2" apparentTag="h1" botBorder>
              Front-end
            </Typography>
          </div>
          {/* Cursos */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Front-end */}
      <section>
        {/* Front-end */}
        <div className="flex flex-col gap-7">
          <div className="text-center">
            <Typography Tag="h2" apparentTag="h1" botBorder>
              Front-end
            </Typography>
          </div>
          {/* Cursos */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Front-end */}
      <section>
        {/* Front-end */}
        <div className="flex flex-col gap-7">
          <div className="text-center">
            <Typography Tag="h2" apparentTag="h1" botBorder>
              Front-end
            </Typography>
          </div>
          {/* Cursos */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Front-end */}
      <section>
        {/* Front-end */}
        <div className="flex flex-col gap-7">
          <div className="text-center">
            <Typography Tag="h2" apparentTag="h1" botBorder>
              Front-end
            </Typography>
          </div>
          {/* Cursos */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Front-end */}
      <section>
        {/* Front-end */}
        <div className="flex flex-col gap-7">
          <div className="text-center">
            <Typography Tag="h2" apparentTag="h1" botBorder>
              Front-end
            </Typography>
          </div>
          {/* Cursos */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
            {/* Curso */}
            <div className="flex max-w-[23.75rem] flex-col items-start gap-2">
              {/* titulo */}
              <div className="rounded-full border border-iconcolor-400 px-4 py-1">
                <Typography Tag="h3" apparentTag="p">
                  HTML e CSS: praticando HTML/CSS
                </Typography>
              </div>
              {/* licenciado */}
              <div className="">
                <Typography
                  Tag="span"
                  apparentTag="p"
                  style={'text-primary-500 font-bold'}
                >
                  Lecionado por <a href="#">Alura</a>
                </Typography>
              </div>
              {/* Lista de tópicos */}
              <ul className="ml-5 list-outside list-disc text-white">
                <li>Construa um site utilizando HTML e CSS</li>
                <li>Identifique elementos e estilos através do Figma</li>
                <li>
                  Aplique seus conhecimentos adquiridos até agora em um projeto
                  real
                </li>
                <li>Crie um repositório para armazenar o código do projeto</li>
                <li>
                  Realize o deploy de um site através do Github Pages ou Vercel
                </li>
                <li>Compartilhe o seu projeto com o mundo</li>
              </ul>
              {/* Certificado */}
              <div className="flex">
                <Button variant="FillSecondary">Certificado</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
