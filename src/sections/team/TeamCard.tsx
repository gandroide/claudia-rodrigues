import React, { FC } from 'react'
import { Container, CustomImage, JobTitle } from './TeamCard.styles'

interface ITeamCard {
  img: string
  name: string
  titleName: string
}

export const TeamCard: FC<ITeamCard> = ({ img, name, titleName }) => {
  return (
    <Container>
      <CustomImage src={img} alt="" />
      <div>{name}</div>
      <JobTitle>{titleName}</JobTitle>
    </Container>
  )
}
