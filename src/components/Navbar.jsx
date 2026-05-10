import React, { useState } from 'react'

import { RiSparklingFill } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);

    return (

        <div className="relative">

            <nav className="sticky top-3 z-50 w-full min-h-[76px] bg-white/75 backdrop-blur-xl rounded-[30px] px-4 sm:px-6 lg:px-8 flex items-center justify-between border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">

                {/* LEFT SIDE */}
                <div className="flex items-center gap-10">

                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer group">

                        {/* Logo Circle */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">

                            <span className="text-white font-extrabold text-[20px] sm:text-[22px]">
                                M
                            </span>

                        </div>

                        {/* Logo Text */}
                        <div className="flex flex-col justify-center">

                            <h1 className="text-[22px] sm:text-[24px] font-black tracking-[-1px] leading-none">

                                <span className="bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] bg-clip-text text-transparent">

                                    My Swastha

                                </span>

                            </h1>

                            <p className="hidden sm:block text-[8px] font-medium text-[var(--text-gray)] tracking-[2px] mt-1 uppercase">

                                AI Healthcare Platform

                            </p>

                        </div>

                    </div>

                    {/* DESKTOP NAV LINKS */}
                    <ul className="hidden xl:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-[15px] text-[var(--text-gray)] font-medium">

                        <li className="relative text-[var(--teal-primary)] cursor-pointer">

                            <a href="#home">
                                Home
                            </a>

                            <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-[var(--teal-primary)] rounded-full"></div>

                        </li>

                        <li className="hover:text-[var(--teal-primary)] transition-all duration-300 cursor-pointer hover:-translate-y-0.5">

                            <a href="#services">
                                Services
                            </a>

                        </li>

                        <li className="hover:text-[var(--teal-primary)] transition-all duration-300 cursor-pointer hover:-translate-y-0.5">

                            <a href="#testimonials">
                                Testimonials
                            </a>

                        </li>

                        <li className="relative hover:text-[var(--teal-primary)] transition-all duration-300 cursor-pointer hover:-translate-y-0.5">

                            <a href="#oxygen" className="flex items-center gap-2">

                                <span className="flex items-center gap-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">

                                    <RiSparklingFill className="text-white text-[11px]" />

                                    AI

                                </span>

                                OxyGen

                            </a>

                        </li>

                        <li className="hover:text-[var(--teal-primary)] transition-all duration-300 cursor-pointer hover:-translate-y-0.5">

                            <a href="#community">
                                Community
                            </a>

                        </li>

                    </ul>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-3">

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className="xl:hidden w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center"
                    >

                        <HiOutlineMenuAlt3 className="text-2xl text-[var(--teal-dark)]" />

                    </button>

                    {/* DESKTOP BUTTONS */}
                    <div className="hidden sm:flex items-center gap-4">

                        <button className="text-[15px] text-[var(--text-gray)] font-semibold hover:text-[var(--teal-primary)] transition-all duration-300">

                            Log In

                        </button>

                        <button className="bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] hover:scale-105 hover:shadow-[0_8px_25px_rgba(20,184,166,0.35)] text-white px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-300">

                            Sign Up

                        </button>

                    </div>

                </div>

            </nav>

            {/* MOBILE MENU */}
            {
                mobileMenu && (

                    <div className="xl:hidden mt-4 bg-white/90 backdrop-blur-xl rounded-[28px] p-6 border border-white/40 shadow-xl animate-fadeIn">

                        <ul className="flex flex-col items-center text-center gap-5 text-[16px] font-medium text-[var(--text-gray)]">

                            <li>
                                <a href="#home" onClick={() => setMobileMenu(false)}>
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#services" onClick={() => setMobileMenu(false)}>
                                    Services
                                </a>
                            </li>

                            <li>
                                <a href="#testimonials" onClick={() => setMobileMenu(false)}>
                                    Testimonials
                                </a>
                            </li>

                            <li>

                                <a
                                    href="#oxygen"
                                    onClick={() => setMobileMenu(false)}
                                    className="flex items-center gap-2"
                                >

                                    <span>
                                        OxyGen
                                    </span>

                                    {/* AI Badge */}
                                    <span className="flex items-center gap-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">

                                        <RiSparklingFill className="text-white text-[11px]" />

                                        AI

                                    </span>

                                </a>

                            </li>

                            <li>
                                <a href="#community" onClick={() => setMobileMenu(false)}>
                                    Community
                                </a>
                            </li>

                        </ul>

                    </div>

                )
            }

        </div>

    )
}

export default Navbar