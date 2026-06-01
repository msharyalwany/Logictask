'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  { href: '/services/sara', ar: 'سارة AI', en: 'Sara AI', badge: true },
  { href: '/services/customer-service', ar: 'AI Customer Service', en: 'AI Customer Service' },
  { href: '/services/sales-agent', ar: 'AI Sales Agent', en: 'AI Sales Agent' },
  { href: '/services/operations', ar: 'AI Operations', en: 'AI Operations' },
  { href: '/services/automation', ar: 'Automation Services', en: 'Automation Services' },
  { href: '/services/analytics', ar: 'Analytics & Intelligence', en: 'Analytics & Intelligence' },
  { href: '/services/enterprise', ar: 'Enterprise Solutions', en: 'Enterprise Solutions' },
  { href: '/services/custom-build', ar: 'Custom AI Build', en: 'Custom AI Build' },
  { href: '/services/contracting', ar: 'AI Contracting Agent', en: 'AI Contracting Agent' },
]

export default function Navbar({ lang, setLang }: { lang: string, setLang: (l: string) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isRTL = lang === 'ar'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(6,13,26,0.97)' : 'rgba(6,13,26,0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0,212,170,0.1)',
      transition: 'all 0.3s',
      padding: '0 5%',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      direction: isRTL ? 'rtl' : 'ltr'
    }}>

      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <Image src="https://i.ibb.co/Gf2r2rFc/IMG-2495.png" alt="Logic Task" width={40} height={40} style={{ borderRadius: '8px' }} />
        <div>
          <div style={{ fontSize: '16px', fontWeight: '900', color: '#EDF2FF' }}>Logic Task</div>
          <div style={{ fontSize: '8px', color: '#00D4AA', letterSpacing: '1px', fontWeight: '600' }}>AI AUTOMATION</div>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden md:flex">
        <Link href="/" style={{ fontSize: '13px', color: '#8494B0', textDecoration: 'none', fontWeight: '600', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#00D4AA')}
          onMouseLeave={e => (e.currentTarget.style.color = '#8494B0')}>
          {isRTL ? 'الرئيسية' : 'Home'}
        </Link>

        {/* Services Dropdown */}
        <div style={{ position: 'relative' }}
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}>
          <button style={{ fontSize: '13px', color: '#8494B0', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Cairo,sans-serif', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#00D4AA')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8494B0')}>
            {isRTL ? 'الخدمات' : 'Services'}
            <span style={{ fontSize: '10px' }}>▼</span>
          </button>

          {showServices && (
            <div style={{
              position: 'absolute', top: '100%', right: isRTL ? 0 : 'auto', left: isRTL ? 'auto' : 0,
              background: '#091323', border: '1px solid rgba(0,212,170,0.15)',
              borderRadius: '14px', padding: '10px', width: '240px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)', marginTop: '8px'
            }}>
              {services.map(s => (
                <Link key={s.href} href={s.href} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 12px', borderRadius: '9px', textDecoration: 'none',
                  color: '#8494B0', fontSize: '12.5px', fontWeight: '600', transition: 'all 0.2s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,212,170,0.08)'; e.currentTarget.style.color = '#00D4AA' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8494B0' }}>
                  {isRTL ? s.ar : s.en}
                  {s.badge && <span style={{ background: '#00D4AA', color: '#060D1A', fontSize: '8px', fontWeight: '800', padding: '2px 7px', borderRadius: '20px' }}>{isRTL ? 'متوفر' : 'Live'}</span>}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/pricing" style={{ fontSize: '13px', color: '#8494B0', textDecoration: 'none', fontWeight: '600', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#00D4AA')}
          onMouseLeave={e => (e.currentTarget.style.color = '#8494B0')}>
          {isRTL ? 'الأسعار' : 'Pricing'}
        </Link>

        <Link href="/about" style={{ fontSize: '13px', color: '#8494B0', textDecoration: 'none', fontWeight: '600', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#00D4AA')}
          onMouseLeave={e => (e.currentTarget.style.color = '#8494B0')}>
          {isRTL ? 'من نحن' : 'About'}
        </Link>

        <Link href="/contact" style={{ fontSize: '13px', color: '#8494B0', textDecoration: 'none', fontWeight: '600', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#00D4AA')}
          onMouseLeave={e => (e.currentTarget.style.color = '#8494B0')}>
          {isRTL ? 'تواصل معنا' : 'Contact'}
        </Link>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
          style={{ background: 'rgba(0,212,170,0.08)', border: '1px solid rgba(0,212,170,0.2)', borderRadius: '20px', padding: '5px 14px', fontFamily: 'Cairo,sans-serif', fontSize: '11px', color: '#00D4AA', cursor: 'pointer', fontWeight: '700' }}>
          {lang === 'ar' ? 'EN' : 'ع'}
        </button>

        <a href="https://wa.me/96550441803" target="_blank" rel="noreferrer"
          style={{ padding: '8px 16px', borderRadius: '8px', background: 'transparent', border: '1px solid rgba(0,212,170,0.2)', color: '#EDF2FF', textDecoration: 'none', fontSize: '12px', fontWeight: '600' }}>
          {isRTL ? 'تواصل معنا' : 'Contact Us'}
        </a>

        <a href="https://calendly.com/logictask7/30min" target="_blank" rel="noreferrer"
          style={{ padding: '8px 18px', borderRadius: '8px', background: '#00D4AA', color: '#060D1A', textDecoration: 'none', fontSize: '12px', fontWeight: '700', boxShadow: '0 0 16px rgba(0,212,170,0.3)' }}>
          {isRTL ? 'احجز استشارة' : 'Book a Call'}
        </a>
      </div>
    </nav>
  )
}
