import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { GoDotFill } from "react-icons/go";
import presention_bg from '../assets/presention_bg.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import pre_one from '../assets/pre_one.png'
import pre_two from '../assets/pre_two.png'
import pre_three from '../assets/per_three.png'
import pre_four from '../assets/pre_four.png'
import pre_five from '../assets/pre_five.png'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
const Presention = () => {
  return (
   <section
   style={{
    backgroundImage: `url(${presention_bg})`,
  }}
   className='object-cover bg-no-repeat py-[280px] relative w-full'>
    <Container>
        {/* title */}
        <div className="text-center mb-[60px] ">
          <Flex className={`items-center justify-center`}>
            <span className="font-medium font-roboto text-[14px] text-custom_orange">
              <GoDotFill />
            </span>
            <span className="font-medium font-roboto text-[14px] text-custom_orange">
              <GoDotFill />
            </span>
          </Flex>
          <div className="relative w-full md:w-[586px] text-center mx-auto">
            <h1 className="font-normal font-dot text-[40px] text-[#CCCCCC]">See watch our UI presentation</h1>
            <h1 className="font-medium font-dark text-[40px] text-white absolute top-[15px] left-1 md:left-[80px]">watch our UI presentation</h1>
          </div>
        </div>

        {/* title */}
        <Swiper
       effect={'coverflow'}
       grabCursor={true}
       centeredSlides={true}
       loop={true}
       slidesPerView={'auto'}
       coverflowEffect={{
         rotate: 0,
         stretch: 0,
         depth: 100,
         modifier: 2.5,
       }}
       navigation={{
         nextEl: '.button-next-side',
         prevEl: '.button-pre-side',
         clickable: true,
       }}
       modules={[EffectCoverflow, Navigation]}
       className="swiper_container"
      >
         <SwiperSlide className='md:w-[350px] mx-auto w-full'>
            <img className='w-full' src={pre_one} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className='md:w-[350px] mx-auto w-full'>
            <img className='w-full' src={pre_two} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className='md:w-[350px] mx-auto w-full'>
            <img className='w-full' src={pre_three} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className='md:w-[350px] mx-auto w-full'>
            <img className='w-full' src={pre_four} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className='md:w-[350px] mx-auto w-full'>
            <img className='w-full' src={pre_five} alt="slide_image" />
          </SwiperSlide>
         {/* Navigation Buttons */}
         <div className="absolute top-[20px] w-full hidden lg:block">
          <div className='flex items-center justify-between w-full'>
            <div className="button-pre-side">
              <FaArrowLeftLong size={40} className='text-white' />
            </div>
            <div className="button-next-side">
              <FaArrowRight size={40} className='text-white' />
            </div>
          </div>
        </div>
      </Swiper>
    </Container>
   </section>
  )
}

export default Presention