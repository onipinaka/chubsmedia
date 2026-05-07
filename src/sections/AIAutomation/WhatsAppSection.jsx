import React from 'react'
import { motion } from 'framer-motion'
import ChatMockup from '../../components/ChatMockup/ChatMockup'

const font = { fontFamily: "'DM Sans', sans-serif" }
const ease = [0.22, 1, 0.36, 1]

const waMockupA = [
  { from: 'user', text: 'Hi saw ur ad for Goa trip' },
  { from: 'ai', text: 'Hi! 👋 Great choice — Goa is amazing right now! 🌊 For how many people, and which month are you thinking?', typing: 700 },
  { from: 'user', text: '3 people, June end' },
  { from: 'ai', text: "Got it! Our most popular June package for 3 👇", typing: 500 },
  { from: 'ai', type: 'card', card: { type: 'tour', gradient: 'linear-gradient(135deg, #0d3b4a, #1a6a7a)', emoji: '🏖️', title: 'Goa Beach Escape', date: 'Jun 28 – Jul 2', price: '₹74,997 total', includes: ['Hotel', 'Transfers', 'Sightseeing'], cta1: 'Book Now', cta2: 'Know More' } },
  { from: 'user', text: "What's included?" },
  { from: 'ai', text: 'Great question! It includes:\n🏨 3-star beachfront hotel\n🚗 Airport transfers both ways\n🗺️ 2 full-day sightseeing tours\n🍳 Daily breakfast\nAnything else you\'d like to know?', typing: 600 },
  { from: 'user', text: 'Perfect! Book it' },
  { from: 'ai', type: 'success', icon: '✅', title: 'Booking Confirmed', ref: 'Ref #TRV-291' },
]

const waMockupB = [
  { from: 'user', text: "My order hasn't arrived yet" },
  { from: 'ai', text: "I'm sorry about that! Let me check your order right now 🔍", typing: 600 },
  { from: 'ai', type: 'card', card: { type: 'support', icon: '🎫', label: 'Order #4821', status: '✅ In Transit', detail: 'Dispatched May 30\nExpected: Jun 3', cta: 'Track Order' } },
  { from: 'ai', text: 'Your order is on the way! 🚚 Expected delivery: Tomorrow. Can I help with anything else?', typing: 400 },
  { from: 'user', text: 'No thanks, that\'s all' },
  { from: 'ai', text: 'Have a great day! 😊' },
  { from: 'ai', type: 'success', icon: '✅', title: 'Issue Resolved Automatically' },
]

export default function WhatsAppSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#999]" />
            <p className="text-[#999] text-[13px] tracking-[1px] uppercase" style={{ ...font, fontWeight: 500 }}>WHATSAPP</p>
          </div>
          <h2 className="text-[28px] lg:text-[48px] leading-[1.1] tracking-[-1.5px] text-[#0A0A0A]" style={{ ...font, fontWeight: 200 }}>
            Replies in Seconds.<br />
            <span style={{ fontWeight: 400 }}>Converts in Minutes.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left — Text */}
          <motion.div className="lg:col-span-4 lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.6, ease }}>
            <p className="text-[16px] lg:text-[17px] leading-[1.8] text-[#555] mb-6" style={{ ...font, fontWeight: 300 }}>
              When someone messages your WhatsApp — from your ad, your bio link, or just searching — our AI greets them like your best salesperson.
              <br /><br />
              It asks the right questions. Sends your packages or products. Handles objections. Books the appointment or takes the order.
              <br /><br />
              <span style={{ fontWeight: 700, color: '#0A0A0A' }}>
                Your team only steps in when the customer is ready to pay.
              </span>
            </p>
            <p className="text-[14px] leading-[1.6] text-[#aaa] italic" style={{ ...font, fontWeight: 300 }}>
              "We train the AI on your actual products, prices, and tone. It sounds like you — not a bot."
            </p>
          </motion.div>

          {/* Right — Two WA Mockups */}
          <motion.div className="lg:col-span-8 flex flex-col sm:flex-row items-start gap-6 justify-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.2, duration: 0.7, ease }}>
            <ChatMockup
              platform="whatsapp"
              businessName="Chubs Travels"
              messages={waMockupA}
              size="medium"
              loop={true}
              loopDelay={4000}
            />
            <ChatMockup
              platform="whatsapp"
              businessName="QuickMart"
              messages={waMockupB}
              size="medium"
              loop={true}
              loopDelay={5000}
            />
          </motion.div>
        </div>

        {/* Below label */}
        <motion.p className="text-center text-[13px] text-[#aaa] mt-10" style={{ ...font, fontWeight: 400 }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}>
          Both conversations happened without a single human reply.
        </motion.p>
      </div>
    </section>
  )
}
