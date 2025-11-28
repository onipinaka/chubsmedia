import React from 'react'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'

function Services() {
  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        {/* Page Title */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-sm"></div>
            <p className="text-[#161616] font-medium text-sm sm:text-base tracking-wide">
              SERVICES
            </p>
          </div>
          <h1 className="text-[#161616] font-normal text-[48px] leading-[56px] sm:text-[56px] sm:leading-[64px] lg:text-[64px] lg:leading-[72px]">
            What We Offer
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-l border-t border-[#E5E5E5]">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              to={`/service/${service.slug}`}
              className="border-r border-b border-[#E5E5E5] p-8 lg:p-12 group hover:bg-[#F5F5F5] transition-colors duration-300 block"
            >
              {/* Icon */}
              <div className="text-[#161616] mb-6 group-hover:text-blue-600 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#161616] font-medium text-xl lg:text-2xl mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#666666] font-normal text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Pricing */}
              <div className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm">
                Starting from ₹{service.pricing}/-
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services