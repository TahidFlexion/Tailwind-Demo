import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiPlayLargeFill } from "react-icons/ri";
import { IoStarSharp } from "react-icons/io5";


function Home() {
    return (
        <div className="bg-gradient-to-b from-purple-100 text-textcolor sm:pb-10">
            <div className='container mx-auto  max-w-screen-xl px-4 sm:px-6 lg:px-4 pt-8 sm:pt-8 '>
                <div className="md:flex gap-10 ">
                    <div className="flex-1">
                        <div className="content">
                            <div className="bt  ">
                                <button className='bg-purple-200 px-4 mb-6 py-2 rounded-full translate-x-12 shadow-md '>Welcome to bright school</button>
                            </div>
                            <div className="heading">
                                <p className='text-center sm:text-start  text-[37px] sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight pb-2'>Creating a brighter future for your child</p>
                                <p className='text-lg text-center sm:text-start sm:text-lg leading-normal py-4'> At Bright School, we believe every child deserves a brighter future. and strive to give every student a personalized education that will promote their individual strengths and creativity.</p>
                                <div className="sm:flex flex-row gap-10">
                                    <div className='pt-4 flex justify-center gap-10'>
                                        <button className="bg-yellow-400 flex items-center gap-2 hover:bg-yellow-500 text-black text-lg font-semibold sm:py-4 py-3 sm:px-8 px-6 rounded-full">
                                            Enroll today <FaLongArrowAltRight />
                                        </button>
                                    </div>
                                    <div className='pt-4  flex justify-center'>
                                        <button className="bg-purple-200 flex items-center gap-2 hover:bg-purple-300 text-black text-lg font-semibold sm:py-4 py-3 sm:px-8 px-6 rounded-full">
                                            <RiPlayLargeFill /> Watch video
                                        </button>
                                    </div>
                                </div>
                                <div className="bottom-content pt-5 sm:pt-10 hidden md:block">
                                    <p className='text-center sm:text-left'>RATED 5 STARS BY OVER <span className='text-lightblue'> 100 PARENTS </span></p>
                                    <div className=" sm:flex gap-10 pt-5">
                                        <div>
                                            <div className="flex justify-center">
                                                <IoStarSharp className='text-yellow-500 text-xl' />
                                                <IoStarSharp className='text-yellow-500 text-xl' />
                                                <IoStarSharp className='text-yellow-500 text-xl' />
                                                <IoStarSharp className='text-yellow-500 text-xl' />
                                                <IoStarSharp className='text-yellow-500 text-xl' />
                                            </div>
                                            <p className='text-xs  font-bold text-textcolor pt-2 text-center sm:text-left'>GREAT SCHOOLS</p>
                                        </div>
                                        <div className='h-10 w-px  bg-gray-300'>
                                        </div>
                                        <div>
                                            <div className="flex justify-center">
                                                <IoStarSharp className='text-yellow-500 text-xl' />
                                                <IoStarSharp className='text-yellow-500 text-xl' />
                                                <IoStarSharp className='text-yellow-500 text-xl' />
                                                <IoStarSharp className='text-yellow-500 text-xl' />
                                                <IoStarSharp className='text-yellow-500 text-xl' />
                                            </div>
                                            <p className='text-xs font-bold text-textcolor pt-2 text-center sm:text-left'>PRIVATE SCHOOL REVIEW</p>
                                        </div>
                                        <div className='h-10 w-px  bg-gray-300'>
                                        </div>
                                        <div>
                                            <div className="flex justify-center">
                                                <IoStarSharp className='text-yellow-500 text-xl' />
                                                <IoStarSharp className='text-yellow-500 text-xl' />
                                                <IoStarSharp className='text-yellow-500 text-xl' />
                                                <IoStarSharp className='text-yellow-500 text-xl' />
                                                <IoStarSharp className='text-yellow-500 text-xl' />
                                            </div>
                                            <p className='text-xs font-bold text-textcolor pt-2 text-center sm:text-left'>GOOGLE REVIEWS</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className='relative'>
                            <img src="hero-home.webp" alt="Hero Home" className="w-full h-auto md:h-96 lg:h-full pt-8" />
                            <div className="img-icon absolute inset-0 flex items-center justify-center">
                                <div className="rounded-full bg-playbtn text-white p-4 relative">
                                <div className="absolute inset-1 rounded-full border-4 border-playbtn animate-pulse"></div>
                                    <RiPlayLargeFill className='h-12 w-12 relative z-10' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bottom-content pt-5 sm:pt-10 block md:hidden">
                        <p className='text-center sm:text-left'>RATED 5 STARS BY OVER <span className='text-lightblue'> 100 PARENTS </span></p>
                        <div className="sm:flex gap-10 pt-5">
                            <div>
                                <div className="flex justify-center">
                                    <IoStarSharp className='text-yellow-500 text-xl' />
                                    <IoStarSharp className='text-yellow-500 text-xl' />
                                    <IoStarSharp className='text-yellow-500 text-xl' />
                                    <IoStarSharp className='text-yellow-500 text-xl' />
                                    <IoStarSharp className='text-yellow-500 text-xl' />
                                </div>
                                <p className='text-xs font-bold text-textcolor pt-2 text-center sm:text-left'>GREAT SCHOOLS</p>
                            </div>
                            <div className='h-10 w-px  bg-gray-300'>
                            </div>
                            <div>
                                <div className="flex justify-center">
                                    <IoStarSharp className='text-yellow-500 text-xl' />
                                    <IoStarSharp className='text-yellow-500 text-xl' />
                                    <IoStarSharp className='text-yellow-500 text-xl' />
                                    <IoStarSharp className='text-yellow-500 text-xl' />
                                    <IoStarSharp className='text-yellow-500 text-xl' />
                                </div>
                                <p className='text-xs font-bold text-textcolor pt-2 text-center sm:text-left'>PRIVATE SCHOOL REVIEW</p>
                            </div>
                            <div className='h-10 w-px  bg-gray-300'>
                            </div>
                            <div>
                                <div className="flex justify-center">
                                    <IoStarSharp className='text-yellow-500 text-xl' />
                                    <IoStarSharp className='text-yellow-500 text-xl' />
                                    <IoStarSharp className='text-yellow-500 text-xl' />
                                    <IoStarSharp className='text-yellow-500 text-xl' />
                                    <IoStarSharp className='text-yellow-500 text-xl' />
                                </div>
                                <p className='text-xs font-bold text-textcolor pt-2 text-center sm:text-left'>GOOGLE REVIEWS</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home