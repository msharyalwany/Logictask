'use client'
import ServiceTemplate from '../../components/ServiceTemplate'

const data = {
  slug: 'sara',
  available: true,
  color: '#00D4AA',
  ar: {
    title: 'سارة AI',
    subtitle: 'موظفتك الذكية التي لا تتوقف',
    description: 'سارة وكيل ذكاء اصطناعي مخصص 100% لبيزنسك — يرد على العملاء، يحجز المواعيد، يذكّر، ويتابع. على أي منصة تستخدمها. بدون تغيير في طريقة شغلك.',
    features: [
      { ar: 'رد تلقائي 24/7', en: 'Auto Reply 24/7', arDesc: 'رد فوري على كل رسالة في أقل من 30 ثانية — نص وصوت', enDesc: 'Instant reply to every message in under 30 seconds — text and voice' },
      { ar: 'حجز المواعيد', en: 'Appointment Booking', arDesc: 'تحجز مباشرة في Google Calendar أو أي نظام تستخدمه', enDesc: 'Books directly in Google Calendar or any system you use' },
      { ar: 'إلغاء وتعديل المواعيد', en: 'Cancel & Edit Bookings', arDesc: 'تعدل وتلغي المواعيد بناءً على طلب العميل تلقائياً', enDesc: 'Edits and cancels appointments based on client requests automatically' },
      { ar: 'منع الحجوزات المكررة', en: 'Prevent Duplicate Bookings', arDesc: 'تتحقق من التعارض قبل تأكيد أي موعد', enDesc: 'Checks for conflicts before confirming any appointment' },
      { ar: 'تذكير قبل 24 ساعة', en: '24-Hour Reminder', arDesc: 'تذكير تلقائي للعميل قبل الموعد بيوم كامل', enDesc: 'Automatic client reminder one full day before the appointment' },
      { ar: 'تذكير قبل ساعتين', en: '2-Hour Reminder', arDesc: 'تذكير ثانٍ قبل الموعد بساعتين لتقليل الغيابات', enDesc: 'Second reminder 2 hours before to reduce no-shows' },
      { ar: 'تنبيه فوري للإدارة', en: 'Instant Management Alert', arDesc: 'إشعار فوري لك عند كل حجز جديد أو إلغاء', enDesc: 'Instant notification to you on every new booking or cancellation' },
      { ar: 'متابعة الغائبين', en: 'Follow Up Absent Clients', arDesc: 'رسالة تلقائية للعملاء الذين لم يحضروا', enDesc: 'Automatic message to clients who did not show up' },
      { ar: 'تهنئة أعياد الميلاد', en: 'Birthday Greetings', arDesc: 'تهنئة تلقائية مع عرض خاص في يوم عيد ميلاد العميل', enDesc: 'Automatic greeting with special offer on client birthday' },
      { ar: 'طلب تقييم Google', en: 'Google Review Request', arDesc: 'تطلب تقييم Google تلقائياً بعد كل زيارة ناجحة', enDesc: 'Automatically requests Google review after every successful visit' },
      { ar: 'حملات مجدولة', en: 'Scheduled Campaigns', arDesc: 'إرسال عروض وحملات ترويجية في أوقات محددة', enDesc: 'Send offers and promotional campaigns at specific times' },
      { ar: 'داشبورد يومي', en: 'Daily Dashboard', arDesc: 'تقارير يومية وشهرية عن الحجوزات والمحادثات', enDesc: 'Daily and monthly reports on bookings and conversations' },
    ],
    benefits: [
      { title: 'توفير 200+ KWD شهرياً', desc: 'بدلاً من موظف استقبال بـ 350+ KWD — سارة تعمل بـ 149 KWD فقط وبأداء أعلى بكثير' },
      { title: 'لا غيابات ولا إجازات', desc: 'سارة تعمل 24/7 بدون توقف — لا مرض، لا إجازات، لا أعذار' },
      { title: 'تركيب في 48 ساعة', desc: 'من أول اتصال حتى التشغيل الكامل — 48 ساعة فقط بدون تعقيدات' },
    ],
    useCases: ['عيادات طبية', 'مراكز تجميل', 'صالات رياضية', 'مطاعم وكافيهات', 'مراكز تعليمية', 'مكاتب عقارية', 'معارض سيارات', 'خدمات مهنية', 'محلات تجارية', 'أي بيزنس يتعامل مع عملاء'],
    cta: 'ابدأ تجربة مجانية 5 أيام',
  },
  en: {
    title: 'Sara AI',
    subtitle: 'Your Smart Employee That Never Stops',
    description: 'Sara is an AI agent 100% customized for your business — replies to clients, books appointments, reminds, and follows up. On any platform you use. Without changing your workflow.',
    features: [
      { ar: 'رد تلقائي 24/7', en: 'Auto Reply 24/7', arDesc: 'رد فوري على كل رسالة في أقل من 30 ثانية', enDesc: 'Instant reply to every message in under 30 seconds — text and voice' },
      { ar: 'حجز المواعيد', en: 'Appointment Booking', arDesc: 'تحجز مباشرة في Google Calendar', enDesc: 'Books directly in Google Calendar or any system you use' },
      { ar: 'إلغاء وتعديل المواعيد', en: 'Cancel & Edit Bookings', arDesc: 'تعدّل وتلغي المواعيد تلقائياً', enDesc: 'Edits and cancels appointments based on client requests automatically' },
      { ar: 'منع الحجوزات المكررة', en: 'Prevent Duplicate Bookings', arDesc: 'تتحقق من التعارض قبل التأكيد', enDesc: 'Checks for conflicts before confirming any appointment' },
      { ar: 'تذكير قبل 24 ساعة', en: '24-Hour Reminder', arDesc: 'تذكير تلقائي قبل الموعد بيوم', enDesc: 'Automatic client reminder one full day before the appointment' },
      { ar: 'تذكير قبل ساعتين', en: '2-Hour Reminder', arDesc: 'تذكير ثانٍ لتقليل الغيابات', enDesc: 'Second reminder 2 hours before to reduce no-shows' },
      { ar: 'تنبيه فوري للإدارة', en: 'Instant Management Alert', arDesc: 'إشعار فوري عند كل حجز', enDesc: 'Instant notification on every new booking or cancellation' },
      { ar: 'متابعة الغائبين', en: 'Follow Up Absent Clients', arDesc: 'رسالة للعملاء الغائبين', enDesc: 'Automatic message to clients who did not show up' },
      { ar: 'تهنئة أعياد الميلاد', en: 'Birthday Greetings', arDesc: 'تهنئة مع عرض خاص', enDesc: 'Automatic greeting with special offer on client birthday' },
      { ar: 'طلب تقييم Google', en: 'Google Review Request', arDesc: 'تقييم Google بعد كل زيارة', enDesc: 'Automatically requests Google review after every successful visit' },
      { ar: 'حملات مجدولة', en: 'Scheduled Campaigns', arDesc: 'عروض في أوقات محددة', enDesc: 'Send offers and promotional campaigns at specific times' },
      { ar: 'داشبورد يومي', en: 'Daily Dashboard', arDesc: 'تقارير يومية وشهرية', enDesc: 'Daily and monthly reports on bookings and conversations' },
    ],
    benefits: [
      { title: 'Save 200+ KWD Monthly', desc: 'Instead of a receptionist at 350+ KWD — Sara works at 149 KWD only with far better performance' },
      { title: 'No Absences or Leaves', desc: 'Sara works 24/7 without stopping — no illness, no leaves, no excuses' },
      { title: 'Setup in 48 Hours', desc: 'From first contact to full operation — just 48 hours with no complications' },
    ],
    useCases: ['Medical Clinics', 'Beauty Centers', 'Gyms', 'Restaurants & Cafes', 'Education Centers', 'Real Estate Offices', 'Car Showrooms', 'Professional Services', 'Retail Stores', 'Any Client-Facing Business'],
    cta: 'Start 5-Day Free Trial',
  },
}

export default function SaraPage() {
  return <ServiceTemplate data={data} />
}
