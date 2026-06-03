'use client'
import { motion } from 'framer-motion'
import { useLang } from '../components/LangContext'
import { useIsMobile } from '../hooks/useIsMobile'
import Footer from '../sections/Footer'
import Link from 'next/link'

export default function PricingPage() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'
  const isMobile = useIsMobile()

  const basicFeatures = [
    { ar: 'رد تلقائي 24/7 على منصتك', en: 'Auto reply 24/7 on your platform' },
    { ar: 'حجز وتعديل وإلغاء المواعيد', en: 'Book, edit & cancel appointments' },
    { ar: 'منع الحجوزات المكررة', en: 'Prevent duplicate bookings' },
    { ar: 'تذكير العميل قبل 24 ساعة', en: 'Client reminder 24 hours before' },
    { ar: 'تذكير العميل قبل ساعتين', en: 'Client reminder 2 hours before' },
    { ar: 'تأكيد فوري بعد الحجز', en: 'Instant booking confirmation' },
    { ar: 'تنبيه فوري للإدارة', en: 'Instant management alert' },
    { ar: 'ربط مع نظامكم الحالي', en: 'Integration with your system' },
    { ar: 'تقرير أسبوعي', en: 'Weekly report' },
  ]

  const growthFeatures = [
    { ar: 'كل مميزات الأساس', en: 'All Basic features' },
    { ar: 'متابعة العملاء الغائبين', en: 'Follow up absent clients' },
    { ar: 'تهنئة أعياد الميلاد مع عروض', en: 'Birthday greetings with offers' },
    { ar: 'قائمة انتظار ذكية', en: 'Smart waiting list' },
    { ar: 'طلب تقييم Google تلقائي', en: 'Auto Google review request' },
    { ar: 'حملات مجدولة على منصتك', en: 'Scheduled campaigns' },
    { ar: 'استبيان رضا العملاء', en: 'Customer satisfaction survey' },
    { ar: 'داشبورد يومي متكامل', en: 'Full daily dashboard' },
    { ar: 'نظام الإحالة التلقائي', en: 'Auto referral system' },
    { ar: 'مكالمات صوتية ذكية', en: 'Smart voice calls' },
    { ar: 'تقارير مفصلة شهرية', en: 'Detailed monthly reports' },
    { ar: 'تخصيص كامل للنظام', en: 'Full system customization' },
  ]

  const otherServices = [
    { ar: 'AI Customer Service', en: 'AI Customer Service', href: '/services/customer-service' },
    { ar: 'AI Sales Agent', en: 'AI Sales Agent', href: '/services/sales-agent' },
    { ar: 'AI Operations', en: 'AI Operations', href: '/services/operations' },
    { ar: 'Automation Services', en: 'Automation Services', href: '/services/automation' },
    { ar: 'Analytics & Intelligence', en: 'Analytics & Intelligence', href: '/services/analytics' },
    { ar: 'Enterprise Solutions', en: 'Enterprise Solutions', href: '/services/enterprise' },
    { ar: 'Custom AI Build', en: 'Custom AI Build', href: '/services/custom-build' },
    { ar: 'AI Contracting Agent', en: 'AI Contracting Agent', href: '/services/contracting' },
  ]

  return (
    <div style={{ background: '#060D1A', minHeight: '100vh', color: '#EDF2FF', fontFamily: 'Cairo, sans-serif' }}>

      {/* Hero */}
      <section style={{ padding: '140px 5% 60px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            {isRTL ? 'الأسعار' : 'PRICING'}
          </div>
          <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: '900', lineHeight: '1.2', marginBottom: '20px' }}>
            {isRTL ? <>أسعار واضحة<br /><span style={{ color: '#00D4AA' }}>بدون مفاجآت</span></> : <>Clear Pricing<br /><span style={{ color: '#00D4AA' }}>No Surprises</span></>}
          </h1>
          <p style={{ fontSize: '16px', color: '#8494B0', maxWidth: '500px', margin: '0 auto', lineHeight: '1.8' }}>
            {isRTL ? 'ابدأ مجاناً لمدة 5 أيام — بدون بطاقة ائتمان وبدون أي التزام' : 'Start free for 5 days — no credit card and no commitment'}
          </p>
        </motion.div>
      </section>

      {/* Sara Plans */}
      <section style={{ padding: '20px 5% 80px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
              {isRTL ? 'سارة AI' : 'SARA AI'}
            </div>
            <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: '900' }}>
              {isRTL ? 'اختر الباقة المناسبة لبيزنسك' : 'Choose the Right Plan for Your Business'}
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px', marginBottom: '60px' }}>

            {/* Basic */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              style={{ background: '#091323', border: '1px solid rgba(0,212,170,0.15)', borderRadius: '20px', padding: '36px' }}>
              <div style={{ fontSize: '11px', color: '#5E7090', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                {isRTL ? 'باقة الأساس' : 'BASIC PLAN'}
              </div>
              <div style={{ fontSize: '18px', fontWeight: '900', marginBottom: '20px' }}>{isRTL ? 'الأساس' : 'Basic'}</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginBottom: '6px' }}>
                <div style={{ fontSize: '52px', fontWeight: '900', color: '#00D4AA', lineHeight: 1 }}>149</div>
                <div style={{ fontSize: '14px', color: '#5E7090', marginBottom: '8px' }}>KWD</div>
              </div>
              <div style={{ fontSize: '12px', color: '#5E7090', marginBottom: '6px' }}>{isRTL ? 'شهرياً' : 'per month'}</div>
              <div style={{ background: 'rgba(0,212,170,0.05)', border: '1px solid rgba(0,212,170,0.1)', borderRadius: '10px', padding: '12px 14px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', color: '#5E7090' }}>{isRTL ? '6 أشهر' : '6 Months'}</span>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#00D4AA' }}>894 KWD <span style={{ fontSize: '10px', color: '#5E7090' }}>({isRTL ? 'توفر 149 KWD' : 'save 149 KWD'})</span></span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '11px', color: '#5E7090' }}>{isRTL ? 'سنوي' : 'Annual'}</span>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#00D4AA' }}>1,490 KWD <span style={{ fontSize: '10px', color: '#5E7090' }}>({isRTL ? 'توفر 298 KWD' : 'save 298 KWD'})</span></span>
                </div>
              </div>
              <div style={{ borderTop: '1px solid rgba(0,212,170,0.1)', paddingTop: '24px', marginBottom: '28px' }}>
                {basicFeatures.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                    <div style={{ width: '16px', height: '16px', background: 'rgba(0,212,170,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <div style={{ width: '6px', height: '6px', background: '#00D4AA', borderRadius: '50%' }} />
                    </div>
                    <span style={{ fontSize: '12.5px', color: '#8494B0', lineHeight: '1.5' }}>{isRTL ? f.ar : f.en}</span>
                  </div>
                ))}
              </div>
              <a href="https://calendly.com/logictask7/30min" target="_blank" rel="noreferrer"
                style={{ display: 'block', width: '100%', padding: '13px', borderRadius: '10px', background: 'transparent', border: '1px solid rgba(0,212,170,0.3)', color: '#EDF2FF', textDecoration: 'none', fontSize: '13px', fontWeight: '700', textAlign: 'center' }}>
                {isRTL ? 'ابدأ التجربة المجانية 5 أيام' : 'Start 5-Day Free Trial'}
              </a>
            </motion.div>

            {/* Growth */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ background: '#091323', border: '2px solid #00D4AA', borderRadius: '20px', padding: '36px', position: 'relative', overflow: 'hidden', boxShadow: '0 0 40px rgba(0,212,170,0.08)' }}>
              <div style={{ position: 'absolute', top: '-1px', right: '50%', transform: 'translateX(50%)', background: '#00D4AA', color: '#060D1A', fontSize: '10px', fontWeight: '800', padding: '4px 16px', borderRadius: '0 0 10px 10px', whiteSpace: 'nowrap' }}>
                {isRTL ? 'الأكثر شيوعاً' : 'Most Popular'}
              </div>
              <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', marginTop: '12px' }}>
                {isRTL ? 'باقة النمو' : 'GROWTH PLAN'}
              </div>
              <div style={{ fontSize: '18px', fontWeight: '900', marginBottom: '20px' }}>{isRTL ? 'النمو' : 'Growth'}</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginBottom: '6px' }}>
                <div style={{ fontSize: '52px', fontWeight: '900', color: '#00D4AA', lineHeight: 1 }}>199</div>
                <div style={{ fontSize: '14px', color: '#5E7090', marginBottom: '8px' }}>KWD</div>
              </div>
              <div style={{ fontSize: '12px', color: '#5E7090', marginBottom: '6px' }}>{isRTL ? 'شهرياً' : 'per month'}</div>
              <div style={{ background: 'rgba(0,212,170,0.05)', border: '1px solid rgba(0,212,170,0.15)', borderRadius: '10px', padding: '12px 14px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', color: '#5E7090' }}>{isRTL ? '6 أشهر' : '6 Months'}</span>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#00D4AA' }}>1,194 KWD <span style={{ fontSize: '10px', color: '#5E7090' }}>({isRTL ? 'توفر 199 KWD' : 'save 199 KWD'})</span></span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '11px', color: '#5E7090' }}>{isRTL ? 'سنوي' : 'Annual'}</span>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#00D4AA' }}>1,990 KWD <span style={{ fontSize: '10px', color: '#5E7090' }}>({isRTL ? 'توفر 398 KWD' : 'save 398 KWD'})</span></span>
                </div>
              </div>
              <div style={{ borderTop: '1px solid rgba(0,212,170,0.15)', paddingTop: '24px', marginBottom: '28px' }}>
                {growthFeatures.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                    <div style={{ width: '16px', height: '16px', background: 'rgba(0,212,170,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <div style={{ width: '6px', height: '6px', background: '#00D4AA', borderRadius: '50%' }} />
                    </div>
                    <span style={{ fontSize: '12.5px', color: '#8494B0', lineHeight: '1.5' }}>{isRTL ? f.ar : f.en}</span>
                  </div>
                ))}
              </div>
              <a href="https://calendly.com/logictask7/30min" target="_blank" rel="noreferrer"
                style={{ display: 'block', width: '100%', padding: '13px', borderRadius: '10px', background: '#00D4AA', color: '#060D1A', textDecoration: 'none', fontSize: '13px', fontWeight: '700', textAlign: 'center', boxShadow: '0 0 20px rgba(0,212,170,0.25)' }}>
                {isRTL ? 'ابدأ التجربة المجانية 5 أيام' : 'Start 5-Day Free Trial'}
              </a>
            </motion.div>
          </div>

          {/* Other Services — Contact Only */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
                {isRTL ? 'باقي الخدمات' : 'OTHER SERVICES'}
              </div>
              <h2 style={{ fontSize: 'clamp(22px,2.5vw,32px)', fontWeight: '900', marginBottom: '10px' }}>
                {isRTL ? 'أسعار مخصصة حسب احتياجاتك' : 'Custom Pricing Based on Your Needs'}
              </h2>
              <p style={{ fontSize: '14px', color: '#8494B0', maxWidth: '500px', margin: '0 auto' }}>
                {isRTL ? 'باقي خدماتنا تُسعر بناءً على احتياجات وحجم بيزنسك — تواصل معنا للحصول على سعر مخصص' : 'Our other services are priced based on your business needs and size — contact us for a custom quote'}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: '12px', marginBottom: '28px' }}>
              {otherServices.map((s, i) => (
                <Link key={i} href={s.href}
                  style={{ background: '#091323', border: '1px solid rgba(0,212,170,0.1)', borderRadius: '12px', padding: '16px', textDecoration: 'none', textAlign: 'center', transition: 'all 0.2s', display: 'block' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,170,0.3)'; e.currentTarget.style.background = 'rgba(0,212,170,0.04)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,212,170,0.1)'; e.currentTarget.style.background = '#091323' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#EDF2FF', marginBottom: '6px' }}>{isRTL ? s.ar : s.en}</div>
                  <div style={{ fontSize: '10px', color: '#00D4AA', fontWeight: '700' }}>{isRTL ? 'سعر مخصص' : 'Custom Price'}</div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href="https://wa.me/96550441803" target="_blank" rel="noreferrer"
                style={{ display: 'inline-block', padding: '13px 32px', borderRadius: '10px', background: '#00D4AA', color: '#060D1A', textDecoration: 'none', fontSize: '14px', fontWeight: '700', boxShadow: '0 0 20px rgba(0,212,170,0.25)' }}>
                {isRTL ? 'تواصل للحصول على سعر مخصص' : 'Contact for Custom Pricing'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
