import React, { FC } from 'react'
import {
  Container,
  DescriptionText,
  TeamDescription,
  TeamZone,
} from './Team.styles'
import { TeamCard } from './TeamCard'
import sofia from '../../assets/closeUpSofia.jpg'
import catarina from '../../assets/closeUpCatarina.jpg'
import maria from '../../assets/closeUpMaria.jpg'
import { IIsMobile } from '../../interfaces'
import { Data } from '../../translations/PT-Translations'

export const Team: FC<IIsMobile> = ({ lang }) => {
  return (
    <Container id="team">
      <DescriptionText>
        {Data[lang].team.separator}
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
    </Container>
  )
}
