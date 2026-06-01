'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'ar' | 'en'
const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'ar',
  setLang: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar')
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
        {children}
      </div>
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
