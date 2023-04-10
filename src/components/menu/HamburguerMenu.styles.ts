import styled from 'styled-components'

export const Container = styled('div')`
  width: 100%;
  padding: 0 25px;
  font-family: Apercu;
`

export const MenuIcon = styled.button<IState>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
`

interface IState {
  open: boolean
}
export const IconLine = styled.div<IState>`
  width: 100%;
  height: 0.2rem;
  background: ${({ open }) => (open ? '#fff' : '#E9C680')};
  transition: all 0.2s linear;
  position: relative;
  transform-origin: 1px;

  &:first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  &:nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
    transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
  }

  &:nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`

export const Nav = styled.nav<IState>`
  position: fixed;
  top: 100px;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  opacity: 80%;
  display: ${({ open }) => (!open ? 'none' : 'flex')};
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  @media (min-width: 1100px) {
    flex-direction: row;
  }
`

export const NavLink = styled.a`
  font-size: 24px;
  font-weight: bold;
  /* letter-spacing: 0.5rem; */
  color: #fff;
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    color: #aaa;
  }

  @media (min-width: 1100px) {
    font-size: 1.2rem;
    text-align: center;
    padding: 2rem 0;
    width: 100%;
    display: block;
  }
`
export const NavLink2 = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background-color: #e9c680;
  padding: 10px 50px 10px 50px;
  color: black;
  font-family: Apercu;
  width: 100%;
  max-width: 325px;
  border: 1px solid transparent;
  :hover {
    background-color: transparent;
    color: #e9c680;
    border: 1px solid #e9c680;
  }
`
