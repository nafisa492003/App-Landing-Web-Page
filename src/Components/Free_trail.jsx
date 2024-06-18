import React from 'react'
import free_sub_bg from '../assets/free_sub_bg.png'
import Container from './Container'
import free_trial_bg from '../assets/free_trial_bg.png'
import { GoDotFill } from "react-icons/go";
import Flex from './Flex'
const Free_trail = () => {
  return (
   <section 
   style={{
    backgroundImage: `url(${free_sub_bg})`,
  }}
  className='object-cover pt-[282px] pb-[218px]'
   >
    <Container>
        <div
        style={{
            backgroundImage:`url(${free_trial_bg})`,
            backgroundPosition:'center'
        }}
        className='object-contain py-[153px] bg-no-repeat px-2'>
         <div className='w-full mx-auto lg:w-[574px]'>
         <Flex className={`items-center justify-center`}>
            <span className="font-medium font-roboto text-[14px] text-custom_orange">
              <GoDotFill />
            </span>
            <span className="font-medium font-roboto text-[14px] text-custom_orange">
              <GoDotFill />
            </span>
          </Flex>
          <h1 className='font-extrabold font-dark text-[26px] lg:text-[50px] text-white uppercase text-center'>Get a free trial for <span className='text-custom_orange'>30 </span> days</h1>
          <Flex className={`items-center justify-center`}>
          <button className='font-medium font-roboto text-[16px] text-white px-[35px] py-4 bg-gradient-custom rounded-full uppercase mt-10 text-center'>
          get a free trial
          </button>
          </Flex>
         
         </div>
        </div>
    </Container>

   </section>
  )
}

export default Free_trail