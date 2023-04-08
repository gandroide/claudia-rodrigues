import React, { FC, ReactNode } from 'react'
import { CardContainer, Content, Icon, Title, TopSection } from './Card.styles'

export interface ICard {
  icon?: ReactNode
  title: string
  content: ReactNode
  isMobile?: boolean
}

const Card: FC<ICard> = ({ icon, title, content, isMobile }) => {
  return (
    <CardContainer className="hidden">
      <TopSection>
        <Icon>{icon}</Icon>
        <Title>{title}</Title>
      </TopSection>
      <div
        style={{
          borderBottom: '1px solid #ccc',
          width: '95%',
        }}
      />
      {!isMobile ? <Content>{content}</Content> : null}
    </CardContainer>
  )
}

export default Card
