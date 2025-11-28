import React from 'react'
import { Link } from 'react-router-dom'
import { homePageWorks } from '../../data/worksData'

function PastWorks() {
  const works = homePageWorks

  return (
    <section className="py-20 lg:py-32 bg-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        {/* Section Title */}
        <div className="mb-12 lg:mb-16">
          <h2 className="font-satoshi-medium text-[#161616] text-[16px] leading-[25.6px] lg:text-[20px] lg:leading-[32px] flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-sm"></span>
            RECENT WORK
          </h2>
        </div>

        {/* Works Grid - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {works.map((work) => (
            <Link
              key={work.id}
              to={`/work/${work.slug}`}
              className="group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl mb-4 bg-white aspect-[4/3]">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Work Info */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-satoshi-medium text-[#161616] text-[18px] leading-[28px] lg:text-[20px] lg:leading-[32px] mb-1">
                    {work.title}
                  </h3>
                  <p className="font-satoshi-regular text-[#161616] text-[14px] leading-[22.4px] lg:text-[16px] lg:leading-[25.6px]">
                    {work.category}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="w-6 h-[1.5px] bg-[#161616]"></span>
                  <span className="font-satoshi-regular text-[#161616] text-[14px] leading-[22.4px] lg:text-[16px] lg:leading-[25.6px]">
                    {work.year}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <Link
            to="/works"
            className="font-satoshi-medium text-[#161616] text-[14px] leading-[22.4px] px-8 py-3 bg-white rounded-full border border-[#E5E5E5] hover:bg-[#161616] hover:text-white hover:border-[#161616] transition-all duration-300"
          >
            Load More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PastWorks