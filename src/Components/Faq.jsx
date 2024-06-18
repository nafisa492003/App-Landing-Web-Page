import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import faq_img from '../assets/faq_img.png'
import Side_title from './Side_title'
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import './Style.css'
import moving from '../assets/moving.png'
const Faq = () => {
    const [Application , setApplication] = useState(false)
    const [Reg , setReg] = useState(false)
    const [Plan , setPlan] = useState(false)
  return (
    <section className='relative'>
          <img className='absolute left-1 bottom-[-10px] hidden lg:block' src={moving} alt="" />
        <Container>
            <Flex className={`gap-[30px] flex-col lg:flex-row`}>
           <div className='w-full mx-auto lg:w-1/2'>
           <img src={faq_img} alt="" />
           </div>
           <div className='w-full mx-auto lg:w-1/2'>
            <Side_title title='Frequently Asked Questions'/>
            <div className='mt-[50px]'>
                <div className='my-4'>
                <Flex className={`items-center justify-between`}>
                    <h1 className='font-semibold font-dark text-[24px] text-black'>How to start using Upland Application?</h1>

                 {Application ? (
                    <FiMinus
                    onClick={()=>setApplication(!Application)}
                    className='font-normal text-hash text-[20px]' />
                 ) : (
                    <FaPlus
                    onClick={()=>setApplication(!Application)}
                    className='font-normal text-hash text-[20px]' />
                 )}
                </Flex>
                <div className="my-4 dotted-line"></div>
                {Application && (
                    <div className='lg:w-[572px] w-full'>
                    <p className='text-[18px] text-hash font-roboto font-normal '>
                    Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum amet eu dolore labore in aliquip.
                    </p>
                </div>
                )}
               
                
                </div>
                <div className='my-4'>
                <Flex className={`items-center justify-between`}>
                    <h1 className='font-semibold font-dark text-[24px] text-black'>How can I register?</h1>

                 {Reg ? (
                    <FiMinus
                    onClick={()=>setReg(!Reg)}
                    className='font-normal text-hash text-[20px]' />
                 ) : (
                    <FaPlus
                    onClick={()=>setReg(!Reg)}
                    className='font-normal text-hash text-[20px]' />
                 )}
                </Flex>
                <div className="my-4 dotted-line"></div>
                {Reg && (
                    <div className='lg:w-[572px] w-full'>
                    <p className='text-[18px] text-hash font-roboto font-normal '>
                    Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum amet eu dolore labore in aliquip.
                    </p>
                </div>
                )}
               
                
                </div>
                <div className='my-4'>
                <Flex className={`items-center justify-between`}>
                    <h1 className='font-semibold font-dark text-[24px] text-black'>Can I use free plan permanently?</h1>

                 {Plan ? (
                    <FiMinus
                    onClick={()=>setPlan(!Plan)}
                    className='font-normal text-hash text-[20px]' />
                 ) : (
                    <FaPlus
                    onClick={()=>setPlan(!Plan)}
                    className='font-normal text-hash text-[20px]' />
                 )}
                </Flex>
                <div className="my-4 dotted-line"></div>
                {Plan && (
                    <div className='lg:w-[572px] w-full'>
                    <p className='text-[18px] text-hash font-roboto font-normal '>
                    Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum amet eu dolore labore in aliquip.
                    </p>
                </div>
                )}
               
                
                </div>
            </div>
           </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Faq