import React, { useState } from 'react'
import { useForm } from '@formspree/react'

export default function TrialForm() {
  const [form, setForm] = useState({ name: '', phone: '', business: '' })
  const [focused, setFocused] = useState(null)
  
  const [state, handleSubmit] = useForm('xvzlbqqe')

  const onSubmit = (e) => {
    if (!form.name.trim() || !form.phone.trim()) {
      e.preventDefault()
      return
    }
    handleSubmit(e)
  }

  if (state.succeeded) {
    return (
      <div className="bg-[#161616] border border-[#2a2a2a] rounded-[20px] p-10 text-center"
        style={{ animation: 'fadeUp 0.5s ease both' }}>
        <div className="text-5xl mb-4" style={{ animation: 'popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both' }}>✅</div>
        <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>You're in!</h3>
        <p className="text-gray-400 text-[15px] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          We'll WhatsApp you on +91 {form.phone}<br />
          within 30 minutes to get started.
        </p>
        <p className="text-gray-500 text-sm mt-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Get ready to never miss a lead again. 🚀
        </p>
      </div>
    )
  }

  const inputBase = `w-full bg-[#1e1e1e] border rounded-xl h-[52px] px-4 text-white text-[16px] outline-none transition-all duration-200`
  const inputBorder = (field) => focused === field
    ? 'border-[#2B5BFF] shadow-[0_0_0_3px_rgba(43,91,255,0.15)]'
    : 'border-[#333]'

  return (
    <form onSubmit={onSubmit}
      className="bg-[#161616] border border-[#2a2a2a] rounded-[20px] p-9 lg:p-10">
      <h3 className="text-white text-xl font-bold mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        Start Your Free Week
      </h3>

      <div className="space-y-3.5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          onFocus={() => setFocused('name')}
          onBlur={() => setFocused(null)}
          className={`${inputBase} ${inputBorder('name')}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          required
        />

        <div className={`flex bg-[#1e1e1e] border rounded-xl h-[52px] overflow-hidden transition-all duration-200 ${inputBorder('phone')}`}>
          <div className="flex items-center px-3.5 text-gray-400 text-[15px] border-r border-[#333] shrink-0"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            +91
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="WhatsApp Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
            onFocus={() => setFocused('phone')}
            onBlur={() => setFocused(null)}
            className="flex-1 bg-transparent px-3 text-white text-[16px] outline-none"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            required
          />
        </div>

        <input
          type="text"
          name="business"
          placeholder="Your Business Name (optional)"
          value={form.business}
          onChange={(e) => setForm({ ...form, business: e.target.value })}
          onFocus={() => setFocused('business')}
          onBlur={() => setFocused(null)}
          className={`${inputBase} ${inputBorder('business')}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        />
      </div>

      <button type="submit"
        disabled={state.submitting}
        className="w-full mt-5 bg-[#2B5BFF] hover:bg-[#1A45E8] disabled:bg-[#2B5BFF]/50 disabled:cursor-not-allowed text-white font-bold text-[16px] h-[52px] rounded-full transition-all duration-150 hover:shadow-[0_0_32px_rgba(43,91,255,0.4)] active:scale-[0.98] cursor-pointer"
        style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {state.submitting ? 'Sending...' : 'Start My Free Trial →'}
      </button>

      <p className="text-gray-500 text-[12px] text-center mt-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        We'll WhatsApp you within 30 minutes to get everything started.
      </p>

      <style>{`
        @keyframes popIn { from { transform: scale(0.6); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </form>
  )
}
