import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Analytics & Intelligence — Logic Task',
  description: 'تحليل بيانات بيزنسك واتخاذ قرارات أذكى.',
  openGraph: {
    title: 'Analytics & Intelligence — Logic Task',
    description: 'تحليل بيانات بيزنسك واتخاذ قرارات أذكى.',
    images: ['https://i.ibb.co/Gf2r2rFc/IMG-2495.png'],
    locale: 'ar_KW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Analytics & Intelligence — Logic Task',
    description: 'تحليل بيانات بيزنسك واتخاذ قرارات أذكى.',
  },
  keywords: ['Logic Task', 'ذكاء اصطناعي', 'الكويت', 'سارة AI', 'AI automation', 'Kuwait'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
