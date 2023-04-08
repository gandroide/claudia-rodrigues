import styled from 'styled-components'

export const Container = styled('div')`
  color: white;
  display: flex;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  padding: 0 5px 0 5px;
  font-family: Apercu;
  position: fixed;
  width: 100%;
  z-index: 1;
  &::after {
    background-color: black;
    position: fixed;
    width: 100%;
    height: 100px;
    content: '';
    left: 0;
    z-index: -1;
    opacity: 80%;
  }
  /* @media (min-width: 900px) {
    display: 'none';
  } */
`
export const NavZone = styled('nav')`
  display: flex;
`
export const MenuListContainer = styled('ul')`
  display: flex;
  margin: 0 5px 0 5px;
`
export const MenuList = styled('li')`
  list-style: none;
  margin: 0 25px 0 25px;
`
export const LogoContainer = styled('div')`
  display: flex;
`
export const LogoDescriptionZone = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 10px;
  color: #e9c680;
`
export const CustomName = styled('h3')`
  margin: 0;
  font-weight: bold;
`

export const NavLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s linear;
  margin: 0 10px;

  &:hover {
    color: #333;
  }
`
export const Anchor = styled('a')`
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
  border: none;
  text-decoration: none;
  :hover {
    background-color: transparent;
    color: #e9c680;
    border: 1px solid #e9c680;
  }
`
