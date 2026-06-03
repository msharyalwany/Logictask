'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../components/LangContext'
import { useIsMobile } from '../hooks/useIsMobile'

const faqs = [
  {
    ar: { q: 'كم يستغرق وقت التركيب؟', a: 'من أول اتصال حتى تشغيل سارة — 48 ساعة فقط. نحن نتولى كل شيء ولا تحتاج أي خبرة تقنية.' },
    en: { q: 'How long does setup take?', a: 'From first contact to Sara going live — just 48 hours. We handle everything and you need zero technical experience.' },
  },
  {
    ar: { q: 'هل يوجد عقد طويل الأمد؟', a: 'لا. نبدأ بتجربة مجانية 5 أيام ثم اشتراك شهري أو سنوي — بدون أي التزام مسبق. تقدر تلغي في أي وقت.' },
    en: { q: 'Is there a long-term contract?', a: 'No. We start with a 5-day free trial then monthly or annual subscription — no upfront commitment. You can cancel anytime.' },
  },
  {
    ar: { q: 'على أي منصات تعمل سارة؟', a: 'سارة تعمل على واتساب، تيليجرام، إنستغرام، فيسبوك، SMS، وأي منصة تواصل أخرى تستخدمها.' },
    en: { q: 'What platforms does Sara work on?', a: 'Sara works on WhatsApp, Telegram, Instagram, Facebook, SMS, and any other messaging platform you use.' },
  },
  {
    ar: { q: 'هل سارة تفهم اللهجة الخليجية؟', a: 'نعم — سارة مدربة خصيصاً على اللهجة الخليجية والعربية الفصحى. تفهم الرسائل الصوتية أيضاً وتحولها لنص.' },
    en: { q: 'Does Sara understand the Gulf dialect?', a: 'Yes — Sara is specifically trained on the Gulf dialect and Modern Standard Arabic. She also understands voice messages and converts them to text.' },
  },
  {
    ar: { q: 'ماذا لو احتاج العميل موظف بشري؟', a: 'سارة تحول المحادثة تلقائياً لموظف بشري عند الحاجة — مع إشعار فوري للإدارة. أنت تتحكم في متى وكيف يحدث التحويل.' },
    en: { q: 'What if the client needs a human?', a: 'Sara automatically transfers the conversation to a human when needed — with instant management notification. You control when and how the transfer happens.' },
  },
  {
    ar: { q: 'هل تتكامل مع نظام الحجز الحالي لدينا؟', a: 'نعم — سارة تتكامل مع Google Calendar وأي نظام حجز تستخدمه. لا تحتاج تغيير في طريقة شغلك.' },
    en: { q: 'Does it integrate with our current booking system?', a: 'Yes — Sara integrates with Google Calendar and any booking system you use. No need to change your workflow.' },
  },
  {
    ar: { q: 'هل البيانات آمنة؟', a: 'بالكامل. بيانات عملائك محمية ومشفرة ولا تشارك مع أي طرف ثالث. نستخدم أعلى معايير الأمان.' },
    en: { q: 'Is our data secure?', a: 'Completely. Your client data is protected and encrypted and never shared with any third party. We use the highest security standards.' },
  },
  {
    ar: { q: 'ماذا يحدث بعد انتهاء التجربة المجانية؟', a: 'بعد 5 أيام تختار الباقة المناسبة وتكمل. لو ما كانت سارة مناسبة — لا تدفع شيئاً ولا توجد أي رسوم.' },
    en: { q: 'What happens after the free trial ends?', a: 'After 5 days you choose the right plan and continue. If Sara isn\'t right for you — you pay nothing and there are no charges.' },
  },
  {
    ar: { q: 'هل يوجد دعم فني بعد التركيب؟', a: 'نعم — فريقنا معك بعد التركيب. صيانة، تطوير، وتحديثات مستمرة. نحن شريكك وليس مجرد مزود خدمة.' },
    en: { q: 'Is there technical support after setup?', a: 'Yes — our team is with you after setup. Maintenance, development, and continuous updates. We\'re your partner not just a service provider.' },
  },
  {
    ar: { q: 'هل تناسب بيزنسي إذا كان صغيراً؟', a: 'بالتأكيد. سارة مصممة للبيزنسات الصغيرة والمتوسطة. كلما كان البيزنس أصغر كلما كان التأثير أكبر لأن كل عميل يحسب.' },
    en: { q: 'Is it suitable if my business is small?', a: 'Absolutely. Sara is designed for small and medium businesses. The smaller the business, the bigger the impact — because every client counts.' },
  },
]

export default function FAQ() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'
  const isMobile = useIsMobile()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section style={{ padding: '100px 5%' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
            {isRTL ? 'أسئلة شائعة' : 'FAQ'}
          </div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: '900', marginBottom: '16px' }}>
            {isRTL ? 'كل ما تريد معرفته' : 'Everything You Need to Know'}
          </h2>
          <p style={{ fontSize: '15px', color: '#8494B0', maxWidth: '500px', margin: '0 auto', lineHeight: '1.8' }}>
            {isRTL ? 'إذا لم تجد إجابتك — تواصل معنا مباشرة' : 'If you don\'t find your answer — contact us directly'}
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq, i) => {
            const data = isRTL ? faq.ar : faq.en
            const isOpen = openIndex === i
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{ background: '#091323', border: `1px solid ${isOpen ? 'rgba(0,212,170,0.3)' : 'rgba(0,212,170,0.1)'}`, borderRadius: '14px', overflow: 'hidden', transition: 'border-color 0.3s' }}>

                <button onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{ width: '100%', padding: '18px 22px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', fontFamily: 'Cairo,sans-serif', textAlign: isRTL ? 'right' : 'left' }}>
                  <span style={{ fontSize: '14px', fontWeight: '700', color: isOpen ? '#00D4AA' : '#EDF2FF', flex: 1 }}>
                    {data.q}
                  </span>
                  <span style={{ color: '#00D4AA', fontSize: '18px', fontWeight: '300', flexShrink: 0, transition: 'transform 0.3s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}>
                      <div style={{ padding: '0 22px 18px', fontSize: '13px', color: '#8494B0', lineHeight: '1.8', borderTop: '1px solid rgba(0,212,170,0.08)' }}>
                        <div style={{ paddingTop: '16px' }}>{data.a}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ fontSize: '13px', color: '#5E7090' }}>
            {isRTL ? 'عندك سؤال آخر؟ ' : 'Have another question? '}
            <a href="https://wa.me/96550441803" target="_blank" rel="noreferrer"
              style={{ color: '#00D4AA', textDecoration: 'none', fontWeight: '700' }}>
              {isRTL ? 'تواصل معنا على واتساب' : 'Contact us on WhatsApp'}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
