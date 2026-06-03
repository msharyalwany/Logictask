'use client'
import { motion } from 'framer-motion'
import { useLang } from '../components/LangContext'
import { useIsMobile } from '../hooks/useIsMobile'
import Footer from '../sections/Footer'

export default function ContactPage() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'
  const isMobile = useIsMobile()

  const channels = [
    {
      ar: 'واتساب',
      en: 'WhatsApp',
      arDesc: 'الأسرع — رد خلال دقائق',
      enDesc: 'Fastest — reply within minutes',
      href: 'https://wa.me/96550441803',
      value: '+965 504 41803',
    },
    {
      ar: 'احجز استشارة مجانية',
      en: 'Book Free Consultation',
      arDesc: '30 دقيقة — نفهم بيزنسك ونقترح الحل',
      enDesc: '30 minutes — we understand your business and suggest a solution',
      href: 'https://calendly.com/logictask7/30min',
      value: 'Calendly',
    },
    {
      ar: 'إنستغرام',
      en: 'Instagram',
      arDesc: 'تابعنا لآخر الأخبار والمحتوى',
      enDesc: 'Follow us for latest news and content',
      href: 'https://www.instagram.com/logic_task',
      value: '@logic_task',
    },
  ]

  return (
    <div style={{ background: '#060D1A', minHeight: '100vh', color: '#EDF2FF', fontFamily: 'Cairo, sans-serif' }}>

      {/* Hero */}
      <section style={{ padding: '140px 5% 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              {isRTL ? 'تواصل معنا' : 'CONTACT US'}
            </div>
            <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: '900', lineHeight: '1.2', marginBottom: '20px' }}>
              {isRTL ? <>نحن هنا<br /><span style={{ color: '#00D4AA' }}>لمساعدتك</span></> : <>We Are Here<br /><span style={{ color: '#00D4AA' }}>to Help You</span></>}
            </h1>
            <p style={{ fontSize: '16px', color: '#8494B0', maxWidth: '500px', margin: '0 auto', lineHeight: '1.8' }}>
              {isRTL
                ? 'سواء كان عندك سؤال أو تريد تجربة مجانية — نحن جاهزون للرد عليك'
                : 'Whether you have a question or want a free trial — we\'re ready to respond to you'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Channels */}
      <section style={{ padding: '0 5% 80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '20px', marginBottom: '60px' }}>
            {channels.map((c, i) => (
              <motion.a key={i} href={c.href} target="_blank" rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                style={{ background: '#091323', border: '1px solid rgba(0,212,170,0.12)', borderRadius: '16px', padding: '28px', textDecoration: 'none', display: 'block', transition: 'all 0.25s', textAlign: 'center' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,170,0.4)'; e.currentTarget.style.background = 'rgba(0,212,170,0.04)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,212,170,0.12)'; e.currentTarget.style.background = '#091323' }}>
                <div style={{ fontSize: '15px', fontWeight: '800', color: '#EDF2FF', marginBottom: '8px' }}>
                  {isRTL ? c.ar : c.en}
                </div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#00D4AA', marginBottom: '8px' }}>
                  {c.value}
                </div>
                <div style={{ fontSize: '11px', color: '#5E7090', lineHeight: '1.6' }}>
                  {isRTL ? c.arDesc : c.enDesc}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Info Box */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ background: '#091323', border: '1px solid rgba(0,212,170,0.12)', borderRadius: '16px', padding: '32px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '40px' }}>

            <div>
              <div style={{ fontSize: '13px', fontWeight: '800', color: '#00D4AA', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {isRTL ? 'معلومات التواصل' : 'Contact Info'}
              </div>
              {[
                { ar: 'الموقع', en: 'Location', val: isRTL ? 'الكويت — الخليج العربي' : 'Kuwait — Arabian Gulf' },
                { ar: 'واتساب', en: 'WhatsApp', val: '+965 504 41803' },
                { ar: 'إنستغرام', en: 'Instagram', val: '@logic_task' },
                { ar: 'ساعات العمل', en: 'Working Hours', val: isRTL ? 'السبت — الخميس، 9ص — 9م' : 'Sat — Thu, 9AM — 9PM' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <span style={{ fontSize: '12px', color: '#5E7090' }}>{isRTL ? item.ar : item.en}</span>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#EDF2FF' }}>{item.val}</span>
                </div>
              ))}
            </div>

            <div>
              <div style={{ fontSize: '13px', fontWeight: '800', color: '#00D4AA', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {isRTL ? 'وقت الرد' : 'Response Time'}
              </div>
              {[
                { ar: 'واتساب', en: 'WhatsApp', val: isRTL ? 'خلال دقائق' : 'Within minutes', color: '#00D4AA' },
                { ar: 'استشارة Calendly', en: 'Calendly Consultation', val: isRTL ? 'نفس اليوم' : 'Same day', color: '#00D4AA' },
                { ar: 'إنستغرام', en: 'Instagram', val: isRTL ? 'خلال ساعات' : 'Within hours', color: '#FFD740' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <span style={{ fontSize: '12px', color: '#5E7090' }}>{isRTL ? item.ar : item.en}</span>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: item.color }}>{item.val}</span>
                </div>
              ))}

              <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.15)', borderRadius: '10px' }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#EDF2FF', marginBottom: '6px' }}>
                  {isRTL ? 'أسرع طريقة للبدء' : 'Fastest Way to Start'}
                </div>
                <div style={{ fontSize: '11px', color: '#5E7090', lineHeight: '1.6' }}>
                  {isRTL ? 'احجز استشارة مجانية 30 دقيقة على Calendly — نفهم بيزنسك ونبني لك الحل الصح' : 'Book a free 30-minute consultation on Calendly — we understand your business and build the right solution for you'}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
