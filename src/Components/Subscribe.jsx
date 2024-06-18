import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Subscribe_img from '../assets/Subscribe_img.png'
import { GoDotFill } from "react-icons/go";
const Subscribe = () => {
  return (
    <section className='lg:translate-y-[275px] translate-y-0 md:my-6 lg:my-0'>
     <Container>
        <div className='px-[30px] py-[60px] rounded-[20px] shadow-xl bg-white '>
      
        <Flex className={`gap-10 flex-col lg:flex-row`}>
            <div className='relative w-full mx-auto lg:w-1/2'>
            <img className='bottom-0 block lg:absolute' src={Subscribe_img} alt="" />
            </div>
            <div className='w-full mx-auto lg:w-1/2'>
             <Flex className={`items-center gap-2`}>
                <div className='flex items-center'>
                <GoDotFill size={10} className='text-custom_orange' />
                <GoDotFill size={10} className='text-custom_orange' /> 
                </div>
                <h3 className='font-roboto font-medium text-[12px] text-custom_orange'>Newsletter</h3>
             </Flex>
             <h1 className='font-semibold font-roboto text-[24px] text-black uppercase'>Be aware of new features</h1>
             <p className='text-[14px] text-hash font-roboto font-normal w-full lg:w-[384px] my-5'>Culpa non ex tempor qui nulla laborum. Laboris culpa ea ipsum tempor duis do ullamco eiusmod officia magna ad id.</p>
             <Flex className={`items-center gap-2 flex-col lg:flex-row`}>
                <input className='py-4 px-[30px] w-full lg:w-[350px] border border-[#E6EBFC] rounded-full font-roboto font-normal placeholder:font-roboto placeholder:font-normal placeholder:text-[14px] placeholder:text-hash' placeholder='Email'  type="text" />
                <button className='font-normal font-roboto text-[16px] text-white px-[35px] py-4 bg-gradient-custom rounded-full'>
                Subscribe
                </button>
            </Flex>
            </div>
           
        </Flex>
            
        </div>
     </Container>
    </section>
  )
}

export default Subscribe