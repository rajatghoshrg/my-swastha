import React from 'react'
import { NavLink } from 'react-router-dom'

import {
    RiDashboardFill,
    RiRobot2Fill,
    RiHeartPulseFill,
    RiAlarmWarningFill,
    RiRunFill,
    RiSettings4Fill
} from "react-icons/ri";

const Sidebar = () => {

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
        }

    ]

    return (

        <aside className="hidden lg:flex flex-col w-[280px] min-h-screen bg-white/70 backdrop-blur-2xl border-r border-white/40 px-6 py-8 sticky top-0">

            {/* LOGO */}
            <div className="flex items-center gap-4 mb-12">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] flex items-center justify-center shadow-lg">

                    <span className="text-white text-2xl font-black">
                        M
                    </span>

                </div>

                <div>

                    <h1 className="text-[28px] font-black leading-none">

                        <span className="bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] bg-clip-text text-transparent">

                            My Swastha

                        </span>

                    </h1>

                    <p className="text-[11px] uppercase tracking-[2px] text-[var(--text-gray)] mt-1">

                        AI HEALTHCARE

                    </p>

                </div>

            </div>

            {/* MENU */}
            <div className="flex flex-col gap-3">

                {
                    menuItems.map((item, index) => (

                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) =>

                                `flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 group ${

                                    isActive

                                        ? "bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] text-white shadow-lg"

                                        : "text-[var(--text-gray)] hover:bg-white hover:shadow-md"

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

            {/* BOTTOM CARD */}
            <div className="mt-auto bg-gradient-to-br from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] rounded-[30px] p-6 text-white shadow-2xl overflow-hidden relative">

                <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] bg-white/10 rounded-full blur-2xl"></div>

                <h3 className="text-[22px] font-bold mb-2">

                    AI Health Score

                </h3>

                <p className="text-white/80 text-[14px] leading-[1.8] mb-5">

                    Your wellness performance is excellent this week.

                </p>

                <div className="bg-white/20 rounded-full h-3 overflow-hidden">

                    <div className="w-[92%] h-full bg-white rounded-full"></div>

                </div>

                <p className="mt-3 text-[14px] font-semibold">

                    92% Wellness Score

                </p>

            </div>

        </aside>

    )
}

export default Sidebar