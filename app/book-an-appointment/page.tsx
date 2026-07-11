import React from 'react'
import StayInformed from '../components/home/stayInformed'
import Hero from './hero'
import AppointmentForm from './appointmentForm'
import Seo from '../components/seo'
import CustomerSupport from '../components/customerSupport'

function page() {
  return (
   <>
   <Seo
      title="Book an Appointment"
      description="Schedule a printer service visit for installation, troubleshooting, repair, or maintenance support."
      slug="book-an-appointment/"
      keywords={["book printer service", "appointment", "printer support booking"]}
    />
   <Hero />
   
   <AppointmentForm />
    <StayInformed />
   <CustomerSupport />

  
   </>
  )
}

export default page