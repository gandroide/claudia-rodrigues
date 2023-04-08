import styled from 'styled-components'

export const Container = styled('div')`
  display: flex;
  position: relative;
`

export const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  height: 300px;
  width: 100%;
`

export const SliderButtonLeft = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 2.5rem;
  background: transparent;
  position: absolute;
  left: 0;
  padding-left: 10px;
  z-index: 1;
  color: white;
  top: 50%;
  transform: translateY(-50%);
`

export const SliderButtonRight = styled.button`
  border: none;
  cursor: pointer;
  font-size: 2.5rem;
  background: transparent;
  position: absolute;
  right: 0;
  padding-right: 10px;
  color: white;
  top: 50%;
  transform: translateY(-50%);
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
`
