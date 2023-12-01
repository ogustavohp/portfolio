import React from 'react'
import Button from '../Button'
import db from '@/db/db.json'
import { Eye, Download } from 'lucide-react'
import Link from 'next/link'

interface ICurriculum {
  col?: boolean
}

export default function CurriculumLinks({ col = false }: ICurriculum) {
  return (
    <div
      className={`flex flex-wrap justify-center gap-3 ${
        col ? 'flex-col items-start ' : ''
      }`}
    >
      <Link href={'/cv.pdf'} prefetch={false} target="_blank">
        <Button hover>
          <span className="flex gap-2">
            <Eye className="self-center" />
            {db.aboutMe.cvOnline.text}
          </span>
        </Button>
      </Link>
      <Link
        href={'/cv.pdf'}
        prefetch={false}
        download={'CVGustavoHenrique'}
        target="_blank"
      >
        <Button variant="FillSecondary" hover>
          <span className="flex gap-2">
            <Download className="self-center" />
            {db.aboutMe.cvDownload.text}
          </span>
        </Button>
      </Link>
    </div>
  )
}
