'use client'
import { motion } from 'framer-motion'
import { useLang } from '../components/LangContext'
import { useIsMobile } from '../hooks/useIsMobile'

const basicFeatures = [
  { ar: 'رد تلقائي 24/7 على منصتك', en: 'Auto reply 24/7 on your platform' },
  { ar: 'حجز وتعديل وإلغاء المواعيد', en: 'Book, edit & cancel appointments' },
  { ar: 'منع الحجوزات المكررة', en: 'Prevent duplicate bookings' },
  { ar: 'تذكير العميل قبل الموعد', en: 'Client reminder before appointment' },
  { ar: 'تأكيد فوري بعد الحجز', en: 'Instant booking confirmation' },
  { ar: 'تنبيه فوري للإدارة', en: 'Instant management alert' },
  { ar: 'ربط مع نظامكم الحالي', en: 'Integration with your current system' },
  { ar: 'تقرير أسبوعي', en: 'Weekly report' },
]

const growthFeatures = [
  { ar: 'كل مميزات الأساس', en: 'All Basic features' },
  { ar: 'متابعة العملاء الغائبين', en: 'Follow up absent clients' },
  { ar: 'تهنئة أعياد الميلاد مع عروض', en: 'Birthday greetings with offers' },
  { ar: 'قائمة انتظار ذكية', en: 'Smart waiting list' },
  { ar: 'طلب تقييم Google تلقائي', en: 'Auto Google review request' },
  { ar: 'حملات مجدولة على منصتك', en: 'Scheduled campaigns on your platform' },
  { ar: 'استبيان رضا العملاء', en: 'Customer satisfaction survey' },
  { ar: 'داشبورد يومي متكامل', en: 'Full daily dashboard' },
  { ar: 'نظام الإحالة التلقائي', en: 'Auto referral system' },
  { ar: 'مكالمات صوتية ذكية', en: 'Smart voice calls' },
  { ar: 'تقارير مفصلة شهرية', en: 'Detailed monthly reports' },
  { ar: 'تخصيص كامل للنظام', en: 'Full system customization' },
]

export default function Pricing() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'
  const isMobile = useIsMobile()

  return (
    <section style={{ padding: '100px 5%' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
            {isRTL ? 'الأسعار' : 'PRICING'}
          </div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: '900', marginBottom: '16px' }}>
            {isRTL ? 'أقل من راتب موظف واحد' : 'Less Than One Employee\'s Salary'}
          </h2>
          <p style={{ fontSize: '15px', color: '#8494B0', maxWidth: '500px', margin: '0 auto', lineHeight: '1.8' }}>
            {isRTL ? 'كل الباقات تشمل 5 أيام تجريبية مجانية — بدون أي التزام' : 'All plans include a 5-day free trial — no commitment required'}
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px' }}>

          {/* Basic Plan */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            style={{ background: '#091323', border: '1px solid rgba(0,212,170,0.15)', borderRadius: '20px', padding: '36px', position: 'relative', overflow: 'hidden' }}>

            <div style={{ marginBottom: '8px', fontSize: '11px', color: '#5E7090', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {isRTL ? 'باقة الأساس' : 'BASIC PLAN'}
            </div>
            <div style={{ fontSize: '18px', fontWeight: '900', color: '#EDF2FF', marginBottom: '20px' }}>
              {isRTL ? 'الأساس' : 'Basic'}
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginBottom: '6px' }}>
              <div style={{ fontSize: '52px', fontWeight: '900', color: '#00D4AA', lineHeight: 1 }}>149</div>
              <div style={{ fontSize: '14px', color: '#5E7090', marginBottom: '8px' }}>KWD</div>
            </div>
            <div style={{ fontSize: '12px', color: '#5E7090', marginBottom: '6px' }}>
              {isRTL ? 'شهرياً' : 'per month'}
            </div>
            <div style={{ fontSize: '11px', color: '#8494B0', marginBottom: '28px' }}>
              {isRTL ? 'سنوياً: 1,490 KWD (توفر شهرين)' : 'Annually: 1,490 KWD (save 2 months)'}
            </div>

            <div style={{ borderTop: '1px solid rgba(0,212,170,0.1)', paddingTop: '24px', marginBottom: '28px' }}>
              {basicFeatures.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '16px', height: '16px', background: 'rgba(0,212,170,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <div style={{ width: '6px', height: '6px', background: '#00D4AA', borderRadius: '50%' }} />
                  </div>
                  <span style={{ fontSize: '12.5px', color: '#8494B0', lineHeight: '1.5' }}>
                    {isRTL ? f.ar : f.en}
                  </span>
                </div>
              ))}
            </div>

            <a href="https://calendly.com/logictask7/30min" target="_blank" rel="noreferrer"
              style={{ display: 'block', width: '100%', padding: '13px', borderRadius: '10px', background: 'transparent', border: '1px solid rgba(0,212,170,0.3)', color: '#EDF2FF', textDecoration: 'none', fontSize: '13px', fontWeight: '700', textAlign: 'center', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,212,170,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
              {isRTL ? 'احجز استشارتك المجانية اليوم' : 'Book Your Free Consultation Today'}
            </a>
          </motion.div>

          {/* Growth Plan */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ background: '#091323', border: '2px solid #00D4AA', borderRadius: '20px', padding: '36px', position: 'relative', overflow: 'hidden', boxShadow: '0 0 40px rgba(0,212,170,0.08)' }}>

            {/* Popular Badge */}
            <div style={{ position: 'absolute', top: '-1px', right: '50%', transform: 'translateX(50%)', background: '#00D4AA', color: '#060D1A', fontSize: '10px', fontWeight: '800', padding: '4px 16px', borderRadius: '0 0 10px 10px', whiteSpace: 'nowrap' }}>
              {isRTL ? 'الأكثر شيوعاً' : 'Most Popular'}
            </div>

            <div style={{ marginBottom: '8px', fontSize: '11px', color: '#00D4AA', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '12px' }}>
              {isRTL ? 'باقة النمو' : 'GROWTH PLAN'}
            </div>
            <div style={{ fontSize: '18px', fontWeight: '900', color: '#EDF2FF', marginBottom: '20px' }}>
              {isRTL ? 'النمو' : 'Growth'}
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginBottom: '6px' }}>
              <div style={{ fontSize: '52px', fontWeight: '900', color: '#00D4AA', lineHeight: 1 }}>199</div>
              <div style={{ fontSize: '14px', color: '#5E7090', marginBottom: '8px' }}>KWD</div>
            </div>
            <div style={{ fontSize: '12px', color: '#5E7090', marginBottom: '6px' }}>
              {isRTL ? 'شهرياً' : 'per month'}
            </div>
            <div style={{ fontSize: '11px', color: '#8494B0', marginBottom: '28px' }}>
              {isRTL ? 'سنوياً: 1,990 KWD (توفر شهرين)' : 'Annually: 1,990 KWD (save 2 months)'}
            </div>

            <div style={{ borderTop: '1px solid rgba(0,212,170,0.15)', paddingTop: '24px', marginBottom: '28px' }}>
              {growthFeatures.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '16px', height: '16px', background: 'rgba(0,212,170,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <div style={{ width: '6px', height: '6px', background: '#00D4AA', borderRadius: '50%' }} />
                  </div>
                  <span style={{ fontSize: '12.5px', color: '#8494B0', lineHeight: '1.5' }}>
                    {isRTL ? f.ar : f.en}
                  </span>
                </div>
              ))}
            </div>

            <a href="https://calendly.com/logictask7/30min" target="_blank" rel="noreferrer"
              style={{ display: 'block', width: '100%', padding: '13px', borderRadius: '10px', background: '#00D4AA', color: '#060D1A', textDecoration: 'none', fontSize: '13px', fontWeight: '700', textAlign: 'center', boxShadow: '0 0 20px rgba(0,212,170,0.25)', transition: 'all 0.2s' }}>
              {isRTL ? 'احجز استشارتك المجانية اليوم' : 'Book Your Free Consultation Today'}
            </a>
          </motion.div>
        </div>

        {/* Enterprise Note */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: '24px' }}>
          <p style={{ fontSize: '13px', color: '#5E7090' }}>
            {isRTL ? 'تحتاج حلاً مخصصاً لشركتك؟ ' : 'Need a custom enterprise solution? '}
            <a href="https://wa.me/96550441803" target="_blank" rel="noreferrer" style={{ color: '#00D4AA', textDecoration: 'none', fontWeight: '700' }}>
              {isRTL ? 'تواصل معنا مباشرة' : 'Contact us directly'}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
