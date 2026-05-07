import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const font = { fontFamily: "'DM Sans', sans-serif" }
const ease = [0.22, 1, 0.36, 1]

const before = [
  'Leads DM. Nobody replies.',
  'Weekends go unanswered.',
  'Hot leads go cold.',
  'Ad spend never converts.',
]

const after = [
  'Every DM answered in < 2 min',
  '24/7 — nights, weekends, always',
  'Lead is warm when you call them',
  'Every rupee actually works',
]

export default function BeforeAfter() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.25 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="w-full bg-[#F5F5F3] py-20 lg:py-32" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#999]" />
            <p className="text-[#999] text-[13px] tracking-[1px] uppercase" style={{ ...font, fontWeight: 500 }}>THE DIFFERENCE</p>
          </div>
          <h2 className="text-[28px] lg:text-[48px] leading-[1.1] tracking-[-1.5px] text-[#0A0A0A]" style={{ ...font, fontWeight: 200 }}>
            What Changes When<br />
            <span style={{ fontWeight: 400 }}>Your DMs Are Automated.</span>
          </h2>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 relative">
          {/* Center divider (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#E8E8E6]" />

          {/* BEFORE */}
          <div className="pr-0 lg:pr-12 pb-10 lg:pb-0">
            <p className="text-[13px] tracking-[2px] uppercase text-[#666] mb-6" style={{ ...font, fontWeight: 500 }}>
               WITHOUT AI AUTOMATION
            </p>
            <div className="space-y-3.5">
              {before.map((item, i) => (
                <div key={i}
                  className={`flex items-start gap-3 transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0 translate-y-3'}`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}>
                  <span className="text-red-400 text-[14px] mt-0.5 shrink-0">●</span>
                  <p className="text-[15px] leading-[1.6] text-[#333] relative" style={{ ...font, fontWeight: 400 }}>
                    <span className={visible ? 'before-strike' : ''} style={{ animationDelay: `${i * 100 + 600}ms` }}>
                      {item}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AFTER */}
          <div className="pl-0 lg:pl-12 pt-6 lg:pt-0 border-t lg:border-t-0 border-[#E8E8E6]">
            <p className="text-[13px] tracking-[2px] uppercase text-[#0A0A0A] mb-6" style={{ ...font, fontWeight: 700 }}>
              WITH CHUBS AI
            </p>
            <div className="space-y-3.5">
              {after.map((item, i) => (
                <div key={i}
                  className={`flex items-start gap-3 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                  style={{ transitionDelay: `${i * 100 + 900}ms` }}>
                  <span className={`text-[14px] mt-0.5 shrink-0 transition-transform duration-300 ${visible ? 'scale-100' : 'scale-0'}`}
                    style={{ transitionDelay: `${i * 100 + 1000}ms`, color: '#2B5BFF' }}>✅</span>
                  <p className="text-[15px] leading-[1.6] text-[#0A0A0A]" style={{ ...font, fontWeight: 400 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Punchy line */}
        <motion.p className="text-center text-[22px] lg:text-[32px] leading-[1.3] tracking-[-1px] text-[#0A0A0A] mt-16 max-w-[700px] mx-auto"
          style={{ ...font, fontWeight: 200 }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6, ease }}>
          The only difference is whether someone's there to answer.
        </motion.p>
      </div>

      <style>{`
        @keyframes strikeThrough {
          from { width: 0; }
          to { width: 100%; }
        }
        .before-strike {
          position: relative;
        }
        .before-strike::after {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          height: 1.5px;
          background: #e55;
          opacity: 0.5;
          animation: strikeThrough 0.5s ease forwards;
          animation-delay: inherit;
        }
      `}</style>
    </section>
  )
}
