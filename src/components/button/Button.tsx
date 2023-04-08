import React, { FC } from 'react'
import { Container } from './Button.styles'

interface ButtonProps {
  type: 'primary' | 'secondary' | 'other'
  callback?: () => void
  title: string
}

export const Button: FC<ButtonProps> = ({ ...props }) => {
  return <Container>{props.title}</Container>
}
