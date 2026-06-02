import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Customer Service — Logic Task',
  description: 'دعم عملاء ذكي 24/7 يحل المشكلات تلقائياً.',
  openGraph: {
    title: 'AI Customer Service — Logic Task',
    description: 'دعم عملاء ذكي 24/7 يحل المشكلات تلقائياً.',
    images: ['https://i.ibb.co/Gf2r2rFc/IMG-2495.png'],
    locale: 'ar_KW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Customer Service — Logic Task',
    description: 'دعم عملاء ذكي 24/7 يحل المشكلات تلقائياً.',
  },
  keywords: ['Logic Task', 'ذكاء اصطناعي', 'الكويت', 'سارة AI', 'AI automation', 'Kuwait'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
