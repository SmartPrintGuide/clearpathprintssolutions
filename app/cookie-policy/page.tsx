import React from 'react'
import CookiePolicy from './cookiePolicy'
import Seo from '../components/seo'

function page() {
  return (
    <>
    <Seo
      title="Cookie Policy"
      description="Learn how Clear Path Print Solutions uses cookies and analytics tools to improve your browsing experience."
      slug="cookie-policy/"
      keywords={["cookie policy", "website cookies", "analytics cookies"]}
    />
    <CookiePolicy />
    </>
  )
}

export default page