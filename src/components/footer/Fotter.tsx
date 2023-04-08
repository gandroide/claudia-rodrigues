import React, { FC } from 'react'
import CardIcon from '../../assets/icons/CardIcon'
import PhoneIcon from '../../assets/icons/PhoneIcon'
import PinIcon from '../../assets/icons/PinIcon'
import WhiteLogo from '../../assets/WhiteLogo'
import { IIsMobile } from '../../interfaces'
import {
  ContactItem,
  Container,
  CopyRight,
  CustomName,
  IconContainer,
  LeftSide,
  LogoContainer,
  LogoDescriptionZone,
} from './Footer.styles'

export const Fotter: FC<IIsMobile> = ({ isMobile }) => {
  return (
    <Container>
      <div style={{ display: 'flex', width: '100%' }}>
        <LeftSide>
          <div>
            <LogoContainer>
              <WhiteLogo />
              <LogoDescriptionZone>
                <CustomName>Cláudia Sofia Rodrigues</CustomName>
                <p>Advogada, RL</p>
              </LogoDescriptionZone>
            </LogoContainer>
          </div>
          <div>
            {isMobile ? (
              <ContactItem>
                <IconContainer>
                  <PinIcon />
                </IconContainer>
                <h4>
                  Rua Pinheiro Chagas, n. 17, 5.° andar, 1050-174, Lisboa.
                </h4>
              </ContactItem>
            ) : null}

            <ContactItem>
              <IconContainer>
                <PhoneIcon />
              </IconContainer>
              {isMobile ? (
                <h4>
                  (+351) 210 730 623 <br />
                  (+351) 914 657 961
                </h4>
              ) : (
                <h4>(+351) 210 730 623 / (+351) 914 657 961</h4>
              )}
            </ContactItem>
            <ContactItem>
              <IconContainer>
                <CardIcon />
              </IconContainer>
              <h4>csmr-45658L@adv.oa.pt</h4>
            </ContactItem>
            {isMobile ? (
              <ContactItem>
                <CopyRight>
                  © 2023 - Todos os direito reservados Dra. Cláudia Sofia
                  Rodrigues
                </CopyRight>
              </ContactItem>
            ) : null}
          </div>
        </LeftSide>
        {!isMobile ? (
          <div
            style={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}
          >
            <ContactItem>
              <CopyRight>
                © 2023 - Todos os direito reservados Dra. Cláudia Sofia
                Rodrigues
              </CopyRight>
            </ContactItem>
          </div>
        ) : null}
      </div>
    </Container>
  )
}
