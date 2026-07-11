import React from 'react'
import TermsAndConditions from './termsAndConditions'
import Seo from '../components/seo'

function page() {
  return (
    <>
    <Seo
      title="Terms and Conditions"
      description="Read the terms and conditions for using the Clear Path Print Solutions website and service platform."
      slug="terms-and-conditions/"
      keywords={["terms and conditions", "website terms", "service terms"]}
    />
    <TermsAndConditions />  
    </>
  )
}

export default page