'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../components/LangContext'
import { useIsMobile } from '../hooks/useIsMobile'
import dynamic from 'next/dynamic'
const ThreeScene = dynamic(() => import('../components/ThreeScene'), { ssr: false })

export default function Hero() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'
  const isMobile = useIsMobile()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
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
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)', top: '-100px', right: '-100px', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '60px', alignItems: 'center' }}>

        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,212,170,0.08)', border: '1px solid rgba(0,212,170,0.2)', borderRadius: '20px', padding: '6px 16px', fontSize: '11px', color: '#00D4AA', fontWeight: '700', marginBottom: '24px' }}>
              <div style={{ width: '6px', height: '6px', background: '#00D4AA', borderRadius: '50%' }} />
              {isRTL ? 'الكويت — ذكاء اصطناعي مخصص للخليج' : 'Kuwait — AI Built for the Gulf'}
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: isMobile ? 'clamp(28px,8vw,40px)' : 'clamp(32px,4vw,58px)', fontWeight: '900', lineHeight: '1.2', marginBottom: '20px', color: '#EDF2FF' }}>
            {isRTL ? (
              <>وكلاء ذكاء اصطناعي<br /><span style={{ color: '#00D4AA' }}>يعملون بدلا عنك</span><br />24 ساعة — 7 أيام</>
            ) : (
              <>AI Agents That<br /><span style={{ color: '#00D4AA' }}>Work Instead of You</span><br />24 Hours — 7 Days</>
            )}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '15px', color: '#8494B0', lineHeight: '1.8', marginBottom: '36px', maxWidth: '500px' }}>
            {isRTL
              ? 'نبني موظفاً ذكياً مخصصاً لبيزنسك — يرد، يحجز، يذكّر، ويبيع. على أي منصة تستخدمها.'
              : 'We build a custom AI employee for your business — replies, books, reminds, and sells. On any platform you use.'}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="https://calendly.com/logictask7/30min" target="_blank" rel="noreferrer"
              style={{ padding: '14px 28px', borderRadius: '10px', background: '#00D4AA', color: '#060D1A', textDecoration: 'none', fontSize: '14px', fontWeight: '700', boxShadow: '0 0 24px rgba(0,212,170,0.3)' }}>
              {isRTL ? 'ابدأ مجاناً — 5 أيام' : 'Start Free — 5 Days'}
            </a>
            <a href="https://wa.me/96550441803" target="_blank" rel="noreferrer"
              style={{ padding: '14px 28px', borderRadius: '10px', background: 'transparent', border: '1px solid rgba(0,212,170,0.3)', color: '#EDF2FF', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
              {isRTL ? 'تحدث معنا' : 'Talk to Us'}
            </a>
          </motion.div>

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

        {!isMobile && (
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ThreeScene />
          </motion.div>
        )}
      </div>
    </section>
  )
}
