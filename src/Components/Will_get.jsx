import React from "react";
import Container from "./Container";
import { GoDotFill } from "react-icons/go";
import Flex from "./Flex";
import will_get_one from '../assets/will_get_one.jpg'
import will_get_two from '../assets/will_get_two.jpg'
const Will_get = () => {
  return (
    <section className="md:my-[130px] my-[80px]">
      <Container>
        {/* title */}
        <div className="text-center mb-[50px] ">
          <Flex className={`items-center justify-center`}>
            <span className="font-medium font-roboto text-[14px] text-custom_orange">
              <GoDotFill />
            </span>
            <span className="font-medium font-roboto text-[14px] text-custom_orange">
              <GoDotFill />
            </span>
          </Flex>
          <div className="relative w-full md:w-[586px] text-center mx-auto">
            <h1 className="font-normal font-dot text-[40px] text-[#CCCCCC]">See what you will get with us</h1>
            <h1 className="font-medium font-dark text-[40px] text-black absolute top-[15px] left-1 md:left-[80px]">what you will get with us</h1>
          </div>
        </div>

        {/* title */}
        <Flex className={`items-center gap-6 flex-col lg:flex-row`}>
            <div className="w-full mx-auto md:w-[360px] lg:w-4/12 px-[34px] py-5 rounded-[20px] shadow-lg">
                <img src={will_get_one} alt="pick" />
                <h2 className="mt-[36px] mb-4 font-dark font-semibold text-[20px]">Development courses</h2>
                <p className="font-normal font-dark text-[14px] text-[#888888] w-full md:w-[280px] mb-6">
                Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id. 
                </p>
            </div>
            <div className="w-full mx-auto md:w-[360px] lg:w-4/12 px-[34px] py-5 rounded-[20px] shadow-lg">
                <img src={will_get_two} alt="pick" />
                <h2 className="mt-[36px] mb-4 font-dark font-semibold text-[20px]">Money saving services</h2>
                <p className="font-normal font-dark text-[14px] text-[#888888] w-full md:w-[280px] mb-6">
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Culpa non ex tempor qui nulla laborum.
                </p>
            </div>
            <div className="w-full mx-auto md:w-[360px] lg:w-4/12 px-[34px] py-5 rounded-[20px] shadow-lg">
                <img src={will_get_two} alt="pick" />
                <h2 className="mt-[36px] mb-4 font-dark font-semibold text-[20px]">Usability interface</h2>
                <p className="font-normal font-dark text-[14px] text-[#888888] w-full md:w-[280px] mb-6">
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Culpa non ex tempor qui nulla laborum.
                </p>
            </div>
        </Flex>
      </Container>
    </section>
  );
};
 
export default Will_get;
