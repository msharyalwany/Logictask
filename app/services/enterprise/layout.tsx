import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise Solutions — Logic Task',
  description: 'حلول ذكاء اصطناعي للمؤسسات الكبيرة.',
  openGraph: {
    title: 'Enterprise Solutions — Logic Task',
    description: 'حلول ذكاء اصطناعي للمؤسسات الكبيرة.',
    images: ['https://i.ibb.co/Gf2r2rFc/IMG-2495.png'],
    locale: 'ar_KW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Solutions — Logic Task',
    description: 'حلول ذكاء اصطناعي للمؤسسات الكبيرة.',
  },
  keywords: ['Logic Task', 'ذكاء اصطناعي', 'الكويت', 'سارة AI', 'AI automation', 'Kuwait'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
