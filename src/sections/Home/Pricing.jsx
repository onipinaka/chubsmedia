import React from 'react'
import { Link } from 'react-router-dom'

function Pricing() {
  return (
    <div className="w-full bg-[#F5F5F5] py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-sm"></div>
            <p className="text-[#161616] font-medium text-sm sm:text-base tracking-wide">
              PRICING
            </p>
          </div>

          {/* Title */}
          <h2 className="text-[#161616] font-normal text-[40px] leading-[48px] sm:text-[48px] sm:leading-[56px] lg:text-[56px] lg:leading-[64px] mb-6 lg:mb-8">
            Transparent Pricing
          </h2>

          {/* Description */}
          <p className="text-[#666666] font-normal text-base lg:text-lg leading-relaxed mb-8 lg:mb-12">
            Tell us what you need, and we'll send you a clear, customized quote — no hidden charges.
          </p>

          {/* Get Started Button */}
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white font-medium text-base px-10 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Pricing