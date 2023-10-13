import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Gustavo Pereira | Projeto',
  description: 'ogustavohp portfólio pagina do projeto',
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
