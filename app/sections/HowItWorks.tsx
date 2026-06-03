'use client'
import { motion } from 'framer-motion'
import { useLang } from '../components/LangContext'
import { useIsMobile } from '../hooks/useIsMobile'

const steps = [
  {
    num: '01',
    ar: 'استشارة مجانية',
    en: 'Free Consultation',
    arDesc: 'نفهم بيزنسك واحتياجاتك الكاملة في 30 دقيقة — بدون أي التزام',
    enDesc: 'We understand your business and needs in 30 minutes — no commitment',
  },
  {
    num: '02',
    ar: 'نبني النظام المخصص',
    en: 'We Build Your System',
    arDesc: 'نصمم وكيل ذكاء اصطناعي بأسلوب بيزنسك تحديداً — لا قوالب جاهزة',
    enDesc: 'We design an AI agent specifically for your business style — no templates',
  },
  {
    num: '03',
    ar: 'نربطه بأنظمتك',
    en: 'We Connect Everything',
    arDesc: 'تكامل مع منصتك ونظامك الحالي — بدون تغيير في طريقة شغلك',
    enDesc: 'Integration with your platform and current system — no workflow changes',
  },
  {
    num: '04',
    ar: 'يعمل خلال 48 ساعة',
    en: 'Live in 48 Hours',
    arDesc: 'جرّبه 5 أيام مجاناً — وبعدها تقرر بدون أي ضغط أو التزام',
    enDesc: 'Try it free for 5 days — then decide without any pressure or commitment',
  },
]

export default function HowItWorks() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'
  const isMobile = useIsMobile()

  return (
    <section style={{ padding: '100px 5%', background: 'rgba(9,19,35,0.5)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '70px' }}>
          <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
            {isRTL ? 'كيف نعمل' : 'HOW IT WORKS'}
          </div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: '900', marginBottom: '16px' }}>
            {isRTL ? 'جاهز خلال 48 ساعة — 4 خطوات فقط' : 'Ready in 48 Hours — Just 4 Steps'}
          </h2>
          <p style={{ fontSize: '15px', color: '#8494B0', maxWidth: '500px', margin: '0 auto', lineHeight: '1.8' }}>
            {isRTL ? 'من أول اتصال حتى التشغيل الكامل' : 'From first contact to full operation'}
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: '0', position: 'relative' }}>

          {/* Connecting Line */}
          <div style={{ position: 'absolute', top: '40px', right: '12.5%', left: '12.5%', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(0,212,170,0.3),rgba(0,212,170,0.6),rgba(0,212,170,0.3),transparent)', zIndex: 0 }} />

          {steps.map((step, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ textAlign: 'center', padding: '0 20px', position: 'relative', zIndex: 1 }}>

              {/* Number Circle */}
              <motion.div
                whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0,212,170,0.3)' }}
                style={{ width: '80px', height: '80px', background: '#060D1A', border: '2px solid rgba(0,212,170,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', position: 'relative', transition: 'all 0.3s' }}>
                <span style={{ fontSize: '20px', fontWeight: '900', color: '#00D4AA' }}>{step.num}</span>
              </motion.div>

              <div style={{ fontSize: '14px', fontWeight: '800', color: '#EDF2FF', marginBottom: '10px' }}>
                {isRTL ? step.ar : step.en}
              </div>
              <div style={{ fontSize: '12px', color: '#5E7090', lineHeight: '1.7' }}>
                {isRTL ? step.arDesc : step.enDesc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '60px' }}>
          <a href="https://calendly.com/logictask7/30min" target="_blank" rel="noreferrer"
            style={{ display: 'inline-block', padding: '14px 36px', background: '#00D4AA', color: '#060D1A', textDecoration: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: '700', boxShadow: '0 0 24px rgba(0,212,170,0.25)', transition: 'all 0.2s' }}>
            {isRTL ? 'احجز استشارتك المجانية اليوم' : 'Book Your Free Consultation Today'}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
