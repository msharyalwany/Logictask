'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLang } from './LangContext'
import Footer from '../sections/Footer'

interface Feature {
  ar: string
  en: string
  arDesc: string
  enDesc: string
}

interface ServiceData {
  slug: string
  available: boolean
  color: string
  ar: {
    title: string
    subtitle: string
    description: string
    features: Feature[]
    benefits: { title: string; desc: string }[]
    useCases: string[]
    cta: string
  }
  en: {
    title: string
    subtitle: string
    description: string
    features: Feature[]
    benefits: { title: string; desc: string }[]
    useCases: string[]
    cta: string
  }
}

export default function ServiceTemplate({ data }: { data: ServiceData }) {
  const { lang } = useLang()
  const isRTL = lang === 'ar'
  const d = isRTL ? data.ar : data.en

  return (
    <div style={{ background: '#060D1A', minHeight: '100vh', color: '#EDF2FF', fontFamily: 'Cairo, sans-serif' }}>

      {/* Hero */}
      <section style={{ padding: '140px 5% 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: `radial-gradient(circle, ${data.color}10 0%, transparent 70%)`, top: '-100px', right: '-100px', zIndex: 0 }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px', fontSize: '12px', color: '#5E7090' }}>
            <Link href="/" style={{ color: '#5E7090', textDecoration: 'none' }}>{isRTL ? 'الرئيسية' : 'Home'}</Link>
            <span>/</span>
            <Link href="/services" style={{ color: '#5E7090', textDecoration: 'none' }}>{isRTL ? 'الخدمات' : 'Services'}</Link>
            <span>/</span>
            <span style={{ color: '#00D4AA' }}>{d.title}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              {/* Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: data.available ? 'rgba(0,212,170,0.08)' : 'rgba(255,215,64,0.08)', border: `1px solid ${data.available ? 'rgba(0,212,170,0.2)' : 'rgba(255,215,64,0.2)'}`, borderRadius: '20px', padding: '5px 14px', fontSize: '11px', color: data.available ? '#00D4AA' : '#FFD740', fontWeight: '700', marginBottom: '20px' }}>
                <div style={{ width: '5px', height: '5px', background: data.available ? '#00D4AA' : '#FFD740', borderRadius: '50%' }} />
                {data.available ? (isRTL ? 'متوفر الآن' : 'Available Now') : (isRTL ? 'قريباً' : 'Coming Soon')}
              </div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: '900', lineHeight: '1.2', marginBottom: '16px' }}>
                {d.title}
              </motion.h1>

              <div style={{ fontSize: '18px', color: '#00D4AA', fontWeight: '600', marginBottom: '20px' }}>
                {d.subtitle}
              </div>

              <p style={{ fontSize: '15px', color: '#8494B0', lineHeight: '1.8', marginBottom: '32px' }}>
                {d.description}
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {data.available ? (
                  <a href="https://calendly.com/logictask7/30min" target="_blank" rel="noreferrer"
                    style={{ padding: '13px 28px', borderRadius: '10px', background: '#00D4AA', color: '#060D1A', textDecoration: 'none', fontSize: '14px', fontWeight: '700', boxShadow: '0 0 20px rgba(0,212,170,0.25)' }}>
                    {d.cta}
                  </a>
                ) : (
                  <a href="https://wa.me/96550441803" target="_blank" rel="noreferrer"
                    style={{ padding: '13px 28px', borderRadius: '10px', background: '#00D4AA', color: '#060D1A', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>
                    {isRTL ? 'سجّل اهتمامك' : 'Register Interest'}
                  </a>
                )}
                <a href="https://wa.me/96550441803" target="_blank" rel="noreferrer"
                  style={{ padding: '13px 28px', borderRadius: '10px', background: 'transparent', border: '1px solid rgba(0,212,170,0.3)', color: '#EDF2FF', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
                  {isRTL ? 'تواصل معنا' : 'Contact Us'}
                </a>
              </div>
            </div>

            {/* Stats Card */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div style={{ background: '#091323', border: '1px solid rgba(0,212,170,0.12)', borderRadius: '20px', padding: '32px' }}>
                <div style={{ fontSize: '13px', color: '#5E7090', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {isRTL ? 'المميزات الرئيسية' : 'Key Features'}
                </div>
                {d.features.slice(0, 5).map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px', paddingBottom: '16px', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                    <div style={{ width: '4px', height: '4px', background: '#00D4AA', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: '#EDF2FF', marginBottom: '3px' }}>
                        {isRTL ? f.ar : f.en}
                      </div>
                      <div style={{ fontSize: '11px', color: '#5E7090', lineHeight: '1.6' }}>
                        {isRTL ? f.arDesc : f.enDesc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Features */}
      <section style={{ padding: '80px 5%', background: 'rgba(9,19,35,0.5)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: '900', marginBottom: '12px' }}>
              {isRTL ? 'كل ما تحصل عليه' : 'Everything You Get'}
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
            {d.features.map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                style={{ background: '#091323', border: '1px solid rgba(0,212,170,0.1)', borderRadius: '14px', padding: '22px', transition: 'all 0.25s', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg,${data.color},transparent)` }} />
                <div style={{ fontSize: '13px', fontWeight: '800', marginBottom: '8px' }}>{isRTL ? f.ar : f.en}</div>
                <div style={{ fontSize: '11px', color: '#5E7090', lineHeight: '1.7' }}>{isRTL ? f.arDesc : f.enDesc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: '900', marginBottom: '12px' }}>
              {isRTL ? 'لماذا تختار هذه الخدمة؟' : 'Why Choose This Service?'}
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
            {d.benefits.map((b, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ background: '#091323', border: '1px solid rgba(0,212,170,0.1)', borderRadius: '14px', padding: '24px' }}>
                <div style={{ fontSize: '14px', fontWeight: '800', marginBottom: '10px', color: '#00D4AA' }}>{b.title}</div>
                <div style={{ fontSize: '12px', color: '#5E7090', lineHeight: '1.7' }}>{b.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ padding: '80px 5%', background: 'rgba(9,19,35,0.5)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: '900', marginBottom: '12px' }}>
              {isRTL ? 'من يستفيد من هذه الخدمة؟' : 'Who Benefits From This Service?'}
            </h2>
          </motion.div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {d.useCases.map((u, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{ padding: '10px 22px', background: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.15)', borderRadius: '20px', fontSize: '13px', fontWeight: '600', color: '#00D4AA' }}>
                {u}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 5%', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: '900', marginBottom: '16px' }}>
              {isRTL ? 'جاهز للبدء؟' : 'Ready to Start?'}
            </h2>
            <p style={{ fontSize: '14px', color: '#8494B0', marginBottom: '28px', lineHeight: '1.8' }}>
              {isRTL ? 'تواصل معنا اليوم واحصل على استشارة مجانية' : 'Contact us today for a free consultation'}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://calendly.com/logictask7/30min" target="_blank" rel="noreferrer"
                style={{ padding: '13px 28px', borderRadius: '10px', background: '#00D4AA', color: '#060D1A', textDecoration: 'none', fontSize: '14px', fontWeight: '700', boxShadow: '0 0 20px rgba(0,212,170,0.25)' }}>
                {isRTL ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
              </a>
              <a href="https://wa.me/96550441803" target="_blank" rel="noreferrer"
                style={{ padding: '13px 28px', borderRadius: '10px', background: 'transparent', border: '1px solid rgba(0,212,170,0.3)', color: '#EDF2FF', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
                {isRTL ? 'واتساب' : 'WhatsApp'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
