import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react'



export default () => {
 const navigationPrevRef = useRef()
 const navigationNextRef = useRef()
  return (
	
    <Swiper
	
      spaceBetween={50}
      slidesPerView={1}
	  navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onSwiper={(swiper) => {
        setTimeout(() => {
          swiper.params.navigation.prevEl = navigationPrevRef.current
          swiper.params.navigation.nextEl = navigationNextRef.current

          swiper.navigation.destroy()
          swiper.navigation.init()
          swiper.navigation.update()
        })
      }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
		<button ref={navigationPrevRef}>Prev</button>
		<button ref={navigationNextRef}>Next</button>
    </Swiper>
  );
};