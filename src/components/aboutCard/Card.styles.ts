import styled from 'styled-components'

export const CardContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Apercu;
  border-radius: 10px;
  box-shadow: 0px 3px 9px #00000029;
  width: 100%;
  max-width: 330px;
  margin: 0 5px 20px 5px;
  @media (min-width: 1100px) {
    max-width: 400px;
  }
`

export const Icon = styled('div')`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-right: 10px;
`

export const Title = styled('h1')`
  font-size: 35px;
  margin-top: 16px;
  margin-bottom: 8px;
  color: #313c52;
`

export const Content = styled('p')`
  font-size: 16px;
  text-align: center;
  padding-top: 20px;
`

export const TopSection = styled('div')`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: '1px solid #ccc';
  width: '95%';
`
