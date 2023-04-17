import React, { FC } from 'react'
import { Anchor, Container, SubTitle, TextZone, Title } from './Home.styles'
import fondo from '../../assets/background.jpg'
import { IIsMobile } from '../../interfaces'
import { Data } from '../../translations/PT-Translations'
import DecorationPointsGold from '../../assets/DecorationPointsGold'
import BalanceIcon from '../../assets/BalanceIcon'
import DecorationPointsGoldMobile from '../../assets/DecorationPointsGoldMobile'

export const Home: FC<IIsMobile> = ({ lang, isMobile }) => {
  return (
    <Container img={fondo}>
      {/* <Fondo src={fondo} alt="" /> */}
      <TextZone>
        <Title className="color-indigo-400">{Data[lang].home.title}</Title>
        <SubTitle>{Data[lang].home.subTitle}</SubTitle>
        <Anchor href="#contactForm">{Data[lang].button.title}</Anchor>
      </TextZone>
      <div>
        {!isMobile ? (
          <div
            style={{
              position: 'absolute',
              zIndex: '100',
              bottom: '0',
              left: '0',
              padding: '20px',
            }}
          >
            <DecorationPointsGold />
          </div>
        ) : (
          <div
            style={{
              position: 'absolute',
              zIndex: '100',
              bottom: '0',
              left: '0',
              padding: '20px',
            }}
          >
            <DecorationPointsGoldMobile />
          </div>
        )}
        <div
          style={{
            position: 'absolute',
            zIndex: '100',
            bottom: '0',
            right: '40px',
            padding: '20px',
          }}
        >
          <BalanceIcon />
        </div>
      </div>
    </Container>
  )
}
