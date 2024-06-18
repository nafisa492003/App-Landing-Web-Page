import React from "react";
import Flex from "./Flex";
import Side_title from "./Side_title";
import { FaCircle } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { FiShare2 } from "react-icons/fi";
const Artical = () => {
  return (
    <section className="my-[80px]">
      <div className="lg:max-w-[1500px] mx-auto w-full px-2">
        <Flex className={`items-center gap-[30px] flex-col lg:flex-row`}>
          <div className="w-full mx-auto lg:w-4/12">
          <Side_title title='read the latest news and articles'/>
          <p className="mt-[30px] mb-[50px] font-roboto font-normal text-[18px] text-hash w-full lg:w-[457px]">Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.</p>
          <a href="#" className="text-[12px] font-medium font-roboto text-custom_orange uppercase underline">read more</a>
          </div>
          <div className="w-full mx-auto rounded-[20px] lg:w-4/12 p-5 lg:p-10 shadow-xl">
          <h4 className="font-roboto font-medium text-[12px] text-custom_orange mb-1">Dec 10, 2020</h4>
          <h1 className="font-bold font-roboto text-[20px] text-black w-full lg:w-[400px]">
          Launch of a new convenient feature this Saturday. Trend 2020
          </h1>
          <p className="font-roboto font-normal text-[14px] text-hash w-full lg:w-[400px] my-[30px]">Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum.</p>
          <Flex className={`items-center gap-2`}>
          <FaCircle size={20} className="text-[#BD93D8]" />
          <span className="font-normal font-roboto text-[14px] text-hash">Annette Black</span>
          <LuDot size={20} className="text-custom_orange"  />
          <FiShare2 size={14} className="text-hash" />
          <span className="font-normal font-roboto text-[14px] text-hash">Share</span>
          </Flex>
          </div>
          <div className="w-full mx-auto rounded-[20px] lg:w-4/12 p-5 lg:p-10 shadow-xl">
          <h4 className="font-roboto font-medium text-[12px] text-custom_orange mb-1">Dec 10, 2020</h4>
          <h1 className="font-bold font-roboto text-[20px] text-black w-full lg:w-[400px]">
          What you need to know before using Upland Application
          </h1>
          <p className="font-roboto font-normal text-[14px] text-hash w-full lg:w-[400px] my-[30px]">Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.</p>
          <Flex className={`items-center gap-2`}>
          <FaCircle size={20} className="text-[#BD93D8]" />
          <span className="font-normal font-roboto text-[14px] text-hash">Annette Black</span>
          <LuDot size={20} className="text-custom_orange"  />
          <FiShare2 size={14} className="text-hash" />
          <span className="font-normal font-roboto text-[14px] text-hash">Share</span>
          </Flex>
          </div>
        </Flex>
      </div>
    </section>
  );
};

export default Artical;
