import styled from 'styled-components'

export const Container = styled('div')`
  width: 100%;
  padding: 0 25px;
  font-family: Apercu;
  background: #f4f4f4;
`

export const DescriptionContainer = styled('h1')`
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
export const CardsZone = styled('div')`
  /* display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  justify-content: normal;
  padding: 0 0 0 40px;
  @media (max-width: 745px) {
    flex-direction: column;
    align-items: center;
  } */
  columns: 3;
`
export const DescriptionText = styled('div')`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  @media (min-width: 1100px) {
    padding: 0 50px 20px 50px;
  }
`

export const Skills = styled('div')`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 40%;
  margin-bottom: 30px;
  @media (min-width: 1100px) {
    width: 50%;
    padding: 0 50px;
  }
`
export const SpanSkill = styled('span')`
  margin-bottom: 10px;
`

export const ULContainer = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ListSkill = styled('li')`
  list-style: none;
`
