import styled from 'styled-components'

export const Container = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: Apercu;
  background: #f4f4f4;
  margin-top: 30px;
  padding: 0 25px;
  @media screen and (min-width: 1100px) {
    padding: 0 100px;
  }
`

export const TeamDescription = styled('h1')`
  width: 100%;
  font-family: Apercu;
  margin-bottom: 30px;
  font-size: 50px;
  font-size: 26px;
  @media (min-width: 1100px) {
    width: 50%;
    padding: 0 50px;
    font-size: 36px;
  }
`
export const DescriptionText = styled('div')`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  @media (min-width: 1100px) {
    padding: 0 50px 20px 50px;
  }
`
export const TeamZone = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (min-width: 1100px) {
    align-items: unset;
    padding: 0 30px;
    font-size: 36px;
    flex-direction: row;
  }
`
