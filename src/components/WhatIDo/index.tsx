import React from 'react'
import Typography from '../Typography'
import WhatIDoCard from './WhatIDoCard'
import db from '@/db/db.json'

export default function WhatIDo() {
  return (
    <section className="flex flex-col items-center gap-3">
      <Typography Tag="h2" apparentTag="h2" ornament botBorder>
        {db.WhatIDo.title}
      </Typography>
      {/* Card oq eu faço */}
      <div className="flex flex-wrap justify-center gap-7">
        {db.WhatIDo.WhatIDoList.map((e) => (
          <WhatIDoCard key={e.id} title={e.title}>
            {e.description}
          </WhatIDoCard>
        ))}
      </div>
    </section>
  )
}
