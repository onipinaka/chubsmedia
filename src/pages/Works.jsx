import React from 'react'
import { Link } from 'react-router-dom'
import { getAllWorks } from '../data/worksData'

function Works() {
  const works = getAllWorks()

  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        {/* Page Title */}
        <h1 className="text-[#161616] font-normal text-[48px] leading-[56px] sm:text-[56px] sm:leading-[64px] lg:text-[64px] lg:leading-[72px] mb-12 lg:mb-16">
          Our Work Gallery
        </h1>

        {/* Works Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {works.map((work) => (
            <Link
              key={work.id}
              to={`/work/${work.slug}`}
              className="group block"
            >
              {/* Work Image */}
              <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden mb-4">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Work Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[#161616] font-normal text-xl lg:text-2xl mb-1">
                    {work.title}
                  </h3>
                  <p className="text-[#666666] font-normal text-sm lg:text-base">
                    {work.category}
                  </p>
                </div>
                <div className="text-[#999999] font-normal text-sm lg:text-base flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#999999]"></span>
                  {work.year}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <button className="px-8 py-4 text-[#161616] font-normal text-base border border-[#E5E5E5] rounded-full hover:border-[#161616] transition-colors duration-300">
            Load More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Works