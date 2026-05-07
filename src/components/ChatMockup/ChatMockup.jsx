import React, { useState, useEffect, useRef } from 'react'

/* ── Typing Dots ── */
function TypingDots({ platform }) {
  const bg = platform === 'whatsapp' ? 'bg-[#202C33]' : 'bg-[#262626]'
  return (
    <div className={`inline-flex items-center gap-1 ${bg} px-4 py-2.5 rounded-2xl rounded-bl-sm`}>
      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
    </div>
  )
}

/* ── Product / Tour Card ── */
function ProductCard({ card, platform }) {
  if (card.type === 'tour') {
    return (
      <div className="rounded-xl overflow-hidden max-w-[220px]" style={{ background: card.gradient || 'linear-gradient(135deg, #1a3a4a, #2d6a8a)' }}>
        <div className="p-3">
          <p className="text-2xl mb-1">{card.emoji}</p>
          <p className="font-bold text-white text-[12px] leading-tight">{card.title}</p>
          <p className="text-white/60 text-[10px] mt-0.5">{card.date}</p>
          <p className="text-white font-bold text-[13px] mt-1">{card.price}</p>
          {card.includes && (
            <div className="flex gap-1.5 mt-1.5 flex-wrap">
              {card.includes.map((t, i) => (
                <span key={i} className="text-[8px] bg-white/15 text-white/80 px-1.5 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
          )}
          <div className="flex gap-1.5 mt-2">
            <span className="text-[10px] bg-white text-black font-bold px-3 py-1 rounded-full">{card.cta1}</span>
            <span className="text-[10px] border border-white/40 text-white px-2.5 py-1 rounded-full">{card.cta2}</span>
          </div>
        </div>
      </div>
    )
  }
  if (card.type === 'product') {
    return (
      <div className="rounded-xl overflow-hidden max-w-[220px]" style={{ background: card.gradient || 'linear-gradient(135deg, #2d1a3a, #6a2d8a)' }}>
        <div className="p-3">
          <p className="text-2xl mb-1">{card.emoji}</p>
          <p className="font-bold text-white text-[12px]">{card.title}</p>
          {card.sizes && <p className="text-white/50 text-[9px] mt-0.5">{card.sizes}</p>}
          <div className="flex items-baseline gap-1.5 mt-1">
            <span className="text-white font-bold text-[13px]">{card.price}</span>
            {card.originalPrice && <span className="text-white/40 line-through text-[10px]">{card.originalPrice}</span>}
          </div>
          {card.rating && <p className="text-[9px] text-white/60 mt-0.5">{card.rating}</p>}
          <div className="flex gap-1.5 mt-2">
            <span className="text-[10px] bg-white text-black font-bold px-3 py-1 rounded-full">{card.cta1}</span>
            <span className="text-[10px] border border-white/40 text-white px-2.5 py-1 rounded-full">{card.cta2}</span>
          </div>
        </div>
      </div>
    )
  }
  if (card.type === 'support') {
    return (
      <div className="rounded-xl bg-[#1a2a1a] border border-white/10 max-w-[220px] p-3">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-sm">{card.icon}</span>
          <span className="text-[10px] text-white/60">{card.label}</span>
        </div>
        <p className="text-green-400 text-[11px] font-bold">{card.status}</p>
        <p className="text-white/70 text-[10px] mt-1 whitespace-pre-line">{card.detail}</p>
        {card.cta && <span className="inline-block text-[10px] bg-white/10 text-white px-3 py-1 rounded-full mt-2">{card.cta}</span>}
      </div>
    )
  }
  return null
}

/* ── Success Card ── */
function SuccessCard({ card }) {
  return (
    <div className="flex justify-center my-1.5">
      <div className="bg-green-900/30 border border-green-600/30 text-green-400 text-[11px] font-bold px-3.5 py-2 rounded-xl text-center">
        <span className="text-sm mr-1">{card.icon || '✅'}</span>
        {card.title || card.text}
        {card.ref && <p className="text-[9px] text-green-500/60 mt-0.5">{card.ref}</p>}
      </div>
    </div>
  )
}

/* ── Single Message Bubble ── */
function MessageBubble({ msg, platform, visible }) {
  const isUser = msg.from === 'user'

  if (msg.type === 'card') return visible ? <div className="flex justify-start mb-2"><ProductCard card={msg.card} platform={platform} /></div> : null
  if (msg.type === 'success') return visible ? <SuccessCard card={msg} /> : null

  const bubbleStyles = {
    whatsapp: {
      user: 'bg-[#005C4B] text-white rounded-2xl rounded-br-sm',
      ai: 'bg-[#202C33] text-white rounded-2xl rounded-bl-sm',
    },
    instagram: {
      user: 'bg-[#3797F0] text-white rounded-2xl rounded-br-sm',
      ai: 'bg-[#262626] text-white rounded-2xl rounded-bl-sm',
    },
  }

  const style = bubbleStyles[platform]?.[isUser ? 'user' : 'ai'] || bubbleStyles.whatsapp.ai

  return visible ? (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-1.5`}
      style={{ animation: 'msgSlide 0.25s ease both' }}>
      <div className={`${style} px-3 py-2 max-w-[82%] text-[11px] leading-[1.5]`}>
        {msg.text}
      </div>
    </div>
  ) : null
}

/* ── Main ChatMockup ── */
export default function ChatMockup({
  platform = 'whatsapp',
  businessName = 'Business',
  businessHandle,
  messages = [],
  loop = true,
  loopDelay = 3000,
  size = 'medium',
  tilt = 0,
  zIndex = 1,
  className = '',
}) {
  const [visibleCount, setVisibleCount] = useState(0)
  const [showTyping, setShowTyping] = useState(false)
  const [key, setKey] = useState(0)
  const timeoutRef = useRef(null)
  const chatContainerRef = useRef(null)

  const sizeMap = { small: 'w-[220px]', medium: 'w-[260px]', large: 'w-[300px]' }

  useEffect(() => {
    setVisibleCount(0)
    setShowTyping(false)
    let i = 0

    const playNext = () => {
      if (i >= messages.length) {
        if (loop) {
          timeoutRef.current = setTimeout(() => {
            setKey(k => k + 1)
          }, loopDelay)
        }
        return
      }
      const msg = messages[i]
      const delay = msg.delay || (i * 800)
      const typingTime = msg.typing || 0

      timeoutRef.current = setTimeout(() => {
        if (msg.from === 'ai' && typingTime > 0) {
          setShowTyping(true)
          timeoutRef.current = setTimeout(() => {
            setShowTyping(false)
            setVisibleCount(i + 1)
            i++
            playNext()
          }, typingTime)
        } else {
          setVisibleCount(i + 1)
          i++
          playNext()
        }
      }, i === 0 ? 400 : (msg.delay ? msg.delay - (messages[i - 1]?.delay || 0) : 700))
    }

    playNext()
    return () => clearTimeout(timeoutRef.current)
  }, [key, messages, loop, loopDelay])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [visibleCount, showTyping])

  const isWA = platform === 'whatsapp'
  const bgColor = isWA ? 'bg-[#111B21]' : 'bg-[#000]'
  const headerBg = isWA ? 'bg-[#1F2C34]' : 'bg-[#000] border-b border-white/10'

  return (
    <div className={`${sizeMap[size]} ${className}`}
      style={{ transform: `rotate(${tilt}deg)`, zIndex, position: 'relative' }}>
      {/* Phone frame */}
      <div className={`${bgColor} rounded-[28px] overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.25)] border border-white/10`}>
        {/* Status bar */}
        <div className={`${headerBg} px-3 pt-2.5 pb-2`}>
          <div className="flex items-center justify-between text-white/50 text-[9px] mb-2">
            <span>9:41</span>
            <div className="flex gap-1 items-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.95 3 3 6.95 3 12s3.95 9 9 9 9-4 9-9-4-9-9-9z" opacity="0.3"/><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9z"/></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="17" y="6" width="4" height="14" rx="1"/><rect x="11" y="9" width="4" height="11" rx="1"/><rect x="5" y="12" width="4" height="8" rx="1"/></svg>
            </div>
          </div>
          {/* Chat header */}
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${isWA ? 'bg-[#25D366]' : ''}`}
              style={!isWA ? { background: 'linear-gradient(45deg, #833AB4, #E1306C, #F77737)' } : {}}>
              {businessName[0]}
            </div>
            <div>
              <p className="text-white text-[12px] font-bold leading-tight">{businessName}</p>
              {businessHandle && <p className="text-white/40 text-[9px]">@{businessHandle}</p>}
              {!businessHandle && <p className="text-green-400 text-[9px]">online</p>}
            </div>
          </div>
        </div>

        {/* Chat area */}
        <div 
          ref={chatContainerRef}
          className={`px-2.5 py-3 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${size === 'small' ? 'h-[260px]' : size === 'large' ? 'h-[420px]' : 'h-[340px]'}`}
          style={isWA ? { backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' } : {}}>
          {messages.slice(0, visibleCount).map((msg, i) => (
            <MessageBubble key={i} msg={msg} platform={platform} visible={true} />
          ))}
          {showTyping && (
            <div className="flex justify-start mb-1.5">
              <TypingDots platform={platform} />
            </div>
          )}
        </div>

        {/* Input bar */}
        <div className={`${isWA ? 'bg-[#1F2C34]' : 'bg-[#000] border-t border-white/10'} px-2.5 py-2 flex items-center gap-2`}>
          <div className={`flex-1 ${isWA ? 'bg-[#2A3942]' : 'bg-[#262626]'} rounded-full px-3 py-1.5`}>
            <span className="text-white/30 text-[10px]">Type a message...</span>
          </div>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center ${isWA ? 'bg-[#25D366]' : ''}`}
            style={!isWA ? { background: 'linear-gradient(45deg, #833AB4, #E1306C)' } : {}}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes msgSlide {
          from { opacity: 0; transform: translateX(${'{'}isUser ? '12px' : '-12px'{'}'}); }
          to { opacity: 1; transform: translateX(0); }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
