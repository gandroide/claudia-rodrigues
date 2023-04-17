import styled from 'styled-components'

export const Container = styled('div')`
  width: 100%;
  font-family: Apercu;
  padding: 0 25px;
  background: #f4f4f4;
  margin-top: 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Input = styled('input')`
  width: 100%;
  border: 1px solid black;
  height: 35px;
  margin: 5px 0 15px 0;
  padding-right: 10px;
  @media (min-width: 1100px) {
    padding: 0px 40px;
  }
`

export const InputEmail = styled('input')`
  width: 100%;
  max-width: 100%;
  border: 1px solid black;
  height: 35px;
  margin: 5px 0 15px 0;
`

export const Banner = styled('h4')`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background-color: #313c52;
  padding: 10px 50px 10px 50px;
  color: white;
  width: 100%;
  max-width: 325px;
  border: none;
  margin-bottom: 30px;
`
export const TextAreaContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const TextArea = styled('textarea')`
  height: 120px;
  border: 1px solid black;
  margin: 5px 0 20px 0;
  width: 100%;
`
export const From = styled('form')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1100px) {
    justify-content: flex-end;
    width: 80%;
  }
`
export const Require = styled('h4')`
  margin-bottom: 50px;
`
export const InputContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 10px;
  @media (min-width: 1100px) {
    padding-right: 10px;
  }
`
export const FormContainer = styled('div')`
  display: flex;
  width: 100%;
  justify-content: center;
  @media (min-width: 1100px) {
    padding: 0px 40px;
  }
`
export const Group = styled('div')`
  width: 100%;
  display: flex;
`

export const LeftSide = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px;
`
export const RightSide = styled('div')`
  display: flex;
  width: 100%;
`

export const MobileContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 95%;
`
export const ButtonContainer = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
  @media (min-width: 1100px) {
    justify-content: flex-end;
    padding-right: 40px;
  }
`
