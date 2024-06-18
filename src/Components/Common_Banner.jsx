import React from 'react'
import common_banner_img from '../assets/common_banner.png'
import Container from './Container'
import Flex from './Flex'
import { Link } from 'react-router-dom'
import { GoDotFill } from "react-icons/go";
const Common_Banner = ({title}) => {
  return (
    <section 
    style={{
        backgroundImage:`url(${common_banner_img})`
    }}
    className='object-cover pt-[100px] lg:pt-[170px] pb-[160px]  bg-no-repeat'>
        <div className='relative px-2'>
        <h1 className='font-normal font-dot text-[120px] uppercase text-[#B3B1B7] opacity-25 absolute top-[42px] left-[72px] hidden lg:block'>{title}</h1>

        </div>
     <Container>
        <div>
            <h1 className='font-bold font-dark text-[30px] lg:text-[40px] text-white mb-10 '>{title}</h1>
            <Flex className={`items-center gap-2`}>
                <Link to='/' className='text-[14px] font-normal font-roboto text-[#B3B1B7]'>Home</Link>
                <GoDotFill  className='text-[14px] font-normal font-roboto text-[#B3B1B7]'/>
                <h3  className='text-[14px] font-normal font-roboto text-[#B3B1B7]'>{title}</h3>
            </Flex>
        </div>
     </Container>
    </section>
  )
}

export default Common_Banner