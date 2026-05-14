import React from 'react'

import {
    RiNotification3Fill,
    RiMenu3Line
} from "react-icons/ri";

const Topbar = ({ setOpen }) => {

    return (

        <div className="fixed top-[8px] left-[12px] right-[12px] lg:left-[287px] lg:right-[20px] z-40">

            <div className="relative overflow-hidden w-full
            bg-gradient-to-r from-white/55 via-white/35 to-white/20
            backdrop-blur-2xl
            border border-white/30
            rounded-[16px]
            px-4 sm:px-6 py-3
            flex items-center justify-between
            shadow-[0_8px_40px_rgba(15,157,148,0.10)]">

                {/* TOP GLOW */}
                <div className="absolute top-[-80px] left-[20%] w-[220px] h-[220px] bg-[#14b8a6]/10 rounded-full blur-3xl"></div>

                {/* RIGHT GLOW */}
                <div className="absolute right-[-60px] top-[-40px] w-[180px] h-[180px] bg-[#0ea5a4]/10 rounded-full blur-3xl"></div>

                {/* LEFT */}
                <div className="relative z-10 flex items-center gap-3">

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setOpen(true)}
                        className="lg:hidden w-10 h-10 rounded-xl
                        bg-white/70 backdrop-blur-xl
                        border border-white/40
                        shadow-md
                        flex items-center justify-center"
                    >

                        <RiMenu3Line className="text-[22px] text-[var(--teal-primary)]" />

                    </button>

                    <div>

                        <h2 className="text-[14px] sm:text-[22px] font-black
                        bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c]
                        bg-clip-text text-transparent leading-[1.3] pb-1">

                            Welcome Back, Rajat

                        </h2>

                        <p className="hidden sm:block text-[12px] sm:text-[14px] text-[var(--text-gray)] mt-0.5">

                            Level up your wellness, fitness, mindset, and healthy lifestyle with AI.

                        </p>

                    </div>

                </div>

                {/* RIGHT */}
                <div className="relative z-10 flex items-center gap-2 sm:gap-3">

                    {/* NOTIFICATION */}
                    <button className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full
                    bg-white/70 backdrop-blur-xl
                    border border-white/40
                    shadow-md
                    flex items-center justify-center
                    hover:scale-105 transition-all duration-300">

                        <RiNotification3Fill className="text-[18px] sm:text-[20px] text-[var(--teal-primary)]" />

                        <div className="absolute top-2 right-2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full"></div>

                    </button>

                    {/* PROFILE PIC */}
                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="profile"
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-white/70 shadow-md"
                    />

                </div>

            </div>

        </div>

    )
}

export default Topbar