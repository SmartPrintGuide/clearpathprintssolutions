import React from 'react'
import PrivacyPolicy from './privacyPolicy'
import Seo from '../components/seo'

function page() {
  return (
    <>
    <Seo
      title="Privacy Policy"
      description="Review how Clear Path Print Solutions collects, uses, and protects your personal information on this website."
      slug="privacy-policy/"
      keywords={["privacy policy", "data protection", "cookie policy"]}
    />
    <PrivacyPolicy />
    </>
  )
}

export default page