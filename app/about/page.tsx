'use client'
import { motion } from 'framer-motion'
import { useLang } from '../components/LangContext'
import Footer from '../sections/Footer'

export default function AboutPage() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'

  const values = [
    { ar: 'الممارسة قبل النظرية', en: 'Practice Before Theory', arDesc: 'نبني أنظمة حقيقية تحل مشاكل حقيقية — لا نبيع وعوداً', enDesc: 'We build real systems that solve real problems — we don\'t sell promises' },
    { ar: 'التخصيص الكامل', en: 'Full Customization', arDesc: 'كل نظام نبنيه مختلف — لأن كل بيزنس مختلف', enDesc: 'Every system we build is different — because every business is different' },
    { ar: 'الشراكة الحقيقية', en: 'True Partnership', arDesc: 'نحن شركاء في نجاحك وليس مجرد مزودي خدمة', enDesc: 'We are partners in your success not just service providers' },
    { ar: 'النتائج أولاً', en: 'Results First', arDesc: 'نقيس نجاحنا بنتائجك — لا بعدد العملاء', enDesc: 'We measure our success by your results — not by number of clients' },
    { ar: 'الشفافية الكاملة', en: 'Full Transparency', arDesc: 'نخبرك بما يعمل وما لا يعمل — بصدق تام', enDesc: 'We tell you what works and what doesn\'t — with complete honesty' },
    { ar: 'التطوير المستمر', en: 'Continuous Development', arDesc: 'أنظمتنا تتطور باستمرار مع تطور تقنيات الذكاء الاصطناعي', enDesc: 'Our systems continuously evolve with advancing AI technologies' },
  ]

  const stats = [
    { val: '15+', ar: 'قطاع نخدمه', en: 'Sectors Served' },
    { val: '48h', ar: 'وقت التركيب', en: 'Setup Time' },
    { val: '98%', ar: 'معدل الرد', en: 'Reply Rate' },
    { val: '5', ar: 'أيام تجريبية مجانية', en: 'Free Trial Days' },
  ]

  return (
    <div style={{ background: '#060D1A', minHeight: '100vh', color: '#EDF2FF', fontFamily: 'Cairo, sans-serif' }}>

      {/* Hero */}
      <section style={{ padding: '140px 5% 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)', top: '-100px', left: '-100px', zIndex: 0 }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              {isRTL ? 'من نحن' : 'ABOUT US'}
            </div>
            <h1 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: '900', lineHeight: '1.2', marginBottom: '24px' }}>
              {isRTL ? <>نبني مستقبل<br /><span style={{ color: '#00D4AA' }}>الأعمال الذكية</span><br />في الخليج</> : <>Building the Future of<br /><span style={{ color: '#00D4AA' }}>Smart Business</span><br />in the Gulf</>}
            </h1>
            <p style={{ fontSize: '16px', color: '#8494B0', lineHeight: '1.8', maxWidth: '600px' }}>
              {isRTL
                ? 'Logic Task شركة كويتية متخصصة في بناء وكلاء الذكاء الاصطناعي للبيزنسات في الكويت والخليج. نؤمن بأن كل بيزنس — مهما كان حجمه — يستحق تقنية ذكاء اصطناعي حقيقية تعمل بدلاً عنه.'
                : 'Logic Task is a Kuwaiti company specialized in building AI agents for businesses in Kuwait and the Gulf. We believe every business — regardless of size — deserves real AI technology that works instead of it.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '0 5% 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'rgba(0,212,170,0.1)', borderRadius: '16px', overflow: 'hidden' }}>
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: '#060D1A', padding: '32px', textAlign: 'center' }}>
                <div style={{ fontSize: '36px', fontWeight: '900', color: '#00D4AA', marginBottom: '8px' }}>{s.val}</div>
                <div style={{ fontSize: '12px', color: '#5E7090' }}>{isRTL ? s.ar : s.en}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '80px 5%', background: 'rgba(9,19,35,0.5)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: isRTL ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              {isRTL ? 'قصتنا' : 'OUR STORY'}
            </div>
            <h2 style={{ fontSize: 'clamp(28px,3.5vw,40px)', fontWeight: '900', marginBottom: '20px' }}>
              {isRTL ? 'لماذا أسسنا Logic Task؟' : 'Why Did We Found Logic Task?'}
            </h2>
            <p style={{ fontSize: '14px', color: '#8494B0', lineHeight: '1.9', marginBottom: '16px' }}>
              {isRTL
                ? 'لاحظنا أن البيزنسات في الكويت والخليج تعاني من نفس المشكلة — فرص ضائعة بسبب ردود بطيئة، حجوزات منسية، وعملاء يذهبون للمنافس لأن لا أحد رد عليهم.'
                : 'We noticed that businesses in Kuwait and the Gulf suffer from the same problem — lost opportunities due to slow replies, forgotten bookings, and clients going to competitors because no one responded to them.'}
            </p>
            <p style={{ fontSize: '14px', color: '#8494B0', lineHeight: '1.9', marginBottom: '16px' }}>
              {isRTL
                ? 'الحل الموجود في السوق كان إما معقداً جداً أو غير مخصص للبيزنس الخليجي. قررنا نبني الحل الصح — وكيل ذكاء اصطناعي يفهم اللهجة الخليجية ويعمل على المنصات التي يستخدمها الناس فعلاً.'
                : 'The existing solutions in the market were either too complex or not customized for Gulf businesses. We decided to build the right solution — an AI agent that understands the Gulf dialect and works on the platforms people actually use.'}
            </p>
            <p style={{ fontSize: '14px', color: '#8494B0', lineHeight: '1.9' }}>
              {isRTL
                ? 'اليوم Logic Task تخدم بيزنسات في الكويت والخليج — وهدفنا إننا نجعل تقنية الذكاء الاصطناعي متاحة لكل بيزنس بغض النظر عن حجمه.'
                : 'Today Logic Task serves businesses in Kuwait and the Gulf — and our goal is to make AI technology accessible to every business regardless of its size.'}
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: isRTL ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ background: '#091323', border: '1px solid rgba(0,212,170,0.12)', borderRadius: '20px', padding: '32px' }}>
              <div style={{ fontSize: '13px', color: '#5E7090', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {isRTL ? 'رؤيتنا' : 'OUR VISION'}
              </div>
              <p style={{ fontSize: '20px', fontWeight: '700', color: '#EDF2FF', lineHeight: '1.6', marginBottom: '24px' }}>
                {isRTL
                  ? '"نريد أن يكون لكل بيزنس في الخليج موظف ذكاء اصطناعي يعمل بدلاً عنه — 24 ساعة، 7 أيام، بدون توقف."'
                  : '"We want every business in the Gulf to have an AI employee working instead of them — 24 hours, 7 days, without stopping."'}
              </p>
              <div style={{ borderTop: '1px solid rgba(0,212,170,0.1)', paddingTop: '20px' }}>
                <div style={{ fontSize: '13px', color: '#5E7090', fontWeight: '700', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {isRTL ? 'مهمتنا' : 'OUR MISSION'}
                </div>
                <p style={{ fontSize: '14px', color: '#8494B0', lineHeight: '1.8' }}>
                  {isRTL
                    ? 'تمكين البيزنسات الصغيرة والمتوسطة في الخليج من الاستفادة من أحدث تقنيات الذكاء الاصطناعي بطريقة عملية وبأسعار معقولة.'
                    : 'Empowering small and medium businesses in the Gulf to benefit from the latest AI technologies in a practical way at reasonable prices.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
              {isRTL ? 'قيمنا' : 'OUR VALUES'}
            </div>
            <h2 style={{ fontSize: 'clamp(28px,3.5vw,40px)', fontWeight: '900' }}>
              {isRTL ? 'ما الذي يميزنا' : 'What Sets Us Apart'}
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
            {values.map((v, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                style={{ background: '#091323', border: '1px solid rgba(0,212,170,0.1)', borderRadius: '14px', padding: '24px', transition: 'all 0.25s' }}>
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#00D4AA', marginBottom: '10px' }}>
                  {isRTL ? v.ar : v.en}
                </div>
                <div style={{ fontSize: '12px', color: '#5E7090', lineHeight: '1.7' }}>
                  {isRTL ? v.arDesc : v.enDesc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 5%', background: 'rgba(9,19,35,0.5)', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,40px)', fontWeight: '900', marginBottom: '16px' }}>
            {isRTL ? 'هل أنت مستعد للبدء؟' : 'Are You Ready to Start?'}
          </h2>
          <p style={{ fontSize: '15px', color: '#8494B0', marginBottom: '32px' }}>
            {isRTL ? 'تواصل معنا اليوم واحصل على استشارة مجانية' : 'Contact us today for a free consultation'}
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://calendly.com/logictask7/30min" target="_blank" rel="noreferrer"
              style={{ padding: '14px 32px', borderRadius: '10px', background: '#00D4AA', color: '#060D1A', textDecoration: 'none', fontSize: '14px', fontWeight: '700', boxShadow: '0 0 20px rgba(0,212,170,0.25)' }}>
              {isRTL ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
            </a>
            <a href="https://wa.me/96550441803" target="_blank" rel="noreferrer"
              style={{ padding: '14px 32px', borderRadius: '10px', background: 'transparent', border: '1px solid rgba(0,212,170,0.3)', color: '#EDF2FF', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
              {isRTL ? 'تواصل عبر واتساب' : 'WhatsApp Us'}
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
