import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  // Animation variants for the heading text - letters slide from left with blur
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      x: -20, 
      filter: 'blur(10px)' 
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  }

  // Animation for the south-west arrow - scales from 0 to 1
  const arrowVariants = {
    hidden: { 
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const headingText = "Ideas Born, Digitally Brought Alive"
  const words = headingText.split(' ')

  return (
    <div className="w-full bg-white pt-4 sm:pt-6 lg:pt-8 xl:pt-10 pb-8 sm:pb-10 lg:pb-12 relative overflow-hidden">
      {/* Dotted Background Pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, #D1D5DB 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      ></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="relative">
          {/* Top Section - Tagline and Arrow */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 lg:mb-8">
            {/* Left - Tagline */}
            <div className="mb-8 lg:mb-0">
              <div className="flex items-start gap-3">
                <div className="w-8 h-[1px] bg-[#161616] mt-3"></div>
                <p className="font-satoshi-medium text-[#333333] text-[16px] leading-[25.6px] lg:text-[20px] lg:leading-[32px] lg:max-w-none lg:whitespace-nowrap">
                  We do <span className='font-satoshi-bold'> EVERYTHING</span>, that can be achieved by <span className='font-satoshi-bold'>TECH</span>+
                  .
                </p>
              </div>
            </div>

            {/* Right - South-West Arrow (Desktop only) */}
            <motion.div 
              className="hidden lg:block absolute top-0 right-0 w-[90px] h-[90px]"
              variants={arrowVariants}
              initial="hidden"
              animate="visible"
            >
              <img 
                src="/down-arrow.svg" 
                alt="Arrow" 
                className="w-full h-full"
                style={{ transform: 'rotate(0deg)' }}
              />
            </motion.div>
          </div>

          {/* Main Heading with Letter Animation */}
          <div className="mb-12 lg:mb-16">
            <h1 className="font-satoshi-medium text-[#161616] text-[40px] leading-[48px] tracking-[-2px] lg:text-[80px] lg:leading-[96px] lg:tracking-[-4px]">
              <span className="inline">
                {words.slice(0, 3).map((word, wordIndex) => (
                  <span key={wordIndex} className=" inline-block">
                    {word.split('').map((char, charIndex) => {
                      const globalIndex = words.slice(0, wordIndex).join('').length + wordIndex + charIndex
                      return (
                        <motion.span
                          key={charIndex}
                          custom={globalIndex}
                          variants={letterVariants}
                          initial="hidden"
                          animate="visible"
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      )
                    })}
                    {wordIndex < 2 && <span>&nbsp;</span>}
                  </span>
                ))}
              </span>
              <br />
              <span className="inline">
                {words.slice(3).map((word, wordIndex) => (
                  <span key={wordIndex + 3} className="inline-block">
                    {word.split('').map((char, charIndex) => {
                      const actualWordIndex = wordIndex + 3
                      const globalIndex = words.slice(0, actualWordIndex).join('').length + actualWordIndex + charIndex
                      return (
                        <motion.span
                          key={charIndex}
                          custom={globalIndex}
                          variants={letterVariants}
                          initial="hidden"
                          animate="visible"
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      )
                    })}
                    {wordIndex < words.slice(3).length - 1 && <span>&nbsp;</span>}
                  </span>
                ))}
              </span>
            </h1>
          </div>

          {/* Bottom Section - CTA and Social Links */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between lg:justify-start gap-6">
            {/* Get Started Button */}
            <button className="bg-blue-600 text-white font-satoshi-bold text-[16px] leading-[22px] px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300 w-fit">
              Get Started Now
            </button>

            {/* Social Links - Right side on desktop */}
            <div className="flex items-center gap-4 lg:absolute lg:bottom-0 lg:right-0">
              {/* Horizontal line before icons on desktop */}
              <div className="hidden lg:block w-20 h-[1px] bg-[#E5E5E5]"></div>
              
              {/* LinkedIn */}
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:border-[#161616] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="6" width="3" height="10" rx="0.5" fill="#161616"/>
                  <circle cx="3.5" cy="3.5" r="1.5" fill="#161616"/>
                  <path d="M7 6V16H10V11C10 9.5 10.5 9 12 9C13.5 9 14 9.5 14 11V16H17V10.5C17 7.5 15.5 6 13 6C11.5 6 10.5 6.5 10 7V6H7Z" fill="#161616"/>
                </svg>
              </a>

              {/* Dribbble */}
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:border-[#161616] transition-colors duration-300"
                aria-label="Dribbble"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="7.5" stroke="#161616" strokeWidth="1" fill="none"/>
                  <path d="M2.5 9C2.5 9 5 7.5 9 9C13 10.5 15.5 9 15.5 9" stroke="#161616" strokeWidth="1" strokeLinecap="round"/>
                  <path d="M9 2.5C9 2.5 7.5 5.5 9 9C10.5 12.5 9 15.5 9 15.5" stroke="#161616" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </a>

              {/* Behance */}
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:border-[#161616] transition-colors duration-300"
                aria-label="Behance"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H16V5H11V4Z" fill="#161616"/>
                  <path d="M13.5 7C11.5 7 10 8.5 10 10.5C10 12.5 11.5 14 13.5 14C15 14 16.5 13 16.5 11H15.5C15.5 12 15 13 13.5 13C12 13 11 12 11 10.5C11 9 12 8 13.5 8C15 8 15.5 9 15.5 10H16.5C16.5 8 15 7 13.5 7Z" fill="#161616"/>
                  <path d="M2 7H5.5C7 7 8 8 8 9.5C8 10.5 7.5 11.5 6 11.5H2V7ZM2 11.5H6C7.5 11.5 8.5 12.5 8.5 14C8.5 15.5 7.5 16.5 6 16.5H2V11.5Z" fill="#161616"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 lg:mt-16">
          <div className="w-full aspect-[16/9] lg:aspect-[16/9] bg-white rounded-2xl overflow-hidden">
            <img 
              src="/heroimg.svg" 
              alt="Hero" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero