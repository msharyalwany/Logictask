'use client'
import { useLang } from './LangContext'
import Navbar from './Navbar'

export default function NavbarWrapper() {
  const { lang, setLang } = useLang()
  return <Navbar lang={lang} setLang={(l: string) => setLang(l as 'ar' | 'en')} />
}
