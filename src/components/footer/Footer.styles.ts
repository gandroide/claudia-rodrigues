import styled from 'styled-components'

export const Container = styled('div')`
  width: 100%;
  padding: 25px 25px;
  font-family: Apercu;
  background: #313c52;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1100px) {
    padding: 20px 50px 0 50px;
  }
`

export const LeftSide = styled('div')`
  width: 100%;
  padding: 0 25px;
  font-family: Apercu;
  background: #313c52;
  color: white;
  display: flex;
  flex-direction: column;
  @media (min-width: 1100px) {
    padding: 0 50px;
  }
`
export const ContactItem = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

export const IconContainer = styled('div')`
  margin-right: 10px;
`

export const LogoContainer = styled('div')`
  display: flex;
  padding-bottom: 50px;
`
export const LogoDescriptionZone = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 10px;
`
export const CustomName = styled('h3')`
  margin: 0;
  font-weight: bold;
`
export const CopyRight = styled('p')`
  font-size: 16px;
  width: 100%;
`
