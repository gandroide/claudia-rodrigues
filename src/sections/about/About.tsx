import React, { FC } from 'react'
import { Accordion } from '../../components/accordion/Accordion'
import {
  AboutZone,
  Container,
  DescriptionText,
  ImageContent,
  SpanText,
} from './About.styles'
import UserPhoto from '../../assets/UserPhoto.png'
import DecorationPoints from '../../assets/DecorationPoints'
import { IIsMobile } from '../../interfaces'
import { Data } from '../../translations/PT-Translations'

export const About: FC<IIsMobile> = ({ isMobile, lang }) => {
  return (
    <Container id="about">
      <AboutZone>
        <DescriptionText>
          <span>{Data[lang].about.separator}</span>
          <span>_</span>
        </DescriptionText>
        <Accordion
          isMobile={isMobile}
          title={Data[lang].about.title}
          fixText={
            <div
              style={{
                height: '100%',
                width: '100%',
                float: 'right',
                shapeOutside: 'inherit',
              }}
            >
              <div style={{ float: 'inherit' }}>
                <ImageContent src={UserPhoto} alt="Cláudia" />
              </div>
              <SpanText>{Data[lang].about.paragraph1}</SpanText>
              <br />
              <SpanText>{Data[lang].about.paragraph2}</SpanText>
              <br />
              <SpanText>{Data[lang].about.subTitle}</SpanText>
              {/* {!isMobile ? (
                <span>Entre em contacto hoje para agendar uma reunião.</span>
              ) : null} */}
            </div>
          }
          // children={
          //   <div
          //     style={{
          //       height: '100%',
          //       width: '100%',
          //       float: 'right',
          //       shapeOutside: 'inherit',
          //     }}
          //   >
          //     <SpanText>
          //       Tem o seu empenho focado em prestar soluções eficazes e alcançar
          //       os melhores resultados possíveis, para defender e proteger os
          //       seus direitos com profissionalismo e dedicação.
          //     </SpanText>
          //     <SpanText>
          //       Navegar no sistema jurídico pode ser complexo e é por isso, que
          //       nos esforçamos diariamente para tornar o processo o ais
          //       tranquilo prossível para os nossos clientes. Temos orgulho em
          //       prestar aos nossos clientes um serviço mais próximo e
          //       personalizado, de confiança e exelência.
          //     </SpanText>
          //     <SpanText>
          //       O nosso escritório encontra-se localizado no coração de Lisboan
          //       junto ao Saldanha.
          //     </SpanText>
          //     <SpanText>
          //       Proporcionamos um ambiente acolhedor e profissional. No nosso
          //       escritório, encontra empenho em ofrecer o mais alto nível de
          //       serviço e representação.
          //     </SpanText>
          //   </div>
          // }
        />
      </AboutZone>
    </Container>
  )
}
