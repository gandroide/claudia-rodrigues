import { FC, useState } from 'react'
import {
  Container,
  IconLine,
  MenuIcon,
  Nav,
  NavLink,
  NavLink2,
} from './HamburguerMenu.styles'
import { Button } from '../button/Button'
import { Data, lang } from '../../translations/PT-Translations'

interface IMenu {
  open: boolean
  setOpen: (setOpen: boolean) => void
  lang: lang
}

export const BurgerMenu: FC<IMenu> = ({ open, setOpen, lang }) => {
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Container>
      <MenuIcon open={!open} onClick={handleClick}>
        <IconLine open={open} />
        <IconLine open={open} />
        <IconLine open={open} />
      </MenuIcon>
      <Nav open={open}>
        <NavLink onClick={handleClick} href="#about">
          {Data[lang].about.separator}
        </NavLink>
        <NavLink onClick={handleClick} href="#practiceArea">
          {Data[lang].practiceArea.title}
        </NavLink>
        <NavLink onClick={handleClick} href="#team">
          {Data[lang].team.separator}
        </NavLink>
        <NavLink onClick={handleClick} href="#contact">
          {Data[lang].contact.separator}
        </NavLink>
        <NavLink2 onClick={handleClick} href="#contactForm">
          {Data[lang].button.title}
        </NavLink2>
      </Nav>
    </Container>
  )
}
