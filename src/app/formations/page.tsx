import Typography from '@/components/Typography'
import OrnamentE from '@/components/Typography/OrnamentE'
import React from 'react'
import FormationSection from '@/components/Formations/FormationSection'
import FormationInputSearch from '@/components/Formations/FormationInputSearch'

export default function Page() {
  return (
    <main className="mx-5 mt-8 flex flex-col items-center gap-7">
      <Typography Tag="h1" apparentTag="h1" ornament>
        Formações <OrnamentE /> Certificados
      </Typography>
      {/* input search */}
      <FormationInputSearch />

      <FormationSection />
    </main>
  )
}
