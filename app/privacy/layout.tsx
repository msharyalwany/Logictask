import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'سياسة الخصوصية — Logic Task',
  description: 'سياسة خصوصية Logic Task وكيفية حماية بياناتك.',
  openGraph: {
    title: 'سياسة الخصوصية — Logic Task',
    description: 'سياسة خصوصية Logic Task وكيفية حماية بياناتك.',
    images: ['https://i.ibb.co/Gf2r2rFc/IMG-2495.png'],
    locale: 'ar_KW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سياسة الخصوصية — Logic Task',
    description: 'سياسة خصوصية Logic Task وكيفية حماية بياناتك.',
  },
  keywords: ['Logic Task', 'ذكاء اصطناعي', 'الكويت', 'سارة AI', 'AI automation', 'Kuwait'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
