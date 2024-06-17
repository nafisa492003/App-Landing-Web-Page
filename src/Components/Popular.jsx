import React from 'react'
import Container from './Container'
import Flex from './Flex'
import popular_img from '../assets/popular_img.jpg'
import Side_title from './Side_title'
import { FaRegCircleCheck } from "react-icons/fa6";
import moving from '../assets/moving.png'
const Popular = () => {
  return (
    <section className='lg:my-[120px] my-12 relative'>
        <img className='absolute right-1 top-[-238px] hidden lg:block' src={moving} alt="" />
        <img className='absolute left-1 bottom-[-238px] hidden lg:block' src={moving} alt="" />
        <Container>
         <Flex className={`gap-[60px] flex-col lg:flex-row`}>
         <div className='w-full mx-auto lg:w-1/2'>
           <img src={popular_img} alt="pick" />
         </div>
         <div className='w-full mx-auto lg:w-1/2'>
            <Side_title title='The most popular application 2021'/>
            <p className='font-dark font-normal text-[18px] text-hash my-8 w-full lg:w-[370px]' >
            Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum.
            </p>
            <Flex className={`gap-5 my-3`}>
            <FaRegCircleCheck size={24} className='text-custom_orange' />
            <p className='font-normal font-dark text-[18px] text-hash w-full lg:w-[417px]'>Elit mollit aliqua quis ad sint nulla Lorem commodo reprehenderit.</p>
            </Flex>
            <Flex className={`gap-5 my-3`}>
            <FaRegCircleCheck size={24} className='text-custom_orange' />
            <p className='font-normal font-dark text-[18px] text-hash w-full lg:w-[417px]'>Tempor consectetur aliqua aute veniam occaecat eu do esse adipisicing ut. </p>
            </Flex>
            <Flex className={`gap-5 my-3`}>
            <FaRegCircleCheck size={24} className='text-custom_orange' />
            <p className='font-normal font-dark text-[18px] text-hash w-full lg:w-[417px]'>Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.</p>
            </Flex>
         </div>
         </Flex>
        </Container>
    </section>
  )
}

export default Popular