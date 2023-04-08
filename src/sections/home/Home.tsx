import React, { FC } from 'react'
import { Anchor, Container, SubTitle, TextZone, Title } from './Home.styles'
import fondo from '../../assets/background.jpg'
import { IIsMobile } from '../../interfaces'
import { Data } from '../../translations/PT-Translations'

export const Home: FC<IIsMobile> = ({ lang }) => {
  return (
    <Container img={fondo}>
      {/* <Fondo src={fondo} alt="" /> */}
      <TextZone>
        <Title className="color-indigo-400">{Data[lang].home.title}</Title>
        <SubTitle>{Data[lang].home.subTitle}</SubTitle>
        <Anchor href="#contactForm">{Data[lang].button.title}</Anchor>
      </TextZone>
    </Container>
  )
}
