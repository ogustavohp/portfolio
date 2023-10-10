import AboutMeCardPage from '@/components/AboutMe/AboutMeCardPage'
import Typography from '@/components/Typography'
import React from 'react'
import db from '@/db/db.json'

const aboutMe = db.aboutMe.pageText

export default function Page() {
  return (
    <main className="mx-5 mt-28 flex flex-wrap items-center justify-center gap-4 md:justify-around">
      <div className="self-start lg:order-2">
        <AboutMeCardPage />
      </div>
      <div className="flex max-w-lg flex-col gap-4">
        {aboutMe.h1.map((e) => (
          <div key={e.id} className="space-y-4">
            <Typography Tag="h1" apparentTag="h1" ornament>
              {e.title}
            </Typography>
            {e.text.map((e) => (
              <Typography key={e} Tag="p" apparentTag="p">
                {e}
              </Typography>
            ))}
          </div>
        ))}
        {aboutMe.h2.map((e) => (
          <div key={e.id} className="space-y-4">
            <Typography Tag="h2" apparentTag="h1" ornament>
              {e.title}
            </Typography>
            {e.text.map((e) => (
              <Typography key={e} Tag="p" apparentTag="p">
                {e}
              </Typography>
            ))}
          </div>
        ))}
        {aboutMe.h3.map((e) => (
          <div key={e.id} className="space-y-4">
            <Typography Tag="h3" apparentTag="h1" ornament>
              {e.title}
            </Typography>
            {e.text.map((e) => (
              <Typography key={e} Tag="p" apparentTag="p">
                {e}
              </Typography>
            ))}
            {e.skills.map((e) => (
              <div key={e.title} className="space-y-1">
                <Typography Tag="span" apparentTag="p" botBorder>
                  {e.title}
                </Typography>
                {e.skill.map((e) => (
                  <p key={e.name} className="text-white">
                    <span className="font-bold text-primary-500">
                      {e.name}:{' '}
                    </span>
                    {e.description}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}
        {aboutMe.h4.map((e) => (
          <div key={e.id} className="space-y-4">
            <Typography Tag="h4" apparentTag="h1" ornament>
              {e.title}
            </Typography>
            {e.text.map((e) => (
              <Typography key={e} Tag="p" apparentTag="p">
                {e}
              </Typography>
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}
