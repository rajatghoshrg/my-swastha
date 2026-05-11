import React from 'react'

import {
    RiNotification3Fill,
    RiSearch2Line
} from "react-icons/ri";

const Topbar = () => {

    return (

        <div className="w-full bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[28px] px-5 sm:px-8 py-4 flex items-center justify-between shadow-sm">

            {/* LEFT */}
            <div>

                <h2 className="text-[24px] sm:text-[32px] font-black text-[var(--text-dark)]">

                    Welcome Back 👋

                </h2>

                <p className="text-[13px] sm:text-[15px] text-[var(--text-gray)] mt-1">

                    Monitor your wellness and healthcare insights.

                </p>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3 sm:gap-4">

                {/* SEARCH */}
                <button className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center hover:scale-105 transition-all duration-300">

                    <RiSearch2Line className="text-[22px] text-[var(--teal-primary)]" />

                </button>

                {/* NOTIFICATION */}
                <button className="relative w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center hover:scale-105 transition-all duration-300">

                    <RiNotification3Fill className="text-[22px] text-[var(--teal-primary)]" />

                    <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></div>

                </button>

                {/* PROFILE */}
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-md">

                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="profile"
                        className="w-10 h-10 rounded-xl object-cover"
                    />

                    <div className="hidden sm:block">

                        <h4 className="text-[14px] font-semibold text-[var(--text-dark)]">

                            Rajat Ghosh

                        </h4>

                        <p className="text-[11px] text-[var(--text-gray)]">

                            Wellness User

                        </p>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Topbar