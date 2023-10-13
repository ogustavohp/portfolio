import type { Metadata } from 'next'

import React from 'react'

export const metadata: Metadata = {
  title: 'Gustavo Pereira | Sobre mim',
  description: 'ogustavohp portfólio pagina sobre mim',
}

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
