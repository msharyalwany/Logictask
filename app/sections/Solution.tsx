'use client'
import { motion } from 'framer-motion'
import { useLang } from '../components/LangContext'
import { useIsMobile } from '../hooks/useIsMobile'

const features = [
  {
    ar: 'ترد فوراً على كل رسالة',
    en: 'Replies Instantly to Every Message',
    arDesc: 'رد تلقائي في أقل من 30 ثانية — نص وصوت — على أي منصة',
    enDesc: 'Auto reply in under 30 seconds — text and voice — on any platform',
  },
  {
    ar: 'تحجز وتلغي وتعدّل المواعيد',
    en: 'Books, Cancels & Edits Appointments',
    arDesc: 'تسجل المواعيد مباشرة في نظامك — بدون تدخل بشري',
    enDesc: 'Records appointments directly in your system — no human involvement',
  },
  {
    ar: 'تذكّر العملاء تلقائياً',
    en: 'Automatically Reminds Clients',
    arDesc: 'تذكير قبل 24 ساعة وساعتين — تقليل الغيابات بنسبة 60%',
    enDesc: '24-hour and 2-hour reminders — reduces no-shows by 60%',
  },
  {
    ar: 'تتابع وتبيع بذكاء',
    en: 'Follows Up & Sells Smartly',
    arDesc: 'متابعة الغائبين — تهنئة أعياد الميلاد — عروض مخصصة',
    enDesc: 'Follow up absent clients — birthday greetings — personalized offers',
  },
]

const platforms = ['WhatsApp', 'Telegram', 'Instagram', 'Facebook', 'SMS', 'Email']

export default function Solution() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'
  const isMobile = useIsMobile()

  return (
    <section style={{ padding: '100px 5%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '70px' }}>
          <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
            {isRTL ? 'الحل' : 'THE SOLUTION'}
          </div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: '900', marginBottom: '16px' }}>
            {isRTL ? 'سارة — موظفتك الذكية التي لا تتوقف' : 'Sara — Your Smart Employee That Never Stops'}
          </h2>
          <p style={{ fontSize: '15px', color: '#8494B0', maxWidth: '560px', margin: '0 auto', lineHeight: '1.8' }}>
            {isRTL
              ? 'وكيل ذكاء اصطناعي مخصص 100% لبيزنسك — يعمل على أي منصة تستخدمها'
              : 'AI agent 100% customized for your business — works on any platform you use'}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '20px', marginBottom: '60px' }}>
          {features.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              style={{ background: '#091323', border: '1px solid rgba(0,212,170,0.12)', borderRadius: '16px', padding: '28px', transition: 'all 0.25s', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#00D4AA,transparent)' }} />
              <div style={{ fontSize: '14px', fontWeight: '800', color: '#EDF2FF', marginBottom: '10px' }}>
                {isRTL ? f.ar : f.en}
              </div>
              <div style={{ fontSize: '12px', color: '#5E7090', lineHeight: '1.7' }}>
                {isRTL ? f.arDesc : f.enDesc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platforms */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '12px', color: '#5E7090', marginBottom: '20px', fontWeight: '600' }}>
            {isRTL ? 'تعمل على جميع المنصات' : 'Works on All Platforms'}
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {platforms.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ padding: '8px 20px', background: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.15)', borderRadius: '20px', fontSize: '12px', fontWeight: '700', color: '#00D4AA' }}>
                {p}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: '1px', background: 'rgba(0,212,170,0.1)', borderRadius: '16px', overflow: 'hidden' }}>
          {[
            { val: '98%', ar: 'معدل الرد التلقائي', en: 'Auto Reply Rate' },
            { val: '< 30s', ar: 'متوسط وقت الرد', en: 'Avg Response Time' },
            { val: '-60%', ar: 'تقليل الغيابات', en: 'Reduced No-Shows' },
            { val: '+40%', ar: 'زيادة الحجوزات', en: 'More Bookings' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#060D1A', padding: '28px', textAlign: 'center' }}>
              <div style={{ fontSize: '30px', fontWeight: '900', color: '#00D4AA', marginBottom: '6px' }}>{s.val}</div>
              <div style={{ fontSize: '11px', color: '#5E7090' }}>{isRTL ? s.ar : s.en}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
