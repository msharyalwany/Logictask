'use client'
import ServiceTemplate from '../../components/ServiceTemplate'

const data = {
  slug: 'analytics',
  available: false,
  color: '#69F0AE',
  ar: {
    title: 'Analytics & Intelligence',
    subtitle: 'بيانات تتكلم — قرارات أذكى',
    description: 'نحول بيانات بيزنسك لرؤى قابلة للتنفيذ — تحليل الأداء، تنبؤ الطلب، ومراقبة المنافسين. اتخذ قرارات مبنية على الحقائق لا التخمين.',
    features: [
      { ar: 'تحليل بيانات شامل', en: 'Comprehensive Data Analysis', arDesc: 'يحلل جميع بيانات بيزنسك ويستخرج أنماط مخفية', enDesc: 'Analyzes all your business data and extracts hidden patterns' },
      { ar: 'تقارير ذكية تلقائية', en: 'Smart Auto Reports', arDesc: 'تقارير أسبوعية وشهرية تصلك تلقائياً بأهم المؤشرات', enDesc: 'Weekly and monthly reports delivered automatically with key metrics' },
      { ar: 'تنبؤ بالطلب', en: 'Demand Forecasting', arDesc: 'يتوقع الطلب المستقبلي لتخطط مسبقاً', enDesc: 'Predicts future demand so you can plan ahead' },
      { ar: 'مراقبة المنافسين', en: 'Competitor Monitoring', arDesc: 'يتابع تحركات المنافسين ويعلمك بالتغييرات المهمة', enDesc: 'Tracks competitor moves and alerts you to important changes' },
      { ar: 'تحليل سلوك العملاء', en: 'Customer Behavior Analysis', arDesc: 'يفهم لماذا يشتري عملاؤك ومتى وماذا', enDesc: 'Understands why, when, and what your clients buy' },
      { ar: 'لوحة KPI مخصصة', en: 'Custom KPI Dashboard', arDesc: 'لوحة مخصصة بمؤشرات أداء بيزنسك تحديداً', enDesc: 'Custom dashboard with your specific business performance indicators' },
      { ar: 'تنبيهات الشذوذ', en: 'Anomaly Alerts', arDesc: 'ينبهك فوراً عند حدوث أي شيء غير طبيعي في بياناتك', enDesc: 'Alerts you immediately when anything abnormal happens in your data' },
      { ar: 'تكامل مع مصادر البيانات', en: 'Data Source Integration', arDesc: 'يجمع بيانات من جميع أنظمتك في مكان واحد', enDesc: 'Collects data from all your systems in one place' },
    ],
    benefits: [
      { title: 'قرارات أدق وأسرع', desc: 'بيانات واضحة = قرارات صحيحة = نتائج أفضل وتجنب الأخطاء المكلفة' },
      { title: 'اكتشاف فرص مخفية', desc: 'التحليل العميق يكشف فرص نمو ما كنت لترى بالعين المجردة' },
      { title: 'تقليل الهدر', desc: 'تعرف أين تذهب ميزانيتك بالضبط وما الذي يعطي عائداً حقيقياً' },
    ],
    useCases: ['شركات التجزئة', 'التجارة الإلكترونية', 'المستشفيات والعيادات', 'شركات الخدمات المالية', 'سلاسل المطاعم', 'شركات العقارات', 'شركات التصنيع', 'أي شركة تريد نمو مبني على بيانات'],
    cta: 'سجّل اهتمامك الآن',
  },
  en: {
    title: 'Analytics & Intelligence',
    subtitle: 'Data That Speaks — Smarter Decisions',
    description: 'We turn your business data into actionable insights — performance analysis, demand forecasting, and competitor monitoring. Make decisions based on facts not guesses.',
    features: [
      { ar: 'تحليل بيانات شامل', en: 'Comprehensive Data Analysis', arDesc: 'تحليل جميع بيانات بيزنسك', enDesc: 'Analyzes all your business data and extracts hidden patterns' },
      { ar: 'تقارير ذكية تلقائية', en: 'Smart Auto Reports', arDesc: 'تقارير أسبوعية وشهرية تلقائية', enDesc: 'Weekly and monthly reports delivered automatically with key metrics' },
      { ar: 'تنبؤ بالطلب', en: 'Demand Forecasting', arDesc: 'توقع الطلب المستقبلي', enDesc: 'Predicts future demand so you can plan ahead' },
      { ar: 'مراقبة المنافسين', en: 'Competitor Monitoring', arDesc: 'متابعة تحركات المنافسين', enDesc: 'Tracks competitor moves and alerts you to important changes' },
      { ar: 'تحليل سلوك العملاء', en: 'Customer Behavior Analysis', arDesc: 'فهم سلوك العملاء', enDesc: 'Understands why, when, and what your clients buy' },
      { ar: 'لوحة KPI مخصصة', en: 'Custom KPI Dashboard', arDesc: 'مؤشرات أداء مخصصة', enDesc: 'Custom dashboard with your specific business performance indicators' },
      { ar: 'تنبيهات الشذوذ', en: 'Anomaly Alerts', arDesc: 'تنبيه عند أي شذوذ', enDesc: 'Alerts you immediately when anything abnormal happens in your data' },
      { ar: 'تكامل مع مصادر البيانات', en: 'Data Source Integration', arDesc: 'جمع البيانات من جميع الأنظمة', enDesc: 'Collects data from all your systems in one place' },
    ],
    benefits: [
      { title: 'More Accurate & Faster Decisions', desc: 'Clear data = correct decisions = better results and avoiding costly mistakes' },
      { title: 'Discover Hidden Opportunities', desc: 'Deep analysis reveals growth opportunities you wouldn\'t see with the naked eye' },
      { title: 'Reduce Waste', desc: 'Know exactly where your budget goes and what gives real return' },
    ],
    useCases: ['Retail Companies', 'E-commerce', 'Hospitals & Clinics', 'Financial Services', 'Restaurant Chains', 'Real Estate Companies', 'Manufacturing', 'Any Data-Driven Growth Company'],
    cta: 'Register Your Interest',
  },
}

export default function AnalyticsPage() {
  return <ServiceTemplate data={data} />
}
