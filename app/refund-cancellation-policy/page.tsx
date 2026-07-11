import React from 'react'
import RefundCancellationPolicy from './refundCancellationPolicy'
import Seo from '../components/seo'

function page() {
  return (
    <>
    <Seo
      title="Refund and Cancellation Policy"
      description="Review Clear Path Print Solutions’ refund and cancellation policy for appointments, services, and eligible returns."
      slug="refund-cancellation-policy/"
      keywords={["refund policy", "cancellation policy", "service refund"]}
    />
    <RefundCancellationPolicy />
    </>
  )
}

export default page