'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '../components/LangContext'

export default function Footer() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'

  const services = [
    { href: '/services/sara', ar: 'سارة AI', en: 'Sara AI' },
    { href: '/services/customer-service', ar: 'AI Customer Service', en: 'AI Customer Service' },
    { href: '/services/sales-agent', ar: 'AI Sales Agent', en: 'AI Sales Agent' },
    { href: '/services/operations', ar: 'AI Operations', en: 'AI Operations' },
    { href: '/services/automation', ar: 'Automation Services', en: 'Automation Services' },
    { href: '/services/analytics', ar: 'Analytics & Intelligence', en: 'Analytics & Intelligence' },
    { href: '/services/enterprise', ar: 'Enterprise Solutions', en: 'Enterprise Solutions' },
    { href: '/services/custom-build', ar: 'Custom AI Build', en: 'Custom AI Build' },
    { href: '/services/contracting', ar: 'AI Contracting Agent', en: 'AI Contracting Agent' },
  ]

  const company = [
    { href: '/about', ar: 'من نحن', en: 'About Us' },
    { href: '/pricing', ar: 'الأسعار', en: 'Pricing' },
    { href: '/contact', ar: 'تواصل معنا', en: 'Contact Us' },
  ]

  const legal = [
    { href: '/privacy', ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
    { href: '/terms', ar: 'الشروط والأحكام', en: 'Terms & Conditions' },
  ]

  return (
    <footer style={{ background: '#060D1A', borderTop: '1px solid rgba(0,212,170,0.1)', padding: '60px 5% 30px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr', gap: '48px', marginBottom: '48px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Image src="https://i.ibb.co/Gf2r2rFc/IMG-2495.png" alt="Logic Task" width={36} height={36} style={{ borderRadius: '8px' }} />
              <div>
                <div style={{ fontSize: '16px', fontWeight: '900', color: '#EDF2FF' }}>Logic Task</div>
                <div style={{ fontSize: '8px', color: '#00D4AA', letterSpacing: '1px', fontWeight: '600' }}>AI AUTOMATION</div>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: '#5E7090', lineHeight: '1.8', maxWidth: '280px', marginBottom: '20px' }}>
              {isRTL ? 'نبني وكلاء ذكاء اصطناعي مخصصة للبيزنس في الكويت والخليج.' : 'We build custom AI agents for businesses in Kuwait and the Gulf.'}
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { href: 'https://www.instagram.com/logic_task', label: 'Instagram' },
                { href: 'https://wa.me/96550441803', label: 'WhatsApp' },
                { href: 'https://calendly.com/logictask7/30min', label: 'Calendly' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  style={{ padding: '7px 14px', background: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.15)', borderRadius: '8px', fontSize: '11px', color: '#8494B0', textDecoration: 'none', fontWeight: '600' }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#EDF2FF', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {isRTL ? 'الخدمات' : 'Services'}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {services.map((s, i) => (
                <Link key={i} href={s.href}
                  style={{ fontSize: '12px', color: '#5E7090', textDecoration: 'none', lineHeight: '1.6' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00D4AA')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#5E7090')}>
                  {isRTL ? s.ar : s.en}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#EDF2FF', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {isRTL ? 'الشركة' : 'Company'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {company.map((c, i) => (
                <Link key={i} href={c.href}
                  style={{ fontSize: '12px', color: '#5E7090', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00D4AA')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#5E7090')}>
                  {isRTL ? c.ar : c.en}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(0,212,170,0.15)', paddingTop: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
            <div style={{ fontSize: '12px', color: '#5E7090' }}>
              © 2025 Logic Task. {isRTL ? 'جميع الحقوق محفوظة' : 'All rights reserved'} — {isRTL ? 'الكويت' : 'Kuwait'}
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '12px', color: '#5E7090' }}>
              {isRTL ? 'صُنع بالكويت' : 'Made in Kuwait'}
              <span style={{ color: '#00D4AA' }}>●</span>
              <a href="https://wa.me/96550441803" target="_blank" rel="noreferrer"
                style={{ color: '#00D4AA', textDecoration: 'none', fontWeight: '700' }}>
                +965 504 41803
              </a>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            {legal.map((l, i) => (
              <Link key={i} href={l.href}
                style={{ fontSize: '12px', color: '#5E7090', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#00D4AA')}
                onMouseLeave={e => (e.currentTarget.style.color = '#5E7090')}>
                {isRTL ? l.ar : l.en}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
