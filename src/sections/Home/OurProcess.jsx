import React from 'react'

function OurProcess() {
  const processes = [
    { number: '01.', title: 'Connect' },
    { number: '02.', title: 'Plan' },
    { number: '03.', title: 'Execute' },
  ]

  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        {/* Section Title */}
        <div className="mb-8 lg:mb-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-sm"></div>
            <h2 className="font-satoshi-medium text-[#161616] text-[16px] leading-[25.6px] lg:text-[20px] lg:leading-[32px]">
              OUR PROCESS
            </h2>
          </div>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-l border-t border-[#E5E5E5]">
          {processes.map((process, index) => (
            <div
              key={index}
              className="border-r border-b border-[#E5E5E5] p-8 sm:p-10 lg:p-12 xl:p-16 flex flex-col items-center justify-center min-h-[240px] lg:min-h-[340px]"
            >
              <p className="font-satoshi-regular text-[#161616] text-[16px] leading-[25.6px] mb-4 lg:mb-6">
                {process.number}
              </p>
              <h3 className="font-satoshi-medium text-[#161616] text-[26px] leading-[31.2px] lg:text-[40px] lg:leading-[48px] lg:tracking-[-1px]">
                {process.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurProcess