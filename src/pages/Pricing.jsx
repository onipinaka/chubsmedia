import React from 'react'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'

function Pricing() {
  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        {/* Page Title */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-sm"></div>
            <p className="text-[#161616] font-medium text-sm sm:text-base tracking-wide">
              PRICING
            </p>
          </div>
          <h1 className="text-[#161616] font-normal text-[48px] leading-[56px] sm:text-[56px] sm:leading-[64px] lg:text-[64px] lg:leading-[72px] mb-4">
            Our Pricing
          </h1>
          <p className="text-[#666666] font-normal text-base lg:text-lg max-w-2xl">
            Transparent pricing for all our services. All prices are starting rates and can be customized based on your project requirements.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="border border-[#E5E5E5] rounded-2xl p-8 lg:p-10 hover:border-blue-600 transition-all duration-300 group"
            >
              {/* Service Icon */}
              <div className="text-[#161616] mb-6 group-hover:text-blue-600 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-[#161616] font-medium text-2xl lg:text-3xl mb-4">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-[#666666] font-normal text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-[#999999] font-normal text-sm">Starting from</span>
                  <span className="text-[#161616] font-bold text-4xl">₹{service.pricing}</span>
                  <span className="text-[#999999] font-normal text-sm">/project</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to={`/service/${service.slug}`}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-blue-700 transition-all duration-300"
              >
                View Details
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path 
                    d="M6 12L10 8L6 4" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-[#F5F5F5] rounded-2xl p-8 lg:p-12">
            <h2 className="text-[#161616] font-medium text-2xl lg:text-3xl mb-4">
              Need a Custom Quote?
            </h2>
            <p className="text-[#666666] font-normal text-base lg:text-lg mb-6 max-w-2xl mx-auto">
              Every project is unique. Contact us for a personalized quote tailored to your specific needs and requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-blue-700 transition-all duration-300"
            >
              Get in Touch
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 10h10M10 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing