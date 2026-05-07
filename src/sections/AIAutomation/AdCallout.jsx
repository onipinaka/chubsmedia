import React, { useEffect, useRef, useState } from 'react'

const font = { fontFamily: "'DM Sans', sans-serif" }

export default function AdCallout() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const lines = [
    { text: "You're spending ₹500 a day on ads.", weight: 300, color: '#777', size: 'text-[18px] lg:text-[22px]' },
    { text: "Someone clicks. Someone DMs. Nobody replies for 3 hours.", weight: 400, color: '#0A0A0A', size: 'text-[20px] lg:text-[28px]' },
    { text: "They've already moved on.", weight: 700, color: '#2B5BFF', size: 'text-[22px] lg:text-[32px]' },
    { text: 'divider' },
    { text: "That's not a marketing problem.", weight: 300, color: '#777', size: 'text-[18px] lg:text-[22px]' },
    { text: "That's a reply problem.", weight: 200, color: '#0A0A0A', size: 'text-[26px] lg:text-[42px]' },
  ]

  return (
    <section className="w-full bg-[#F5F5F3] py-24 lg:py-36" ref={ref}>
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
        {lines.map((line, i) => {
          if (line.text === 'divider') {
            return (
              <div key={i} className={`w-[200px] h-[1px] bg-[#E8E8E6] mx-auto my-8 transition-all duration-700 ${visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
                style={{ transitionDelay: `${i * 150}ms` }} />
            )
          }
          return (
            <p key={i}
              className={`${line.size} leading-[1.4] tracking-[-0.5px] mb-3 transition-all duration-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ ...font, fontWeight: line.weight, color: line.color, transitionDelay: `${i * 150}ms` }}>
              {line.text}
            </p>
          )
        })}

        {/* Stat */}
        <div className={`mt-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '1000ms' }}>
          <p className="text-[24px] lg:text-[36px] leading-[1.3] tracking-[-1px]"
            style={{ ...font, fontWeight: 400, color: '#0A0A0A' }}>
            Businesses lose <span style={{ fontWeight: 700, color: '#2B5BFF' }}>78%</span> of ad leads<br />
            because nobody replies in time.
          </p>
          <p className="text-[12px] text-[#aaa] mt-3" style={{ ...font, fontWeight: 400 }}>
            Source: Meta Business Insights
          </p>
        </div>
      </div>
    </section>
  )
}
