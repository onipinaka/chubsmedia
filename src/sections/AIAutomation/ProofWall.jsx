import React from 'react'
import { motion } from 'framer-motion'
import ChatMockup from '../../components/ChatMockup/ChatMockup'

const font = { fontFamily: "'DM Sans', sans-serif" }
const ease = [0.22, 1, 0.36, 1]

const phones = [
  {
    platform: 'whatsapp', businessName: 'Chubs Travels', size: 'small',
    messages: [
      { from: 'user', text: 'Kashmir trip for 2?' },
      { from: 'ai', text: 'Hi! 🏔️ Great choice!', typing: 400 },
      { from: 'ai', type: 'card', card: { type: 'tour', gradient: 'linear-gradient(135deg, #1a3a4a, #2d6a8a)', emoji: '🏔️', title: 'Kashmir 5N/6D', date: 'Jul 2026', price: '₹45,000', cta1: 'Book', cta2: 'More' } },
      { from: 'ai', type: 'success', icon: '✅', title: 'Booked' },
    ],
  },
  {
    platform: 'instagram', businessName: 'TechGear', businessHandle: 'techgear.in', size: 'small',
    messages: [
      { from: 'user', text: 'Hey, my order #TG882 hasn\'t arrived yet' },
      { from: 'ai', text: 'Let me check that for you right away! 🔍', typing: 600 },
      { from: 'ai', text: 'Your order is out for delivery today via BlueDart. Track here: link/123', typing: 500 },
      { from: 'user', text: 'Oh awesome, thank you!' },
      { from: 'ai', type: 'success', icon: '🤝', title: 'Support Handled' },
    ],
  },
  {
    platform: 'whatsapp', businessName: 'Glow Salon', size: 'small',
    messages: [
      { from: 'user', text: 'Need a haircut appointment today' },
      { from: 'ai', text: 'Hi there! ✂️ We have openings at 2:00 PM and 4:30 PM today. Which works better?', typing: 600 },
      { from: 'user', text: '4:30 PM works' },
      { from: 'ai', text: 'Perfect. See you at 4:30 PM! 💇‍♀️', typing: 400 },
      { from: 'ai', type: 'success', icon: '✅', title: 'Appointment Booked' },
    ],
  }
]

export default function ProofWall() {
  return (
    <section className="w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#999]" />
            <p className="text-[#999] text-[13px] tracking-[1px] uppercase" style={{ ...font, fontWeight: 500 }}>REAL CONVERSATIONS</p>
          </div>
          <h2 className="text-[28px] lg:text-[48px] leading-[1.1] tracking-[-1.5px] text-[#0A0A0A]" style={{ ...font, fontWeight: 200 }}>
            This Is What It Looks Like<br />
            <span style={{ fontWeight: 400 }}>On Your Account.</span>
          </h2>
        </motion.div>
      </div>

      {/* Staggered Grid */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-4 lg:mt-12 relative">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[#2B5BFF] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 justify-items-center relative z-10 pb-12">
          {phones.map((phone, i) => (
            <motion.div key={i}
              className={`w-full max-w-[320px] ${i === 1 ? 'md:mt-16' : 'md:mt-0'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.7, ease }}>
              <div className="shadow-[0_20px_40px_rgba(0,0,0,0.06)] rounded-[32px] bg-white ring-1 ring-black/5 transition-transform hover:-translate-y-2 duration-300">
                <ChatMockup
                  platform={phone.platform}
                  businessName={phone.businessName}
                  businessHandle={phone.businessHandle}
                  messages={phone.messages}
                  size="small"
                  loop={true}
                  loopDelay={3000 + i * 500}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
