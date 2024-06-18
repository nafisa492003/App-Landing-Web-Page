import React from "react";
import Common_Banner from "../Components/Common_Banner";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import blog_img from "../assets/blog_img.png";
import { FaCircle } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { FiShare2 } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import "../Components/Style.css";
import { LuMessageCircle } from "react-icons/lu";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import moving from '../assets/moving.png'
const Blog = () => {
  return (
    <section>
        
      <Common_Banner title="Blog" />
      <div className="relative">
      <img className='absolute hidden left-1 top-[320px] lg:block' src={moving} alt="" />
      <Container>
        <Flex className={`my-[100px] flex-col lg:flex-row gap-[50px]`}>
          <div className="w-full mx-auto lg:w-9/12">
            <Flex className={`items-center flex-col gap-10`}>
              <div>
                <div className="relative">
                  <img
                    className="rounded-t-[20px] w-full"
                    src={blog_img}
                    alt=""
                  />
                  <div className="p-4 bg-custom_orange rounded-t-[10px] w-[60px] absolute bottom-[1px] left-10">
                    <span className="font-medium font-roboto text-[14px] text-white mb-1">
                      DEC
                    </span>
                    <h1 className="font-medium font-roboto text-[14px] md:text-[24px] text-white mb-1">
                      10
                    </h1>
                  </div>
                </div>
                <div className="w-full p-10 rounded-b-[20px] shadow-xl">
                  <h1 className="font-medium font-roboto text-[24px] uppercase">
                    a selection of the best apps for 2020
                  </h1>
                  <p className="font-normal font-roboto text-[16px] text-hash my-3 w-full lg:w-[748px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                  <Flex className={`items-center justify-between`}>
                    <Flex className={`items-center gap-2`}>
                      <FaCircle size={20} className="text-[#BD93D8]" />
                      <span className="font-medium font-roboto text-[14px] text-black">
                        Annette Black
                      </span>
                      <LuDot size={20} className="text-custom_orange" />
                      <FiShare2 size={14} className="text-hash" />
                      <span className="font-normal font-roboto text-[14px] text-hash">
                        Share
                      </span>
                    </Flex>
                    <BsArrowRight className="text-[40px] text-[#cccccc]" />
                  </Flex>
                </div>
              </div>
              <div>
                <div className="relative">
                  <img
                    className="rounded-t-[20px] w-full"
                    src={blog_img}
                    alt=""
                  />
                  <div className="p-4 bg-custom_orange rounded-t-[10px] w-[60px] absolute bottom-[1px] left-10">
                    <span className="font-medium font-roboto text-[14px] text-white mb-1">
                      DEC
                    </span>
                    <h1 className="font-medium font-roboto text-[14px] md:text-[24px] text-white mb-1">
                      06
                    </h1>
                  </div>
                </div>
                <div className="w-full p-10 rounded-b-[20px] shadow-xl">
                  <h1 className="font-medium font-roboto text-[24px] uppercase">
                    a selection of the best apps for 2020
                  </h1>
                  <p className="font-normal font-roboto text-[16px] text-hash my-3 w-full lg:w-[748px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                  <Flex className={`items-center justify-between`}>
                    <Flex className={`items-center gap-2`}>
                      <FaCircle size={20} className="text-[#BD93D8]" />
                      <span className="font-medium font-roboto text-[14px] text-black">
                        Annette Black
                      </span>
                      <LuDot size={20} className="text-custom_orange" />
                      <FiShare2 size={14} className="text-hash" />
                      <span className="font-normal font-roboto text-[14px] text-hash">
                        Share
                      </span>
                    </Flex>
                    <BsArrowRight className="text-[40px] text-[#cccccc]" />
                  </Flex>
                </div>
              </div>
              <div>
                <div className="relative">
                  <img
                    className="rounded-t-[20px] w-full"
                    src={blog_img}
                    alt=""
                  />
                  <div className="p-4 bg-custom_orange rounded-t-[10px] w-[60px] absolute bottom-[1px] left-10">
                    <span className="font-medium font-roboto text-[14px] text-white mb-1">
                      DEC
                    </span>
                    <h1 className="font-medium font-roboto text-[14px] md:text-[24px] text-white mb-1">
                      02
                    </h1>
                  </div>
                </div>
                <div className="w-full p-10 rounded-b-[20px] shadow-xl">
                  <h1 className="font-medium font-roboto text-[24px] uppercase">
                    a selection of the best apps for 2020
                  </h1>
                  <p className="font-normal font-roboto text-[16px] text-hash my-3 w-full lg:w-[748px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                  <Flex className={`items-center justify-between`}>
                    <Flex className={`items-center gap-2`}>
                      <FaCircle size={20} className="text-[#BD93D8]" />
                      <span className="font-medium font-roboto text-[14px] text-black">
                        Annette Black
                      </span>
                      <LuDot size={20} className="text-custom_orange" />
                      <FiShare2 size={14} className="text-hash" />
                      <span className="font-normal font-roboto text-[14px] text-hash">
                        Share
                      </span>
                    </Flex>
                    <BsArrowRight className="text-[40px] text-[#cccccc]" />
                  </Flex>
                </div>
              </div>
            </Flex>
          </div>
          <div className="w-full mx-auto lg:w-3/12">
            <Flex className={`items-center w-full flex-col gap-[50px]`}>
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
              {/* recent post */}
              <div className="w-full">
                <h3 className="font-roboto font-medium text-[28px]">
                  Recent posts
                </h3>
                <div className="my-4 dotted-line"></div>
                <div className="my-4">
                  <h4 className="font-roboto font-medium text-[12px] text-custom_orange mb-1">
                    Dec 10, 2020
                  </h4>
                  <h1 className="font-medium font-roboto text-[20px] text-black w-full lg:w-[262px]">
                    Launch of a new convenient feature this Saturday...
                  </h1>
                  <p className="font-roboto font-normal text-[14px] text-hash w-full lg:w-[262px] my-[20px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua
                    dolor...
                  </p>
                </div>
                <div className="my-4">
                  <h4 className="font-roboto font-medium text-[12px] text-custom_orange mb-1">
                    Dec 10, 2020
                  </h4>
                  <h1 className="font-medium font-roboto text-[20px] text-black w-full lg:w-[280px]">
                    What you need to know before using Upland Application
                  </h1>
                  <p className="font-roboto font-normal text-[14px] text-hash w-full lg:w-[262px] my-[20px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua
                    dolor...
                  </p>
                </div>
              </div>
              {/* recent post */}
              {/* comments */}
              <div className="w-full">
                <h3 className="font-roboto font-medium text-[28px]">
                  Recent comments
                </h3>
                <div className="my-4 dotted-line"></div>
                <div className="my-3">
                  <LuMessageCircle size={22} className="text-custom_orange" />
                  <p className="font-roboto font-normal text-[14px] text-hash w-full lg:w-[246px] my-1">
                    Amet minim mollit non deserunt ullamco est sit aliqua
                    dolor...
                  </p>
                </div>
                <div className="my-3">
                  <LuMessageCircle size={22} className="text-custom_orange" />
                  <p className="font-roboto font-normal text-[14px] text-hash w-full lg:w-[246px] my-1">
                    Amet minim mollit non deserunt ullamco est sit aliqua
                    dolor...
                  </p>
                </div>
                <div className="my-3">
                  <LuMessageCircle size={22} className="text-custom_orange" />
                  <p className="font-roboto font-normal text-[14px] text-hash w-full lg:w-[246px] my-1">
                    Amet minim mollit non deserunt ullamco est sit aliqua
                    dolor...
                  </p>
                </div>
              </div>
              {/* comments */}
              {/* date */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
              {/* date */}
              {/* tags */}
              <div className="w-full">
                <h3 className="font-roboto font-medium text-[28px]">Tags</h3>
                <div className="my-2 dotted-line"></div>
                <Flex className={`my-3 gap-1`}>
                <h5 className="font-normal font-roboto text-[14px] text-hash">
                Android app
                </h5>
                <LuDot size={20} className="text-custom_orange" />
                <h5 className="font-normal font-roboto text-[14px] text-hash">
                IOS app
                </h5>
                <LuDot size={20} className="text-custom_orange" />
                <h5 className="font-normal font-roboto text-[14px] text-hash">
                Mobile
                </h5>
              </Flex>
              <Flex className={`my-3 gap-1`}>
                <h5 className="font-normal font-roboto text-[14px] text-hash">
                App design
                </h5>
                <LuDot size={20} className="text-custom_orange" />
                <h5 className="font-normal font-roboto text-[14px] text-hash">
                Development
                </h5>
               
              </Flex>
              <Flex className={`my-3 gap-1`}>
                <h5 className="font-normal font-roboto text-[14px] text-hash">
                Collaboration
                </h5>
                <LuDot size={20} className="text-custom_orange" />
                <h5 className="font-normal font-roboto text-[14px] text-hash">
                Download
                </h5>
              </Flex>
              </div>
              
              {/* tage */}
            </Flex>
          </div>
        </Flex>
      </Container>
      </div>
    </section>
  );
};

export default Blog;
