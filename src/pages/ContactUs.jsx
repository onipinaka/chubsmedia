import React, { useState } from 'react'
import { InlineWidget } from 'react-calendly'

function ContactUs() {
  const [activeTab, setActiveTab] = useState('call') // 'call' or 'message'

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
                  href="mailto:istiaqahmed85@gmail.com"
                  className="text-blue-600 font-normal text-base hover:underline"
                >
                  istiaqahmed85@gmail.com
                </a>
              </div>

              {/* Office Address */}
              <div>
                <h3 className="text-[#161616] font-medium text-base mb-2">
                  Office Address
                </h3>
                <p className="text-[#666666] font-normal text-base">
                  2464 Royal Ln. Mesa, New Jersey 45463
                </p>
              </div>

              {/* Contact Phone */}
              <div>
                <h3 className="text-[#161616] font-medium text-base mb-2">
                  Contact phone
                </h3>
                <a 
                  href="tel:+8801842844768"
                  className="text-[#666666] font-normal text-base hover:text-[#161616]"
                >
                  +8801842844768
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
                  url="https://calendly.com/your-username/30min"
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
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#161616] font-medium text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
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
                      rows="6"
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:outline-none focus:border-blue-600 resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-medium text-base px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    Send Message
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