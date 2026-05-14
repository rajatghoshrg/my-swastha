import React from 'react'
import { NavLink } from 'react-router-dom'

import {
    RiDashboardFill,
    RiRobot2Fill,
    RiHeartPulseFill,
    RiAlarmWarningFill,
    RiRunFill,
    RiCalculatorFill,
    RiCloseLine
} from "react-icons/ri";

const Sidebar = ({ open, setOpen }) => {

    const menuItems = [

        {
            title: "Dashboard",
            path: "/dashboard",
            icon: <RiDashboardFill />
        },

        {
            title: "OxyGen AI",
            path: "/oxygen",
            icon: <RiRobot2Fill />
        },

        {
            title: "Daily Checkup",
            path: "/checkup",
            icon: <RiHeartPulseFill />
        },

        {
            title: "Emergency",
            path: "/emergency",
            icon: <RiAlarmWarningFill />
        },

        {
            title: "Exercise",
            path: "/exercise",
            icon: <RiRunFill />
        },

        {
            title: "Health Calculator",
            path: "/calculators",
            icon: <RiCalculatorFill />
        }

    ]

    return (

        <>

            {/* MOBILE OVERLAY */}
            <div
                onClick={() => setOpen(false)}
                className={`lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-all duration-300 ${

                    open
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"

                    }`}
            ></div>

            {/* SIDEBAR */}
            <aside className={`fixed top-0 left-0 w-[280px] h-screen overflow-hidden z-50
            bg-gradient-to-b from-white/55 via-white/35 to-white/20
            backdrop-blur-2xl
            border-r border-white/30
            shadow-[0_8px_40px_rgba(15,157,148,0.10)]
            px-6 py-8
            transition-all duration-300

            ${

                open
                    ? "translate-x-0"
                    : "-translate-x-full lg:translate-x-0"

                }

            lg:flex lg:flex-col`}>

                {/* TOP GLOW */}
                <div className="absolute top-[-80px] left-[-60px] w-[220px] h-[220px] bg-[#14b8a6]/20 rounded-full blur-3xl"></div>

                {/* BOTTOM GLOW */}
                <div className="absolute bottom-[-100px] right-[-80px] w-[220px] h-[220px] bg-[#0ea5a4]/10 rounded-full blur-3xl"></div>

                {/* MOBILE CLOSE */}
                <button
                    onClick={() => setOpen(false)}
                    className="lg:hidden absolute top-5 right-5 z-20
                    w-10 h-10 rounded-xl
                    bg-white/70 border border-white/40
                    flex items-center justify-center shadow-md"
                >

                    <RiCloseLine className="text-[24px] text-[var(--teal-primary)]" />

                </button>

                {/* LOGO */}
                <div className="relative z-10 flex items-center gap-3 mb-10">

                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] flex items-center justify-center shadow-lg shadow-[#14b8a6]/30">

                        <span className="text-white text-2xl font-black">
                            M
                        </span>

                    </div>

                    <div>

                        <h1 className="text-[22px] font-black leading-none">

                            <span className="bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] bg-clip-text text-transparent">

                                My Swastha

                            </span>

                        </h1>

                        <p className="text-[10px] uppercase tracking-[2px] text-[var(--text-gray)] mt-1">

                            AI HEALTHCARE ZONE

                        </p>

                    </div>

                </div>

                {/* MENU */}
                <div className="relative z-10 flex flex-col gap-3">

                    {
                        menuItems.map((item, index) => (

                            <NavLink
                                key={index}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>

                                    `flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 group border border-transparent ${

                                        isActive

                                            ? "bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] text-white shadow-xl shadow-[#14b8a6]/25"

                                            : "text-[var(--text-gray)] hover:bg-white/40 hover:border-white/40 hover:backdrop-blur-xl hover:shadow-lg"

                                    }`
                                }
                            >

                                <span className="text-[22px]">

                                    {item.icon}

                                </span>

                                <span className="text-[15px] font-semibold">

                                    {item.title}

                                </span>

                            </NavLink>

                        ))
                    }

                </div>

            </aside>

        </>

    )
}

export default Sidebar