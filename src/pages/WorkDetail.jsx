import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getWorkBySlug } from '../data/worksData'

function WorkDetail() {
  const { slug } = useParams()
  const work = getWorkBySlug(slug)

  if (!work) {
    return (
      <div className="w-full bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 text-center">
          <h1 className="text-[#161616] font-normal text-4xl mb-4">Work Not Found</h1>
          <Link to="/works" className="text-blue-600 hover:underline">
            Back to Works
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
          {/* Title and Category */}
          <div className="mb-8 lg:mb-12">
            <h1 className="text-[#161616] font-normal text-[48px] leading-[56px] sm:text-[56px] sm:leading-[64px] lg:text-[64px] lg:leading-[72px] mb-2">
              {work.title}
            </h1>
            <p className="text-[#666666] font-normal text-lg">
              {work.category}
            </p>
          </div>

          {/* Hero Image */}
          <div className="aspect-[16/9] bg-white rounded-lg overflow-hidden mb-8 lg:mb-12">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Project Info and Visit Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-6 lg:pb-8 border-b border-[#E5E5E5] mb-6 lg:mb-8">
            {/* Project Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1">
              <div>
                <p className="text-[#999999] font-normal text-sm mb-1">Client:</p>
                <p className="text-[#161616] font-normal text-base">{work.client}</p>
              </div>
              <div>
                <p className="text-[#999999] font-normal text-sm mb-1">Scope:</p>
                <p className="text-[#161616] font-normal text-base">{work.scope}</p>
              </div>
              <div>
                <p className="text-[#999999] font-normal text-sm mb-1">Year:</p>
                <p className="text-[#161616] font-normal text-base">{work.year}</p>
              </div>
            </div>

            {/* Visit Website Button */}
            <a
              href={work.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-[#161616] font-normal text-base border border-[#E5E5E5] rounded-full hover:border-[#161616] transition-colors duration-300 text-center whitespace-nowrap"
            >
              Visite Website
            </a>
          </div>

          {/* Overview Section - Now inside the same container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left - Label */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <p className="text-[#161616] font-medium text-sm sm:text-base">
                  OVERVIEW
                </p>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-9">
              <div 
                className="text-[#666666] font-normal text-base lg:text-lg leading-relaxed mb-8 lg:mb-12 [&_a]:text-blue-600 [&_a]:underline [&_a:hover]:text-blue-700"
                dangerouslySetInnerHTML={{ __html: work.overview }}
              />

              {/* Detail Image */}
              <div className="aspect-[16/9] bg-white rounded-lg overflow-hidden">
                <img
                  src={work.detailImage}
                  alt={`${work.title} detail`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkDetail