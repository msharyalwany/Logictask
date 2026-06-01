'use client'
import ServiceTemplate from '../../components/ServiceTemplate'

const data = {
  slug: 'contracting',
  available: false,
  color: '#FFAB40',
  ar: {
    title: 'AI Contracting Agent',
    subtitle: 'ذكاء اصطناعي متخصص في قطاع المقاولات',
    description: 'وكيل ذكاء اصطناعي مصمم خصيصاً لشركات المقاولات والإنشاءات — يبني عروض الأسعار، يحسب التكاليف، ويدير المشاريع بدقة وسرعة.',
    features: [
      { ar: 'بناء عروض الأسعار تلقائياً', en: 'Auto Quotation Building', arDesc: 'يبني عروض أسعار تفصيلية ودقيقة في دقائق بدل أيام', enDesc: 'Builds detailed and accurate price quotes in minutes instead of days' },
      { ar: 'حساب تكلفة المواد', en: 'Material Cost Calculation', arDesc: 'يحسب تكلفة المواد بدقة بناءً على أسعار السوق الحالية', enDesc: 'Calculates material costs accurately based on current market prices' },
      { ar: 'تقدير تكلفة العمالة', en: 'Labor Cost Estimation', arDesc: 'يقدر تكاليف العمالة بناءً على نوع المشروع والمنطقة', enDesc: 'Estimates labor costs based on project type and location' },
      { ar: 'تحليل العطاءات', en: 'Bid Analysis', arDesc: 'يحلل العطاءات المنافسة ويساعدك على تقديم سعر منافس', enDesc: 'Analyzes competing bids and helps you submit a competitive price' },
      { ar: 'جدولة المشاريع', en: 'Project Scheduling', arDesc: 'يبني جدول زمني واقعي للمشروع مع تتبع التقدم', enDesc: 'Builds a realistic project timeline with progress tracking' },
      { ar: 'إدارة المقاولين الفرعيين', en: 'Subcontractor Management', arDesc: 'يتابع المقاولين الفرعيين والمدفوعات والمستحقات', enDesc: 'Tracks subcontractors, payments, and outstanding amounts' },
      { ar: 'تقارير المشاريع', en: 'Project Reports', arDesc: 'تقارير شاملة عن تكاليف وتقدم وربحية المشاريع', enDesc: 'Comprehensive reports on project costs, progress, and profitability' },
      { ar: 'مقارنة أسعار الموردين', en: 'Supplier Price Comparison', arDesc: 'يقارن أسعار الموردين ويختار الأفضل تلقائياً', enDesc: 'Compares supplier prices and automatically selects the best option' },
    ],
    benefits: [
      { title: 'عروض أسرع 10 مرات', desc: 'من أيام إلى دقائق — قدم عروضاً أكثر واربح عطاءات أكثر' },
      { title: 'دقة أعلى في التكاليف', desc: 'حسابات دقيقة تعني هامش ربح محمي وتجنب الخسائر المفاجئة' },
      { title: 'إدارة مشاريع أفضل', desc: 'تتبع شامل لكل مشروع يعني تسليم في الوقت وضمن الميزانية' },
    ],
    useCases: ['شركات المقاولات العامة', 'مقاولو الديكور والتشطيبات', 'شركات الكهرباء والسباكة', 'مكاتب الهندسة المعمارية', 'شركات الصيانة', 'مطوري العقارات', 'مقاولو الطرق والبنية التحتية', 'أي شركة في قطاع الإنشاءات'],
    cta: 'سجّل اهتمامك الآن',
  },
  en: {
    title: 'AI Contracting Agent',
    subtitle: 'AI Specialized in the Contracting Sector',
    description: 'An AI agent designed specifically for contracting and construction companies — builds price quotes, calculates costs, and manages projects with precision and speed.',
    features: [
      { ar: 'بناء عروض الأسعار تلقائياً', en: 'Auto Quotation Building', arDesc: 'عروض أسعار تفصيلية في دقائق', enDesc: 'Builds detailed and accurate price quotes in minutes instead of days' },
      { ar: 'حساب تكلفة المواد', en: 'Material Cost Calculation', arDesc: 'حساب تكلفة المواد بدقة', enDesc: 'Calculates material costs accurately based on current market prices' },
      { ar: 'تقدير تكلفة العمالة', en: 'Labor Cost Estimation', arDesc: 'تقدير تكاليف العمالة', enDesc: 'Estimates labor costs based on project type and location' },
      { ar: 'تحليل العطاءات', en: 'Bid Analysis', arDesc: 'تحليل العطاءات المنافسة', enDesc: 'Analyzes competing bids and helps you submit a competitive price' },
      { ar: 'جدولة المشاريع', en: 'Project Scheduling', arDesc: 'جدول زمني واقعي للمشروع', enDesc: 'Builds a realistic project timeline with progress tracking' },
      { ar: 'إدارة المقاولين الفرعيين', en: 'Subcontractor Management', arDesc: 'متابعة المقاولين والمدفوعات', enDesc: 'Tracks subcontractors, payments, and outstanding amounts' },
      { ar: 'تقارير المشاريع', en: 'Project Reports', arDesc: 'تقارير شاملة للمشاريع', enDesc: 'Comprehensive reports on project costs, progress, and profitability' },
      { ar: 'مقارنة أسعار الموردين', en: 'Supplier Price Comparison', arDesc: 'مقارنة أسعار الموردين', enDesc: 'Compares supplier prices and automatically selects the best option' },
    ],
    benefits: [
      { title: '10x Faster Quotes', desc: 'From days to minutes — submit more quotes and win more bids' },
      { title: 'Higher Cost Accuracy', desc: 'Precise calculations mean protected profit margins and avoiding surprise losses' },
      { title: 'Better Project Management', desc: 'Comprehensive tracking of every project means on-time delivery within budget' },
    ],
    useCases: ['General Contractors', 'Decor & Finishing Contractors', 'Electrical & Plumbing Companies', 'Architecture Firms', 'Maintenance Companies', 'Real Estate Developers', 'Road & Infrastructure Contractors', 'Any Construction Sector Company'],
    cta: 'Register Your Interest',
  },
}

export default function ContractingPage() {
  return <ServiceTemplate data={data} />
}
