import type { Metadata } from 'next'

import React from 'react'

export const metadata: Metadata = {
  title: 'Gustavo Henrique | Formações',
  description: 'ogustavohp portfólio pagina de formações e cursos realizados',
}

export default function FormationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
