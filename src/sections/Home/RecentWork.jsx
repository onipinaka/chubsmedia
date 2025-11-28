import React, { useState } from 'react';
import { getFeaturedWorks, getMoreWorks } from '../../data/worksData';

function RecentWork() {
  const [showMore, setShowMore] = useState(false);
  const featuredWorks = getFeaturedWorks();
  const moreWorks = getMoreWorks();
  const displayedWorks = showMore ? [...featuredWorks, ...moreWorks] : featuredWorks;

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        {/* Section Title */}
        <div className="mb-12 lg:mb-16">
          <h2 className="font-satoshi-medium text-[#161616] text-[16px] leading-[25.6px] lg:text-[20px] lg:leading-[32px] flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-sm"></span>
            RECENT WORK
          </h2>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {displayedWorks.map((work, index) => (
            <div
              key={work.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-gray-100 aspect-[4/3]">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Work Info */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-satoshi-medium text-[#161616] text-[20px] leading-[32px] mb-1">
                    {work.title}
                  </h3>
                  <p className="font-satoshi-regular text-[#161616] text-[16px] leading-[25.6px]">
                    {work.category}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-black"></span>
                  <span className="font-satoshi-regular text-[#161616] text-[16px] leading-[25.6px]">
                    {work.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {!showMore && moreWorks.length > 0 && (
          <div className="mt-12 lg:mt-16 flex justify-center">
            <button
              onClick={() => setShowMore(true)}
              className="font-satoshi-medium text-[#161616] text-[14px] leading-[22.4px] px-8 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              Load More
            </button>
          </div>
        )}

        {/* View All Works Link (shown when more works are loaded) */}
        {showMore && (
          <div className="mt-12 lg:mt-16 flex justify-center">
            <a
              href="/works"
              className="px-8 py-3 bg-black text-white rounded-full text-base lg:text-lg font-satoshi-medium hover:bg-gray-800 transition-all duration-300"
            >
              View All Works
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default RecentWork;
