import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'سارة AI — موظفتك الذكية | Logic Task',
  description: 'سارة وكيل ذكاء اصطناعي يحجز ويذكّر ويرد 24/7. ابدأ مجاناً.',
  openGraph: {
    title: 'سارة AI — موظفتك الذكية | Logic Task',
    description: 'سارة وكيل ذكاء اصطناعي يحجز ويذكّر ويرد 24/7. ابدأ مجاناً.',
    images: ['https://i.ibb.co/Gf2r2rFc/IMG-2495.png'],
    locale: 'ar_KW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سارة AI — موظفتك الذكية | Logic Task',
    description: 'سارة وكيل ذكاء اصطناعي يحجز ويذكّر ويرد 24/7. ابدأ مجاناً.',
  },
  keywords: ['Logic Task', 'ذكاء اصطناعي', 'الكويت', 'سارة AI', 'AI automation', 'Kuwait'],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
