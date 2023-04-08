import { FC, useState } from 'react'
import {
  Anchor,
  Container,
  CustomName,
  LogoContainer,
  LogoDescriptionZone,
  NavLink,
} from './TopBar.styles'
import LogoSVG from '../../assets/Logo'
import { BurgerMenu } from '../menu/HamburguerMenu'
import { IIsMobile } from '../../interfaces'
import { DropdownMenu } from '../language/Language'
import { Data, lang } from '../../translations/PT-Translations'

interface ITobar {
  isMobile: boolean
  lang: lang
  setLang: (value: lang) => void
}

export const TopBar: FC<ITobar> = ({ isMobile, lang, setLang }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = (isOpen: boolean) => {
    setOpen(isOpen)
  }

  return (
    <Container>
      <LogoContainer>
        <LogoSVG />
        <LogoDescriptionZone>
          <CustomName>Cláudia Sofia Rodrigues</CustomName>
          {/* <span>{Data[lang].topbar.lawyer}</span> */}
        </LogoDescriptionZone>
      </LogoContainer>
      {isMobile ? (
        <div>
          <BurgerMenu open={open} setOpen={handleOpen} />
        </div>
      ) : (
        <>
          <div>
            <NavLink href="#about">{Data[lang].topbar.about}</NavLink>
            <NavLink href="#practiceArea">
              {Data[lang].topbar.practiceArea}
            </NavLink>
            <NavLink href="#team">{Data[lang].topbar.team}</NavLink>
            <NavLink href="#contact">{Data[lang].topbar.contact}</NavLink>
          </div>
          <Anchor href="#contactForm">entre em contacto aqui</Anchor>
          <div>
            <DropdownMenu
              setLang={setLang}
              items={[
                { label: 'Português', value: 'pt' },
                { label: 'English', value: 'en' },
              ]}
            />
          </div>
        </>
      )}
    </Container>
  )
}
