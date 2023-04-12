import styled from 'styled-components'

export const Container = styled('div')`
  width: 100%;
  font-family: Apercu;
  background: #f4f4f4;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 25px;

  @media screen and (min-width: 1100px) {
    padding: 0 100px;
    flex-direction: row;
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
export const ContactZone = styled('div')`
  margin-top: 30px;
  @media (min-width: 1100px) {
    width: 100%;
    padding: 0 50px 20px 50px;
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
export const ContainerDivider = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1100px) {
    flex-direction: row;
  }
`
export const SliderContainer = styled('div')`
  width: 100%;
  max-width: 550px;
  @media (!min-width: 1100px) {
    width: 80%;
  }
`

export const SliderWrapper = styled('div')`
  display: flex;
  justify-content: center;

  & .swiper-button-prev,
  & .swiper-button-next {
    color: #fff;
  }
`
