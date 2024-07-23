import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Head from 'next/head'
import React from 'react'

export default function contactus() {
  return (
    <div>
      <Head>
        <title>Contact Us | RAF</title>
        <meta
          name="description"
          content="Contact us at RAF to get started on your journey to financial freedom."
        />
      </Head>
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
