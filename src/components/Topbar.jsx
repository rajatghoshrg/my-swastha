import React from 'react'

import {
    RiNotification3Fill
} from "react-icons/ri";

const Topbar = () => {

    return (

        <div className="fixed top-0 right-0 lg:left-[280px] z-40 px-4 sm:px-6 lg:px-8 pt-4">

            <div className="relative overflow-hidden w-full
            bg-gradient-to-r from-white/55 via-white/35 to-white/20
            backdrop-blur-2xl
            border border-white/30
            rounded-[28px]
            px-5 sm:px-6 py-3
            flex items-center justify-between
            shadow-[0_8px_40px_rgba(15,157,148,0.10)]">

                {/* TOP GLOW */}
                <div className="absolute top-[-80px] left-[20%] w-[220px] h-[220px] bg-[#14b8a6]/10 rounded-full blur-3xl"></div>

                {/* RIGHT GLOW */}
                <div className="absolute right-[-60px] top-[-40px] w-[180px] h-[180px] bg-[#0ea5a4]/10 rounded-full blur-3xl"></div>

                {/* LEFT */}
                <div className="relative z-10">

                    <h2 className="text-[16px] sm:text-[22px] font-black bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] bg-clip-text text-transparent leading-[1.3] pb-1">

                        Welcome Back, Rajat

                    </h2>

                    <p className="text-[12px] sm:text-[14px] text-[var(--text-gray)] mt-0.5">

                        Level up your wellness, fitness, mindset, and healthy lifestyle with AI.

                    </p>

                </div>

                {/* RIGHT */}
                <div className="relative z-10 flex items-center gap-3">

                    {/* NOTIFICATION */}
                    <button className="relative w-11 h-11 rounded-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-md flex items-center justify-center hover:scale-105 transition-all duration-300">

                        <RiNotification3Fill className="text-[20px] text-[var(--teal-primary)]" />

                        <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></div>

                    </button>

                    {/* PROFILE PIC */}
                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="profile"
                        className="w-11 h-11 rounded-full object-cover border-2 border-white/70 shadow-md"
                    />

                </div>

            </div>

        </div>

    )
}

export default Topbar