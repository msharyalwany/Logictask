'use client'
import { motion } from 'framer-motion'
import { useLang } from '../components/LangContext'

const markets = [
  { ar: 'الصحة والطب', en: 'Health & Medicine', arDesc: 'عيادات، مستشفيات، مراكز طبية', enDesc: 'Clinics, hospitals, medical centers' },
  { ar: 'التجميل والعناية', en: 'Beauty & Care', arDesc: 'سبا، مراكز ليزر، صالونات', enDesc: 'Spa, laser centers, salons' },
  { ar: 'اللياقة والرياضة', en: 'Fitness & Sports', arDesc: 'جيم، يوغا، مراكز رياضية', enDesc: 'Gym, yoga, sports centers' },
  { ar: 'المطاعم والضيافة', en: 'Restaurants', arDesc: 'مطاعم، كافيهات، كاترينج', enDesc: 'Restaurants, cafes, catering' },
  { ar: 'التعليم والتدريب', en: 'Education', arDesc: 'مدارس، مراكز تدريب، معلمين', enDesc: 'Schools, training centers, tutors' },
  { ar: 'العقارات', en: 'Real Estate', arDesc: 'مكاتب عقارية، وسطاء، مطورون', enDesc: 'Real estate offices, brokers, developers' },
  { ar: 'السيارات', en: 'Automotive', arDesc: 'معارض، ورش، تأجير سيارات', enDesc: 'Showrooms, workshops, car rentals' },
  { ar: 'الخدمات المهنية', en: 'Professional Services', arDesc: 'محاسبة، قانون، استشارات', enDesc: 'Accounting, law, consulting' },
  { ar: 'التجزئة والتجارة', en: 'Retail & Trade', arDesc: 'محلات، متاجر إلكترونية', enDesc: 'Stores, e-commerce' },
  { ar: 'اللوجستيك والنقل', en: 'Logistics', arDesc: 'توصيل، شحن، مستودعات', enDesc: 'Delivery, shipping, warehouses' },
  { ar: 'المال والاستثمار', en: 'Finance', arDesc: 'بنوك، تأمين، صرافة', enDesc: 'Banks, insurance, exchange' },
  { ar: 'المقاولات', en: 'Contracting', arDesc: 'إنشاءات، ديكور، تصميم', enDesc: 'Construction, decor, design' },
  { ar: 'الصحة النفسية', en: 'Mental Health', arDesc: 'عيادات نفسية، إرشاد', enDesc: 'Psychiatric clinics, counseling' },
  { ar: 'السياحة والسفر', en: 'Tourism & Travel', arDesc: 'وكالات سفر، فنادق، جولات', enDesc: 'Travel agencies, hotels, tours' },
  { ar: 'الشركات والمؤسسات', en: 'Corporations', arDesc: 'شركات صغيرة وكبيرة', enDesc: 'Small and large companies' },
]

export default function Markets() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'

  return (
    <section style={{ padding: '100px 5%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
            {isRTL ? 'الأسواق' : 'MARKETS'}
          </div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: '900', marginBottom: '16px' }}>
            {isRTL ? 'نخدم 15 قطاعاً في الكويت والخليج' : 'Serving 15 Sectors in Kuwait & the Gulf'}
          </h2>
          <p style={{ fontSize: '15px', color: '#8494B0', maxWidth: '500px', margin: '0 auto', lineHeight: '1.8' }}>
            {isRTL ? 'أي بيزنس يتعامل مع عملاء — سارة تناسبه' : 'Any business that deals with clients — Sara fits it'}
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '14px' }}>
          {markets.map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, borderColor: 'rgba(0,212,170,0.4)', background: 'rgba(0,212,170,0.06)' }}
              style={{ background: '#091323', border: '1px solid rgba(0,212,170,0.1)', borderRadius: '14px', padding: '20px 16px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.25s' }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#EDF2FF', marginBottom: '6px' }}>
                {isRTL ? m.ar : m.en}
              </div>
              <div style={{ fontSize: '10px', color: '#5E7090', lineHeight: '1.5' }}>
                {isRTL ? m.arDesc : m.enDesc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
