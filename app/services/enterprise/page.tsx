'use client'
import ServiceTemplate from '../../components/ServiceTemplate'

const data = {
  slug: 'enterprise',
  available: false,
  color: '#CE93D8',
  ar: {
    title: 'Enterprise Solutions',
    subtitle: 'حلول ذكاء اصطناعي للمؤسسات الكبيرة',
    description: 'حلول متكاملة للمؤسسات والشركات الكبيرة — CRM ذكي، إدارة المستودعات، الوكيل القانوني، مدير الأسطول، والوكيل المالي. كل شيء في منظومة واحدة.',
    features: [
      { ar: 'CRM ذكي', en: 'Smart CRM', arDesc: 'إدارة علاقات عملاء مدعومة بالذكاء الاصطناعي', enDesc: 'AI-powered customer relationship management' },
      { ar: 'Zoer WMS — إدارة المستودعات', en: 'Zoer WMS — Warehouse Management', arDesc: 'نظام إدارة مستودعات ذكي يتتبع المخزون والشحنات', enDesc: 'Smart warehouse management system tracking inventory and shipments' },
      { ar: 'وكيل قانوني', en: 'Legal Assistant', arDesc: 'مساعد قانوني ذكي لمراجعة العقود وتحليل المخاطر', enDesc: 'Smart legal assistant for contract review and risk analysis' },
      { ar: 'مدير الأسطول', en: 'Fleet Manager', arDesc: 'إدارة ذكية للأسطول والمركبات والسائقين', enDesc: 'Smart management of fleet, vehicles, and drivers' },
      { ar: 'وكيل مالي', en: 'Financial Agent', arDesc: 'تحليل مالي ذكي وتقارير وتنبيهات فورية', enDesc: 'Smart financial analysis, reports, and instant alerts' },
      { ar: 'HR Agent ذكي', en: 'Smart HR Agent', arDesc: 'أتمتة عمليات الموارد البشرية والتوظيف', enDesc: 'Automate HR processes and recruitment' },
      { ar: 'تكامل ERP', en: 'ERP Integration', arDesc: 'يتكامل مع أنظمة ERP الحالية بسلاسة', enDesc: 'Seamlessly integrates with existing ERP systems' },
      { ar: 'أمان مؤسسي', en: 'Enterprise Security', arDesc: 'أعلى معايير الأمان والامتثال للوائح', enDesc: 'Highest security standards and regulatory compliance' },
    ],
    benefits: [
      { title: 'كفاءة تشغيلية 50%+', desc: 'أتمتة العمليات المعقدة تعني إنتاجية أعلى وتكاليف تشغيل أقل' },
      { title: 'رؤية 360° للمؤسسة', desc: 'جميع أقسام الشركة مترابطة في نظام واحد تراه من لوحة واحدة' },
      { title: 'قرارات استراتيجية أفضل', desc: 'بيانات شاملة ودقيقة تدعم القرارات الاستراتيجية للإدارة العليا' },
    ],
    useCases: ['الشركات الكبرى', 'المجموعات التجارية', 'شركات اللوجستيك', 'المستشفيات الكبيرة', 'سلاسل التجزئة', 'شركات المقاولات الكبيرة', 'المؤسسات المالية', 'الهيئات الحكومية'],
    cta: 'سجّل اهتمامك الآن',
  },
  en: {
    title: 'Enterprise Solutions',
    subtitle: 'AI Solutions for Large Organizations',
    description: 'Integrated solutions for large enterprises — Smart CRM, warehouse management, legal assistant, fleet manager, and financial agent. Everything in one ecosystem.',
    features: [
      { ar: 'CRM ذكي', en: 'Smart CRM', arDesc: 'إدارة علاقات عملاء ذكية', enDesc: 'AI-powered customer relationship management' },
      { ar: 'Zoer WMS', en: 'Zoer WMS — Warehouse Management', arDesc: 'إدارة مستودعات ذكية', enDesc: 'Smart warehouse management tracking inventory and shipments' },
      { ar: 'وكيل قانوني', en: 'Legal Assistant', arDesc: 'مراجعة عقود وتحليل مخاطر', enDesc: 'Smart legal assistant for contract review and risk analysis' },
      { ar: 'مدير الأسطول', en: 'Fleet Manager', arDesc: 'إدارة الأسطول والمركبات', enDesc: 'Smart management of fleet, vehicles, and drivers' },
      { ar: 'وكيل مالي', en: 'Financial Agent', arDesc: 'تحليل مالي وتقارير ذكية', enDesc: 'Smart financial analysis, reports, and instant alerts' },
      { ar: 'HR Agent ذكي', en: 'Smart HR Agent', arDesc: 'أتمتة الموارد البشرية', enDesc: 'Automate HR processes and recruitment' },
      { ar: 'تكامل ERP', en: 'ERP Integration', arDesc: 'تكامل مع ERP الحالي', enDesc: 'Seamlessly integrates with existing ERP systems' },
      { ar: 'أمان مؤسسي', en: 'Enterprise Security', arDesc: 'أعلى معايير الأمان', enDesc: 'Highest security standards and regulatory compliance' },
    ],
    benefits: [
      { title: '50%+ Operational Efficiency', desc: 'Automating complex processes means higher productivity and lower operating costs' },
      { title: '360° Enterprise View', desc: 'All company departments connected in one system visible from one dashboard' },
      { title: 'Better Strategic Decisions', desc: 'Comprehensive and accurate data supports strategic decisions for senior management' },
    ],
    useCases: ['Large Corporations', 'Business Groups', 'Logistics Companies', 'Large Hospitals', 'Retail Chains', 'Large Contracting Companies', 'Financial Institutions', 'Government Bodies'],
    cta: 'Register Your Interest',
  },
}

export default function EnterprisePage() {
  return <ServiceTemplate data={data} />
}
