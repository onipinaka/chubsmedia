import React from 'react'

function About() {
  const stats = [
    { number: '20+', label: 'Successful Project' },
    { number: '02+', label: 'Years of Experience' },
    { number: '97%', label: 'Clients Satisfaction' }
  ]

  const values = [
    {
      title: 'Creative Excellence',
      description: 'We deliver designs that are not just visually appealing but also strategically aligned to your brand\'s identity and goals.'
    },
    {
      title: 'Client-Centered',
      description: 'Our process revolves around your needs, ensuring that every design reflects your vision and resonates with your business.'
    },
    {
      title: 'Efficiency First',
      description: 'We prioritize fast delivery without compromising on quality, ensuring that your projects are completed on time, every time.'
    },
    {
      title: 'Transparent Pricing',
      description: 'With our subscription model, you get unlimited designs at a flat rate—no hidden fees, just clarity, affordability.'
    }
  ]

  const teamMembers = [
    {
      name: 'Adbul Llavia',
      role: 'Senior Art Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop'
    },
    {
      name: 'Noami Abella',
      role: 'Senior Finance Consultant',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop'
    },
    {
      name: 'Jhon Nyme',
      role: 'Senior Product Designer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop'
    },
    {
      name: 'Raynor Loftsock',
      role: 'Senior Web Designer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop'
    },
    {
      name: 'Bern Leftsock',
      role: 'Webflow Developer',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop'
    },
    {
      name: 'Kathryn Winnick',
      role: 'Head Of Marketing and HR',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop'
    }
  ]

  const jobOpenings = [
    {
      title: 'iOS App Developer',
      description: 'Swift, Webflow, Sketch, Framer UI'
    },
    {
      title: 'UI/UX Designer',
      description: 'Clean and captivating website designer'
    },
    {
      title: 'Webflow Developer',
      description: '2 years of experience in webflow'
    }
  ]

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
          <h1 className="text-[#161616] font-normal text-[48px] leading-[56px] sm:text-[56px] sm:leading-[64px] lg:text-[64px] lg:leading-[72px] mb-8 lg:mb-12">
            About Chubs Media
          </h1>

          {/* Team Image */}
          <div className="aspect-[16/9] lg:aspect-[21/9] bg-gray-200 rounded-lg overflow-hidden mb-12 lg:mb-16">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=600&fit=crop"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Us Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-24">
            {/* Left - Label */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#161616] rounded-full"></div>
                <p className="text-[#161616] font-medium text-sm sm:text-base">
                  ABOUT US
                </p>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-9">
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 lg:mb-12">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <h2 className="text-[#161616] font-normal text-[40px] leading-[48px] lg:text-[48px] lg:leading-[56px] mb-2">
                      {stat.number}
                    </h2>
                    <p className="text-[#666666] font-normal text-sm lg:text-base">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-6">
                <p className="text-[#161616] font-normal text-base lg:text-lg leading-relaxed">
                  We have put together a special combination of strategy, marketing, design, and digital expertise, design, and digital expertise.
                </p>
                <p className="text-[#666666] font-normal text-base leading-relaxed">
                  At Chubs Media, we make professional design accessible and hassle-free. Our experienced team offers unlimited design requests, revisions, and dedicated support—all through a simple subscription. From branding to marketing materials, we handle it all, ensuring every design reflects your brand's vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Drives Us Section */}
      <div className="bg-[#161616] py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left - Label */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6 lg:mb-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <p className="text-white font-medium text-sm sm:text-base">
                  OUR VALUES
                </p>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-9">
              <h2 className="text-white font-normal text-[40px] leading-[48px] sm:text-[48px] sm:leading-[56px] lg:text-[56px] lg:leading-[64px] mb-12 lg:mb-16">
                What Drives Us
              </h2>

              {/* Values Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-16 lg:gap-y-12">
                {values.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-white font-medium text-lg lg:text-xl mb-3">
                      {value.title}
                    </h3>
                    <p className="text-[#CCCCCC] font-normal text-sm lg:text-base leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}

      {/* Job Openings Section */}
      <div className="bg-[#F5F5F5] py-12 sm:py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
          <div className="text-center mb-12 lg:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#161616] rounded-full"></div>
              <p className="text-[#161616] font-medium text-sm sm:text-base">
                Career
              </p>
            </div>
            <h2 className="text-[#161616] font-normal text-[40px] leading-[48px] sm:text-[48px] sm:leading-[56px] lg:text-[56px] lg:leading-[64px]">
              Job Openings
            </h2>
          </div>

          {/* Job Listings */}
          <div className="max-w-3xl mx-auto space-y-4">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div>
                  <h3 className="text-[#161616] font-medium text-lg lg:text-xl mb-1">
                    {job.title}
                  </h3>
                  <p className="text-[#666666] font-normal text-sm lg:text-base">
                    {job.description}
                  </p>
                </div>
                <button className="bg-blue-600 text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About