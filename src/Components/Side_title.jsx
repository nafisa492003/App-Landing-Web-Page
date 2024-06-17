import React from 'react'
import { GoDotFill } from "react-icons/go";
import Flex from './Flex';
const Side_title = ({title}) => {
  return (
    <div>
     <Flex>
            <span className="font-medium font-roboto text-[14px] text-custom_orange">
              <GoDotFill />
            </span>
            <span className="font-medium font-roboto text-[14px] text-custom_orange">
              <GoDotFill />
            </span>
          </Flex>
          <div className="relative w-full md:w-[460px]">
            <h1 className="font-normal font-dot text-[26px] md:text-[40px] text-[#CCCCCC] uppercase">{title}</h1>
            <h1 className="font-medium font-dark text-[26px] md:text-[40px] text-black absolute top-[20px] left-1 uppercase">{title}</h1>
          </div>
    </div>
  )
}

export default Side_title