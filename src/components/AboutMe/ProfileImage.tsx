import React from 'react'
import { Camera } from 'lucide-react'
import colors from '@/db/colors.json'

export default function ProfileImage() {
  return (
    <div className="mb-2 flex h-52 w-52 items-center justify-center rounded-full border border-primary-500 bg-iconcolor-700 lg:h-72 lg:w-72">
      <Camera color={colors.othersIconColors[1]} size={100} strokeWidth={1.5} />
    </div>
  )
}
