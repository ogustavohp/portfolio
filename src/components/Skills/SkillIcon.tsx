import React from 'react'
import Image from 'next/image'
import css3 from '@/assets/iconsTechnologies/css3.svg'
import docker from '@/assets/iconsTechnologies/docker.svg'
import eslint from '@/assets/iconsTechnologies/eslint.svg'
import expo from '@/assets/iconsTechnologies/expo.svg'
import fastify from '@/assets/iconsTechnologies/fastify.svg'
import express from '@/assets/iconsTechnologies/express.svg'
import git from '@/assets/iconsTechnologies/git.svg'
import github from '@/assets/iconsTechnologies/github.svg'
import graphql from '@/assets/iconsTechnologies/graphql.svg'
import html5 from '@/assets/iconsTechnologies/html5.svg'
import javascript from '@/assets/iconsTechnologies/javascript.svg'
import nextJs from '@/assets/iconsTechnologies/nextJs.svg'
import nodeJs from '@/assets/iconsTechnologies/nodeJs.svg'
import prettier from '@/assets/iconsTechnologies/prettier.svg'
import prisma from '@/assets/iconsTechnologies/prisma.svg'
import react from '@/assets/iconsTechnologies/react.svg'
import reactNative from '@/assets/iconsTechnologies/reactNative.svg'
import sass from '@/assets/iconsTechnologies/sass.svg'
import tailwind from '@/assets/iconsTechnologies/tailwind.svg'
import typescript from '@/assets/iconsTechnologies/typescript.svg'

interface ISkillIcon {
  icon: string
  title: string
}

export default function SkillIcon({ icon, title }: ISkillIcon) {
  return (
    <div className="flex items-center gap-3 rounded-full border px-6 py-2">
      {icon === 'css3' && <Image alt="x" src={css3} width={26} />}
      {icon === 'docker' && <Image alt="x" src={docker} width={26} />}
      {icon === 'eslint' && <Image alt="x" src={eslint} width={26} />}
      {icon === 'expo' && <Image alt="x" src={expo} width={26} />}
      {icon === 'fastify' && <Image alt="x" src={fastify} width={26} />}
      {icon === 'express' && <Image alt="x" src={express} width={26} />}
      {icon === 'git' && <Image alt="x" src={git} width={26} />}
      {icon === 'github' && <Image alt="x" src={github} width={26} />}
      {icon === 'graphql' && <Image alt="x" src={graphql} width={26} />}
      {icon === 'html5' && <Image alt="x" src={html5} width={26} />}
      {icon === 'javascript' && <Image alt="x" src={javascript} width={26} />}
      {icon === 'nextJs' && <Image alt="x" src={nextJs} width={26} />}
      {icon === 'nodeJs' && <Image alt="x" src={nodeJs} width={26} />}
      {icon === 'prettier' && <Image alt="x" src={prettier} width={26} />}
      {icon === 'prisma' && <Image alt="x" src={prisma} width={26} />}
      {icon === 'react' && <Image alt="x" src={react} width={26} />}
      {icon === 'reactNative' && <Image alt="x" src={reactNative} width={26} />}
      {icon === 'sass' && <Image alt="x" src={sass} width={26} />}
      {icon === 'tailwind' && <Image alt="x" src={tailwind} width={26} />}
      {icon === 'typescript' && <Image alt="x" src={typescript} width={26} />}

      <span className="text-base text-white">{title}</span>
    </div>
  )
}
