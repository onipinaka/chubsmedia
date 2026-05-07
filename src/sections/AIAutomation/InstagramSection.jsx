import React from 'react'
import { motion } from 'framer-motion'
import ChatMockup from '../../components/ChatMockup/ChatMockup'

const font = { fontFamily: "'DM Sans', sans-serif" }
const ease = [0.22, 1, 0.36, 1]

const igMock1 = [
  { from: 'user', text: 'Saw your reel, do you have Kashmir?' },
  { from: 'ai', text: 'Yes! 🏔️ Kashmir is one of our most popular destinations! Here are our best packages 👇', typing: 600 },
  { from: 'ai', type: 'card', card: { type: 'tour', gradient: 'linear-gradient(135deg, #2a1a4a, #5a2d8a)', emoji: '🛕', title: 'Dwarka Somnath Girnar', date: 'Jul 7–11', price: '₹99,900', includes: ['Hotel', 'Darshan', 'Meals'], cta1: 'Book Now', cta2: 'Know More' } },
  { from: 'user', text: 'I want the first one' },
  { from: 'ai', text: 'Amazing choice! 🙏 Sending your booking link now...', typing: 400 },
  { from: 'ai', type: 'success', icon: '✅', title: 'Lead Converted' },
]

const igMock2 = [
  { from: 'user', text: 'Do u do custom trips?' },
  { from: 'ai', text: "Absolutely! 🗺️ Tell me your destination and travel dates and I'll build a custom package just for you!", typing: 500 },
  { from: 'user', text: 'Manali, August, 4 people' },
  { from: 'ai', text: "Perfect! May I have your number so our travel advisor can call?", typing: 400 },
  { from: 'user', text: '9451302544' },
  { from: 'ai', type: 'success', icon: '✅', title: 'Lead Captured' },
]

const igMock3 = [
  { from: 'user', text: 'What are ur charges?' },
  { from: 'ai', text: 'Our packages start from ₹15,000 per person 🌍 What destination interests you?', typing: 500 },
  { from: 'user', text: 'Rajasthan' },
  { from: 'ai', text: 'Rajasthan is gorgeous! 🏰 Here are our top picks 👇', typing: 400 },
  { from: 'ai', type: 'card', card: { type: 'tour', gradient: 'linear-gradient(135deg, #4a2a1a, #8a5a2d)', emoji: '🏰', title: 'Rajasthan Heritage Tour', date: 'Multiple dates', price: '₹22,500 per person', includes: ['Stay', 'Safari', 'Guide'], cta1: 'Book Now', cta2: 'Details' } },
  { from: 'ai', type: 'success', icon: '✅', title: 'Inquiry → Interest → Card Sent' },
]

export default function InstagramSection() {
  return (
    <section className="w-full bg-[#F5F5F3] py-20 lg:py-32 relative overflow-hidden">
      {/* IG gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: 'linear-gradient(90deg, #833AB4, #C13584, #E1306C, #F77737)' }} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        {/* Header — right aligned */}
        <motion.div className="mb-12 lg:mb-16 text-right"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}>
          <div className="flex items-center gap-3 justify-end mb-4">
            <p className="text-[#999] text-[13px] tracking-[1px] uppercase" style={{ ...font, fontWeight: 500 }}>INSTAGRAM</p>
            <div className="w-8 h-[1px] bg-[#999]" />
          </div>
          <h2 className="text-[28px] lg:text-[48px] leading-[1.1] tracking-[-1.5px] text-[#0A0A0A]" style={{ ...font, fontWeight: 200 }}>
            Every Follower.<br />
            <span style={{ fontWeight: 400 }}>A Potential Customer.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left — Staggered IG mockups */}
          <motion.div className="lg:col-span-8 relative min-h-[600px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.1, duration: 0.7, ease }}>
            {/* Main mockup */}
            <div className="relative z-10">
              <ChatMockup platform="instagram" businessName="Chubs Travels" businessHandle="chubstravels" messages={igMock1} size="large" loop={true} loopDelay={4000} />
            </div>
            {/* Top-right overlap */}
            <div className="absolute top-[-20px] right-0 z-20 hidden lg:block">
              <ChatMockup platform="instagram" businessName="Chubs Travels" businessHandle="chubstravels" messages={igMock2} size="small" tilt={2} loop={true} loopDelay={5000} />
            </div>
            {/* Bottom-left overlap */}
            <div className="absolute bottom-[-30px] left-[60px] z-0 hidden lg:block">
              <ChatMockup platform="instagram" businessName="Chubs Travels" businessHandle="chubstravels" messages={igMock3} size="small" tilt={-2} loop={true} loopDelay={6000} />
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div className="lg:col-span-4 lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.6, ease }}>
            <p className="text-[16px] lg:text-[17px] leading-[1.8] text-[#555] mb-8" style={{ ...font, fontWeight: 300 }}>
              When someone DMs your Instagram — from an ad, a reel, a story, a post — the AI is already there, waiting.
              <br /><br />
              It knows your tours. Your prices. Your availability. Your tone.
              <br /><br />
              It sends the right card at the right time. No one slips through the cracks. No ad budget wasted.
              <br /><br />
              <span style={{ fontWeight: 700, color: '#0A0A0A' }}>
                Instagram becomes your 24/7 booking counter.
              </span>
            </p>
            <a href="#trial"
              className="inline-block bg-[#2B5BFF] hover:bg-[#1A45E8] text-white px-7 py-3.5 rounded-full text-[15px] transition-all duration-150 hover:scale-[1.03] active:scale-[0.97] hover:shadow-[0_0_32px_rgba(43,91,255,0.35)]"
              style={{ ...font, fontWeight: 700 }}>
              See It On My Business →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
