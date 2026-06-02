import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'خدماتنا — Logic Task | وكلاء ذكاء اصطناعي',
  description: 'وكلاء ذكاء اصطناعي لكل احتياج — سارة AI والمزيد.',
  openGraph: {
    title: 'خدماتنا — Logic Task | وكلاء ذكاء اصطناعي',
    description: 'وكلاء ذكاء اصطناعي لكل احتياج — سارة AI والمزيد.',
    images: ['https://i.ibb.co/Gf2r2rFc/IMG-2495.png'],
    locale: 'ar_KW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خدماتنا — Logic Task | وكلاء ذكاء اصطناعي',
    description: 'وكلاء ذكاء اصطناعي لكل احتياج — سارة AI والمزيد.',
  },
  keywords: ['Logic Task', 'ذكاء اصطناعي', 'الكويت', 'سارة AI', 'AI automation', 'Kuwait'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
