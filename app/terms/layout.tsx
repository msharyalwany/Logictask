import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الشروط والأحكام — Logic Task',
  description: 'شروط وأحكام استخدام خدمات Logic Task.',
  openGraph: {
    title: 'الشروط والأحكام — Logic Task',
    description: 'شروط وأحكام استخدام خدمات Logic Task.',
    images: ['https://i.ibb.co/Gf2r2rFc/IMG-2495.png'],
    locale: 'ar_KW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'الشروط والأحكام — Logic Task',
    description: 'شروط وأحكام استخدام خدمات Logic Task.',
  },
  keywords: ['Logic Task', 'ذكاء اصطناعي', 'الكويت', 'سارة AI', 'AI automation', 'Kuwait'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
