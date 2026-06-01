'use client'
import { motion } from 'framer-motion'
import { useLang } from '../components/LangContext'

const rows = [
  { ar: 'ساعات العمل', en: 'Working Hours', sara: { ar: '24/7 بدون توقف', en: '24/7 Non-Stop' }, human: { ar: '8 ساعات فقط', en: '8 Hours Only' }, saraWins: true },
  { ar: 'التكلفة الشهرية', en: 'Monthly Cost', sara: { ar: '149 — 199 KWD', en: '149 — 199 KWD' }, human: { ar: '350+ KWD', en: '350+ KWD' }, saraWins: true },
  { ar: 'وقت الرد', en: 'Response Time', sara: { ar: 'أقل من 30 ثانية', en: 'Under 30 Seconds' }, human: { ar: 'دقائق أو لا رد', en: 'Minutes or No Reply' }, saraWins: true },
  { ar: 'الإجازات والمرض', en: 'Leaves & Sick Days', sara: { ar: 'لا إجازات أبداً', en: 'No Leaves Ever' }, human: { ar: 'إجازات + مرض', en: 'Leaves + Sick Days' }, saraWins: true },
  { ar: 'الأخطاء', en: 'Errors', sara: { ar: 'صفر أخطاء', en: 'Zero Errors' }, human: { ar: 'أخطاء بشرية متكررة', en: 'Frequent Human Errors' }, saraWins: true },
  { ar: 'وقت التركيب', en: 'Setup Time', sara: { ar: '48 ساعة', en: '48 Hours' }, human: { ar: 'أسابيع للتوظيف', en: 'Weeks to Hire' }, saraWins: true },
  { ar: 'التوسع', en: 'Scalability', sara: { ar: 'غير محدود', en: 'Unlimited' }, human: { ar: 'محدود', en: 'Limited' }, saraWins: true },
  { ar: 'التخصيص', en: 'Customization', sara: { ar: 'مخصص 100%', en: '100% Custom' }, human: { ar: 'محدود', en: 'Limited' }, saraWins: true },
]

export default function Comparison() {
  const { lang } = useLang()
  const isRTL = lang === 'ar'

  return (
    <section style={{ padding: '100px 5%', background: 'rgba(9,19,35,0.5)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', color: '#00D4AA', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
            {isRTL ? 'المقارنة' : 'COMPARISON'}
          </div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: '900', marginBottom: '16px' }}>
            {isRTL ? 'سارة AI مقابل موظف الاستقبال' : 'Sara AI vs. Receptionist'}
          </h2>
          <p style={{ fontSize: '15px', color: '#8494B0', maxWidth: '500px', margin: '0 auto', lineHeight: '1.8' }}>
            {isRTL ? 'الأرقام تتكلم — قرن بنفسك' : 'The numbers speak — compare for yourself'}
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ background: '#091323', border: '1px solid rgba(0,212,170,0.12)', borderRadius: '20px', overflow: 'hidden' }}>

          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', background: 'rgba(0,212,170,0.05)', padding: '16px 24px', borderBottom: '1px solid rgba(0,212,170,0.12)' }}>
            <div style={{ fontSize: '11px', color: '#5E7090', fontWeight: '700', textTransform: 'uppercase' }}>
              {isRTL ? 'المقارنة' : 'Feature'}
            </div>
            <div style={{ fontSize: '13px', color: '#00D4AA', fontWeight: '800', textAlign: 'center' }}>
              Sara AI
            </div>
            <div style={{ fontSize: '13px', color: '#8494B0', fontWeight: '700', textAlign: 'center' }}>
              {isRTL ? 'موظف بشري' : 'Human Staff'}
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '16px 24px', borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,212,170,0.03)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
              <div style={{ fontSize: '13px', color: '#8494B0' }}>
                {isRTL ? row.ar : row.en}
              </div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#00D4AA', textAlign: 'center' }}>
                {isRTL ? row.sara.ar : row.sara.en}
              </div>
              <div style={{ fontSize: '13px', color: '#FF5252', textAlign: 'center' }}>
                {isRTL ? row.human.ar : row.human.en}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '40px' }}>
          <div style={{ fontSize: '18px', fontWeight: '800', color: '#EDF2FF', marginBottom: '8px' }}>
            {isRTL ? 'وفّر أكثر من 150 KWD شهرياً — مع أداء أفضل بكثير' : 'Save over 150 KWD monthly — with far better performance'}
          </div>
          <div style={{ fontSize: '13px', color: '#5E7090' }}>
            {isRTL ? 'سارة تعمل بسعر أقل وتعطيك نتائج أعلى' : 'Sara works at a lower cost and delivers better results'}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
