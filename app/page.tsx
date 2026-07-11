import React from 'react'
import Hero from './components/home/hero'
import Category from './components/home/category'
import Steps from './components/home/steps'
import WhatWeOffer from './components/home/whatWeOffer'
import WhyChoose from './components/home/whyChoose'
import StayInformed from './components/home/stayInformed'
import Seo from './components/seo'

function page() {
  return (
    <>
    <Seo
      title="Home"
      description="Professional printer setup, repair, maintenance, and on-site support for homes and businesses."
      slug=""
      keywords={["printer support", "printer setup", "printer repair"]}
    />
    <Hero />
    <Category />
    <Steps  />
    <WhatWeOffer />
    <WhyChoose />
    <StayInformed />
    </>
  )
}

export default page