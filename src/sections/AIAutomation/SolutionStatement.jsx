import React from 'react'
import { motion } from 'framer-motion'
import ChatMockup from '../../components/ChatMockup/ChatMockup'

const font = { fontFamily: "'DM Sans', sans-serif" }
const ease = [0.22, 1, 0.36, 1]

const miniWA = [
  { from: 'user', text: 'Hi, saw your ad!' },
  { from: 'ai', text: "Hey! 👋 Here's our best offer 👇", typing: 400 },
  { from: 'ai', type: 'success', icon: '✅', title: 'Replied in 8 seconds' },
]
const miniIG = [
  { from: 'user', text: 'Do you ship to Delhi?' },
  { from: 'ai', text: 'Yes! Free shipping above ₹999 🚚', typing: 400 },
  { from: 'ai', type: 'success', icon: '✅', title: 'Answered instantly' },
]

export default function SolutionStatement() {
  return (
    <section className="w-full bg-white py-24 lg:py-36">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          className="text-[30px] lg:text-[52px] leading-[1.15] tracking-[-1.5px] text-[#0A0A0A] mb-8"
          style={{ ...font, fontWeight: 200 }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}>
          So we built an AI that does.
        </motion.h2>

        <motion.div
          className="text-[16px] lg:text-[19px] leading-[1.8] text-[#555] max-w-[600px] mx-auto mb-6"
          style={{ ...font, fontWeight: 300 }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.15, duration: 0.6, ease }}>
          <p>
            It lives on your WhatsApp and Instagram.<br />
            It replies the second someone messages you —<br />
            day or night, weekday or weekend, ad traffic or organic.<br />
            Every message. Every time.
          </p>
        </motion.div>

        <motion.p
          className="text-[20px] lg:text-[26px] leading-[1.4] tracking-[-0.5px] text-[#0A0A0A] mb-1"
          style={{ ...font, fontWeight: 700 }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6, ease }}>
          And we build the whole thing for you.
        </motion.p>
        <motion.p
          className="text-[20px] lg:text-[26px] leading-[1.4] tracking-[-0.5px] text-[#2B5BFF]"
          style={{ ...font, fontWeight: 700 }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.6, ease }}>
          You don't touch a single setting.
        </motion.p>

        {/* Mini mockups */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.5, duration: 0.7, ease }}>
          <ChatMockup platform="whatsapp" businessName="Your Shop" messages={miniWA} size="small" loop={true} loopDelay={3000} />
          <ChatMockup platform="instagram" businessName="Your Brand" businessHandle="yourbrand" messages={miniIG} size="small" loop={true} loopDelay={3500} />
        </motion.div>
      </div>
    </section>
  )
}
