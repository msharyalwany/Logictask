import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الأسعار — Logic Task | 149 KWD',
  description: 'باقة الأساس 149 KWD وباقة النمو 199 KWD. تجربة مجانية 5 أيام.',
  openGraph: {
    title: 'الأسعار — Logic Task | 149 KWD',
    description: 'باقة الأساس 149 KWD وباقة النمو 199 KWD. تجربة مجانية 5 أيام.',
    images: ['https://i.ibb.co/Gf2r2rFc/IMG-2495.png'],
    locale: 'ar_KW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'الأسعار — Logic Task | 149 KWD',
    description: 'باقة الأساس 149 KWD وباقة النمو 199 KWD. تجربة مجانية 5 أيام.',
  },
  keywords: ['Logic Task', 'ذكاء اصطناعي', 'الكويت', 'سارة AI', 'AI automation', 'Kuwait'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
