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
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
          toast.success(Data[lang].toastMessages.success, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          })
        },
        (error) => {
          console.log(error.text, 'aqui')
          toast.error(Data[lang].toastMessages.error, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          })
        }
      )
  }

  const notify = () =>
    toast.success(Data[lang].toastMessages.success, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })

  return (
    <Container id="contactForm">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
      {/* {isMobile ? (
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
            width: '100%',
            marginLeft: '350px',
          }}
        >
          <DecorationPoints />
        </div>
      )} */}
    </Container>
  )
}
