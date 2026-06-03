'use client'
import { motion } from 'framer-motion'
import { useLang } from '../components/LangContext'
import { useIsMobile } from '../hooks/useIsMobile'

export default function CTA() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'
  const isMobile = useIsMobile()

  return (
    <section style={{ padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Glow */}
      <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 0 }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,212,170,0.08)', border: '1px solid rgba(0,212,170,0.2)', borderRadius: '20px', padding: '6px 16px', fontSize: '11px', color: '#00D4AA', fontWeight: '700', marginBottom: '28px' }}>
            <div style={{ width: '6px', height: '6px', background: '#00D4AA', borderRadius: '50%' }} />
            {isRTL ? '5 أيام تجريبية مجانية — بدون بطاقة ائتمان' : '5 Free Trial Days — No Credit Card Required'}
          </div>

          <h2 style={{ fontSize: 'clamp(32px,4.5vw,56px)', fontWeight: '900', lineHeight: '1.2', marginBottom: '20px', color: '#EDF2FF' }}>
            {isRTL ? (
              <><span style={{ color: '#00D4AA' }}>موظفتك الذكية</span><br />تنتظرك الآن</>
            ) : (
              <>Your <span style={{ color: '#00D4AA' }}>Smart Employee</span><br />Is Waiting for You</>
            )}
          </h2>

          <p style={{ fontSize: '16px', color: '#8494B0', lineHeight: '1.8', marginBottom: '40px', maxWidth: '560px', margin: '0 auto 40px' }}>
            {isRTL
              ? 'لا تدع منافسيك يسبقوك. ابدأ اليوم وشوف الفرق بنفسك خلال 5 أيام مجاناً.'
              : 'Don\'t let your competitors get ahead. Start today and see the difference yourself in 5 free days.'}
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            <a href="https://calendly.com/logictask7/30min" target="_blank" rel="noreferrer"
              className="btn-glow"
              style={{ padding: '16px 36px', borderRadius: '12px', background: '#00D4AA', color: '#060D1A', textDecoration: 'none', fontSize: '15px', fontWeight: '700', boxShadow: '0 0 30px rgba(0,212,170,0.3)', transition: 'all 0.2s' }}>
              {isRTL ? 'ابدأ مجاناً الآن' : 'Start Free Now'}
            </a>
            <a href="https://wa.me/96550441803" target="_blank" rel="noreferrer"
              style={{ padding: '16px 36px', borderRadius: '12px', background: 'transparent', border: '1px solid rgba(0,212,170,0.3)', color: '#EDF2FF', textDecoration: 'none', fontSize: '15px', fontWeight: '600', transition: 'all 0.2s' }}>
              {isRTL ? 'تحدث مع فريقنا' : 'Talk to Our Team'}
            </a>
          </div>

          {/* Trust Indicators */}
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { ar: 'بدون عقد طويل', en: 'No Long Contract' },
              { ar: 'تركيب في 48 ساعة', en: 'Setup in 48 Hours' },
              { ar: 'دعم مستمر', en: 'Ongoing Support' },
            ].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#5E7090' }}>
                <div style={{ width: '4px', height: '4px', background: '#00D4AA', borderRadius: '50%' }} />
                {isRTL ? t.ar : t.en}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
