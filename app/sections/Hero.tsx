'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../components/LangContext'

export default function Hero() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,170,${p.opacity})`
        ctx.fill()
      })
      // Lines between close particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x, dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(0,212,170,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animId)
  }, [])

  const stats = [
    { val: '24/7', ar: 'بدون توقف', en: 'Non-Stop' },
    { val: '48h', ar: 'وقت التركيب', en: 'Setup Time' },
    { val: '5', ar: 'أيام مجانية', en: 'Free Days' },
    { val: '98%', ar: 'معدل الرد', en: 'Reply Rate' },
  ]

  return (
    <section style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', padding: '100px 5% 60px', overflow: 'hidden' }}>
      
      {/* Particles Canvas */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Gradient Orbs */}
      <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)', top: '-100px', right: '-100px', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,184,148,0.04) 0%, transparent 70%)', bottom: '0', left: '0', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>

        {/* Left Content */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,212,170,0.08)', border: '1px solid rgba(0,212,170,0.2)', borderRadius: '20px', padding: '6px 16px', fontSize: '11px', color: '#00D4AA', fontWeight: '700', marginBottom: '24px' }}>
              <div style={{ width: '6px', height: '6px', background: '#00D4AA', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
              {isRTL ? 'الكويت — ذكاء اصطناعي مخصص للخليج' : 'Kuwait — AI Built for the Gulf'}
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(32px,4vw,58px)', fontWeight: '900', lineHeight: '1.2', marginBottom: '20px', color: '#EDF2FF' }}>
            {isRTL ? (
              <>وكلاء ذكاء اصطناعي<br /><span style={{ color: '#00D4AA' }}>يعملون بدلاً عنك</span><br />24 ساعة — 7 أيام</>
            ) : (
              <>AI Agents That<br /><span style={{ color: '#00D4AA' }}>Work Instead of You</span><br />24 Hours — 7 Days</>
            )}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '15px', color: '#8494B0', lineHeight: '1.8', marginBottom: '36px', maxWidth: '500px' }}>
            {isRTL
              ? 'نبني موظفاً ذكياً مخصصاً لبيزنسك — يرد، يحجز، يذكّر، ويبيع. على أي منصة تستخدمها. بدون تغيير في طريقة شغلك.'
              : 'We build a custom AI employee for your business — it replies, books, reminds, and sells. On any platform you use. Without changing your workflow.'}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="https://calendly.com/logictask7/30min" target="_blank" rel="noreferrer"
              style={{ padding: '14px 28px', borderRadius: '10px', background: '#00D4AA', color: '#060D1A', textDecoration: 'none', fontSize: '14px', fontWeight: '700', boxShadow: '0 0 24px rgba(0,212,170,0.3)', transition: 'all 0.2s' }}>
              {isRTL ? 'ابدأ مجاناً — 5 أيام' : 'Start Free — 5 Days'}
            </a>
            <a href="https://wa.me/96550441803" target="_blank" rel="noreferrer"
              style={{ padding: '14px 28px', borderRadius: '10px', background: 'transparent', border: '1px solid rgba(0,212,170,0.3)', color: '#EDF2FF', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
              {isRTL ? 'تحدث معنا' : 'Talk to Us'}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginTop: '48px' }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '26px', fontWeight: '900', color: '#00D4AA' }}>{s.val}</div>
                <div style={{ fontSize: '10px', color: '#5E7090', marginTop: '2px' }}>{isRTL ? s.ar : s.en}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Chat Demo */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <div style={{ background: 'rgba(9,19,35,0.9)', border: '1px solid rgba(0,212,170,0.15)', borderRadius: '20px', padding: '20px', backdropFilter: 'blur(20px)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
            
            {/* Chat Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', paddingBottom: '14px', borderBottom: '1px solid rgba(0,212,170,0.1)' }}>
              <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg,#00D4AA,#00B894)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '900', color: '#060D1A' }}>س</div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '800' }}>سارة AI</div>
                <div style={{ fontSize: '9px', color: '#00D4AA' }}>● {isRTL ? 'نشطة الآن' : 'Active Now'}</div>
              </div>
              <div style={{ marginRight: 'auto', marginLeft: 'auto', fontSize: '10px', color: '#5E7090' }}>WhatsApp</div>
            </div>

            {/* Messages */}
            {[
              { from: 'user', ar: 'السلام عليكم، أبي أحجز موعد', en: 'Hi, I want to book an appointment', delay: 0.4 },
              { from: 'sara', ar: 'وعليكم السلام! يسعدني أساعدك. شو الخدمة اللي تبيها؟', en: 'Hello! Happy to help. What service do you need?', delay: 0.8 },
              { from: 'user', ar: 'فحص عام، بكرا الصبح', en: 'General checkup, tomorrow morning', delay: 1.2 },
              { from: 'sara', ar: 'تم حجز موعدك غداً الساعة 10:00 صباحاً ✓', en: 'Your appointment is confirmed for tomorrow at 10:00 AM ✓', delay: 1.6 },
            ].map((msg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: msg.delay }}
                style={{ display: 'flex', justifyContent: msg.from === 'user' ? (isRTL ? 'flex-start' : 'flex-end') : (isRTL ? 'flex-end' : 'flex-start'), marginBottom: '10px' }}>
                <div style={{ maxWidth: '80%', padding: '10px 14px', borderRadius: msg.from === 'sara' ? '14px 14px 14px 4px' : '14px 14px 4px 14px', background: msg.from === 'sara' ? 'linear-gradient(135deg,#00D4AA,#00B894)' : 'rgba(255,255,255,0.06)', color: msg.from === 'sara' ? '#060D1A' : '#EDF2FF', fontSize: '12px', fontWeight: msg.from === 'sara' ? '600' : '400', lineHeight: '1.5' }}>
                  {isRTL ? msg.ar : msg.en}
                </div>
              </motion.div>
            ))}

            <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '10px', color: '#5E7090' }}>
              {isRTL ? 'رد تلقائي في أقل من 30 ثانية' : 'Auto reply in less than 30 seconds'}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}
