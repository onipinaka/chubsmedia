import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { homePageServices } from '../../data/servicesData.jsx';
import { feedbackData } from '../../data/feedbackData.jsx';

function Services() {
  const [currentFeedback, setCurrentFeedback] = useState(0);

  const nextFeedback = () => {
    setCurrentFeedback((prev) => (prev + 1) % feedbackData.length);
  };

  const prevFeedback = () => {
    setCurrentFeedback((prev) => (prev - 1 + feedbackData.length) % feedbackData.length);
  };

  return (
    <>
      {/* Our Services Section */}
      <section className="py-20 lg:py-32 bg-[#161616]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
          {/* Section Title */}
          <div className="mb-12 lg:mb-16">
            <h2 className="text-[16px] lg:text-[20px] leading-[25.6px] lg:leading-[32px] font-satoshi-medium text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-sm"></span>
              OUR SERVICES
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-l border-t border-white/10">
            {homePageServices.map((service, index) => (
              <Link
                key={service.id}
                to={`/service/${service.slug}`}
              >
                <div
                  className="border-r border-b border-white/10 p-8 lg:p-10 hover:bg-white/5 transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="mb-6 text-white group-hover:text-blue-500 transition-colors">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-satoshi-medium text-white text-[32px] leading-[44.8px] tracking-[-0.8px] mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-satoshi-regular text-white text-[16px] leading-[25.6px]">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="flex justify-center mt-12 lg:mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-satoshi-medium text-[16px] leading-[25.6px] transition-all duration-300"
            >
              View All Services
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 10h10M10 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Feedback Section */}
      <section className="py-20 lg:py-32 bg-[#161616]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Section Title - Left Side on Desktop */}
            <div className="lg:col-span-4">
              <h2 className="text-[16px] lg:text-[20px] leading-[25.6px] lg:leading-[32px] font-satoshi-medium text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-sm"></span>
                CLIENTS FEEDBACK
              </h2>
            </div>

            {/* Feedback Content - Right Side on Desktop */}
            <div className="lg:col-span-8">
              {/* Quote Icon */}
              <div className="mb-8">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-blue-600">
                  <path d="M12 32C12 24 16 16 24 16V24C20 24 18 26 18 30H24V44H12V32Z" fill="currentColor"/>
                  <path d="M36 32C36 24 40 16 48 16V24C44 24 42 26 42 30H48V44H36V32Z" fill="currentColor"/>
                </svg>
              </div>

              {/* Quote Text */}
              <p className="text-[24px] lg:text-[32px] leading-[36px] lg:leading-[44px] font-satoshi-regular text-white mb-12">
                {feedbackData[currentFeedback].quote}
              </p>

              {/* Author Info & Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <img
                    src={feedbackData[currentFeedback].avatar}
                    alt={feedbackData[currentFeedback].name}
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover"
                  />
                  {/* Name & Position */}
                  <div>
                    <h4 className="text-[16px] lg:text-[18px] font-satoshi-medium text-white">
                      {feedbackData[currentFeedback].name}
                    </h4>
                    <p className="text-[14px] lg:text-[16px] font-satoshi-regular text-gray-400">
                      {feedbackData[currentFeedback].position}
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevFeedback}
                    className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                    aria-label="Previous feedback"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 16L6 10L12 4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    onClick={nextFeedback}
                    className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                    aria-label="Next feedback"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 4L14 10L8 16" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;