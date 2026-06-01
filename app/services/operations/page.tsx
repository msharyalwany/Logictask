'use client'
import ServiceTemplate from '../../components/ServiceTemplate'

const data = {
  slug: 'operations',
  available: false,
  color: '#B39DDB',
  ar: {
    title: 'AI Operations',
    subtitle: 'أتمتة العمليات الداخلية بذكاء',
    description: 'نظام ذكاء اصطناعي يأتمت العمليات الداخلية لشركتك — من إدارة المهام وتنسيق الفرق إلى تقارير الأداء. اجعل شركتك تعمل كآلة منضبطة.',
    features: [
      { ar: 'أتمتة المهام المتكررة', en: 'Task Automation', arDesc: 'يحدد ويأتمت المهام المتكررة التي تأكل وقت فريقك', enDesc: 'Identifies and automates repetitive tasks that consume your team\'s time' },
      { ar: 'تنسيق الفرق', en: 'Team Coordination', arDesc: 'يوزع المهام ويتابع التقدم ويرسل التذكيرات تلقائياً', enDesc: 'Distributes tasks, tracks progress, and sends reminders automatically' },
      { ar: 'تقارير الأداء', en: 'Performance Reports', arDesc: 'تقارير شاملة عن أداء الفريق والعمليات بشكل دوري', enDesc: 'Comprehensive reports on team and operations performance periodically' },
      { ar: 'إدارة الموارد', en: 'Resource Management', arDesc: 'يتتبع الموارد ويقترح التوزيع الأمثل', enDesc: 'Tracks resources and suggests optimal distribution' },
      { ar: 'تكامل مع أدوات العمل', en: 'Work Tools Integration', arDesc: 'يتكامل مع Slack وTrello وAsana وغيرها', enDesc: 'Integrates with Slack, Trello, Asana and more' },
      { ar: 'تنبيهات ذكية', en: 'Smart Alerts', arDesc: 'ينبهك فقط بما يهم — لا فوضى من الإشعارات', enDesc: 'Alerts you only about what matters — no notification chaos' },
      { ar: 'قواعد عمل مخصصة', en: 'Custom Business Rules', arDesc: 'تضبط القواعد حسب طريقة شغل شركتك', enDesc: 'Set rules according to your company\'s working style' },
      { ar: 'لوحة تحكم مركزية', en: 'Central Dashboard', arDesc: 'كل عملياتك في لوحة واحدة واضحة', enDesc: 'All your operations in one clear dashboard' },
    ],
    benefits: [
      { title: 'توفير 30% من وقت الفريق', desc: 'الأتمتة تعيد ساعات ثمينة لفريقك يركزون فيها على العمل الإبداعي' },
      { title: 'أخطاء أقل', desc: 'الأنظمة الآلية لا تنسى ولا تخطئ — عملياتك دقيقة وموثوقة' },
      { title: 'نمو أسرع', desc: 'عمليات مؤتمتة تعني قدرة على التوسع بدون تضخيم الفريق' },
    ],
    useCases: ['الشركات متوسطة الحجم', 'فرق التطوير', 'وكالات التسويق', 'شركات الخدمات', 'المصانع والإنتاج', 'شركات اللوجستيك', 'المؤسسات التعليمية', 'أي شركة لديها فريق'],
    cta: 'سجّل اهتمامك الآن',
  },
  en: {
    title: 'AI Operations',
    subtitle: 'Smart Internal Operations Automation',
    description: 'An AI system that automates your company\'s internal operations — from task management and team coordination to performance reports. Make your company run like a well-oiled machine.',
    features: [
      { ar: 'أتمتة المهام المتكررة', en: 'Task Automation', arDesc: 'يأتمت المهام المتكررة', enDesc: 'Identifies and automates repetitive tasks that consume your team\'s time' },
      { ar: 'تنسيق الفرق', en: 'Team Coordination', arDesc: 'يوزع المهام ويتابع التقدم', enDesc: 'Distributes tasks, tracks progress, and sends reminders automatically' },
      { ar: 'تقارير الأداء', en: 'Performance Reports', arDesc: 'تقارير شاملة دورية', enDesc: 'Comprehensive reports on team and operations performance' },
      { ar: 'إدارة الموارد', en: 'Resource Management', arDesc: 'تتبع وتوزيع الموارد', enDesc: 'Tracks resources and suggests optimal distribution' },
      { ar: 'تكامل مع أدوات العمل', en: 'Work Tools Integration', arDesc: 'Slack وTrello وAsana', enDesc: 'Integrates with Slack, Trello, Asana and more' },
      { ar: 'تنبيهات ذكية', en: 'Smart Alerts', arDesc: 'إشعارات ما تهم فقط', enDesc: 'Alerts you only about what matters — no notification chaos' },
      { ar: 'قواعد عمل مخصصة', en: 'Custom Business Rules', arDesc: 'قواعد حسب شركتك', enDesc: 'Set rules according to your company\'s working style' },
      { ar: 'لوحة تحكم مركزية', en: 'Central Dashboard', arDesc: 'كل عملياتك في لوحة واحدة', enDesc: 'All your operations in one clear dashboard' },
    ],
    benefits: [
      { title: 'Save 30% of Team Time', desc: 'Automation gives back precious hours for your team to focus on creative work' },
      { title: 'Fewer Errors', desc: 'Automated systems don\'t forget or make mistakes — your operations are accurate and reliable' },
      { title: 'Faster Growth', desc: 'Automated operations mean ability to scale without bloating the team' },
    ],
    useCases: ['Mid-size Companies', 'Development Teams', 'Marketing Agencies', 'Service Companies', 'Manufacturing', 'Logistics Companies', 'Educational Institutions', 'Any Team-Based Company'],
    cta: 'Register Your Interest',
  },
}

export default function OperationsPage() {
  return <ServiceTemplate data={data} />
}
