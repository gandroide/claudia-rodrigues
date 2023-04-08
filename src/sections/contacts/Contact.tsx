import React, { FC } from 'react'
import ReaisIcon from '../../assets/icons/ReaisIcon'
import {
  ContactItem,
  ContactZone,
  Container,
  DescriptionText,
  IconContainer,
  ContainerDivider,
  SliderContainer,
} from './Contact.styles'
import { IIsMobile } from '../../interfaces'
import Swiper from '../../components/swiper/Swiper'
import { Data } from '../../translations/PT-Translations'

export const Contact: FC<IIsMobile> = ({ lang }) => {
  return (
    <Container id="contact">
      <div style={{ width: '100%' }}>
        <DescriptionText>
          {Data[lang].contact.separator}
          <span>_</span>
          <h2 style={{ marginTop: '30px' }}>{Data[lang].contact.title}</h2>
        </DescriptionText>
        <ContainerDivider>
          <ContactZone>
            <ContactItem>
              <IconContainer>
                <ReaisIcon />
              </IconContainer>
              <h4>Rua Pinheiro Chagas, n. 17, 5.° andar, 1050-174, Lisboa.</h4>
            </ContactItem>
            <ContactItem>
              <IconContainer>
                <ReaisIcon />
              </IconContainer>
              <h4>
                (+351) 210 730 623 <br />
                (+351) 914 657 961
              </h4>
            </ContactItem>
            <ContactItem>
              <IconContainer>
                <ReaisIcon />
              </IconContainer>
              <h4>csmr-45658L@adv.oa.pt</h4>
            </ContactItem>
          </ContactZone>
        </ContainerDivider>
      </div>
      <div>
        <SliderContainer>
          <Swiper />
        </SliderContainer>
      </div>
    </Container>
  )
}
