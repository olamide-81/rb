import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { SpinnerCircular } from 'spinners-react'

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check if all fields in formData have values
    const isFormDataComplete = Object.values(formData).every(
      (field) => field !== '',
    )
    if (!isFormDataComplete) {
      toast.error('Please fill in all fields.')
      return
    }

    setIsLoading(true)

    const isEmailSent = await sendEmail(formData)
    setIsLoading(false)

    if (isEmailSent) {
      toast.success('Email sent successfully!')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      })
    } else {
      toast.error('Error sending email.')
    }
  }

  return (
    <div className="w-full mx-auto  max-w-screen-xl pt-10">
      <div className="pt-20 mx-10">
        <h1 className="font-switzer text-3xl">Contact Us</h1>
        <h1 className="font-switzer text-sm mt-2 text-[#545454] tracking-wide leading-6 md:w-[60%]">
          We're here to help and answer any question you might have. We look
          forward to hearing from you.
        </h1>
        <form onSubmit={handleSubmit} className="mt-16 flex flex-col space-y-6">
          <div className="md:flex items-center w-[100%] md:space-x-6 md:space-y-0 space-y-8">
            <div className="flex flex-col">
              <label className="font-switzer text-sm ">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Firstname"
                className="text-[#545454] outline-none mt-2 w-80 font-switzer text-xs border border-[#f2f2f2] rounded-xl py-3 px-4"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-switzer text-sm ">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Lastname"
                className="text-[#545454] outline-none mt-2 w-80 font-switzer text-xs border border-[#f2f2f2] rounded-xl py-3 px-4"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="md:flex items-center w-[100%] md:space-x-6 md:space-y-0 space-y-8">
            <div className="flex flex-col">
              <label className="font-switzer text-sm ">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="text-[#545454] outline-none mt-2 w-80 font-switzer text-xs border border-[#f2f2f2] rounded-xl py-3 px-4"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-switzer text-sm ">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                className="text-[#545454] outline-none mt-2 w-80 font-switzer text-xs border border-[#f2f2f2] rounded-xl py-3 px-4"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-switzer text-sm ">Message</label>
            <textarea
              name="message"
              placeholder="Your Message Here"
              rows={5}
              className="text-[#545454] mt-2 w-80 font-switzer text-xs outline-none border border-[#f2f2f2] rounded-xl py-3 px-4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="pt-20">
            <button
              type="submit"
              className="py-3 px-3 w-[40%] bg-[#3C76E1] font-clashdisplaymedium text-white items-center flex justify-center rounded-md cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? (
                <SpinnerCircular color="#ffffff" size={20} />
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

async function sendEmail(data) {
  try {
    const response = await fetch(
      'https://www.backend.richauntyfinance.com/send-contact-email',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )

    if (response.status === 200) {
      return true
    } else {
      const responseBody = await response.json()
      console.error('Error sending email:', responseBody.message)
      return false
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}

export default ContactForm
