import { useEffect, useState } from 'react'
import './App.css'
import { Fotter } from './components/footer/Fotter'
import { TopBar } from './components/topbar/TopBar'
import { About } from './sections/about/About'
import { ContactForm } from './sections/contactForm/ContactForm'
import { Contact } from './sections/contacts/Contact'
import { Home } from './sections/home/Home'
import { PracticeArea } from './sections/practiceArea/PracticeArea'
import { Team } from './sections/team/Team'
import { lang } from './translations/PT-Translations'

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [lang, setLang] = useState<lang>('pt')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1100px)')
    setIsMobile(mediaQuery.matches)

    const handler = (e: any) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const handleStateLanguage = (newLang: lang) => {
    setLang(newLang)
  }
  return (
    <div>
      <TopBar isMobile={isMobile} lang={lang} setLang={handleStateLanguage} />
      <Home isMobile={isMobile} lang={lang} />
      <About isMobile={isMobile} lang={lang} />
      <PracticeArea isMobile={isMobile} lang={lang} />
      <Team isMobile={isMobile} lang={lang} />
      <Contact isMobile={isMobile} lang={lang} />
      <ContactForm isMobile={isMobile} lang={lang} />
      <Fotter isMobile={isMobile} lang={lang} />
    </div>
  )
}

export default App
