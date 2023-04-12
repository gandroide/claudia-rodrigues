import styled from 'styled-components'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
  margin: 10px 10px;
  font-family: Apercu;
  @media screen and (min-width: 1100px) {
    max-width: unset;
  }
`

export const CustomImage = styled('img')`
  height: 450px;
  object-fit: cover;
`

export const JobTitle = styled('p')`
  font-size: 18px;
`
