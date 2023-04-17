import React, { FC } from 'react'
import { Accordion } from '../../components/accordion/Accordion'
import {
  AboutZone,
  Container,
  DescriptionText,
  Divider,
  ImageContent,
  SeparatorText,
  SpanText,
} from './About.styles'
import UserPhoto from '../../assets/UserPhoto.png'
import DecorationPoints from '../../assets/DecorationPoints'
import { IIsMobile } from '../../interfaces'
import { Data } from '../../translations/PT-Translations'
import DecorationPointsMobile from '../../assets/DecorationPointsMobile'

export const About: FC<IIsMobile> = ({ isMobile, lang }) => {
  return (
    <Container id="about">
      <AboutZone>
        <DescriptionText>
          <SeparatorText>{Data[lang].about.separator}</SeparatorText>
          <span>_</span>
        </DescriptionText>
        <Divider>
          <Accordion
            isMobile={isMobile}
            title={Data[lang].about.title}
            fixText={
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  float: 'right',
                  flex: '1',
                  // shapeOutside: 'inherit',
                }}
              >
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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ImageContent src={UserPhoto} alt="Cláudia" />
          </div>
        </Divider>
        {isMobile ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              marginRight: '30%',
            }}
          >
            <DecorationPointsMobile />
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              marginRight: '30%',
            }}
          >
            <DecorationPoints />
          </div>
        )}
      </AboutZone>
    </Container>
  )
}
