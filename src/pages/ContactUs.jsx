import React, { useState, useRef } from 'react'
import { InlineWidget } from 'react-calendly'
import emailjs from '@emailjs/browser'

function ContactUs() {
  const [activeTab, setActiveTab] = useState('call') // 'call' or 'message'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'
  const formRef = useRef()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section - Contact Info */}
          <div>
            {/* Title */}
            <div className="mb-8 lg:mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-[#161616]"></div>
                <p className="text-[#161616] font-normal text-sm sm:text-base">
                  Get in touch
                </p>
              </div>
              <h1 className="text-[#161616] font-normal text-[48px] leading-[56px] sm:text-[64px] sm:leading-[72px] lg:text-[80px] lg:leading-[88px]">
                Book a call
              </h1>
            </div>

            {/* Contact Details */}
            <div className="space-y-8 mb-12">
              {/* Contact Me */}
              <div>
                <h3 className="text-[#161616] font-medium text-base mb-2">
                  Contact Me
                </h3>
                <a 
                  href="mailto:connect@chubsmedia.tech"
                  className="text-blue-600 font-normal text-base hover:underline"
                >
                  connect@chubsmedia.tech
                </a>
              </div>

              {/* Office Address */}
              <div>
                <h3 className="text-[#161616] font-medium text-base mb-2">
                  Office Address
                </h3>
                <p className="text-[#666666] font-normal text-base">
                  105 A, OBH <br />Army Instiute of Technology, Pune 411015 <br />India 
                </p>
              </div>

              {/* Contact Phone */}
              <div>
                <h3 className="text-[#161616] font-medium text-base mb-2">
                  Contact phone
                </h3>
                <a 
                  href="tel:+919451302544"
                  className="text-[#666666] font-normal text-base hover:text-[#161616]"
                >
                  +91 94513 02544
                </a><br />
                <a 
                  href="tel:+919399892395"
                  className="text-[#666666] font-normal text-base hover:text-[#161616]"
                >
                  +91 93998 92395
                </a>
              </div>
            </div>

            {/* Tab Buttons - Mobile Only */}
            <div className="flex gap-4 mb-6 lg:hidden">
              <button
                onClick={() => setActiveTab('call')}
                className={`flex-1 py-3 px-6 text-base font-normal transition-colors duration-300 ${
                  activeTab === 'call'
                    ? 'bg-blue-600 text-white'
                    : 'bg-transparent text-[#161616] border border-[#E5E5E5]'
                }`}
              >
                Book a Call
              </button>
              <button
                onClick={() => setActiveTab('message')}
                className={`flex-1 py-3 px-6 text-base font-normal transition-colors duration-300 ${
                  activeTab === 'message'
                    ? 'bg-blue-600 text-white'
                    : 'bg-transparent text-[#161616] border border-[#E5E5E5]'
                }`}
              >
                Send message
              </button>
            </div>

            {/* Mobile Calendly Widget */}
            {activeTab === 'call' && (
              <div className="lg:hidden bg-[#F5F5F5] rounded-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="text-[#161616] font-medium text-lg mb-1">
                      30 Minute Meeting
                    </h3>
                    <p className="text-[#666666] text-sm">30 min</p>
                    <p className="text-[#666666] text-sm mt-2">
                      Web conferencing details provided upon confirmation.
                    </p>
                  </div>
                  <div className="text-xs bg-[#161616] text-white px-2 py-1 transform rotate-45 origin-top-right">
                    Calendly
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Section - Calendly Widget (Desktop) */}
          <div className="hidden lg:block">
            {/* Tab Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setActiveTab('call')}
                className={`flex-1 py-4 px-8 text-base font-normal transition-colors duration-300 ${
                  activeTab === 'call'
                    ? 'bg-blue-600 text-white'
                    : 'bg-transparent text-[#161616] border border-[#E5E5E5]'
                }`}
              >
                Book a Call
              </button>
              <button
                onClick={() => setActiveTab('message')}
                className={`flex-1 py-4 px-8 text-base font-normal transition-colors duration-300 ${
                  activeTab === 'message'
                    ? 'bg-blue-600 text-white'
                    : 'bg-transparent text-[#161616] border border-[#E5E5E5]'
                }`}
              >
                Send message
              </button>
            </div>

            {/* Calendly Embed */}
            {activeTab === 'call' && (
              <div className="bg-white rounded-lg overflow-hidden border border-[#E5E5E5] min-h-[700px]">
                <InlineWidget 
                  url="https://calendly.com/thechubsmedia/30min"
                  styles={{
                    height: '700px',
                    width: '100%'
                  }}
                />
              </div>
            )}

            {/* Message Form */}
            {activeTab === 'message' && (
              <div className="bg-white rounded-lg border border-[#E5E5E5] p-8">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      ✓ Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                  
                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      ✗ Failed to send message. Please try again or email us directly.
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-[#161616] font-medium text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-blue-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[#161616] font-medium text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-blue-600"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[#161616] font-medium text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-blue-600 resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white font-medium text-base px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs