import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const font = { fontFamily: "'DM Sans', sans-serif" }
const ease = [0.22, 1, 0.36, 1]

export default function ProblemSolution() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="w-full bg-[#F5F5F3] py-24 lg:py-36 relative" ref={ref}>
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <div className="text-center">
          <motion.div 
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0ms' }}>
            <p className="text-[20px] lg:text-[24px] leading-[1.4] tracking-[-0.5px] mb-3 text-[#777]" style={{ ...font, fontWeight: 300 }}>
              You're spending ₹500 a day on ads.
            </p>
            <p className="text-[24px] lg:text-[36px] leading-[1.3] tracking-[-1px] mb-3 text-[#0A0A0A]" style={{ ...font, fontWeight: 400 }}>
              Someone clicks. Someone DMs. Nobody replies for 3 hours.
            </p>
            <p className="text-[28px] lg:text-[42px] leading-[1.3] tracking-[-1px] mb-12 text-[#2B5BFF]" style={{ ...font, fontWeight: 700 }}>
              They've already moved on.
            </p>
            
            <div className="w-[100px] h-[1px] bg-[#E8E8E6] mx-auto mb-12" />
            
            <p className="text-[20px] lg:text-[24px] leading-[1.4] tracking-[-0.5px] mb-3 text-[#777]" style={{ ...font, fontWeight: 300 }}>
              That's not a marketing problem.
            </p>
            <p className="text-[32px] lg:text-[52px] leading-[1.1] tracking-[-1.5px] mb-12 text-[#0A0A0A]" style={{ ...font, fontWeight: 200 }}>
              That's a reply problem.
            </p>
            
            <div className="p-6 bg-white border border-[#E8E8E6] rounded-2xl shadow-sm inline-block mx-auto text-left">
              <p className="text-[20px] lg:text-[26px] leading-[1.3] tracking-[-0.5px]" style={{ ...font, fontWeight: 400, color: '#0A0A0A' }}>
                Businesses lose <span style={{ fontWeight: 700, color: '#2B5BFF' }}>78%</span> of ad leads<br />
                because nobody replies in time.
              </p>
              <p className="text-[13px] text-[#aaa] mt-3" style={{ ...font, fontWeight: 400 }}>
                Source: Meta Business Insights
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
