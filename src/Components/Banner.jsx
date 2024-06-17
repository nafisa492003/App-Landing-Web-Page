import React from "react";
import banner_bg from "../assets/banner_bg.png";
import Container from "./Container";
import Flex from "./Flex";
import { GoDotFill } from "react-icons/go";
import banner_right from '../assets/banner_right.png'
const Banner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${banner_bg})`,
      }}
      className="object-cover py-[150px] md:py-[256px]"
    >
      <Container>
        <Flex className={`gap-6`}>
        <div className="w-full md:w-1/2">
        <div className="flex items-center gap-3 mb-3">
          <Flex>
            <span className="font-medium font-roboto text-[14px] text-custom_orange">
              <GoDotFill />
            </span>
            <span className="font-medium font-roboto text-[14px] text-custom_orange">
              <GoDotFill />
            </span>
          </Flex>
          <h4 className="font-medium font-roboto text-[14px] text-custom_orange uppercase">trendy application</h4>
        </div> 
        <h1 className="font-extrabold font-dark text-[30px] md:text-[32px] lg:text-[50px] text-white uppercase w-full md:w-[567px] mb-6">
        work faster with powerful tools
            </h1>
            <p className="font-normal font-dark text-[20px] text-white w-full md:w-[440px] mb-[50px]">Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.</p> 
            <button className="font-roboto text-[16px] font-medium text-white py-4 px-[35px] bg-gradient-custom rounded-full">
            Learn more
            </button>
        </div>
       <div className="relative hidden w-full md:w-1/2 md:block">
        <img className="absolute md:top-[-110px] lg:top-[-135px]" src={banner_right} alt="" />
       </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
