import React, { FC, useState } from 'react'
import {
  SliderContainer,
  Image,
  SliderButtonLeft,
  SliderButtonRight,
  Container,
} from './Slider.styles'

interface ISlider {
  images: string[]
}

export const Slider: FC<ISlider> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  return (
    <Container>
      <SliderButtonLeft onClick={prevImage}>‹</SliderButtonLeft>
      <SliderContainer>
        {images.map((image, index) => (
          <div style={{ width: '100%' }}>
            <Image
              key={index}
              src={image}
              alt={`Slider Image ${index}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            />
          </div>
        ))}
      </SliderContainer>
      <SliderButtonRight onClick={nextImage}>›</SliderButtonRight>
    </Container>
  )
}
