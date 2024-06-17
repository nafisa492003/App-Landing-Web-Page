import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Side_title from './Side_title'
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import moving from '../assets/moving.png'
import './Style.css'
const UsePart = () => {
  return (
   <section className='my-[80px] md:my-[130px] relative'>
     <img className='absolute right-1 top-[-238px] hidden lg:block' src={moving} alt="" />
     <img className='absolute left-1 bottom-[-238px] hidden lg:block' src={moving} alt="" />
   <Container>
    <Flex className={`gap-[80px] flex-col lg:flex-row`}>
        <div className='w-full mx-auto lg:w-1/2'>
         <Side_title title='easy download and ready to use'/>
         <p className='font-normal font-dark tex-[18px] text-hash w-full lg:w-[457px] my-10'>Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing.</p>
         <Flex className={`items-center gap-4`}>
            <button className='px-5 md:px-[40px] py-4 hover:bg-gradient-custom rounded-full border border-custom_orange group'>
                <div className='flex items-center gap-3 '>
            <FaGooglePlay  size={24} className=' text-custom_orange group-hover:text-white'/>
            <Flex className={`flex-col `}>
                <h5 className='font-normal font-roboto text-[10px] text-custom_orange group-hover:text-white'>Download on the</h5>
                <h4 className='font-medium font-roboto text-[14px] text-custom_orange group-hover:text-white'>Google play</h4>
            </Flex>
                    
                </div>
            </button>
            <button className='px-5 md:px-[40px] py-4 hover:bg-gradient-custom rounded-full border border-custom_orange group'>
                <div className='flex items-center gap-3 '>
            <FaApple  size={24} className=' text-custom_orange group-hover:text-white'/>
            <Flex className={`flex-col `}>
                <h5 className='font-normal font-roboto text-[10px] text-custom_orange group-hover:text-white'>Download on the</h5>
                <h4 className='font-medium font-roboto text-[14px] text-custom_orange group-hover:text-white'>app store</h4>
            </Flex>
                    
                </div>
            </button>
        </Flex>
        </div>
        <div className='w-full mx-auto lg:w-1/2'>
        <Flex className={`gap-[50px] flex-col lg:flex-row`}>
             <div className='w-full mx-auto lg:w-1/2'>
                <h4 className='font-medium font-roboto text-[12px] text-custom_orange mb-3 uppercase'>basic</h4>
                <div className='flex'>
                    <h1 className='font-medium font-roboto text-[32px] text-black'>$12</h1>
                    <span className='font-roboto font-medium text-[16px] text-black'>.99</span>
                </div>
                <p className='font-roboto font-normal text-[14px] text-hash'>/per month</p>
                <div className="my-3 dotted-line"></div>
                <ul className='pl-2 custom-list-disc'>
                    <li className='font-normal font-dark text-[16px] text-hash hover:font-bold transition duration-100 cursor-pointer'>
                    Proident excepteur
                    </li>
                    <li className='font-normal font-dark text-[16px] text-hash hover:font-bold transition duration-100 cursor-pointer'>
                    Veniam occaecat id ea
                    </li>
                    <li className='font-normal font-dark text-[16px] text-hash hover:font-bold transition duration-100 cursor-pointer'>
                    Labore do nulla ipsum
                    </li>
                    <li className='font-normal font-dark text-[16px] text-hash hover:font-bold transition duration-100 cursor-pointer whitespace-nowrap'>
                    Culpa non ex tempor qui
                    </li>
                </ul>
             </div>
             <div className='w-full mx-auto lg:w-1/2'>
                <h4 className='font-medium font-roboto text-[12px] text-custom_orange mb-3 uppercase'>popular</h4>
                <div className='flex'>
                    <h1 className='font-medium font-roboto text-[32px] text-black'>$99</h1>
                    <span className='font-roboto font-medium text-[16px] text-black'>.99</span>
                </div>
                <p className='font-roboto font-normal text-[14px] text-hash'>/per year</p>
                <div className="my-3 dotted-line"></div>
                <ul className='pl-2 custom-list-disc'>
                    <li className='font-normal font-dark text-[16px] text-hash hover:font-bold transition duration-100 cursor-pointer'>
                    Velit occaecat duis
                    </li>
                    <li className='font-normal font-dark text-[16px] text-hash hover:font-bold transition duration-100 cursor-pointer'>
                    Culpa non ex tempor qui
                    </li>
                    <li className='font-normal font-dark text-[16px] text-hash hover:font-bold transition duration-100 cursor-pointer whitespace-nowrap'>
                    Excepteur cupidatat consectetur
                    </li>
                    <li className='font-normal font-dark text-[16px] text-hash hover:font-bold transition duration-100 cursor-pointer'>
                    Proident excepteur
                    </li>
                </ul>
             </div>
            
        </Flex>
        </div>
        
    </Flex>
   </Container>
   </section>
  )
}

export default UsePart