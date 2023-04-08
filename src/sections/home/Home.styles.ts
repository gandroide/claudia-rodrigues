import styled from 'styled-components'

interface IBGimage {
  img: any
}

export const Container = styled('div')<IBGimage>`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-family: Apercu;
  z-index: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.img});
  &::after {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
`

export const TextZone = styled('div')`
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled('h1')`
  font-size: 26px;
  max-width: 1088px;
  text-align: center;
  margin-bottom: 80px;
  margin-top: 80px;
  @media (min-width: 1256px) {
    width: 60%;
    font-size: 33px;
  }
`
export const SubTitle = styled('h3')`
  font-size: 16px;
  max-width: 720px;
  text-align: center;
  padding: 0 30px 0 30px;
  margin-bottom: 40px;
  @media (min-width: 1256px) {
    width: 60%;
    font-size: 20px;
  }
`
export const Fondo = styled('img')`
  z-index: -10;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: fill;
  background-position: left;
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
  border: 1px solid transparent;
  text-decoration: none;
  :hover {
    background-color: transparent;
    color: #e9c680;
    border: 1px solid #e9c680;
  }
`
