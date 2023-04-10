import React, { FC } from 'react'
import { Button } from '../../components/button/Button'
import {
  Banner,
  ButtonContainer,
  Container,
  FormContainer,
  From,
  Group,
  Input,
  InputContainer,
  InputEmail,
  LeftSide,
  MobileContainer,
  Require,
  RightSide,
  TextArea,
  TextAreaContainer,
} from './ContactForm.styles'
import emailjs from '@emailjs/browser'
import { IIsMobile } from '../../interfaces'
import { Data } from '../../translations/PT-Translations'

export const ContactForm: FC<IIsMobile> = ({ isMobile, lang }) => {
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_SERVICE_ID,
        import.meta.env.VITE_REACT_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_REACT_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text, 'aqui')
        }
      )
  }
  return (
    <Container id="contactForm">
      <Banner>{Data[lang].button.title}</Banner>
      <From action="" onSubmit={handleSubmit}>
        <FormContainer>
          {!isMobile ? (
            <>
              <LeftSide>
                <Group>
                  <InputContainer>
                    <label htmlFor="">{Data[lang].contactForm.name} *</label>
                    <Input required type="text" name="email_from_name" id="" />
                  </InputContainer>
                  <InputContainer>
                    <label htmlFor="">
                      {Data[lang].contactForm.lastName} *
                    </label>
                    <Input
                      required
                      type="text"
                      name="email_from_last_name"
                      id=""
                    />
                  </InputContainer>
                </Group>
                <div style={{ width: '100%' }}>
                  <InputContainer>
                    <label htmlFor="">{Data[lang].contactForm.email} *</label>
                    <InputEmail required type="email" name="" id="" />
                  </InputContainer>
                </div>
                {!isMobile ? (
                  <Require> {Data[lang].contactForm.required}</Require>
                ) : null}
              </LeftSide>
              <RightSide>
                <TextAreaContainer>
                  <label htmlFor="">{Data[lang].contactForm.message} *</label>
                  <TextArea name="message" required />
                </TextAreaContainer>
              </RightSide>
            </>
          ) : (
            <MobileContainer>
              <InputContainer>
                <label htmlFor="">{Data[lang].contactForm.name} *</label>
                <Input required type="text" name="email_from_name" id="" />
              </InputContainer>
              <InputContainer>
                <label htmlFor="">{Data[lang].contactForm.lastName} *</label>
                <Input required type="text" name="email_from_last_name" id="" />
              </InputContainer>
              <div style={{ width: '100%' }}>
                <InputContainer>
                  <label htmlFor="">{Data[lang].contactForm.email} *</label>
                  <InputEmail required type="email" name="" id="" />
                </InputContainer>
              </div>
              <TextAreaContainer>
                <label htmlFor="">{Data[lang].contactForm.message} *</label>
                <TextArea name="message" required />
              </TextAreaContainer>
            </MobileContainer>
          )}
        </FormContainer>
        <ButtonContainer>
          <Button title="enviar" type="secondary" />
        </ButtonContainer>
      </From>
      {isMobile ? <Require>{Data[lang].contactForm.required}</Require> : null}
    </Container>
  )
}
