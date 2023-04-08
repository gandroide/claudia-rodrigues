import styled from 'styled-components'

export const Container = styled('div')`
  background-color: #f4f4f4;
  font-family: Apercu;
  display: flex;
  margin-bottom: 50px;
  @media (min-width: 1100px) {
    padding: 0px 140px 0px 50px;
    justify-content: space-between;
  }
`
export const AboutZone = styled('div')`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 50px;
`
export const DescriptionText = styled('div')`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`
export const ImageContent = styled('img')`
  width: 170px;
  height: 200px;
  @media (min-width: 875px) {
    width: 300px;
    height: 350px;
  }
  @media (min-width: 1100px) {
    width: 500px;
    height: 550px;
  }
`
export const SpanText = styled('p')`
  margin-bottom: 10px;
`
