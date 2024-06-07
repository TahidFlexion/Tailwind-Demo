import React, { useState, useEffect } from 'react';
import { RiMapPin2Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

function Navbar() {
    const [showNav, setShowNav] = useState(false);
    const [navClasses, setNavClasses] = useState("hidden");

    const toggleNav = () => {
        setShowNav(!showNav);
    };


    

    useEffect(() => {
        if (showNav) {
            setNavClasses("translate-x-0");
        } else {
            setNavClasses("translate-x-full");
        }
    }, [showNav]);

    return (
        <>
            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-purple-100 text-sm py-3 sm:py-0">
                <nav className="relative max-w-[85rem] w-full mx-auto px-4 lg:pt-6 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
                    <div className="flex items-center justify-between">
                        <a className="flex-none text-white" href="#" aria-label="Brand">
                            <img className='h-14 sm:h-12 md:h-16 lg:h-20 w-full' src="bright-logo.webp" alt="" />
                        </a>
                        <div className="sm:hidden">
                            <button type="button" onClick={toggleNav} className="flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg text-blue-900 disabled:pointer-events-none" aria-label="Toggle navigation">
                                <svg className={`${showNav ? 'hidden' : 'block'} flex-shrink-0 font-bold text-lg`} xmlns="http://www.w3.org/2000/svg" width={28} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <line x1={3} x2={21} y1={6} y2={6} />
                                    <line x1={3} x2={21} y1={12} y2={12} />
                                    <line x1={3} x2={21} y1={18} y2={18} />
                                </svg>
                                <svg className={`${showNav ? 'block' : 'hidden'} flex-shrink-0`} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    {/* Desktop Navbar Items */}
                    <div className="hidden sm:flex sm:items-center sm:justify-end py-2 md:py-0 sm:ps-7">
                        <div className="flex py-3 ps-px sm:px-3 font-medium">
                            <RiMapPin2Line className='bg-yellow-200 size-9 p-2 rounded-xl' />
                            <div className='ps-2'>
                                <p className='pb-1 text-md'>Address</p>
                                <p className='pb-1 text-xs font-light'>958 McKinley Avenue Littleton, CO 80120</p>
                            </div>
                        </div>
                        <div className="flex py-3 ps-px sm:px-3 font-medium">
                            <MdOutlineEmail className='bg-purple-200 size-9 p-2 rounded-xl' />
                            <div className='ps-2'>
                                <p className='pb-1 text-md'>Email</p>
                                <p className='pb-1 text-xs font-light'>hello@bright.com</p>
                            </div>
                        </div>
                        <div className="flex py-3 ps-px sm:px-3 font-medium">
                            <FiPhone className='bg-pink-200 size-9 p-2 rounded-xl' />
                            <div className='ps-2'>
                                <p className='pb-1 text-md'>Phone</p>
                                <p className='pb-1 text-xs font-light'>+1-202-555-0132</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Slide-in Navbar for Mobile */}
            <div className={`fixed top-0 right-0 h-full w-full z-20 bg-lightblue text-white shadow-lg transition-transform transform ${navClasses} sm:hidden`}>
                <div className='flex justify-items-center justify-between'>
            <a className="flex-none mt-3 " href="#" aria-label="Brand">
                            <img className='h-14 sm:h-12 md:h-16 lg:h-20 w-full text-white' src="mb.png" alt="" />
                        </a>
                <button onClick={toggleNav} className="absolute top-4 right-4  text-white border border-white rounded p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>
                </div>
                <nav className="mt-4 space-y-4 px-4">
                    <div className="flex items-center px-3 font-medium">
                        <RiMapPin2Line className='bg-yellow-200 size-9 p-2 rounded-xl' />
                        <div className='ps-2'>
                            <p className='pb-1 text-md'>Address</p>
                            <p className='pb-1 text-xs font-light'>958 McKinley Avenue Littleton, CO 80120</p>
                        </div>
                    </div>
                    <div className="flex items-center px-3 font-medium">
                        <MdOutlineEmail className='bg-purple-200 size-9 p-2 rounded-xl' />
                        <div className='ps-2'>
                            <p className='pb-1 text-md'>Email</p>
                            <p className='pb-1 text-xs font-light'>hello@bright.com</p>
                        </div>
                    </div>
                    <div className="flex items-center px-3 font-medium">
                        <FiPhone className='bg-pink-200 size-9 rounded-xl' />
                        <div className='ps-2'>
                            <p className='pb-1 text-md'>Phone</p>
                            <p className='pb-1 text-xs font-light'>+1-202-555-0132</p>
                        </div>
                    </div>
                    <hr />
                    <ul className="space-y-4 text-center">
                        <li>
                            <a href="#" className='block text-xl font-medium hover:text-yellow-400'>Home</a>
                        </li>
                        <li>
                            <a href="#" className='block text-xl font-medium hover:text-yellow-400'>About</a>
                        </li>
                        <li>
                            <a href="#" className='block text-xl font-medium hover:text-yellow-400'>Gallery</a>
                        </li>
                        <li>
                            <a href="#" className='block text-xl font-medium hover:text-yellow-400'>Parents</a>
                        </li>
                        <li>
                            <a href="#" className='block text-xl font-medium hover:text-yellow-400'>Contact</a>
                        </li>
                        <li>
                            <a href="#" className='block text-xl font-medium hover:text-yellow-400'>Programs</a>
                        </li>
                    </ul>
                    <div className="mt-8 text-center">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-md font-semibold py-3 px-7 rounded-full">
                            Enroll today
                        </button>
                    </div>
                </nav>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:block">
                <div className="mx-auto">
                    <hr />
                </div>
                <div className="nav-bottom">
                    <header className="bg-lightblue sm:bg-purple-100">
                        <div className="hs-collapse overflow-hidden transition-all duration-300 ease-in-out transform mx-auto max-w-screen-xl items-center gap-8 px-4 sm:px-6 sm:pt-6 md:block lg:px-8 grow sm:block">
                            <div className="sm:flex flex-1 items-center justify-end sm:justify-between">
                                <nav aria-label="Global">
                                    <ul className="flex-row sm:flex items-center text-center gap-6 sm:text-black text-white sm:text-base md:text-xl text-2xl">
                                        <li className="pb-8 pt-4 sm:pt-0">
                                            <a href="#" className='relative hover-border-expand'>Home</a>
                                        </li>
                                        <li className="pb-8">
                                            <a className='relative hover-border-expand' href="#">About</a>
                                        </li>
                                        <li className="pb-8">
                                            <a className='relative hover-border-expand' href="#">Gallery</a>
                                        </li>
                                        <li className="pb-8">
                                            <a className='relative hover-border-expand' href="#">Parents</a>
                                        </li>
                                        <li className="pb-8">
                                            <a className='relative hover-border-expand' href="#">Contact</a>
                                        </li>
                                        <li className="pb-8">
                                            <a className='relative hover-border-expand' href="#">Programs</a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="flex items-center justify-center pb-8">
                                    <div className="sm:flex sm:gap-4">
                                    </div>
                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-md font-semibold py-3 px-7 rounded-full">
                                        Enroll today
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </>
    );
}

export default Navbar;
