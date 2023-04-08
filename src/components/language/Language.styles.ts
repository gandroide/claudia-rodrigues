import styled from 'styled-components'

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  margin: 0 3px;
  cursor: pointer;
`

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: black;
  opacity: 80%;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
`

export const ListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: black;
    border-radius: 5px;
  }
`

interface ArrowIconProps {
  isOpen: boolean
}

export const ArrowIcon = styled.span<ArrowIconProps>`
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${(props) => (props.isOpen ? 'rotate(45deg)' : 'rotate(-135deg)')};
`
