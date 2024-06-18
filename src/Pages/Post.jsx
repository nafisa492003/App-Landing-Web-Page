import React from "react";
import Common_Banner from "../Components/Common_Banner";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import blog_img from "../assets/blog_img.png";
import { FaCircle } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { FiShare2 } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import "../Components/Style.css";
import { LuMessageCircle } from "react-icons/lu";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import moving from "../assets/moving.png";
import post_img from "../assets/post_img.png";
import { LuReply } from "react-icons/lu";
const Post = () => {
  return (
    <section>
      <Common_Banner title="Post" />
      <div className="relative">
        <img
          className="absolute hidden left-1 top-[320px] lg:block"
          src={moving}
          alt=""
        />
        <Container>
          <Flex className={`my-[100px] flex-col lg:flex-row gap-[50px]`}>
            <div className="w-full mx-auto lg:w-9/12">
              <div>
                <div className="relative w-full">
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
                <Flex className={`items-center gap-2 my-4`}>
                  <FaCircle size={20} className="text-[#BD93D8]" />
                  <span className="font-medium font-roboto text-[14px] text-black">
                    Annette Black
                  </span>
                  <LuDot size={20} className="text-custom_orange" />
                  <span className="font-normal font-roboto text-[14px] text-hash">
                    Mobile
                  </span>
                  <LuDot size={20} className="text-custom_orange" />
                  <FiShare2 size={14} className="text-hash" />
                  <span className="font-normal font-roboto text-[14px] text-hash">
                    Share
                  </span>
                </Flex>
                <div>
                  <h1 className="font-medium font-roboto text-[24px] uppercase">
                    a selection of the best apps for 2020
                  </h1>
                  <p className="font-normal font-roboto text-[16px] text-hash my-5 w-full lg:w-[828px]">
                    There’s such a thing as “too much information”, especially
                    for the companies scaling out their sales operations. That’s
                    why Attentive was born in 2015 help sales teams make their
                    increasing pipelines simpler to manage. Indeed, the small,
                    Portugal-based team is itself focused on scaling, having
                    much participated in accelerator
                  </p>
                  <p className="font-normal font-roboto text-[16px] text-hash my-5 w-full lg:w-[828px]">
                    In this episode, Attentive founder Robert Fox talks about
                    what it takes to build a tech new product from the ground
                    up. Discover their approach to running an engineering team,
                    from adopting new open source technologies, to onboarding
                    junior developers and learning .
                  </p>
                  <div className="w-full p-[30px] lg:p-[50px] rounded-[20px] shadow-lg my-10">
                    <p className="font-normal font-roboto text-[24px] text-hash my-5 w-full lg:w-[725px] mx-auto">
                      “Ullamco exercitation incididunt ut fugiat ex velit nulla.
                      Lorem amet ut ad aute irure exercitation elit exercitation
                      Lorem non aliqua occaecat ea sunt. Commodo non duis aute
                      mollit sint. Mollit veniam dolor aliqua nulla sit est do
                      mollit esse ut amet.”
                    </p>
                    <Flex className={`items-center justify-between `}>
                      <h1 className="font-dark font-semibold text-[22px]">
                        Robert Fox
                      </h1>
                      <h1 className="text-[50px] font-roboto font-medium bg-gradient-text bg-clip-text text-transparent">
                        99
                      </h1>
                    </Flex>
                  </div>
                  <h1 className="font-medium font-roboto text-[20px]">
                    Better Security and faster Server
                  </h1>
                  <p className="font-normal font-roboto text-[16px] text-hash my-5 w-full lg:w-[828px]">
                    There’s such a thing as “too much information”, especially
                    for the companies scaling out their sales operations. That’s
                    why Attentive was born in 2015 help sales teams make their
                    increasing pipelines simpler to manage. Indeed, the small.
                  </p>
                  <ul className="pl-2 my-10 custom-list-disc">
                    <li className="font-normal font-dark text-[16px] text-hash">
                      We’ve been supporting WordPress since the beginning.
                    </li>
                    <li className="font-normal font-dark text-[16px] text-hash">
                      Our easy-to-use control panel and API let you spend.
                    </li>
                    <li className="font-normal font-dark text-[16px] text-hash ">
                      Perfect for large sites or agencies managing multiple
                      clients.
                    </li>
                  </ul>
                  <p className="font-normal font-roboto text-[16px] text-hash my-5 w-full lg:w-[828px]">
                    There’s such a thing as “too much information”, especially
                    for the companies scaling out their sales operations. That’s
                    why Attentive was born in 2015 help sales teams make their
                    increasing pipelines simpler to manage. Indeed, the small,
                    Portugal-based team is itself focused on scaling, having
                    much participated in accelerator
                  </p>
                  <p className="font-normal font-roboto text-[16px] text-hash my-5 w-full lg:w-[828px]">
                    In this episode, Attentive founder Robert Fox talks about
                    what it takes to build a tech new product from the ground
                    up. Discover their approach to running an engineering team,
                    from adopting new open source technologies, to onboarding
                    junior developers and learning .
                  </p>
                  <Flex className={`items-center gap-6`}>
                    <h6 className="font-roboto font-medium text-[18px] ">
                      Tags:
                    </h6>
                    <Flex className={`gap-1`}>
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
                  </Flex>
                  <div className="my-[20px] dotted-line"></div>
                  <div className="py-[20px] px-5 lg:px-10 rounded-[20px] shadow-lg my-10">
                    <Flex
                      className={`items-center justify-between gap-2  flex-col md:flex-row`}
                    >
                      <img src={post_img} alt="" />
                      <div>
                        <h1 className="font-medium font-roboto text-[20px]">
                          Robert Fox
                        </h1>
                        <p className="font-normal font-roboto text-[16px] text-hash my-5 w-full lg:w-[506px]">
                          Ullamco exercitation incididunt ut fugiat ex velit
                          nulla. Lorem amet ut ad aute irure exercitation elit
                          exercitation Lorem non accaecat ea sunt.
                        </p>

                        <Flex className={`gap-1`}>
                          <h5 className="font-normal font-roboto text-[14px] text-hash">
                            FB
                          </h5>
                          <LuDot size={20} className="text-custom_orange" />
                          <h5 className="font-normal font-roboto text-[14px] text-hash">
                            TW
                          </h5>
                          <LuDot size={20} className="text-custom_orange" />
                          <h5 className="font-normal font-roboto text-[14px] text-hash">
                            IN
                          </h5>
                        </Flex>
                      </div>
                    </Flex>
                  </div>
                  {/* commentspart */}
                  <h1 className="font-medium font-roboto text-[24px]">
                    Comments (3)
                  </h1>
                  <Flex className={`flex-col gap-5 my-5`}>
                    <div>
                      <Flex className={`items-center gap-2 my-4`}>
                        <FaCircle size={20} className="text-[#BD93D8]" />
                        <span className="font-medium font-roboto text-[14px] text-black">
                          Jacob Jones
                        </span>
                        <LuDot size={20} className="text-custom_orange" />
                        <span className="font-normal font-roboto text-[14px] text-hash">
                          Dec 10, 2020
                        </span>
                        <LuDot size={20} className="text-custom_orange" />
                        <LuReply size={20} className="text-custom_orange" />
                        <span className="font-normal font-roboto text-[14px] text-custom_orange">
                          Reply
                        </span>
                      </Flex>
                      <p className="font-normal font-roboto text-[16px] text-hash my-5 w-full lg:w-[828px]">
                        Ullamco exercitation incididunt ut fugiat ex velit
                        nulla. Lorem amet ut ad aute irure exercitation elit
                        exercitation Lorem non aliqua occaecat ea sunt.
                      </p>
                      <div className="my-2 dotted-line"></div>
                    </div>
                    <div>
                      <Flex className={`items-center gap-2 my-4`}>
                        <FaCircle size={20} className="text-[#BD93D8]" />
                        <span className="font-medium font-roboto text-[14px] text-black">
                          Jacob Jones
                        </span>
                        <LuDot size={20} className="text-custom_orange" />
                        <span className="font-normal font-roboto text-[14px] text-hash">
                          Dec 10, 2020
                        </span>
                        <LuDot size={20} className="text-custom_orange" />
                        <LuReply size={20} className="text-custom_orange" />
                        <span className="font-normal font-roboto text-[14px] text-custom_orange">
                          Reply
                        </span>
                      </Flex>
                      <p className="font-normal font-roboto text-[16px] text-hash my-5 w-full lg:w-[828px]">
                        Ullamco exercitation incididunt ut fugiat ex velit
                        nulla. Lorem amet ut ad aute irure exercitation elit
                        exercitation Lorem non aliqua occaecat ea sunt.
                      </p>
                      <div className="my-2 dotted-line"></div>
                    </div>
                    <div>
                      <Flex className={`items-center gap-2 my-4`}>
                        <FaCircle size={20} className="text-[#BD93D8]" />
                        <span className="font-medium font-roboto text-[14px] text-black">
                          Jacob Jones
                        </span>
                        <LuDot size={20} className="text-custom_orange" />
                        <span className="font-normal font-roboto text-[14px] text-hash">
                          Dec 10, 2020
                        </span>
                        <LuDot size={20} className="text-custom_orange" />
                        <LuReply size={20} className="text-custom_orange" />
                        <span className="font-normal font-roboto text-[14px] text-custom_orange">
                          Reply
                        </span>
                      </Flex>
                      <p className="font-normal font-roboto text-[16px] text-hash my-5 w-full lg:w-[828px]">
                        Ullamco exercitation incididunt ut fugiat ex velit
                        nulla. Lorem amet ut ad aute irure exercitation elit
                        exercitation Lorem non aliqua occaecat ea sunt.
                      </p>
                      <div className="my-2 dotted-line"></div>
                    </div>
                  </Flex>
                  {/* commentspart */}
                  {/* Reply part */}
                  <h1 className="font-medium font-roboto text-[24px]">
                    leave a reply
                  </h1>
                  <form className="my-5">
                    <Flex className={`items-center gap-5 mb-4`}>
                      <input
                        className="font-normal font-roboto text-[14px] text-hash placeholder:text-hash py-[18px] px-[30px] rounded-full border border-[#E6EBFC] w-full lg:w-[404px]"
                        placeholder="Name"
                        type="text"
                      />
                      <input
                        className="font-normal font-roboto text-[14px] text-hash placeholder:text-hash py-[18px] px-[30px] rounded-full border border-[#E6EBFC] w-full lg:w-[404px]"
                        placeholder="Email"
                        type="text"
                      />
                    </Flex>
                    <input
                      className="font-normal font-roboto text-[14px] text-hash placeholder:text-hash pt-[20px] pb-[106px] px-[30px] rounded-[20px] border border-[#E6EBFC] w-full"
                      placeholder="Message"
                      type="text"
                    />
                    <button className='font-normal font-roboto text-[16px] text-white px-[35px] py-4 bg-gradient-custom rounded-full my-5'>
                    Post comment
                </button>
                  </form>

                  {/* Reply part */}
                </div>
              </div>
            </div>
            {/* 2nd part */}
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

export default Post;
