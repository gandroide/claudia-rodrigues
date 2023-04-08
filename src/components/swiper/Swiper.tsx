// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'

// Import Swiper styles

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation } from 'swiper'

export default () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop
      style={{ zIndex: '0' }}
    >
      <SwiperSlide>
        <div>
          <img src={slider1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={slider2} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
