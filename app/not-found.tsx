'use client'
import { useRouter } from 'next/navigation'
import { useLang } from './components/LangContext'

export default function NotFound() {
  const router = useRouter()
  const { lang } = useLang()
  const isRTL = lang === 'ar'

  return (
    <div style={{ minHeight: '100vh', background: '#060D1A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cairo, sans-serif', color: '#EDF2FF' }} dir={isRTL ? 'rtl' : 'ltr'}>
      <div style={{ textAlign: 'center', padding: '40px' }}>

        <div style={{ fontSize: '120px', fontWeight: '900', color: 'rgba(0,212,170,0.15)', lineHeight: 1, marginBottom: '8px' }}>404</div>

        <h1 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '12px' }}>
          {isRTL ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h1>

        <p style={{ fontSize: '15px', color: '#8494B0', marginBottom: '36px', lineHeight: '1.7', maxWidth: '400px', margin: '0 auto 36px' }}>
          {isRTL
            ? 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
            : 'The page you are looking for does not exist or has been moved.'}
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => router.push('/')}
            style={{ padding: '12px 28px', borderRadius: '10px', background: '#00D4AA', color: '#060D1A', border: 'none', fontFamily: 'Cairo, sans-serif', fontSize: '14px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 0 20px rgba(0,212,170,0.25)' }}>
            {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
          </button>
          <button onClick={() => router.push('/contact')}
            style={{ padding: '12px 28px', borderRadius: '10px', background: 'transparent', border: '1px solid rgba(0,212,170,0.3)', color: '#EDF2FF', fontFamily: 'Cairo, sans-serif', fontSize: '14px', cursor: 'pointer' }}>
            {isRTL ? 'تواصل معنا' : 'Contact Us'}
          </button>
        </div>

        <div style={{ marginTop: '48px', fontSize: '12px', color: '#5E7090' }}>
          Logic Task — {isRTL ? 'موظفتك الذكية تنتظر' : 'Your Smart Employee is Waiting'}
        </div>
      </div>
    </div>
  )
}
