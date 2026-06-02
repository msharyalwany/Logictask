import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تواصل معنا — Logic Task',
  description: 'تواصل مع فريق Logic Task للحصول على استشارة مجانية.',
  openGraph: {
    title: 'تواصل معنا — Logic Task',
    description: 'تواصل مع فريق Logic Task للحصول على استشارة مجانية.',
    images: ['https://i.ibb.co/Gf2r2rFc/IMG-2495.png'],
    locale: 'ar_KW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تواصل معنا — Logic Task',
    description: 'تواصل مع فريق Logic Task للحصول على استشارة مجانية.',
  },
  keywords: ['Logic Task', 'ذكاء اصطناعي', 'الكويت', 'سارة AI', 'AI automation', 'Kuwait'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
