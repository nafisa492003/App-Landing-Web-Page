import React from 'react'
import footer_bg from '../assets/footer_bg.png'
import Container from './Container'
import { LuDot } from "react-icons/lu";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <section
    style={{
        backgroundImage:`url(${footer_bg})`,
        backgroundPosition:'center',
        backgroundSize:'cover'
    }}
    className='object-contain py-[200px] lg:pt-[330px] pb-5 bg-no-repeat'
    >
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
          <button className="font-normal font-roboto text-[16px] text-custom_orange border border-custom_orange px-[20px] py-[4px] rounded-full">
            <Link>Free trial</Link>
          </button>
        </div>
        </Container>
        <div className='py-8 '>
            <div className='w-full h-[1px] bg-white opacity-15 my-3'></div>
            <h3 className='font-roboto font-normal text-[14px] text-hash text-center'>
            © All rights reserved. Upland 2020
            </h3>
        </div>
       
    </section>
  )
}

export default Footer