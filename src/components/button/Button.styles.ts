import styled from 'styled-components'

export const Container = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background-color: #e9c680;
  padding: 10px 50px 10px 50px;
  color: black;
  font-family: Apercu;
  width: 100%;
  max-width: 325px;
  border: none;
  :hover {
    background-color: transparent;
    color: #e9c680;
    border: 1px solid #e9c680;
  }
`
