'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLang } from '../components/LangContext'
import { useIsMobile } from '../hooks/useIsMobile'
import Footer from '../sections/Footer'

const services = [
  {
    href: '/services/sara',
    available: true,
    color: '#00D4AA',
    ar: { title: 'سارة AI', subtitle: 'موظفتك الذكية التي لا تتوقف', desc: 'وكيل ذكاء اصطناعي يحجز ويذكّر ويرد على عملائك 24/7' },
    en: { title: 'Sara AI', subtitle: 'Your Smart Employee That Never Stops', desc: 'AI agent that books, reminds, and replies to your clients 24/7' },
  },
  {
    href: '/services/customer-service',
    available: false,
    color: '#40C4FF',
    ar: { title: 'AI Customer Service', subtitle: 'دعم عملاء ذكي لا يتعب', desc: 'يحل المشكلات ويرد على الاستفسارات تلقائياً' },
    en: { title: 'AI Customer Service', subtitle: 'Smart Support That Never Tires', desc: 'Solves problems and answers inquiries automatically' },
  },
  {
    href: '/services/sales-agent',
    available: false,
    color: '#FFD740',
    ar: { title: 'AI Sales Agent', subtitle: 'مندوب مبيعات ذكي بلا توقف', desc: 'يؤهل العملاء ويرسل العروض ويتابع الصفقات' },
    en: { title: 'AI Sales Agent', subtitle: 'Smart Sales Rep Without Stopping', desc: 'Qualifies leads, sends proposals, and follows up on deals' },
  },
  {
    href: '/services/operations',
    available: false,
    color: '#B39DDB',
    ar: { title: 'AI Operations', subtitle: 'أتمتة العمليات الداخلية', desc: 'يدير المهام والفرق ويقدم تقارير الأداء' },
    en: { title: 'AI Operations', subtitle: 'Internal Operations Automation', desc: 'Manages tasks, teams, and delivers performance reports' },
  },
  {
    href: '/services/automation',
    available: false,
    color: '#FF80AB',
    ar: { title: 'Automation Services', subtitle: 'أتمتة حضورك الرقمي', desc: 'سوشيال ميديا وTikTok وYouTube وLinkedIn بشكل تلقائي' },
    en: { title: 'Automation Services', subtitle: 'Digital Presence Automation', desc: 'Social media, TikTok, YouTube, LinkedIn automatically' },
  },
  {
    href: '/services/analytics',
    available: false,
    color: '#69F0AE',
    ar: { title: 'Analytics & Intelligence', subtitle: 'بيانات تتكلم — قرارات أذكى', desc: 'تحليل الأداء وتنبؤ الطلب ومراقبة المنافسين' },
    en: { title: 'Analytics & Intelligence', subtitle: 'Data That Speaks — Smarter Decisions', desc: 'Performance analysis, demand forecasting, competitor monitoring' },
  },
  {
    href: '/services/enterprise',
    available: false,
    color: '#CE93D8',
    ar: { title: 'Enterprise Solutions', subtitle: 'حلول للمؤسسات الكبيرة', desc: 'CRM ذكي، WMS، وكيل قانوني، مدير أسطول' },
    en: { title: 'Enterprise Solutions', subtitle: 'Solutions for Large Organizations', desc: 'Smart CRM, WMS, legal assistant, fleet manager' },
  },
  {
    href: '/services/custom-build',
    available: true,
    color: '#00D4AA',
    ar: { title: 'Custom AI Build', subtitle: 'نبني أي نظام تتخيله', desc: 'حلول مخصصة 100% من الصفر لاحتياجاتك' },
    en: { title: 'Custom AI Build', subtitle: 'We Build Any System You Imagine', desc: '100% custom solutions from scratch for your needs' },
  },
  {
    href: '/services/contracting',
    available: false,
    color: '#FFAB40',
    ar: { title: 'AI Contracting Agent', subtitle: 'ذكاء اصطناعي للمقاولات', desc: 'عروض أسعار تلقائية وحساب تكاليف دقيق' },
    en: { title: 'AI Contracting Agent', subtitle: 'AI for the Contracting Sector', desc: 'Auto price quotes and accurate cost calculation' },
  },
]

export default function ServicesPage() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'
  const isMobile = useIsMobile()

  return (
    <div style={{ background: '#060D1A', minHeight: '100vh', color: '#EDF2FF', fontFamily: 'Cairo, sans-serif' }}>

      <section style={{ padding: '140px 5% 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,170,0.05) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              {isRTL ? 'خدماتنا' : 'OUR SERVICES'}
            </div>
            <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: '900', lineHeight: '1.2', marginBottom: '20px' }}>
              {isRTL ? <>وكلاء ذكاء اصطناعي<br /><span style={{ color: '#00D4AA' }}>لكل احتياج</span></> : <>AI Agents for<br /><span style={{ color: '#00D4AA' }}>Every Need</span></>}
            </h1>
            <p style={{ fontSize: '16px', color: '#8494B0', maxWidth: '560px', margin: '0 auto', lineHeight: '1.8' }}>
              {isRTL ? 'من الاستقبال إلى المبيعات إلى العمليات — نبني الوكيل الذكي المناسب لبيزنسك' : 'From reception to sales to operations — we build the right AI agent for your business'}
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '0 5% 100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '20px' }}>
            {services.map((s, i) => {
              const d = isRTL ? s.ar : s.en
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}>
                  <Link href={s.href} style={{ textDecoration: 'none', display: 'block' }}>
                    <div
                      style={{ background: '#091323', border: '1px solid rgba(0,212,170,0.1)', borderRadius: '18px', padding: '28px', height: '100%', transition: 'all 0.25s', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = s.color + '40'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${s.color}10` }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,212,170,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>

                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg,${s.color},transparent)` }} />

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div style={{ width: '44px', height: '44px', background: `${s.color}15`, border: `1px solid ${s.color}30`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ width: '16px', height: '16px', background: s.color, borderRadius: '4px' }} />
                        </div>
                        <span style={{ padding: '4px 10px', borderRadius: '20px', fontSize: '9px', fontWeight: '800', background: s.available ? 'rgba(0,212,170,0.1)' : 'rgba(255,215,64,0.1)', color: s.available ? '#00D4AA' : '#FFD740', border: `1px solid ${s.available ? 'rgba(0,212,170,0.2)' : 'rgba(255,215,64,0.2)'}` }}>
                          {s.available ? (isRTL ? 'متوفر الآن' : 'Available') : (isRTL ? 'قريبا' : 'Coming Soon')}
                        </span>
                      </div>

                      <div style={{ fontSize: '16px', fontWeight: '900', color: '#EDF2FF', marginBottom: '6px' }}>{d.title}</div>
                      <div style={{ fontSize: '12px', color: s.color, fontWeight: '600', marginBottom: '10px' }}>{d.subtitle}</div>
                      <div style={{ fontSize: '12px', color: '#5E7090', lineHeight: '1.7' }}>{d.desc}</div>

                      <div style={{ marginTop: '20px', fontSize: '12px', color: s.color, fontWeight: '700' }}>
                        {isRTL ? 'اعرف أكثر ←' : '→ Learn More'}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 5% 80px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ maxWidth: '600px', margin: '0 auto', background: '#091323', border: '1px solid rgba(0,212,170,0.15)', borderRadius: '20px', padding: '40px' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: '900', marginBottom: '12px' }}>
            {isRTL ? 'مو لاقي خدمتك؟' : 'Don\'t See What You Need?'}
          </h2>
          <p style={{ fontSize: '14px', color: '#8494B0', marginBottom: '24px', lineHeight: '1.8' }}>
            {isRTL ? 'نبني أي نظام ذكاء اصطناعي مخصص لاحتياجاتك — تواصل معنا وأخبرنا ما تريد' : 'We build any custom AI system for your needs — contact us and tell us what you want'}
          </p>
          <a href="https://wa.me/96550441803" target="_blank" rel="noreferrer"
            style={{ display: 'inline-block', padding: '13px 32px', borderRadius: '10px', background: '#00D4AA', color: '#060D1A', textDecoration: 'none', fontSize: '14px', fontWeight: '700', boxShadow: '0 0 20px rgba(0,212,170,0.25)' }}>
            {isRTL ? 'تواصل معنا الآن' : 'Contact Us Now'}
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
