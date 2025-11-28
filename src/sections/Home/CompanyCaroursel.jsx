import React from 'react'
import { motion } from 'framer-motion'

function CompanyCaroursel() {
  // Logo data - duplicated for seamless infinite scroll
  const logos = [
    { id: 1, name: 'Logo 1' },
    { id: 2, name: 'IPSUM' },
    { id: 3, name: 'Logo 3' },
    { id: 4, name: 'N' },
    { id: 5, name: 'LOGO' },
    { id: 6, name: 'Logoipsum' },
  ]

  // Animation variants for infinite scroll
  const scrollVariants = {
    animate: {
      x: [0, -100 * logos.length],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  }

  const scrollVariantsReverse = {
    animate: {
      x: [-100 * logos.length, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  }

  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        {/* First Row - Moves Left to Right on Desktop, Static on Mobile */}
        <div className="relative mb-4 lg:mb-6">
          <div className="lg:hidden">
            {/* Mobile - Static Grid */}
            <div className="grid grid-cols-2 gap-4">
              {logos.slice(0, 4).map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-24 bg-[#F5F5F5] rounded-lg"
                >
                  <span className="text-[#161616] font-bold text-xl">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop - Animated Scroll */}
          <div className="hidden lg:flex">
            <motion.div
              className="flex gap-6"
              variants={scrollVariants}
              animate="animate"
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center w-[240px] h-[120px] bg-[#F5F5F5] rounded-lg"
                >
                  <span className="text-[#161616] font-bold text-2xl">{logo.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Second Row - Moves Right to Left on Desktop, Static on Mobile */}
        <div className="relative">
          <div className="lg:hidden">
            {/* Mobile - Static Grid */}
            <div className="grid grid-cols-2 gap-4">
              {logos.slice(0, 4).map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-24 bg-[#F5F5F5] rounded-lg"
                >
                  <span className="text-[#161616] font-bold text-xl">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop - Animated Scroll (Reverse Direction) */}
          <div className="hidden lg:flex">
            <motion.div
              className="flex gap-6"
              variants={scrollVariantsReverse}
              animate="animate"
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center w-[240px] h-[120px] bg-[#F5F5F5] rounded-lg"
                >
                  <span className="text-[#161616] font-bold text-2xl">{logo.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyCaroursel