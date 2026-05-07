import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Works', path: '/works' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Automation', path: '/services/ai-automation' },
  ]

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <nav className="w-full bg-white py-6 lg:py-8 sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/chubslogo.svg" alt="CHubs" className="h-8 lg:h-10" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-satoshi-medium text-[#161616] font-medium text-[16px] leading-[25.6px] hover:text-blue-600 transition-colors duration-300 ${
                    location.pathname === item.path ? 'text-blue-600' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="font-satoshi-medium text-[#161616] font-medium text-[16px] leading-[25.6px] px-6 py-3 rounded-full border border-[#E5E5E5] hover:border-[#161616] transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // Close Icon (X)
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11" stroke="#161616" strokeWidth="1.5"/>
                  <path d="M8 8L16 16M16 8L8 16" stroke="#161616" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ) : (
                // Hamburger Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="#161616" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-[88px] left-0 w-full bg-white z-40 border-t border-[#E5E5E5]"
          >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-8">
              <div className="flex flex-col items-center gap-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`text-[#161616] font-normal text-lg ${
                        location.pathname === item.path ? 'text-blue-600' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                >
                  <Link
                    to="/contact"
                    className="text-[#161616] font-normal text-lg px-8 py-3 rounded-full border border-[#E5E5E5]"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar