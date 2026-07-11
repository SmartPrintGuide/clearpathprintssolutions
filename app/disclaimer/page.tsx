import React from 'react'
import DisclaimerPolicy from './disclaimerPolicy'
import Seo from '../components/seo'

function page() {
  return (
    <>
    <Seo
      title="Disclaimer"
      description="Read the disclaimer information for using Clear Path Print Solutions’ website and service resources."
      slug="disclaimer/"
      keywords={["disclaimer", "website disclaimer", "service disclaimer"]}
    />
    <DisclaimerPolicy />
    </>
  )
}

export default page