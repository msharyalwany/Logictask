import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from './components/LangContext'
import NavbarWrapper from './components/NavbarWrapper'
import ClientLayout from './components/ClientLayout'

export const metadata: Metadata = {
  title: 'Logic Task — وكلاء ذكاء اصطناعي يعملون بدلاً عنك',
  description: 'Logic Task تبني وكلاء ذكاء اصطناعي مخصصة للبيزنس في الكويت والخليج. سارة AI — موظفك الذكي على واتساب وتيليجرام.',
  keywords: 'ذكاء اصطناعي, كويت, أتمتة, سارة AI, chatbot, واتساب',
  openGraph: {
    title: 'Logic Task — AI Automation Kuwait',
    description: 'AI agents that work instead of you — 24/7',
    images: ['https://i.ibb.co/Gf2r2rFc/IMG-2495.png'],
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LangProvider>
          <NavbarWrapper />
          <ClientLayout>{children}</ClientLayout>
        </LangProvider>
      </body>
    </html>
  )
}
