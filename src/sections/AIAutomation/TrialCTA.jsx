import React from 'react'
import { motion } from 'framer-motion'
import TrialForm from '../../components/TrialForm/TrialForm'

const font = { fontFamily: "'DM Sans', sans-serif" }
const ease = [0.22, 1, 0.36, 1]

export default function TrialCTA() {
  return (
    <section id="trial" className="w-full bg-[#0A0A0A] py-24 lg:py-36 relative overflow-hidden">
      {/* Decorative noise/gradient */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#2B5BFF] opacity-10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}>
            <h2 className="text-[32px] lg:text-[56px] leading-[1.1] tracking-[-1.5px] text-white mb-6" style={{ ...font, fontWeight: 200 }}>
              Let's Stop<br />
              <span style={{ fontWeight: 700 }}>Losing Leads.</span>
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.8] text-[#888] mb-8" style={{ ...font, fontWeight: 300 }}>
              Try our AI Automation free for 7 days.<br />
              We build it, train it, and deploy it for you.<br />
              If it doesn't make you more money, we turn it off.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Done-for-you setup',
                'Trained on your exact products',
                'Connects to WhatsApp & Instagram',
                'Free custom trial'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#2B5BFF] text-[18px]">✓</span>
                  <span className="text-[#ccc] text-[15px]" style={{ ...font, fontWeight: 400 }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.7, ease }}>
            <TrialForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
