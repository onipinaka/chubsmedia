import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/chubslogo.svg'

function AboutUs() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Side - Title */}
          <div className="lg:col-span-4">
            <h2 className="text-[16px] lg:text-[20px] leading-[25.6px] lg:leading-[32px] font-satoshi-medium text-[#161616] flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-sm"></span>
              ABOUT US
            </h2>
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-8 space-y-8 lg:space-y-12">
            {/* Logos */}
            <div className="flex flex-wrap items-center gap-8 lg:gap-12">
              <div className="flex items-center">
                <img 
                  src={logo} 
                  alt="HubSpot" 
                  className="h-8 lg:h-10"
                />
              </div>
              <div className="flex items-center">
                <img 
                  src="/aitlogo.svg"
                  alt="Clutch" 
                  className="h-8 lg:h-10"
                />
              </div>
              <div className="flex items-center">
                <span className="text-sm lg:text-base font-satoshi-medium text-black">4.9/5.0</span>
                <div className="flex ml-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-red-500 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-[20px] lg:text-[32px] leading-[32px] lg:leading-[48px] font-satoshi-medium text-[#333333]">
              We have put together a special combination of strategy, marketing, design, and digital expertise. design, and digital expertise.
            </p>

            {/* Read More Button */}
            <Link 
              to="/about"
              className="inline-block font-satoshi-medium text-[#161616] text-[16px] leading-[25.6px] px-8 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs