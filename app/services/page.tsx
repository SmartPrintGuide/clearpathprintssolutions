import React from 'react'
import Hero from './hero'
import WhatWeDo from './whatWeDo'
import HowItWork from './howItWork'
import WhyChoose from './whyChoose'
import FAQ from './faq'
import GetQuote from './getquate'
import Seo from '../components/seo'

function page() {
  return (
    <>
    <Seo
      title="Services"
      description="Explore our printer installation, troubleshooting, maintenance, wireless setup, and business support services."
      slug="services/"
      keywords={["printer services", "printer installation", "printer maintenance"]}
    />
    <Hero />
    <WhatWeDo />
    <HowItWork />
    <WhyChoose />
    <FAQ />
    <GetQuote />
    </>
  )
}

export default page