import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/Logo.png";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import { LuDot } from "react-icons/lu";
import { FiSmartphone } from "react-icons/fi";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import popup_bg from '../assets/popup.png'
import side from '../assets/side.png'
import { LiaTimesSolid } from "react-icons/lia";
const Nav_bar = () => {
  const [Subnav, setSubnav] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
 
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
          <HiMiniBars3CenterLeft
            onClick={() => setSubnav(!Subnav)}
            size={24}
            className="block text-white lg:hidden"
          />
          {Subnav && (
            <div className="absolute z-50 top-[35px] bg-blue-800 w-full p-4">
              <ul className="flex flex-col items-start gap-4 mt-4">
                <li>
                  <Link
                    to="/"
                    className="text-[18px] text-white font-dark font-normal"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[18px] text-white font-dark font-normal"
                  >
                    Download app
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[18px] text-white font-dark font-normal"
                  >
                    UI screens
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[18px] text-white font-dark font-normal"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[18px] text-white font-dark font-normal"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
              <Flex className={`items-start gap-3 my-3 flex-col md:flex-row`}>
                <button 
                 onClick={() => setShowPopup(true)}
                className="font-normal font-roboto text-[16px] text-custom_orange border border-custom_orange px-[20px] py-[4px] rounded-full">
                  Free trial
                </button>
                <Flex className={`items-center gap-2`}>
                  <FiSmartphone size={18} className="text-custom_orange" />
                  <h4 className="text-[18px] text-white font-medium font-roboto">
                    +1 742 65 84 122
                  </h4>
                </Flex>
              </Flex>
            </div>
          )}
          {/* menue bar */}
          {/* nav iteam part */}
          <div className="items-center hidden gap-5 lg:flex">
            <ul className="flex items-center gap-6">
              <li className="flex items-center gap-5">
                <Link
                  to="/"
                  className="text-[18px] text-white font-dark font-normal"
                >
                  Features
                </Link>
                <span className="text-[18px] text-white opacity-50">
                  <LuDot />
                </span>
              </li>
              <li className="flex items-center gap-5">
                <Link
                  to="/"
                  className="text-[18px] text-white font-dark font-normal"
                >
                  Download app
                </Link>
                <span className="text-[18px] text-white opacity-50">
                  <LuDot />
                </span>
              </li>
              <li className="flex items-center gap-5">
                <Link
                  to="/"
                  className="text-[18px] text-white font-dark font-normal"
                >
                  UI screens
                </Link>
                <span className="text-[18px] text-white opacity-50">
                  <LuDot />
                </span>
              </li>
              <li className="flex items-center gap-5">
                <Link
                  to="/"
                  className="text-[18px] text-white font-dark font-normal"
                >
                  Testimonials
                </Link>
                <span className="text-[18px] text-white opacity-50">
                  <LuDot />
                </span>
              </li>
              <li className="flex items-center gap-5">
                <Link
                  to="/"
                  className="text-[18px] text-white font-dark font-normal"
                >
                  FAQ
                </Link>
                <span className="text-[18px] text-white opacity-50">
                  <LuDot />
                </span>
              </li>
            </ul>
            <button 
          onClick={() => setShowPopup(true)}
            className="font-normal font-roboto text-[16px] text-custom_orange border border-custom_orange px-[20px] py-[4px] rounded-full">
              Free trial
            </button>
          </div>
          <Flex className={`items-center gap-2 hidden lg:flex`}>
            <FiSmartphone size={24} className="text-custom_orange" />
            <h4 className="text-[20px] text-white font-medium font-roboto">
              +1 742 65 84 122
            </h4>
          </Flex>
          {/* nav iteam part */}
        </Flex>
      </div>
      {showPopup && (
        <div  className="absolute top-[105px] lg:left-[30%] z-50 w-full lg:max-w-[600px]">
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
    </section>
  );
};

export default Nav_bar;
