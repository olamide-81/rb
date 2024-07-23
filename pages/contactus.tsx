import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

export default function contactus() {
  return (
    <div>
      <NavBar
        style={{
          color: '#262626',
        }}
      />
      <ContactForm />
      <Footer />
    </div>
  )
}
