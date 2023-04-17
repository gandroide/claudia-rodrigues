import React, { FC } from 'react'
import {
  Container,
  DescriptionText,
  SeparatorText,
  TeamDescription,
  TeamZone,
} from './Team.styles'
import { TeamCard } from './TeamCard'
import sofia from '../../assets/closeUpSofia.jpg'
import catarina from '../../assets/closeUpCatarina.jpg'
import maria from '../../assets/closeUpMaria.jpg'
import { IIsMobile } from '../../interfaces'
import { Data } from '../../translations/PT-Translations'
import DecorationPointsMobile from '../../assets/DecorationPointsMobile'
import DecorationPoints from '../../assets/DecorationPoints'

export const Team: FC<IIsMobile> = ({ lang, isMobile }) => {
  return (
    <Container id="team">
      <DescriptionText>
        <SeparatorText>{Data[lang].team.separator}</SeparatorText>
        <span>_</span>
      </DescriptionText>
      <div>
        <TeamDescription>{Data[lang].team.title}</TeamDescription>
      </div>
      <TeamZone>
        <TeamCard
          name="Cláudia Sofia Rodrigues"
          titleName={Data[lang].team.jobTitle[0]}
          img={sofia}
        />
        <TeamCard
          name="Catarina Major"
          titleName={Data[lang].team.jobTitle[1]}
          img={catarina}
        />
        <TeamCard
          name="Maria Sousa"
          titleName={Data[lang].team.jobTitle[2]}
          img={maria}
        />
      </TeamZone>
      {isMobile ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            marginRight: '30%',
            paddingTop: '50px',
          }}
        >
          <DecorationPointsMobile />
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'start',
            marginRight: '30%',
            paddingTop: '50px',
          }}
        >
          <DecorationPoints />
        </div>
      )}
    </Container>
  )
}
