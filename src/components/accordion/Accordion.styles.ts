import { ReactNode } from 'react'
import styled from 'styled-components'
import { JsxElement } from 'typescript'

export const AccordionContainer = styled.div`
  border-radius: 4px;
  margin-bottom: 16px;
  font-family: Apercu;
  flex: 1;
  @media (min-width: 1100px) {
    /* width: 50%; */
  }
`

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  cursor: pointer;
  width: 30px;
`

export const AccordionTitle = styled.h3`
  margin: 0;
  @media (min-width: 900px) {
    font-size: 30px;
  }
`
interface OpenProp {
  isOpen: boolean
}
export const AccordionIcon = styled.span<OpenProp>`
  border: solid #666;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-135deg)' : 'rotate(45deg)')};
  transition: transform 0.2s ease-in-out;
`

interface ChildrenProp {
  children: ReactNode | JsxElement | any
}

export const AccordionContent = styled.div<ChildrenProp>`
  padding: 16px 0 16px 0;
  display: flex;
  justify-content: space-between;
  @media (min-width: 900px) {
    font-size: 18px;
  }
`
