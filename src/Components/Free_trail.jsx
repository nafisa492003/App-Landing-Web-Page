import React, { useState } from 'react'
import free_sub_bg from '../assets/free_sub_bg.png'
import Container from './Container'
import free_trial_bg from '../assets/free_trial_bg.png'
import { GoDotFill } from "react-icons/go";
import Flex from './Flex'
import popup_bg from '../assets/popup.png'
import side from '../assets/side.png'
import { LiaTimesSolid } from "react-icons/lia";
const Free_trail = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
   <section 
   style={{
    backgroundImage: `url(${free_sub_bg})`,
  }}
  className='object-cover pt-[282px] pb-[218px] relative'
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
          <button
           onClick={() => setShowPopup(true)}
          className='font-medium font-roboto text-[16px] text-white px-[35px] py-4 bg-gradient-custom rounded-full uppercase mt-10 text-center'>
          get a free trial
          </button>
          </Flex>
         </div>
        </div>
        {showPopup && (
        <div  className="absolute top-[105px] lg:left-[40%] z-50 w-full lg:max-w-[600px]">
          <div 
            style={{
              backgroundImage: `url(${popup_bg})`
            }}
            className="lg:py-[80px] lg:px-[70px] p-10 w-full md:max-w-[600px] mx-auto bg-no-repeat relative"
          >
            <h1 className='font-extrabold font-dark text-[26px] lg:text-[50px] text-white uppercase w-full lg:w-[476px]'>
              Get a free trial for <span className='text-custom_orange'>30 </span> days
            </h1>
            <p className="font-normal font-dark text-white text-[24px] mb-5">
              Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.
            </p>
            <form>
              <div className="flex flex-col gap-5">
                <input
                  className="font-normal font-roboto text-[14px] text-hash placeholder:text-hash py-[18px] px-[30px] rounded-full border border-[#E6EBFC] w-full"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="font-normal font-roboto text-[14px] text-hash placeholder:text-hash py-[18px] px-[30px] rounded-full border border-[#E6EBFC] w-full"
                  placeholder="Email"
                  type="text"
                />
                <input
                  className="font-normal font-roboto text-[14px] text-hash placeholder:text-hash pt-[20px] pb-[106px] px-[30px] rounded-[20px] border border-[#E6EBFC] w-full"
                  placeholder="Message"
                  type="text"
                />
                <button className='font-normal font-roboto text-[16px] text-white px-[35px] py-4 bg-gradient-custom rounded-full my-5 w-[180px]'>
                  Get a free trial
                </button>
              </div>
            </form>
            <img className="hidden absolute lg:block top-[115px] left-[-133px]" src={side} alt="" />
            <button 
              className="absolute top-0 right-0 p-2 text-white"
              onClick={() => setShowPopup(false)}
            >
           <LiaTimesSolid size={24}/>
            </button>
          </div>
        </div>
      )}
    </Container>

   </section>
  )
}

export default Free_trail