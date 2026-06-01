'use client'
import { motion } from 'framer-motion'
import { useLang } from '../components/LangContext'
import Footer from '../sections/Footer'

export default function PrivacyPage() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'

  const sections = [
    {
      ar: { title: 'المعلومات التي نجمعها', content: 'نجمع المعلومات التي تقدمها لنا مباشرة عند التسجيل أو التواصل معنا، مثل الاسم ورقم الهاتف والبريد الإلكتروني. كما نجمع معلومات عن استخدامك لخدماتنا بشكل تلقائي.' },
      en: { title: 'Information We Collect', content: 'We collect information you provide directly when registering or contacting us, such as name, phone number, and email. We also automatically collect information about your use of our services.' },
    },
    {
      ar: { title: 'كيف نستخدم معلوماتك', content: 'نستخدم معلوماتك لتقديم خدماتنا وتحسينها، والتواصل معك بشأن حسابك، وإرسال تحديثات مهمة. لا نبيع معلوماتك لأي طرف ثالث.' },
      en: { title: 'How We Use Your Information', content: 'We use your information to provide and improve our services, communicate with you about your account, and send important updates. We never sell your information to any third party.' },
    },
    {
      ar: { title: 'حماية البيانات', content: 'نستخدم أحدث تقنيات التشفير لحماية بياناتك. جميع البيانات مخزنة على خوادم آمنة ومحمية بأعلى معايير الأمن السيبراني.' },
      en: { title: 'Data Protection', content: 'We use the latest encryption technologies to protect your data. All data is stored on secure servers protected by the highest cybersecurity standards.' },
    },
    {
      ar: { title: 'مشاركة البيانات', content: 'لا نشارك بياناتك الشخصية مع أطراف ثالثة إلا عند الضرورة لتقديم الخدمة أو عند الالتزام بالمتطلبات القانونية.' },
      en: { title: 'Data Sharing', content: 'We do not share your personal data with third parties except when necessary to provide the service or when complying with legal requirements.' },
    },
    {
      ar: { title: 'حقوقك', content: 'يحق لك الوصول إلى بياناتك الشخصية وتعديلها أو حذفها في أي وقت. للقيام بذلك، تواصل معنا عبر واتساب أو البريد الإلكتروني.' },
      en: { title: 'Your Rights', content: 'You have the right to access, modify, or delete your personal data at any time. To do so, contact us via WhatsApp or email.' },
    },
    {
      ar: { title: 'ملفات تعريف الارتباط', content: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك تعطيلها من إعدادات متصفحك، لكن ذلك قد يؤثر على بعض وظائف الموقع.' },
      en: { title: 'Cookies', content: 'We use cookies to improve your experience on our website. You can disable them from your browser settings, but this may affect some website functions.' },
    },
    {
      ar: { title: 'تحديثات سياسة الخصوصية', content: 'قد نحدث هذه السياسة من وقت لآخر. سنخطرك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على الموقع.' },
      en: { title: 'Privacy Policy Updates', content: 'We may update this policy from time to time. We will notify you of any material changes via email or a notice on the website.' },
    },
  ]

  return (
    <div style={{ background: '#060D1A', minHeight: '100vh', color: '#EDF2FF', fontFamily: 'Cairo, sans-serif' }}>
      <section style={{ padding: '140px 5% 40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              {isRTL ? 'قانوني' : 'LEGAL'}
            </div>
            <h1 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: '900', marginBottom: '12px' }}>
              {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </h1>
            <p style={{ fontSize: '13px', color: '#5E7090', marginBottom: '40px' }}>
              {isRTL ? 'آخر تحديث: يناير 2025' : 'Last updated: January 2025'}
            </p>
            <p style={{ fontSize: '14px', color: '#8494B0', lineHeight: '1.8', marginBottom: '40px' }}>
              {isRTL
                ? 'في Logic Task نأخذ خصوصيتك على محمل الجد. هذه السياسة توضح كيف نجمع ونستخدم ونحمي معلوماتك.'
                : 'At Logic Task we take your privacy seriously. This policy explains how we collect, use, and protect your information.'}
            </p>
          </motion.div>

          {sections.map((s, i) => {
            const d = isRTL ? s.ar : s.en
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{ marginBottom: '32px', paddingBottom: '32px', borderBottom: i < sections.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#EDF2FF', marginBottom: '12px' }}>
                  {i + 1}. {d.title}
                </h2>
                <p style={{ fontSize: '14px', color: '#8494B0', lineHeight: '1.8' }}>{d.content}</p>
              </motion.div>
            )
          })}

          <div style={{ background: '#091323', border: '1px solid rgba(0,212,170,0.12)', borderRadius: '14px', padding: '24px', marginTop: '20px', textAlign: 'center' }}>
            <p style={{ fontSize: '13px', color: '#8494B0', marginBottom: '12px' }}>
              {isRTL ? 'للتواصل بخصوص الخصوصية' : 'For privacy-related inquiries'}
            </p>
            <a href="https://wa.me/96550441803" target="_blank" rel="noreferrer"
              style={{ color: '#00D4AA', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
              +965 504 41803
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
