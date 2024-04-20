import React from 'react'
import Hero from './Hero/Hero'
import HomeAbout from './HomeAbout/HomeAbout'
import WhatWeDo from './WhatWeDo/WhatWeDo'
import Mission from './Mission/Mission'

const Home = () => {
  return (
      <>
          <section className="home">
              <Hero />
              <HomeAbout />
              <WhatWeDo />
              <Mission />
        </section>
      </>
  )
}

export default Home