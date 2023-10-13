import type { Metadata } from 'next'

import React from 'react'

export const metadata: Metadata = {
  title: 'Gustavo Pereira | Habilidades',
  description: 'ogustavohp portfólio pagina de habilidades e tecnologias',
}

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
