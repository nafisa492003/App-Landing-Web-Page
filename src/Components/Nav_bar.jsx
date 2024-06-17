import React, { useState } from "react";
import logo from "../assets/Logo.png";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import { LuDot } from "react-icons/lu";
import { FiSmartphone } from "react-icons/fi";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
const Nav_bar = () => {
  const [Subnav,setSubnav] = useState(false)
  return (
    <section className="lg:w-[1700px] w-full mx-auto relative px-2 ">
      <div className="absolute top-5 lg:top-[40px] w-[96%]">
      <Flex className={`items-center justify-between w-full relative`}>
        {/* logo part */}
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {/* logo part */}
         {/* menue bar */}
         <HiMiniBars3CenterLeft onClick={()=>setSubnav(!Subnav)} size={24} className="block text-white lg:hidden" />
          {Subnav && (
            <div className="absolute z-50 top-[35px] bg-blue-800 w-full p-4">
              <ul className="flex flex-col items-start gap-4 mt-4">
                <li>
                <Link to='/' className="text-[18px] text-white font-dark font-normal">Features</Link>
                </li>
                <li>
                <Link to='/' className="text-[18px] text-white font-dark font-normal">Download app</Link>
                </li>
                <li>
                <Link to='/' className="text-[18px] text-white font-dark font-normal">UI screens</Link>
                </li>
                <li>
                <Link to='/' className="text-[18px] text-white font-dark font-normal">Testimonials</Link>
                </li>
                <li>
                <Link to='/' className="text-[18px] text-white font-dark font-normal">FAQ</Link>
                </li>
              </ul>
              <Flex className={`items-start gap-3 my-3 flex-col md:flex-row`}>
              <button className="font-normal font-roboto text-[16px] text-custom_orange border border-custom_orange px-[20px] py-[4px] rounded-full">
            <Link>Free trial</Link>
          </button>
                <Flex className={`items-center gap-2`}>
                <FiSmartphone size={18} className="text-custom_orange" />
                <h4 className="text-[18px] text-white font-medium font-roboto">+1 742 65 84 122</h4>
                </Flex>
              </Flex>
            </div>
          )}
        {/* menue bar */}
        {/* nav iteam part */}
        <div className="items-center hidden gap-5 lg:flex">
        <ul className="flex items-center gap-6">
          <li className="flex items-center gap-5">
          <Link to='/' className="text-[18px] text-white font-dark font-normal">Features</Link>
            <span className="text-[18px] text-white opacity-50"><LuDot /></span>
          </li>
          <li className="flex items-center gap-5">
          <Link to='/' className="text-[18px] text-white font-dark font-normal">Download app</Link>
            <span className="text-[18px] text-white opacity-50"><LuDot /></span>
          </li>
          <li className="flex items-center gap-5">
          <Link to='/' className="text-[18px] text-white font-dark font-normal">UI screens</Link>
            <span className="text-[18px] text-white opacity-50"><LuDot /></span>
          </li>
          <li className="flex items-center gap-5">
          <Link to='/' className="text-[18px] text-white font-dark font-normal">Testimonials</Link>
            <span className="text-[18px] text-white opacity-50"><LuDot /></span>
          </li>
          <li className="flex items-center gap-5">
          <Link to='/' className="text-[18px] text-white font-dark font-normal">FAQ</Link>
            <span className="text-[18px] text-white opacity-50"><LuDot /></span>
          </li>
        </ul>
          <button className="font-normal font-roboto text-[16px] text-custom_orange border border-custom_orange px-[20px] py-[4px] rounded-full">
            <Link>Free trial</Link>
          </button>
        </div>
        <Flex className={`items-center gap-2 hidden lg:flex`}>
        <FiSmartphone size={24} className="text-custom_orange" />
        <h4 className="text-[20px] text-white font-medium font-roboto">+1 742 65 84 122</h4>
        </Flex>
        {/* nav iteam part */}
      </Flex>
        
      </div>
    </section>
  );
};

export default Nav_bar;
