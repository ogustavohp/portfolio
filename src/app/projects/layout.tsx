import type { Metadata } from 'next'

import React from 'react'

export const metadata: Metadata = {
  title: 'Gustavo Pereira | Projetos',
  description: 'ogustavohp portfólio pagina de projetos',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
