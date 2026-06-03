'use client'
import { motion } from 'framer-motion'
import { useLang } from '../components/LangContext'
import { useIsMobile } from '../hooks/useIsMobile'

const problems = [
  {
    ar: 'مكالمات فائتة',
    en: 'Missed Calls',
    arDesc: 'عملاؤك يتصلون خارج الدوام — لا أحد يرد — يذهبون للمنافس مباشرة',
    enDesc: 'Clients call after hours — no answer — they go straight to your competitor',
  },
  {
    ar: 'وقت مهدر',
    en: 'Wasted Time',
    arDesc: 'موظفوك يقضون ساعات في ردود متكررة يومياً بدل تقديم خدمة حقيقية',
    enDesc: 'Your staff spend hours on repetitive replies instead of real service',
  },
  {
    ar: 'حجوزات منسية',
    en: 'Forgotten Bookings',
    arDesc: 'عملاء يحجزون وينسون — لا تذكير — الكرسي يضل فاضي والإيراد يضيع',
    enDesc: 'Clients book and forget — no reminder — empty seats and lost revenue',
  },
  {
    ar: 'فرص بيع ضائعة',
    en: 'Lost Sales',
    arDesc: 'استفسارات عن الباقات تضيع لأنه لا أحد يتابعها بسرعة كافية',
    enDesc: 'Package inquiries are lost because no one follows up fast enough',
  },
  {
    ar: 'لا متابعة',
    en: 'No Follow-up',
    arDesc: 'عميل زارك ولا أحد تابعه — فرصة العودة ضاعت إلى الأبد',
    enDesc: 'A client visited and no one followed up — the return chance is gone forever',
  },
  {
    ar: 'تكلفة عالية',
    en: 'High Cost',
    arDesc: 'موظف الاستقبال يكلف 350+ KWD شهرياً — يعمل 8 ساعات فقط ويأخذ إجازات',
    enDesc: 'A receptionist costs 350+ KWD/month — works 8 hours only and takes leaves',
  },
]

export default function Problem() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'
  const isMobile = useIsMobile()

  return (
    <section style={{ padding: '100px 5%', background: 'rgba(9,19,35,0.5)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
            {isRTL ? 'المشكلة' : 'THE PROBLEM'}
          </div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: '900', marginBottom: '16px', color: '#EDF2FF' }}>
            {isRTL ? 'بيزنسك يخسر عملاء كل يوم' : 'Your Business Loses Clients Every Day'}
          </h2>
          <p style={{ fontSize: '15px', color: '#8494B0', maxWidth: '560px', margin: '0 auto', lineHeight: '1.8' }}>
            {isRTL
              ? 'بدون نظام ذكي — كل رسالة فائتة هي عميل ذهب للمنافس'
              : 'Without a smart system — every missed message is a client lost to your competitor'}
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '20px' }}>
          {problems.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(255,82,82,0.3)' }}
              style={{ background: '#091323', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '28px', cursor: 'default', transition: 'all 0.25s', position: 'relative', overflow: 'hidden' }}>
              
              {/* Red top line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#FF5252,transparent)' }} />
              
              <div style={{ fontSize: '13px', fontWeight: '800', color: '#EDF2FF', marginBottom: '10px' }}>
                {isRTL ? p.ar : p.en}
              </div>
              <div style={{ fontSize: '12px', color: '#5E7090', lineHeight: '1.7' }}>
                {isRTL ? p.arDesc : p.enDesc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '50px', padding: '24px', background: 'rgba(255,82,82,0.05)', border: '1px solid rgba(255,82,82,0.1)', borderRadius: '14px' }}>
          <div style={{ fontSize: '28px', fontWeight: '900', color: '#FF5252', marginBottom: '6px' }}>
            {isRTL ? '67% من العملاء لا يعودون بعد تجربة سيئة' : '67% of clients never return after a bad experience'}
          </div>
          <div style={{ fontSize: '12px', color: '#5E7090' }}>
            {isRTL ? 'المصدر: Salesforce Research' : 'Source: Salesforce Research'}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
