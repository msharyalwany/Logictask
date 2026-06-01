'use client'
import ServiceTemplate from '../../components/ServiceTemplate'

const data = {
  slug: 'automation',
  available: false,
  color: '#FF80AB',
  ar: {
    title: 'Automation Services',
    subtitle: 'أتمتة كاملة لحضورك الرقمي',
    description: 'نأتمت إدارة السوشيال ميديا والتسويق الرقمي بالكامل — من نشر المحتوى إلى التفاعل مع الجمهور. ركز على بيزنسك ودعنا نتولى الرقمي.',
    features: [
      { ar: 'أتمتة السوشيال ميديا', en: 'Social Media Automation', arDesc: 'جدولة ونشر المحتوى تلقائياً على جميع المنصات', enDesc: 'Schedule and publish content automatically on all platforms' },
      { ar: 'TikTok Shop أتمتة', en: 'TikTok Shop Automation', arDesc: 'إدارة متجر TikTok والردود والطلبات تلقائياً', enDesc: 'Manage TikTok shop, replies, and orders automatically' },
      { ar: 'YouTube Shorts تلقائي', en: 'Auto YouTube Shorts', arDesc: 'إنتاج ونشر Shorts تلقائياً من محتواك الحالي', enDesc: 'Produce and publish Shorts automatically from your existing content' },
      { ar: 'LinkedIn Outreach', en: 'LinkedIn Outreach', arDesc: 'حملات توسع ذكية على LinkedIn بدون جهد يدوي', enDesc: 'Smart expansion campaigns on LinkedIn without manual effort' },
      { ar: 'Email Marketing ذكي', en: 'Smart Email Marketing', arDesc: 'حملات بريد إلكتروني مخصصة ومجدولة تلقائياً', enDesc: 'Personalized and automatically scheduled email campaigns' },
      { ar: 'تحليل الأداء', en: 'Performance Analytics', arDesc: 'تقارير شاملة عن أداء محتواك وحملاتك', enDesc: 'Comprehensive reports on your content and campaign performance' },
      { ar: 'إعادة نشر المحتوى', en: 'Content Repurposing', arDesc: 'يحول محتوى واحد لمقاطع متعددة على منصات مختلفة', enDesc: 'Turns one piece of content into multiple formats for different platforms' },
      { ar: 'رد تلقائي على التعليقات', en: 'Auto Comment Replies', arDesc: 'يرد على تعليقات جمهورك بشكل ذكي وطبيعي', enDesc: 'Replies to your audience comments smartly and naturally' },
    ],
    benefits: [
      { title: 'توفير 20+ ساعة أسبوعياً', desc: 'الأتمتة تتولى الجزء الممل وأنت تركز على الإبداع والاستراتيجية' },
      { title: 'حضور رقمي مستمر', desc: 'محتوى ينشر بانتظام = خوارزميات أفضل = وصول أوسع' },
      { title: 'نمو أسرع بتكلفة أقل', desc: 'أتمتة التسويق تعني نتائج أكثر بجهد أقل وميزانية أصغر' },
    ],
    useCases: ['المتاجر الإلكترونية', 'المؤثرون والكريتورز', 'الوكالات الإبداعية', 'شركات التجزئة', 'المطاعم والكافيهات', 'مراكز التجميل', 'المدربون والمستشارون', 'أي بيزنس يريد نمو رقمي'],
    cta: 'سجّل اهتمامك الآن',
  },
  en: {
    title: 'Automation Services',
    subtitle: 'Complete Automation for Your Digital Presence',
    description: 'We automate your entire social media and digital marketing management — from content publishing to audience engagement. Focus on your business and let us handle the digital.',
    features: [
      { ar: 'أتمتة السوشيال ميديا', en: 'Social Media Automation', arDesc: 'جدولة ونشر تلقائي', enDesc: 'Schedule and publish content automatically on all platforms' },
      { ar: 'TikTok Shop أتمتة', en: 'TikTok Shop Automation', arDesc: 'إدارة متجر TikTok', enDesc: 'Manage TikTok shop, replies, and orders automatically' },
      { ar: 'YouTube Shorts تلقائي', en: 'Auto YouTube Shorts', arDesc: 'Shorts تلقائية من محتواك', enDesc: 'Produce and publish Shorts automatically from your existing content' },
      { ar: 'LinkedIn Outreach', en: 'LinkedIn Outreach', arDesc: 'حملات LinkedIn ذكية', enDesc: 'Smart expansion campaigns on LinkedIn without manual effort' },
      { ar: 'Email Marketing ذكي', en: 'Smart Email Marketing', arDesc: 'حملات بريد مخصصة', enDesc: 'Personalized and automatically scheduled email campaigns' },
      { ar: 'تحليل الأداء', en: 'Performance Analytics', arDesc: 'تقارير شاملة للأداء', enDesc: 'Comprehensive reports on your content and campaign performance' },
      { ar: 'إعادة نشر المحتوى', en: 'Content Repurposing', arDesc: 'محتوى واحد لمنصات متعددة', enDesc: 'Turns one piece of content into multiple formats for different platforms' },
      { ar: 'رد تلقائي على التعليقات', en: 'Auto Comment Replies', arDesc: 'ردود ذكية وطبيعية', enDesc: 'Replies to your audience comments smartly and naturally' },
    ],
    benefits: [
      { title: 'Save 20+ Hours Weekly', desc: 'Automation handles the boring part and you focus on creativity and strategy' },
      { title: 'Consistent Digital Presence', desc: 'Regular content publishing = better algorithms = wider reach' },
      { title: 'Faster Growth at Lower Cost', desc: 'Marketing automation means more results with less effort and smaller budget' },
    ],
    useCases: ['E-commerce Stores', 'Influencers & Creators', 'Creative Agencies', 'Retail Companies', 'Restaurants & Cafes', 'Beauty Centers', 'Coaches & Consultants', 'Any Business Wanting Digital Growth'],
    cta: 'Register Your Interest',
  },
}

export default function AutomationPage() {
  return <ServiceTemplate data={data} />
}
