import React from "react";
import Common_Banner from "../Components/Common_Banner";
import Flex from "../Components/Flex";
import Container from "../Components/Container";
import { IoSearchOutline } from "react-icons/io5";
import oops_img from '../assets/oops_img.png'
import moving from "../assets/moving.png";
const Oops = () => {
  return (
    <section>
      <Common_Banner title="Oops" />
        <div className="relative">
        <img
          className="absolute hidden right-1 top-[320px] lg:block"
          src={moving}
          alt=""
        />
      <Container>
          <Flex className={`items-center gap-[50px] flex-col lg:flex-row`}>
            <div className="w-full mx-auto lg:w-1/2">
            <Flex className={`flex-col gap-4`}>
              <h1 className="font-bold font-dark text-[30px] lg:text-[88px]">
                404
              </h1>
                <h2 className="font-bold font-dark text-[50px]">Page not found</h2>
                <p className="font-normal font-roboto text-[16px] text-hash my-5 w-full lg:w-[318px]">
                It looks like nothing was found at this location. Maybe try a search?
                  </p>
                  <div className="relative w-full">
                  <input
                    className="font-normal font-roboto text-[14px] text-hash w-full border border-[#E6EBFC] rounded-full px-[30px] py-[16px]"
                    placeholder="Search"
                    type="text"
                  />
                  <IoSearchOutline
                    size={24}
                    className="absolute right-[24px] top-[16px] text-hash"
                  />
                </div>
            </Flex>
            </div>
            <div className="w-full mx-auto lg:w-1/2">
            <img src={oops_img} alt="" />
            </div>
          </Flex>
        
      </Container>
      </div>
    </section>
  );
};

export default Oops;
