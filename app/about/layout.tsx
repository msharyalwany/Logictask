import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'من نحن — Logic Task | AI Automation Kuwait',
  description: 'Logic Task شركة كويتية متخصصة في بناء وكلاء الذكاء الاصطناعي.',
  openGraph: {
    title: 'من نحن — Logic Task | AI Automation Kuwait',
    description: 'Logic Task شركة كويتية متخصصة في بناء وكلاء الذكاء الاصطناعي.',
    images: ['https://i.ibb.co/Gf2r2rFc/IMG-2495.png'],
    locale: 'ar_KW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'من نحن — Logic Task | AI Automation Kuwait',
    description: 'Logic Task شركة كويتية متخصصة في بناء وكلاء الذكاء الاصطناعي.',
  },
  keywords: ['Logic Task', 'ذكاء اصطناعي', 'الكويت', 'سارة AI', 'AI automation', 'Kuwait'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
