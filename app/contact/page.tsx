import React from 'react'
import ContactUs from './contactUs'
import WhyChoose from "../services/whyChoose"
import GetQuote from '../services/getquate'
import Seo from '../components/seo'

function page() {
  return (
    <>
    <Seo
      title="Contact Us"
      description="Get in touch with Clear Path Print Solutions for expert printer setup, repair, maintenance, and on-site support."
      slug="contact/"
      keywords={["printer contact", "printer support contact", "service support"]}
    />
    <ContactUs />
    <WhyChoose />
    <GetQuote />
    </>
  )
}

export default page