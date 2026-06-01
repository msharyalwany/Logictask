'use client'
import ServiceTemplate from '../../components/ServiceTemplate'

const data = {
  slug: 'custom-build',
  available: true,
  color: '#00D4AA',
  ar: {
    title: 'Custom AI Build',
    subtitle: 'نبني أي نظام ذكاء اصطناعي تتخيله',
    description: 'هل عندك فكرة لنظام ذكاء اصطناعي مخصص؟ نحولها لواقع. من أبسط الأتمتة إلى أكثر الأنظمة تعقيداً — نبنيه من الصفر بما يناسب بيزنسك تماماً.',
    features: [
      { ar: 'تحليل الاحتياجات', en: 'Needs Analysis', arDesc: 'نجلس معك ونفهم احتياجاتك الدقيقة قبل كتابة سطر كود واحد', enDesc: 'We sit with you and understand your exact needs before writing one line of code' },
      { ar: 'تصميم مخصص 100%', en: '100% Custom Design', arDesc: 'لا قوالب جاهزة — كل شيء مبني خصيصاً لك', enDesc: 'No ready templates — everything built specifically for you' },
      { ar: 'تكامل مع أنظمتك', en: 'System Integration', arDesc: 'يتكامل مع أي نظام أو منصة تستخدمها حالياً', enDesc: 'Integrates with any system or platform you currently use' },
      { ar: 'نشر وصيانة', en: 'Deployment & Maintenance', arDesc: 'نتولى النشر والصيانة والتحديثات المستمرة', enDesc: 'We handle deployment, maintenance, and continuous updates' },
      { ar: 'توثيق كامل', en: 'Full Documentation', arDesc: 'توثيق شامل للنظام لسهولة الاستخدام والتطوير المستقبلي', enDesc: 'Comprehensive system documentation for ease of use and future development' },
      { ar: 'تدريب الفريق', en: 'Team Training', arDesc: 'نتولى تدريب فريقك على استخدام النظام الجديد', enDesc: 'We handle training your team on using the new system' },
      { ar: 'دعم مستمر', en: 'Ongoing Support', arDesc: 'دعم فني مستمر بعد التسليم لضمان أفضل أداء', enDesc: 'Continuous technical support after delivery to ensure best performance' },
      { ar: 'تطوير تدريجي', en: 'Iterative Development', arDesc: 'نبني بشكل تدريجي ونحسن بناءً على تجربتك الفعلية', enDesc: 'We build iteratively and improve based on your actual experience' },
    ],
    benefits: [
      { title: 'حل مصمم لك تحديداً', desc: 'بدلاً من تكييف نفسك مع برنامج جاهز — النظام يتكيف معك أنت' },
      { title: 'ميزة تنافسية حقيقية', desc: 'نظام مخصص يعني قدرات لا يملكها منافسوك' },
      { title: 'استثمار طويل الأمد', desc: 'نظام مبني صح يخدمك سنوات ويتطور مع نمو بيزنسك' },
    ],
    useCases: ['أي فكرة تحتاج أتمتة', 'عمليات داخلية معقدة', 'منتجات AI جديدة', 'تكاملات بين أنظمة', 'تحليل بيانات خاصة', 'نماذج AI مخصصة', 'أدوات داخلية للفريق', 'أي شيء تتخيله'],
    cta: 'احجز استشارة مجانية',
  },
  en: {
    title: 'Custom AI Build',
    subtitle: 'We Build Any AI System You Can Imagine',
    description: 'Have an idea for a custom AI system? We turn it into reality. From the simplest automation to the most complex systems — we build it from scratch to fit your business perfectly.',
    features: [
      { ar: 'تحليل الاحتياجات', en: 'Needs Analysis', arDesc: 'نفهم احتياجاتك الدقيقة', enDesc: 'We sit with you and understand your exact needs before writing one line of code' },
      { ar: 'تصميم مخصص 100%', en: '100% Custom Design', arDesc: 'لا قوالب جاهزة', enDesc: 'No ready templates — everything built specifically for you' },
      { ar: 'تكامل مع أنظمتك', en: 'System Integration', arDesc: 'تكامل مع أي نظام', enDesc: 'Integrates with any system or platform you currently use' },
      { ar: 'نشر وصيانة', en: 'Deployment & Maintenance', arDesc: 'نشر وصيانة وتحديثات', enDesc: 'We handle deployment, maintenance, and continuous updates' },
      { ar: 'توثيق كامل', en: 'Full Documentation', arDesc: 'توثيق شامل للنظام', enDesc: 'Comprehensive system documentation for ease of use and future development' },
      { ar: 'تدريب الفريق', en: 'Team Training', arDesc: 'تدريب فريقك على النظام', enDesc: 'We handle training your team on using the new system' },
      { ar: 'دعم مستمر', en: 'Ongoing Support', arDesc: 'دعم فني مستمر', enDesc: 'Continuous technical support after delivery to ensure best performance' },
      { ar: 'تطوير تدريجي', en: 'Iterative Development', arDesc: 'بناء تدريجي وتحسين مستمر', enDesc: 'We build iteratively and improve based on your actual experience' },
    ],
    benefits: [
      { title: 'Solution Designed Just for You', desc: 'Instead of adapting yourself to a ready-made software — the system adapts to you' },
      { title: 'Real Competitive Advantage', desc: 'A custom system means capabilities your competitors don\'t have' },
      { title: 'Long-term Investment', desc: 'A well-built system serves you for years and grows with your business' },
    ],
    useCases: ['Any Idea Needing Automation', 'Complex Internal Operations', 'New AI Products', 'System Integrations', 'Custom Data Analysis', 'Custom AI Models', 'Internal Team Tools', 'Anything You Can Imagine'],
    cta: 'Book Free Consultation',
  },
}

export default function CustomBuildPage() {
  return <ServiceTemplate data={data} />
}
