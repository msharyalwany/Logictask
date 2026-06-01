'use client'
import ServiceTemplate from '../../components/ServiceTemplate'

const data = {
  slug: 'customer-service',
  available: false,
  color: '#40C4FF',
  ar: {
    title: 'AI Customer Service',
    subtitle: 'دعم عملاء ذكي لا يتعب ولا يمل',
    description: 'وكيل ذكاء اصطناعي متخصص في دعم العملاء — يحل المشكلات، يجيب على الأسئلة، ويصعد للبشر فقط عند الضرورة. بدون أوقات انتظار وبدون إحباط.',
    features: [
      { ar: 'دعم فوري 24/7', en: '24/7 Instant Support', arDesc: 'رد على كل استفسار في ثوانٍ — في أي وقت من الليل أو النهار', enDesc: 'Reply to every inquiry in seconds — any time day or night' },
      { ar: 'حل المشكلات تلقائياً', en: 'Auto Problem Resolution', arDesc: 'يحل 85%+ من المشكلات الشائعة بدون تدخل بشري', enDesc: 'Resolves 85%+ of common issues without human involvement' },
      { ar: 'تصعيد ذكي للبشر', en: 'Smart Human Escalation', arDesc: 'يحول للموظف البشري فقط عند الحاجة الحقيقية مع كامل السياق', enDesc: 'Transfers to human only when truly needed with full context' },
      { ar: 'قاعدة معرفة ذكية', en: 'Smart Knowledge Base', arDesc: 'يتعلم من كل تفاعل ويصبح أذكى مع الوقت', enDesc: 'Learns from every interaction and gets smarter over time' },
      { ar: 'تقارير رضا العملاء', en: 'Customer Satisfaction Reports', arDesc: 'تقارير تفصيلية عن مستوى رضا العملاء وأكثر المشكلات تكراراً', enDesc: 'Detailed reports on customer satisfaction and most repeated issues' },
      { ar: 'دعم متعدد اللغات', en: 'Multilingual Support', arDesc: 'يدعم العربية والإنجليزية بطلاقة مع اللهجات الخليجية', enDesc: 'Supports Arabic and English fluently with Gulf dialects' },
      { ar: 'تتبع التذاكر', en: 'Ticket Tracking', arDesc: 'يتابع كل مشكلة حتى حلها الكامل', enDesc: 'Follows up on every issue until fully resolved' },
      { ar: 'تكامل مع أنظمتك', en: 'System Integration', arDesc: 'يتكامل مع CRM ونظام الدعم الحالي لديك', enDesc: 'Integrates with your CRM and current support system' },
    ],
    benefits: [
      { title: 'تقليل تكلفة الدعم 70%', desc: 'أتمتة الردود المتكررة تعني فريق أصغر وتكلفة أقل بكثير مع جودة أعلى' },
      { title: 'رضا عملاء أعلى', desc: 'ردود فورية بدون انتظار = عملاء أسعد وتقييمات أفضل وولاء أقوى' },
      { title: 'بيانات قابلة للتحليل', desc: 'كل تفاعل يتحول لبيانات قابلة للتحليل لتحسين خدمتك باستمرار' },
    ],
    useCases: ['شركات التجزئة', 'خدمات الاتصالات', 'البنوك والتأمين', 'التجارة الإلكترونية', 'شركات البرمجيات', 'الخدمات الحكومية', 'شركات الطاقة', 'أي شركة لديها فريق دعم'],
    cta: 'سجّل اهتمامك الآن',
  },
  en: {
    title: 'AI Customer Service',
    subtitle: 'Smart Customer Support That Never Gets Tired',
    description: 'An AI agent specialized in customer support — solves problems, answers questions, and escalates to humans only when necessary. No waiting times and no frustration.',
    features: [
      { ar: 'دعم فوري 24/7', en: '24/7 Instant Support', arDesc: 'رد على كل استفسار في ثوانٍ', enDesc: 'Reply to every inquiry in seconds — any time day or night' },
      { ar: 'حل المشكلات تلقائياً', en: 'Auto Problem Resolution', arDesc: 'يحل 85%+ من المشكلات الشائعة', enDesc: 'Resolves 85%+ of common issues without human involvement' },
      { ar: 'تصعيد ذكي للبشر', en: 'Smart Human Escalation', arDesc: 'يحول للموظف عند الحاجة الحقيقية', enDesc: 'Transfers to human only when truly needed with full context' },
      { ar: 'قاعدة معرفة ذكية', en: 'Smart Knowledge Base', arDesc: 'يتعلم ويصبح أذكى مع الوقت', enDesc: 'Learns from every interaction and gets smarter over time' },
      { ar: 'تقارير رضا العملاء', en: 'Customer Satisfaction Reports', arDesc: 'تقارير تفصيلية عن رضا العملاء', enDesc: 'Detailed reports on customer satisfaction and repeated issues' },
      { ar: 'دعم متعدد اللغات', en: 'Multilingual Support', arDesc: 'عربي وإنجليزي مع اللهجات', enDesc: 'Supports Arabic and English fluently with Gulf dialects' },
      { ar: 'تتبع التذاكر', en: 'Ticket Tracking', arDesc: 'يتابع كل مشكلة حتى حلها', enDesc: 'Follows up on every issue until fully resolved' },
      { ar: 'تكامل مع أنظمتك', en: 'System Integration', arDesc: 'تكامل مع CRM الحالي', enDesc: 'Integrates with your CRM and current support system' },
    ],
    benefits: [
      { title: 'Reduce Support Cost 70%', desc: 'Automating repetitive replies means a smaller team and much lower cost with higher quality' },
      { title: 'Higher Customer Satisfaction', desc: 'Instant replies without waiting = happier clients, better ratings, stronger loyalty' },
      { title: 'Actionable Data', desc: 'Every interaction becomes analyzable data to continuously improve your service' },
    ],
    useCases: ['Retail Companies', 'Telecom Services', 'Banks & Insurance', 'E-commerce', 'Software Companies', 'Government Services', 'Energy Companies', 'Any Company With a Support Team'],
    cta: 'Register Your Interest',
  },
}

export default function CustomerServicePage() {
  return <ServiceTemplate data={data} />
}
