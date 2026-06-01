'use client'
import { motion } from 'framer-motion'
import { useLang } from '../components/LangContext'
import Footer from '../sections/Footer'

export default function TermsPage() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'

  const sections = [
    {
      ar: { title: 'قبول الشروط', content: 'باستخدام خدمات Logic Task، فإنك توافق على هذه الشروط والأحكام. إذا كنت لا توافق على أي جزء منها، يرجى عدم استخدام خدماتنا.' },
      en: { title: 'Acceptance of Terms', content: 'By using Logic Task services, you agree to these terms and conditions. If you do not agree to any part of them, please do not use our services.' },
    },
    {
      ar: { title: 'وصف الخدمة', content: 'تقدم Logic Task خدمات بناء وتشغيل وكلاء الذكاء الاصطناعي للبيزنسات. نحتفظ بحق تعديل أو إيقاف أي جزء من خدماتنا في أي وقت.' },
      en: { title: 'Service Description', content: 'Logic Task provides AI agent building and operation services for businesses. We reserve the right to modify or discontinue any part of our services at any time.' },
    },
    {
      ar: { title: 'الاشتراك والدفع', content: 'الاشتراك شهري أو سنوي حسب الباقة المختارة. الدفع مقدم. لا تُردّ الرسوم بعد بدء الفترة المدفوعة إلا في حالات استثنائية تُحدد بالتراضي.' },
      en: { title: 'Subscription and Payment', content: 'Subscription is monthly or annual based on the selected plan. Payment is in advance. Fees are non-refundable after the paid period begins except in exceptional cases determined by mutual agreement.' },
    },
    {
      ar: { title: 'التجربة المجانية', content: 'نقدم 5 أيام تجريبية مجانية لخدمة سارة AI. لا تحتاج إلى بطاقة ائتمان للبدء. بعد انتهاء التجربة، يمكنك الاختيار بين الاشتراك أو الإلغاء بدون أي تكلفة.' },
      en: { title: 'Free Trial', content: 'We offer a 5-day free trial for Sara AI service. No credit card needed to start. After the trial ends, you can choose to subscribe or cancel at no cost.' },
    },
    {
      ar: { title: 'الاستخدام المقبول', content: 'يجب استخدام خدماتنا للأغراض المشروعة فقط. يُحظر استخدام خدماتنا لنشر محتوى غير قانوني أو مضلل أو ضار.' },
      en: { title: 'Acceptable Use', content: 'Services must be used for lawful purposes only. It is prohibited to use our services to distribute illegal, misleading, or harmful content.' },
    },
    {
      ar: { title: 'الملكية الفكرية', content: 'جميع الأنظمة والأكواد والمحتوى الذي نبنيه لك يبقى ملكيتك بالكامل بعد التسليم. Logic Task تحتفظ بحقوق أدواتها ومنهجيتها.' },
      en: { title: 'Intellectual Property', content: 'All systems, code, and content we build for you remain entirely your property after delivery. Logic Task retains rights to its tools and methodology.' },
    },
    {
      ar: { title: 'تحديد المسؤولية', content: 'Logic Task غير مسؤولة عن الأضرار غير المباشرة الناتجة عن استخدام خدماتنا. مسؤوليتنا القصوى محدودة بقيمة الاشتراك المدفوع.' },
      en: { title: 'Limitation of Liability', content: 'Logic Task is not responsible for indirect damages resulting from use of our services. Our maximum liability is limited to the value of the paid subscription.' },
    },
    {
      ar: { title: 'الإنهاء', content: 'يمكنك إلغاء اشتراكك في أي وقت. نحتفظ بحق إنهاء الخدمة في حالة انتهاك هذه الشروط.' },
      en: { title: 'Termination', content: 'You can cancel your subscription at any time. We reserve the right to terminate service in case of violation of these terms.' },
    },
    {
      ar: { title: 'القانون المطبق', content: 'تخضع هذه الشروط لقوانين دولة الكويت. أي نزاع يُحل وفقاً للأنظمة القانونية المعمول بها في الكويت.' },
      en: { title: 'Governing Law', content: 'These terms are governed by the laws of the State of Kuwait. Any dispute shall be resolved in accordance with the legal regulations in force in Kuwait.' },
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
              {isRTL ? 'الشروط والأحكام' : 'Terms & Conditions'}
            </h1>
            <p style={{ fontSize: '13px', color: '#5E7090', marginBottom: '40px' }}>
              {isRTL ? 'آخر تحديث: يناير 2025' : 'Last updated: January 2025'}
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
              {isRTL ? 'للاستفسار عن الشروط والأحكام' : 'For terms and conditions inquiries'}
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
