import { FC, useState } from 'react'
import {
  Container,
  IconLine,
  MenuIcon,
  Nav,
  NavLink,
} from './HamburguerMenu.styles'

interface IMenu {
  open: boolean
  setOpen: (setOpen: boolean) => void
}

export const BurgerMenu: FC<IMenu> = ({ open, setOpen }) => {
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
          Sobre
        </NavLink>
        <NavLink onClick={handleClick} href="#practiceArea">
          Área de Práticas
        </NavLink>
        <NavLink onClick={handleClick} href="#team">
          Equipa
        </NavLink>
        <NavLink onClick={handleClick} href="#contact">
          Contactos
        </NavLink>
      </Nav>
    </Container>
  )
}
