import React from 'react'
import { RiSparklingFill } from "react-icons/ri";

const Navbar = () => {
    return (
        <nav className="sticky top-4 z-50 w-full h-[78px] bg-white/70 backdrop-blur-xl rounded-full px-8 flex items-center justify-between border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-14">

                {/* Logo */}
                <div className="flex items-center gap-4 cursor-pointer group">

                    {/* Logo Circle */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
                        <span className="text-white font-extrabold text-[20px]">
                            M
                        </span>

                    </div>

                    {/* Logo Text */}
                    <div className="flex flex-col justify-center">

                        <h1 className="text-[28px] font-black tracking-[-1px] leading-none">
                            <span className="bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] bg-clip-text text-transparent">
                                My Swastha
                            </span>
                        </h1>

                        <p className="text-[10px] font-medium text-[var(--text-gray)] tracking-[1.8px] mt-1 uppercase">
                            AI Healthcare Platform
                        </p>

                    </div>

                </div>

                <ul className="hidden lg:flex items-center gap-10 text-[15px] text-[var(--text-gray)] font-medium">

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

                            {/* AI Badge */}
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
            <div className="flex items-center gap-4">

                {/* Sign In */}
                <button className="text-[15px] text-[var(--text-gray)] font-semibold hover:text-[var(--teal-primary)] transition-all duration-300">

                    Log In

                </button>

                {/* Sign Up */}
                <button className="bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] hover:scale-105 hover:shadow-[0_8px_25px_rgba(20,184,166,0.35)] text-white px-7 py-3 rounded-full text-[15px] font-semibold transition-all duration-300">

                    Sign Up

                </button>
            </div>

        </nav>
    )
}

export default Navbar
