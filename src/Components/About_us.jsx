import React from "react";
import Side_title from "./Side_title";

import "./Style.css";
import Flex from "./Flex";
import about_img from "../assets/about_img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
const About_us = () => {
  return (
    <section className="mt-80px lg:mt-[130px]">

       
        <div className="lg:max-w-[1500px] mx-auto relative px-2">
        <Side_title title="they say about us" />
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
        
         navigation={{
            nextEl: '.button-next-side',
            prevEl: '.button-pre-side',
            clickable: true,
          }}
          breakpoints={{
            320: {
                slidesPerView: 1,
              },
            
            765: {
              slidesPerView: 2,
            },
            1270: {
                slidesPerView: 2,
              },
              1430: {
                slidesPerView: 3,
              },
          }}
         modules={[Navigation]} className="mySwiper">
          <SwiperSlide> 
            <div className="w-full mx-auto lg:w-[480px] rounded-[20px] shadow-lg p-10 mt-[50px]">
          <h1 className="font-medium font-roboto text-[30px] bg-gradient-text bg-clip-text text-transparent ">
            99
          </h1>
          <p className="font-roboto font-normal text-[18px] text-hash my-3">
            “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem
            est officia excepteur cupidatat consectetur. Labore do nulla ipsum
            dolore ipsum. Proident excepteur ex aliqua cupidatat.”
          </p>
          <Flex className={`items-center gap-2 mt-6`}>
            <img src={about_img} alt="" />
            <h1 className="font-semibold font-roboto text-[14px] text-black">
              Brooklyn Simmons
            </h1>
          </Flex>
        </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="w-full mx-auto lg:w-[480px] rounded-[20px] shadow-lg p-10 mt-[50px]">
          <h1 className="font-medium font-roboto text-[30px] bg-gradient-text bg-clip-text text-transparent ">
            99
          </h1>
          <p className="font-roboto font-normal text-[18px] text-hash my-3">
            “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem
            est officia excepteur cupidatat consectetur. Labore do nulla ipsum
            dolore ipsum. Proident excepteur ex aliqua cupidatat.”
          </p>
          <Flex className={`items-center gap-2 mt-6`}>
            <img src={about_img} alt="" />
            <h1 className="font-semibold font-roboto text-[14px] text-black">
              Brooklyn Simmons
            </h1>
          </Flex>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full mx-auto lg:w-[480px] rounded-[20px] shadow-lg p-10 mt-[50px]">
          <h1 className="font-medium font-roboto text-[30px] bg-gradient-text bg-clip-text text-transparent ">
            99
          </h1>
          <p className="font-roboto font-normal text-[18px] text-hash my-3">
            “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem
            est officia excepteur cupidatat consectetur. Labore do nulla ipsum
            dolore ipsum. Proident excepteur ex aliqua cupidatat.”
          </p>
          <Flex className={`items-center gap-2 mt-6`}>
            <img src={about_img} alt="" />
            <h1 className="font-semibold font-roboto text-[14px] text-black">
              Brooklyn Simmons
            </h1>
          </Flex>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full mx-auto lg:w-[480px] rounded-[20px] shadow-lg p-10 mt-[50px]">
          <h1 className="font-medium font-roboto text-[30px] bg-gradient-text bg-clip-text text-transparent ">
            99
          </h1>
          <p className="font-roboto font-normal text-[18px] text-hash my-3">
            “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem
            est officia excepteur cupidatat consectetur. Labore do nulla ipsum
            dolore ipsum. Proident excepteur ex aliqua cupidatat.”
          </p>
          <Flex className={`items-center gap-2 mt-6`}>
            <img src={about_img} alt="" />
            <h1 className="font-semibold font-roboto text-[14px] text-black">
              Brooklyn Simmons
            </h1>
          </Flex>
        </div>
          </SwiperSlide>
          <SwiperSlide> 
            <div className="w-full mx-auto lg:w-[480px] rounded-[20px] shadow-lg p-10 mt-[50px]">
          <h1 className="font-medium font-roboto text-[30px] bg-gradient-text bg-clip-text text-transparent ">
            99
          </h1>
          <p className="font-roboto font-normal text-[18px] text-hash my-3">
            “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem
            est officia excepteur cupidatat consectetur. Labore do nulla ipsum
            dolore ipsum. Proident excepteur ex aliqua cupidatat.”
          </p>
          <Flex className={`items-center gap-2 mt-6`}>
            <img src={about_img} alt="" />
            <h1 className="font-semibold font-roboto text-[14px] text-black">
              Brooklyn Simmons
            </h1>
          </Flex>
        </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="w-full mx-auto lg:w-[480px] rounded-[20px] shadow-lg p-10 mt-[50px]">
          <h1 className="font-medium font-roboto text-[30px] bg-gradient-text bg-clip-text text-transparent ">
            99
          </h1>
          <p className="font-roboto font-normal text-[18px] text-hash my-3">
            “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem
            est officia excepteur cupidatat consectetur. Labore do nulla ipsum
            dolore ipsum. Proident excepteur ex aliqua cupidatat.”
          </p>
          <Flex className={`items-center gap-2 mt-6`}>
            <img src={about_img} alt="" />
            <h1 className="font-semibold font-roboto text-[14px] text-black">
              Brooklyn Simmons
            </h1>
          </Flex>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full mx-auto lg:w-[480px] rounded-[20px] shadow-lg p-10 mt-[50px]">
          <h1 className="font-medium font-roboto text-[30px] bg-gradient-text bg-clip-text text-transparent ">
            99
          </h1>
          <p className="font-roboto font-normal text-[18px] text-hash my-3">
            “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem
            est officia excepteur cupidatat consectetur. Labore do nulla ipsum
            dolore ipsum. Proident excepteur ex aliqua cupidatat.”
          </p>
          <Flex className={`items-center gap-2 mt-6`}>
            <img src={about_img} alt="" />
            <h1 className="font-semibold font-roboto text-[14px] text-black">
              Brooklyn Simmons
            </h1>
          </Flex>
        </div>
          </SwiperSlide>
          <SwiperSlide> 
            <div className="w-full mx-auto lg:w-[480px] rounded-[20px] shadow-lg p-10 mt-[50px]">
          <h1 className="font-medium font-roboto text-[30px] bg-gradient-text bg-clip-text text-transparent ">
            99
          </h1>
          <p className="font-roboto font-normal text-[18px] text-hash my-3">
            “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem
            est officia excepteur cupidatat consectetur. Labore do nulla ipsum
            dolore ipsum. Proident excepteur ex aliqua cupidatat.”
          </p>
          <Flex className={`items-center gap-2 mt-6`}>
            <img src={about_img} alt="" />
            <h1 className="font-semibold font-roboto text-[14px] text-black">
              Brooklyn Simmons
            </h1>
          </Flex>
        </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="w-full mx-auto lg:w-[480px] rounded-[20px] shadow-lg p-10 mt-[50px]">
          <h1 className="font-medium font-roboto text-[30px] bg-gradient-text bg-clip-text text-transparent ">
            99
          </h1>
          <p className="font-roboto font-normal text-[18px] text-hash my-3">
            “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem
            est officia excepteur cupidatat consectetur. Labore do nulla ipsum
            dolore ipsum. Proident excepteur ex aliqua cupidatat.”
          </p>
          <Flex className={`items-center gap-2 mt-6`}>
            <img src={about_img} alt="" />
            <h1 className="font-semibold font-roboto text-[14px] text-black">
              Brooklyn Simmons
            </h1>
          </Flex>
        </div>
          </SwiperSlide>
        </Swiper>

        <div>
            <div className='absolute flex items-center gap-[30px] top-[20px] md:right-[40px] right-2'>
              <div className="button-pre-side">
                <FaArrowLeftLong size={30} className='text-custom_orange' />
              </div>
              <div className="button-next-side">
                <FaArrowRight size={30} className='text-custom_orange' />
              </div>
            </div>
          </div>
            
        </div>
     
    </section>
  );
};

export default About_us;
