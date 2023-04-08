import React, { useState } from 'react'
import {
  ArrowIcon,
  DropdownContainer,
  DropdownHeader,
  DropdownList,
  ListItem,
} from './Language.styles'
import { lang } from '../../translations/PT-Translations'
interface DropdownItem {
  label: string
  value: lang
}

interface DropdownProps {
  items: DropdownItem[]
  setLang: (value: lang) => void
}

export const DropdownMenu: React.FC<DropdownProps> = ({ items, setLang }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>({
    label: 'Português',
    value: 'pt',
  })

  const handleItemClick = (item: DropdownItem) => {
    setSelectedItem(item)
    console.log(item)
    if (item.value) setLang(item.value)
    setIsOpen(false)
  }

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        {selectedItem ? selectedItem.label : 'Select an language'}
        <ArrowIcon isOpen={!isOpen} />
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {items.map((item) => (
            <ListItem key={item.value} onClick={() => handleItemClick(item)}>
              {item.label}
            </ListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  )
}
