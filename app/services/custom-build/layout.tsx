import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom AI Build — Logic Task',
  description: 'نبني أي نظام ذكاء اصطناعي مخصص من الصفر.',
  openGraph: {
    title: 'Custom AI Build — Logic Task',
    description: 'نبني أي نظام ذكاء اصطناعي مخصص من الصفر.',
    images: ['https://i.ibb.co/Gf2r2rFc/IMG-2495.png'],
    locale: 'ar_KW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom AI Build — Logic Task',
    description: 'نبني أي نظام ذكاء اصطناعي مخصص من الصفر.',
  },
  keywords: ['Logic Task', 'ذكاء اصطناعي', 'الكويت', 'سارة AI', 'AI automation', 'Kuwait'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
