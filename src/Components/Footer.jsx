import React,{ useState } from 'react'
import footer_bg from '../assets/footer_bg.png'
import Container from './Container'
import { LuDot } from "react-icons/lu";
import { Link } from 'react-router-dom';
import popup_bg from '../assets/popup.png'
import side from '../assets/side.png'
import { LiaTimesSolid } from "react-icons/lia";
const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <section
    style={{
        backgroundImage:`url(${footer_bg})`,
        backgroundPosition:'center',
        backgroundSize:'cover'
    }}
    className='object-contain py-[200px] lg:pt-[330px] pb-5 bg-no-repeat'
    >
     <div className='relative'>
        <Container>
            <h1 className='font-normal font-dot text-[40px] uppercase text-white opacity-20 text-center my-3'>upland </h1>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <ul className="flex flex-col items-center gap-6 md:flex-row">
          <li className="flex items-center gap-1 lg:gap-5">
          <Link to='/' className="text-[18px] text-white font-dark font-normal">Features</Link>
            <span className="text-[18px] text-white opacity-50"><LuDot /></span>
          </li>
          <li className="flex items-center gap-1 lg:gap-5">
          <Link to='/' className="text-[18px] text-white font-dark font-normal">Download app</Link>
            <span className="text-[18px] text-white opacity-50"><LuDot /></span>
          </li>
          <li className="flex items-center gap-1 lg:gap-5">
          <Link to='/' className="text-[18px] text-white font-dark font-normal">UI screens</Link>
            <span className="text-[18px] text-white opacity-50"><LuDot /></span>
          </li>
          <li className="flex items-center gap-1 lg:gap-5">
          <Link to='/' className="text-[18px] text-white font-dark font-normal">Testimonials</Link>
            <span className="text-[18px] text-white opacity-50"><LuDot /></span>
          </li>
          <li className="flex items-center gap-1 lg:gap-5">
          <Link to='/' className="text-[18px] text-white font-dark font-normal">FAQ</Link>
            <span className="text-[18px] text-white opacity-50"><LuDot /></span>
          </li>
        </ul>
          <button 
              onClick={() => setShowPopup(true)}
          className="font-normal font-roboto text-[16px] text-custom_orange border border-custom_orange px-[20px] py-[4px] rounded-full">
            Free trial
          </button>
          {showPopup && (
        <div  className="absolute top-[-611px] lg:left-[30%] z-50 w-full lg:max-w-[600px]">
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
        </div>
        </Container>
        <div className='py-8 '>
            <div className='w-full h-[1px] bg-white opacity-15 my-3'></div>
            <h3 className='font-roboto font-normal text-[14px] text-hash text-center'>
            © All rights reserved. Upland 2020
            </h3>
        </div>
      
   
     </div>
       
    </section>
  )
}

export default Footer