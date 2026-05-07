import React from 'react'
import { motion } from 'framer-motion'
import ChatMockup from '../../components/ChatMockup/ChatMockup'

const font = { fontFamily: "'DM Sans', sans-serif" }
const ease = [0.22, 1, 0.36, 1]

const waMockup = [
  { from: 'user', text: 'Hi saw ur ad for Goa trip' },
  { from: 'ai', text: 'Hi! 👋 Great choice — Goa is amazing right now! 🌊 For how many people, and which month are you thinking?', typing: 700 },
  { from: 'user', text: '3 people, June end' },
  { from: 'ai', text: "Got it! Our most popular June package for 3 👇", typing: 500 },
  { from: 'ai', type: 'card', card: { type: 'tour', gradient: 'linear-gradient(135deg, #0d3b4a, #1a6a7a)', emoji: '🏖️', title: 'Goa Beach Escape', date: 'Jun 28 – Jul 2', price: '₹74,997 total', includes: ['Hotel', 'Transfers', 'Sightseeing'], cta1: 'Book Now', cta2: 'Know More' } },
  { from: 'user', text: "Perfect! Book it" },
  { from: 'ai', type: 'success', icon: '✅', title: 'Booking Confirmed', ref: 'Ref #TRV-291' },
]

const igSupportMockup = [
  { from: 'user', text: 'Hey, my order #TG882 hasn\'t arrived yet' },
  { from: 'ai', text: 'Let me check that for you right away! 🔍', typing: 600 },
  { from: 'ai', text: 'Your order is out for delivery today via BlueDart. Track here: link/123', typing: 500 },
  { from: 'user', text: 'Oh awesome, thank you!' },
  { from: 'ai', type: 'success', icon: '🤝', title: 'Support Handled' },
]

const waServiceMockup = [
  { from: 'user', text: 'Need a haircut appointment today' },
  { from: 'ai', text: 'Hi there! ✂️ We have openings at 2:00 PM and 4:30 PM today. Which works better?', typing: 600 },
  { from: 'user', text: '4:30 PM works' },
  { from: 'ai', text: 'Perfect. See you at 4:30 PM! 💇‍♀️', typing: 400 },
  { from: 'ai', type: 'success', icon: '✅', title: 'Appointment Booked' },
]

export default function PlatformsSection() {
  return (
    <section className="w-full bg-white pt-20 pb-10 lg:pt-32 lg:pb-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <motion.div className="mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#999]" />
            <p className="text-[#999] text-[13px] tracking-[2px] uppercase" style={{ ...font, fontWeight: 700 }}>THE FIX</p>
            <div className="w-8 h-[1px] bg-[#999]" />
          </div>
          <h2 className="text-[32px] lg:text-[48px] leading-[1.1] tracking-[-1px] text-[#0A0A0A] mb-4" style={{ ...font, fontWeight: 200 }}>
            One AI. Two Platforms.<br />
            <span style={{ fontWeight: 400 }}>Zero Effort From You.</span>
          </h2>
        </motion.div>

        {/* Mockups Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center mb-20">
          <motion.div className="w-full max-w-[360px] flex justify-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.7, ease }}>
            <ChatMockup
              platform="whatsapp"
              businessName="Chubs Travels"
              messages={waMockup}
              size="medium"
              loop={true}
              loopDelay={4000}
            />
          </motion.div>

          <motion.div className="w-full max-w-[360px] flex justify-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.7, ease }}>
            <ChatMockup
              platform="instagram"
              businessName="TechGear"
              businessHandle="techgear.in"
              messages={igSupportMockup}
              size="medium"
              loop={true}
              loopDelay={4500}
            />
          </motion.div>

          <motion.div className="w-full max-w-[360px] flex justify-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.7, ease }}>
            <ChatMockup
              platform="whatsapp"
              businessName="Glow Salon"
              messages={waServiceMockup}
              size="medium"
              loop={true}
              loopDelay={5000}
            />
          </motion.div>
        </div>

        {/* Footer Text & CTA */}
        <motion.div className="max-w-[700px] mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.6, ease }}>
          <p className="text-[18px] lg:text-[20px] leading-[1.6] text-[#555] mb-4" style={{ ...font, fontWeight: 300 }}>
            Both conversations happened without a single human reply.
          </p>
          <p className="text-[20px] lg:text-[24px] leading-[1.4] tracking-[-0.5px] text-[#0A0A0A] mb-10" style={{ ...font, fontWeight: 700 }}>
            We build it, train it, and run it — entirely for you.
          </p>
          
          <a href="#how-it-works"
            className="inline-block border border-[#0A0A0A] text-[#0A0A0A] px-8 py-4 rounded-full text-[15px] transition-all duration-150 hover:bg-[#0A0A0A] hover:text-white"
            style={{ ...font, fontWeight: 500 }}>
            See How It Works ↓
          </a>
        </motion.div>

      </div>
    </section>
  )
}
