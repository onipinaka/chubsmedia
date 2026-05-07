import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const font = { fontFamily: "'DM Sans', sans-serif" }
const ease = [0.22, 1, 0.36, 1]

const steps = [
  {
    num: '01',
    title: 'YOU SHARE YOUR INFO',
    lines: [
      'You tell us about your business —',
      'your products, prices, packages,',
      'and how you like to talk to customers.',
      '',
      'A quick call or a WhatsApp message.',
      'That\'s it.'
    ]
  },
  {
    num: '02',
    title: 'WE BUILD YOUR AI',
    lines: [
      'We train the AI on your actual',
      'products, prices, and tone.',
      '',
      'It sounds like you — not a bot.',
      '',
      'Then we set it up on your',
      'WhatsApp and Instagram accounts.'
    ]
  },
  {
    num: '03',
    title: 'WATCH IT WORK',
    lines: [
      'Your AI goes live.',
      'Every DM gets an instant reply.',
      'Every lead gets followed up.',
      'Every product card gets sent.',
      '',
      'You get a notification when a',
      'lead is hot and ready for you.'
    ]
  }
]

export default function DoneForYou() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="w-full bg-white pt-10 pb-20 lg:pt-16 lg:pb-32" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div className="mb-14 lg:mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#999]" />
            <p className="text-[#999] text-[13px] tracking-[1px] uppercase" style={{ ...font, fontWeight: 500 }}>HOW IT WORKS</p>
          </div>
          <h2 className="text-[28px] lg:text-[48px] leading-[1.1] tracking-[-1.5px] text-[#0A0A0A]" style={{ ...font, fontWeight: 200 }}>
            You Tell Us What You Sell.<br />
            <span style={{ fontWeight: 400 }}>We Handle Everything Else.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[60px] left-[16.66%] right-[16.66%] h-[2px]">
            <svg width="100%" height="2" className="overflow-visible">
              <line x1="0" y1="1" x2="100%" y2="1"
                stroke="#E8E8E6" strokeWidth="2" strokeDasharray="10 7"
                style={{
                  strokeDashoffset: visible ? 0 : 1000,
                  transition: 'stroke-dashoffset 1.4s ease'
                }} />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-8">
            {steps.map((step, i) => (
              <div key={i} className={`flex flex-col items-center text-center relative transition-all duration-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 200 + 400}ms` }}>
                {/* Big number */}
                <p className="text-[100px] lg:text-[120px] leading-none text-[#D4D4D4] mb-4 relative z-0"
                  style={{ ...font, fontWeight: 200 }}>
                  {step.num}
                </p>
                {/* Title */}
                <h3 className="text-[#0A0A0A] text-[16px] tracking-[2px] uppercase mb-4 relative z-10"
                  style={{ ...font, fontWeight: 700 }}>
                  {step.title}
                </h3>
                {/* Description */}
                <div className="text-[#555] text-[14px] lg:text-[15px] leading-[1.7] relative z-10"
                  style={{ ...font, fontWeight: 300 }}>
                  {step.lines.map((l, j) => l === '' ? <br key={j} /> : <React.Fragment key={j}>{l}<br /></React.Fragment>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6, ease }}>
          <p className="text-[20px] lg:text-[28px] leading-[1.4] tracking-[-0.5px] text-[#0A0A0A]"
            style={{ ...font, fontWeight: 700 }}>
            No logins. No settings. No learning curve.<br />
            We do everything. You close the deals<span className="text-[#2B5BFF]">.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
