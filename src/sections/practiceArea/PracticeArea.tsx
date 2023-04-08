import React, { FC } from 'react'
import ReaisIcon from '../../assets/icons/ReaisIcon'
import { ICard } from '../../components/aboutCard/Card'
import {
  DescriptionContainer,
  Container,
  DescriptionText,
  SpanSkill,
  ListSkill,
  Skills,
  ULContainer,
} from './PracticeArea.styles'
import { Data } from '../../translations/PT-Translations'
import { IIsMobile } from '../../interfaces'
import { Grid } from '../../components/flowbite/grid/Grid'

export const PracticeArea: FC<IIsMobile> = ({ isMobile, lang }) => {
  return (
    <Container id="practiceArea">
      <DescriptionText>
        {Data[lang].practiceArea.title}
        <span>_</span>
      </DescriptionText>
      <div>
        <DescriptionContainer>
          {Data[lang].practiceArea.subTitle}
        </DescriptionContainer>
      </div>
      {!isMobile ? (
        <Skills>
          <SpanSkill>{Data[lang].practiceArea.skillTitle}</SpanSkill>
          <SpanSkill>{Data[lang].practiceArea.firstSkill}</SpanSkill>
          <SpanSkill>{Data[lang].practiceArea.secondSkill}</SpanSkill>
          <SpanSkill>{Data[lang].practiceArea.thirdSkill}</SpanSkill>
        </Skills>
      ) : null}
      <div>
        <Grid lang={lang} isMobile={isMobile} />
      </div>
    </Container>
  )
}
