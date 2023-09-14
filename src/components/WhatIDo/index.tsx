import React from 'react'
import Typography from '../Typography'
import WhatIDoCard from './WhatIDoCard'

export default function WhatIDo() {
  return (
    <section className="flex flex-col items-center gap-3">
      <Typography Tag="h2" apparentTag="h2" ornament botBorder>
        O Que eu faço?
      </Typography>
      {/* Card oq eu faço */}
      <div className="flex flex-wrap justify-center gap-7">
        <WhatIDoCard title="Front-end">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          beatae optio ullam excepturi voluptatum sapiente accusamus architecto,
          sed porro aliquid veritatis, nihil possimus debitis aperiam animi quia
          deleniti quod hic!
        </WhatIDoCard>
        <WhatIDoCard title="Back-end">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          dignissimos magnam, molestias error reprehenderit molestiae natus,
          incidunt minus repellat voluptatem recusandae praesentium, tempora
          voluptatum aspernatur veritatis non nam magni culpa.
        </WhatIDoCard>
      </div>
    </section>
  )
}
