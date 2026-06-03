'use client'
import { motion } from 'framer-motion'
import { useLang } from '../components/LangContext'
import { useIsMobile } from '../hooks/useIsMobile'

const testimonials = [
  {
    ar: { name: 'مركز لازوردي للتجميل', sector: 'الرياض، السعودية — تجميل', text: 'جربنا أكثر من نظام قبل سارة. الفرق الأكبر إنها تفهم اللهجة الخليجية وترد بشكل طبيعي. العملاء ما يحسون إنهم يتكلمون مع بوت.', rating: 5 },
    en: { name: 'Lazurdi Beauty Center', sector: 'Riyadh, Saudi Arabia — Beauty', text: 'We tried more than one system before Sara. The biggest difference is she understands the Gulf dialect and responds naturally. Clients don\'t feel like they\'re talking to a bot.', rating: 5 },
  },
  {
    ar: { name: 'عيادة نيوسمايل لطب الأسنان', sector: 'دبي، الإمارات — طب الأسنان', text: 'وفرنا موظفين استقبال. الحجوزات نظمت بشكل كامل وما عاد في تعارض بالمواعيد. بس أتمنى يضيفون تقارير أكثر تفصيلاً.', rating: 4 },
    en: { name: 'NewSmile Dental Clinic', sector: 'Dubai, UAE — Dentistry', text: 'We saved two receptionists. Bookings are now fully organized with no appointment conflicts. I wish they\'d add more detailed reports though.', rating: 4 },
  },
  {
    ar: { name: 'أكاديمية ليدرز للتدريب', sector: 'المنامة، البحرين — تدريب وتطوير', text: 'الأكاديمية عندها جداول معقدة ودورات متعددة. سارة تدير الحجوزات بشكل ذكي وتذكر المتدربين قبل كل جلسة. نسبة الغياب انخفضت بشكل ملحوظ.', rating: 5 },
    en: { name: 'Leaders Training Academy', sector: 'Manama, Bahrain — Training', text: 'The academy has complex schedules and multiple courses. Sara manages bookings smartly and reminds trainees before each session. Absence rates dropped noticeably.', rating: 5 },
  },
  {
    ar: { name: 'مجمع الشفاء الطبي', sector: 'مسقط، عُمان — رعاية صحية', text: 'ما توقعنا إن النظام يشتغل بهالسهولة مع نظامنا القديم. الدعم الفني ساعدنا في كل خطوة. بعض المرضى الكبار في السن يحتاجون وقت للتأقلم.', rating: 4 },
    en: { name: 'Al Shifa Medical Complex', sector: 'Muscat, Oman — Healthcare', text: 'We didn\'t expect the system to integrate so easily with our old setup. Technical support helped us every step. Some elderly patients need time to adapt though.', rating: 4 },
  },
  {
    ar: { name: 'مطعم كان زمان', sector: 'عمّان، الأردن — مطاعم', text: 'المطعم عندنا مشغول خصوصاً في نهايات الأسبوع. سارة تدير الحجوزات في أوقات الذروة وتوزع الجلسات بذكاء. الزبائن راضين عن الخدمة.', rating: 5 },
    en: { name: 'Kan Zaman Restaurant', sector: 'Amman, Jordan — Restaurants', text: 'Our restaurant is busy especially on weekends. Sara manages peak-hour bookings and distributes seating smartly. Customers are happy with the service.', rating: 5 },
  },
  {
    ar: { name: 'ستوديو فيت بلس', sector: 'الدوحة، قطر — لياقة بدنية', text: 'الستوديو عندنا فيه حصص جماعية وخاصة. سارة تفرق بينهم وتحجز الصح. الشيء الوحيد إننا نتمنى تدعم حجز الحصص الجماعية بشكل أوسع.', rating: 4 },
    en: { name: 'FitPlus Studio', sector: 'Doha, Qatar — Fitness', text: 'Our studio has group and private sessions. Sara differentiates between them and books correctly. The only thing is we wish it supported group class booking more broadly.', rating: 4 },
  },
]

const Stars = ({ count }: { count: number }) => (
  <div style={{ display: 'flex', gap: '3px' }}>
    {[1,2,3,4,5].map(i => (
      <div key={i} style={{ width: '12px', height: '12px', borderRadius: '2px', background: i <= count ? '#FFD740' : 'rgba(255,255,255,0.1)' }} />
    ))}
  </div>
)

export default function Testimonials() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'
  const isMobile = useIsMobile()

  return (
    <section style={{ padding: '100px 5%', background: 'rgba(9,19,35,0.5)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
            {isRTL ? 'آراء العملاء' : 'TESTIMONIALS'}
          </div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: '900', marginBottom: '16px' }}>
            {isRTL ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
          </h2>
          <p style={{ fontSize: '15px', color: '#8494B0', maxWidth: '500px', margin: '0 auto', lineHeight: '1.8' }}>
            {isRTL ? 'تجارب حقيقية من بيزنسات في الخليج والمنطقة العربية' : 'Real experiences from businesses across the Gulf and Arab region'}
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '20px' }}>
          {testimonials.map((t, i) => {
            const data = isRTL ? t.ar : t.en
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="card-hover"
                style={{ background: '#091323', border: '1px solid rgba(0,212,170,0.1)', borderRadius: '16px', padding: '24px', transition: 'all 0.25s', display: 'flex', flexDirection: 'column', gap: '16px' }}>

                <Stars count={data.rating} />

                <p style={{ fontSize: '13px', color: '#8494B0', lineHeight: '1.8', flex: 1 }}>
                  "{data.text}"
                </p>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '38px', height: '38px', background: 'linear-gradient(135deg,rgba(0,212,170,0.2),rgba(0,212,170,0.05))', border: '1px solid rgba(0,212,170,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '900', color: '#00D4AA', flexShrink: 0 }}>
                    {data.name[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#EDF2FF' }}>{data.name}</div>
                    <div style={{ fontSize: '10px', color: '#5E7090', marginTop: '2px' }}>{data.sector}</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
          <div style={{ fontSize: '40px', fontWeight: '900', color: '#FFD740' }}>4.5</div>
          <div>
            <Stars count={4} />
            <div style={{ fontSize: '11px', color: '#5E7090', marginTop: '4px' }}>
              {isRTL ? 'متوسط التقييم من عملائنا في المنطقة' : 'Average rating from our clients across the region'}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
