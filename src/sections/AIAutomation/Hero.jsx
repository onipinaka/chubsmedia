import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ChatMockup from '../../components/ChatMockup/ChatMockup'

const ease = [0.22, 1, 0.36, 1]
const font = { fontFamily: "'DM Sans', sans-serif" }

const waMessages = [
  { from: 'user', text: 'Hi, saw your ad for Kashmir trip' },
  { from: 'ai', text: 'Hi! 👋 Great timing — Kashmir is stunning this season! 🏔️ How many people and which dates are you thinking?', typing: 700 },
  { from: 'user', text: '2 people, July' },
  { from: 'ai', text: "Perfect! Here's our most popular July package 👇", typing: 500 },
  { from: 'ai', type: 'card', card: { type: 'tour', gradient: 'linear-gradient(135deg, #1a3a4a, #2d6a8a)', emoji: '🏔️', title: 'Dwarka Yatra', date: 'Jul 7–11, 2026', price: '₹99,900 per person', includes: ['Hotel', 'Transfers', 'Sightseeing'], cta1: 'Book Now', cta2: 'Know More' } },
  { from: 'user', text: 'Looks great, book it!' },
  { from: 'ai', type: 'success', icon: '✅', title: 'Booked. Lead Converted.', ref: 'Ref #TRV-2026-0847' },
]

const igMessages = [
  { from: 'user', text: 'Hey' },
  { from: 'ai', text: 'Hello! 😊 Looking for something from our latest collection?', typing: 600 },
  { from: 'user', text: 'Yeah saw the ad, show me dresses' },
  { from: 'ai', text: 'Here are our bestsellers! 🛍️', typing: 500 },
  { from: 'ai', type: 'card', card: { type: 'product', gradient: 'linear-gradient(135deg, #2d1a3a, #6a2d8a)', emoji: '👗', title: 'Floral Summer Dress', sizes: 'S  M  L  XL', price: '₹1,299', originalPrice: '₹2,499', rating: '⭐ 4.8 (124 reviews)', cta1: 'Buy Now', cta2: 'View More' } },
  { from: 'user', text: 'Love it! Order' },
  { from: 'ai', type: 'success', icon: '✅', title: 'Sale. While you were sleeping.' },
]

export default function Hero() {
  return (
    <section className="w-full bg-white pt-20 lg:pt-2 pb-16 lg:pb-20 relative overflow-hidden">
      {/* Faint blue radial behind phones */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[600px] h-[600px] bg-[#2B5BFF] opacity-[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — Text */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <motion.div className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}>
              <div className="w-8 h-[1px] bg-[#999]" />
              <p className="text-[#999] text-[13px] tracking-wide uppercase font-bold" style={{ ...font, fontWeight: 500 }}>
                Instagram & WhatsApp AI Automation
              </p>
            </motion.div>

            {/* Headline */}
            {['Your Ad Got', 'The Click.', 'Now What?'].map((line, i) => (
              <motion.h1 key={i}
                className="text-[#0A0A0A] leading-[1.05] tracking-[-2px]"
                style={{ ...font, fontWeight: i === 2 ? 300 : 200, fontSize: 'clamp(36px, 5.5vw, 72px)' }}
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.08 + i * 0.12, duration: 0.7, ease }}>
                {line}
              </motion.h1>
            ))}

            {/* Subtext */}
            <motion.p className="text-[#777] text-[15px] lg:text-[17px] leading-[1.6] mt-4 max-w-[480px]"
              style={{ ...font, fontWeight: 300 }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.46, duration: 0.6, ease }}>
              Someone just DM'd you from your Instagram ad. They're interested right now — this second. But you're busy. And in 10 minutes, they'll forget why they even clicked.
              <span className="block mt-2">
                Our AI replies instantly. Qualifies them. Sends your offer. And closes the sale.
              </span>
              <span className="block mt-2 text-[16px] lg:text-[18px]" style={{ fontWeight: 700, color: '#0A0A0A' }}>
                We build it. We run it. You just watch.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex flex-wrap items-center gap-3 mt-6"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5, ease }}>
              <a href="#trial"
                className="bg-[#2B5BFF] hover:bg-[#1A45E8] text-white px-8 py-4 rounded-full text-[15px] transition-all duration-150 hover:scale-[1.03] active:scale-[0.97] hover:shadow-[0_0_32px_rgba(43,91,255,0.35)]"
                style={{ ...font, fontWeight: 700 }}>
                Get 1 Week Free →
              </a>
              <a href="#how-it-works"
                className="border border-[#0A0A0A] text-[#0A0A0A] px-7 py-4 rounded-full text-[15px] transition-all duration-150 hover:bg-[#0A0A0A] hover:text-white"
                style={{ ...font, fontWeight: 500 }}>
                See How It Works ↓
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div className="flex flex-wrap items-center gap-2 lg:gap-3 mt-5 text-[13px] tracking-wide"
              style={{ ...font, fontWeight: 500 }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.72, duration: 0.5 }}>
              <span className="text-[#2B5BFF] bg-[#2B5BFF]/10 px-3 py-1.5 rounded-md font-bold">Starting at ₹3,000/month</span>
              <span className="text-[#777]">Live in 48 hours</span>
              <span className="text-[#ccc]">•</span>
              <span className="text-[#777]">No work from you</span>
            </motion.div>
          </div>

          {/* Right — Phones */}
          <motion.div className="lg:col-span-5 relative flex justify-center items-center min-h-[500px]"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.84, duration: 0.8, ease }}>
            {/* WA phone — behind, tilted left */}
            <div className="absolute left-0 top-4 lg:left-[-20px]" style={{ animation: 'phoneFloat1 4s ease-in-out infinite' }}>
              <ChatMockup
                platform="whatsapp"
                businessName="Anaghalaxmi Tours"
                messages={waMessages}
                size="medium"
                tilt={-4}
                zIndex={1}
                loop={true}
                loopDelay={4000}
              />
            </div>
            {/* IG phone — front, tilted right */}
            <div className="absolute right-0 top-16 lg:right-[-10px]" style={{ animation: 'phoneFloat2 4.5s ease-in-out infinite' }}>
              <ChatMockup
                platform="instagram"
                businessName="StyleHaus"
                businessHandle="stylehausin"
                messages={igMessages}
                size="medium"
                tilt={3}
                zIndex={2}
                loop={true}
                loopDelay={5000}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes phoneFloat1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes phoneFloat2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  )
}
