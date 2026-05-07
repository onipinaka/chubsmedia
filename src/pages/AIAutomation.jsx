/**
 * AI Automation Services Page — Chubs Media
 * 
 * Animation System: Framer Motion (stagger entrances, scroll-triggered reveals)
 * + CSS animations (phone float, chat bubbles, SVG line draw)
 * All animations respect prefers-reduced-motion via media queries.
 * 
 * Sections: Hero → AdCallout → SolutionStatement → WhatsApp → Instagram → DoneForYou → BeforeAfter → ProofWall → TrialCTA
 * Navbar & Footer are rendered by the App.jsx wrapper.
 */
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../sections/AIAutomation/Hero'
import ProblemSolution from '../sections/AIAutomation/ProblemSolution'
import PlatformsSection from '../sections/AIAutomation/PlatformsSection'
import DoneForYou from '../sections/AIAutomation/DoneForYou'
import BeforeAfter from '../sections/AIAutomation/BeforeAfter'
// import ProofWall from '../sections/AIAutomation/ProofWall'
import TrialCTA from '../sections/AIAutomation/TrialCTA'

export default function AIAutomation() {
  return (
    <div className="bg-[#F5F5F3] w-full overflow-hidden">
      <Helmet>
        <title>AI Automation Services | Chubs Media</title>
        <meta property="og:title" content="AI Automation Services | Chubs Media" />
        <meta property="og:description" content="Automate your DMs, save time, and close more leads with our custom AI solutions." />
        <meta property="og:image" content="https://chubsmedia.tech/ai-automation-og.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Hero />
      <ProblemSolution />
      <PlatformsSection />
      <DoneForYou />
      <BeforeAfter />
      {/* <ProofWall /> */}
      <TrialCTA />
    </div>
  )
}
