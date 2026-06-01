'use client'
import ServiceTemplate from '../../components/ServiceTemplate'

const data = {
  slug: 'sales-agent',
  available: false,
  color: '#FFD740',
  ar: {
    title: 'AI Sales Agent',
    subtitle: 'مندوب مبيعات ذكي يعمل بدون توقف',
    description: 'وكيل مبيعات مدعوم بالذكاء الاصطناعي يؤهل العملاء المحتملين، يرسل العروض، ويتابع الصفقات تلقائياً. فريق مبيعات كامل في نظام واحد.',
    features: [
      { ar: 'تأهيل العملاء المحتملين', en: 'Lead Qualification', arDesc: 'يحدد العملاء الجاهزين للشراء ويرتبهم حسب الأولوية', enDesc: 'Identifies ready-to-buy leads and prioritizes them' },
      { ar: 'إرسال العروض تلقائياً', en: 'Auto Proposal Sending', arDesc: 'يرسل عروض مخصصة لكل عميل في الوقت المناسب', enDesc: 'Sends personalized proposals to each client at the right time' },
      { ar: 'متابعة الصفقات', en: 'Deal Follow-up', arDesc: 'يتابع كل صفقة حتى الإغلاق بدون نسيان', enDesc: 'Follows up on every deal until closing without forgetting' },
      { ar: 'تحليل سلوك العملاء', en: 'Client Behavior Analysis', arDesc: 'يفهم متى العميل جاهز للشراء ويتصرف بذكاء', enDesc: 'Understands when a client is ready to buy and acts smartly' },
      { ar: 'تقارير المبيعات', en: 'Sales Reports', arDesc: 'تقارير تفصيلية عن الصفقات والإيرادات والتحويلات', enDesc: 'Detailed reports on deals, revenue, and conversions' },
      { ar: 'تكامل مع CRM', en: 'CRM Integration', arDesc: 'يتكامل مع نظام CRM الحالي لديك', enDesc: 'Integrates with your existing CRM system' },
      { ar: 'حملات outreach ذكية', en: 'Smart Outreach Campaigns', arDesc: 'يرسل رسائل مخصصة للعملاء المحتملين على نطاق واسع', enDesc: 'Sends personalized messages to prospects at scale' },
      { ar: 'تسجيل الصفقات تلقائياً', en: 'Auto Deal Recording', arDesc: 'يسجل كل تفاعل وصفقة في النظام تلقائياً', enDesc: 'Records every interaction and deal in the system automatically' },
    ],
    benefits: [
      { title: 'زيادة المبيعات 40%+', desc: 'متابعة منتظمة وعروض مخصصة تعني تحويل أكثر وإيراد أعلى' },
      { title: 'لا فرص ضائعة', desc: 'كل عميل محتمل يُتابع حتى يقرر — لا أحد يسقط من الرادار' },
      { title: 'فريق مبيعات أصغر وأكفأ', desc: 'المهام المتكررة تتم تلقائياً وفريقك يركز على الإغلاق فقط' },
    ],
    useCases: ['شركات B2B', 'وكالات عقارية', 'شركات التأمين', 'خدمات SaaS', 'شركات الاستشارات', 'وكالات التسويق', 'موزعو المنتجات', 'أي بيزنس يبيع'],
    cta: 'سجّل اهتمامك الآن',
  },
  en: {
    title: 'AI Sales Agent',
    subtitle: 'A Smart Sales Rep That Never Stops Working',
    description: 'An AI-powered sales agent that qualifies leads, sends proposals, and follows up on deals automatically. A complete sales team in one system.',
    features: [
      { ar: 'تأهيل العملاء المحتملين', en: 'Lead Qualification', arDesc: 'يحدد العملاء الجاهزين للشراء', enDesc: 'Identifies ready-to-buy leads and prioritizes them' },
      { ar: 'إرسال العروض تلقائياً', en: 'Auto Proposal Sending', arDesc: 'عروض مخصصة في الوقت المناسب', enDesc: 'Sends personalized proposals to each client at the right time' },
      { ar: 'متابعة الصفقات', en: 'Deal Follow-up', arDesc: 'متابعة حتى الإغلاق', enDesc: 'Follows up on every deal until closing without forgetting' },
      { ar: 'تحليل سلوك العملاء', en: 'Client Behavior Analysis', arDesc: 'يفهم متى العميل جاهز', enDesc: 'Understands when a client is ready to buy and acts smartly' },
      { ar: 'تقارير المبيعات', en: 'Sales Reports', arDesc: 'تقارير الصفقات والإيرادات', enDesc: 'Detailed reports on deals, revenue, and conversions' },
      { ar: 'تكامل مع CRM', en: 'CRM Integration', arDesc: 'تكامل مع CRM الحالي', enDesc: 'Integrates with your existing CRM system' },
      { ar: 'حملات outreach ذكية', en: 'Smart Outreach Campaigns', arDesc: 'رسائل مخصصة على نطاق واسع', enDesc: 'Sends personalized messages to prospects at scale' },
      { ar: 'تسجيل الصفقات تلقائياً', en: 'Auto Deal Recording', arDesc: 'يسجل كل تفاعل تلقائياً', enDesc: 'Records every interaction and deal automatically' },
    ],
    benefits: [
      { title: 'Increase Sales 40%+', desc: 'Regular follow-up and personalized proposals mean more conversions and higher revenue' },
      { title: 'No Lost Opportunities', desc: 'Every prospect is followed up until they decide — no one falls off the radar' },
      { title: 'Smaller More Efficient Team', desc: 'Repetitive tasks happen automatically and your team focuses only on closing' },
    ],
    useCases: ['B2B Companies', 'Real Estate Agencies', 'Insurance Companies', 'SaaS Services', 'Consulting Firms', 'Marketing Agencies', 'Product Distributors', 'Any Selling Business'],
    cta: 'Register Your Interest',
  },
}

export default function SalesAgentPage() {
  return <ServiceTemplate data={data} />
}
