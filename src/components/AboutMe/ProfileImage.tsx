import React from 'react'

import Image from 'next/image'
import me from '@/assets/me.png'

export default function ProfileImage() {
  return (
    <div className="mb-2 flex h-52 w-52 items-center justify-center rounded-full border border-primary-500 bg-iconcolor-700 lg:h-72 lg:w-72">
      <Image alt="Foto minha" src={me} className="rounded-full" />
    </div>
  )
}
