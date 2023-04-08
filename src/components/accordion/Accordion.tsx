import React, { FC, ReactNode, useState } from 'react'
import { JsxElement } from 'typescript'
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionTitle,
} from './Accordion.styles'

interface AccordionProps {
  title: string
  children?: ReactNode | JsxElement
  fixText: ReactNode | JsxElement
  isMobile: boolean
}

export const Accordion: FC<AccordionProps> = ({
  title,
  children,
  fixText,
  isMobile,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <AccordionContainer>
      <AccordionTitle>{title}</AccordionTitle>
      <AccordionContent>{fixText}</AccordionContent>
      {/* {isOpen && <AccordionContent>{children}</AccordionContent>}
      {isMobile ? (
        <span>Entre em contacto hoje para agendar uma reunião.</span>
      ) : null}
      {isMobile ? (
        <>
          <AccordionHeader onClick={toggleAccordion}>
            <AccordionIcon isOpen={isOpen} />
          </AccordionHeader>
        </>
      ) : null} */}
    </AccordionContainer>
  )
}

export default Accordion
