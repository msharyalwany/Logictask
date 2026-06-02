import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Operations — Logic Task',
  description: 'أتمتة العمليات الداخلية بالذكاء الاصطناعي.',
  openGraph: {
    title: 'AI Operations — Logic Task',
    description: 'أتمتة العمليات الداخلية بالذكاء الاصطناعي.',
    images: ['https://i.ibb.co/Gf2r2rFc/IMG-2495.png'],
    locale: 'ar_KW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Operations — Logic Task',
    description: 'أتمتة العمليات الداخلية بالذكاء الاصطناعي.',
  },
  keywords: ['Logic Task', 'ذكاء اصطناعي', 'الكويت', 'سارة AI', 'AI automation', 'Kuwait'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
