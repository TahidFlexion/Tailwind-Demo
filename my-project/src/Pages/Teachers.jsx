import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { LiaMeetup } from "react-icons/lia";

function Teachers() {
    return (
        <div className='container xl:container px-6 mx-auto sm:px-4 md:px-4 lg:px-2 2xl:px-36 sm:mt-20 bg-white'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="left-side">
                    <div className="columns-1 sm:columns-2 gap-6">
                        <div>
                            <img className="rounded-3xl object-cover w-full h-80 sm:w-72" src="about-team-01.webp" />
                            <div className="img-content text-center pt-2">
                                <p className='text-lg font-semibold'>Tecia Torres</p>
                                <p className='text-lightblue text-md'>Executive Director</p>
                            </div>
                        </div>
                        <div className="pt-5">
                            <img className="rounded-xl object-cover w-full h-80 sm:w-72" src="about-team-04.webp" />
                            <div className="img-content text-center pt-2">
                                <p className='text-lg font-semibold'>Andrea Lee</p>
                                <p className='text-lightblue text-md'>Elementary Director & Lead</p>
                            </div>
                        </div>
                        <div className="pt-20">
                            <img className="rounded-xl object-cover w-full h-80 sm:w-72" src="about-team-02.webp" />
                            <div className="img-content text-center pt-2">
                                <p className='text-lg font-semibold'>Andrea Lee</p>
                                <p className='text-lightblue text-md'>Elementary Director & Lead</p>
                            </div>
                        </div>
                        <div className="pt-5">
                            <img className="rounded-xl object-cover w-full h-80 sm:w-72" src="about-team-03.webp" />
                            <div className="img-content text-center pt-2">
                                <p className='text-lg font-semibold'>Tecia Torres</p>
                                <p className='text-lightblue text-md'>Executive Director</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side text-textcolor">
                    <div className="bt">
                        <button className='bg-purple-200 px-4 mb-4 py-2 md:px-4 lg:px-4 rounded-full shadow-md'>
                            A second home for your child
                        </button>
                    </div>
                    <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold" style={{ lineHeight: "55px" }}>
                        Meet the teachers behind Bright School
                    </p>
                    <p className='text-lg sm:text-xl font-normal py-2 sm:py-1 lg:py-6'>
                        Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                    </p>
                    <div className="bottom-provide relative bg-yellow-50 rounded-3xl px-6 py-10 mt-6 sm:mt-10">
                        <div className="main">
                            <div className='provide-icon text-white absolute top-[-15px] left-5'>
                                <LiaMeetup className='bg-blue-800 p-2 h-12 w-12 rounded-2xl' />
                            </div>
                            <p className='text-xl font-bold pb-2'>
                                At Bright, we pride ourselves on the quality of our teachers. You can expect the following from our teachers:
                            </p>
                            <div className="flex items-center gap-3 py-2">
                                <img src="provide.svg" alt="" className='h-9 w-9' />
                                <p className='text-[19px] text-textcolor'>A minimum of 3 years of experience</p>
                            </div>
                            <div className="flex items-center gap-3 py-2">
                                <img src="provide.svg" alt="" className='h-9 w-9' />
                                <p className='text-[19px] text-textcolor'>An advanced degree</p>
                            </div>
                            <div className="flex items-center gap-3 py-2">
                                <img src="provide.svg" alt="" className='h-9 w-9' />
                                <p className='text-[19px] text-textcolor'>Amazing recommendations and positive reviews</p>
                            </div>
                            <div className="flex items-center gap-3 py-2">
                                <img src="provide.svg" alt="" className='h-9 w-9' />
                                <p className='text-[19px] text-textcolor'>
                                    A love and passion for teaching and helping children grow and succeed
                                </p>
                            </div>
                            <div className="flex items-center gap-3 py-2">
                                <img src="provide.svg" alt="" className='h-9 w-9' />
                                <p className='text-[19px] text-textcolor'>
                                    A commitment to creating a positive classroom experience for all students, no matter their learning needs
                                </p>
                            </div>
                            <div className='pt-6 flex gap-10 sm:justify-center md:justify-start'>
                                <button className="bg-playbtn flex items-center gap-2 hover:bg-blue-800 text-white text-md sm:text-sm lg:text-lg font-semibold py-2 px-4 sm:py-2 sm:px-4 lg:py-2 lg:px-6 rounded-full">
                                    Meet the rest of the team <FaLongArrowAltRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teachers;
