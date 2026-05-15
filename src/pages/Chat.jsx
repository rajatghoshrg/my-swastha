import React from 'react'

import {
    RiEmotionHappyLine,
    RiMoonClearLine,
    RiFlashlightLine,
    RiBookOpenLine,
    RiMicLine,
    RiSendPlaneFill,
    RiAddCircleLine,
    RiRobot2Line,
    RiUser3Line,
    RiRefreshLine,
    RiMore2Fill
} from "react-icons/ri";

const Chat = () => {

    return (

        <div className="
        fixed
        top-[90px]
        left-[12px]
        right-[12px]
        bottom-[12px]

        lg:top-[100px]
        lg:left-[300px]
        lg:right-[20px]
        lg:bottom-[20px]

        flex
        ">

            {/* CHAT CONTAINER */}
            <div className="w-full h-full
            rounded-[16px]
            bg-gradient-to-br from-white/60 via-white/40 to-white/20
            backdrop-blur-2xl
            border border-white/30
            shadow-[0_10px_50px_rgba(15,157,148,0.12)]
            overflow-hidden relative
            flex flex-col">

                {/* TOP GLOW */}
                <div className="absolute top-[-80px] right-[-60px] w-[220px] h-[220px] bg-[#14b8a6]/10 rounded-full blur-3xl"></div>

                {/* HEADER */}
                <div className="relative z-20 shrink-0 flex items-center justify-between px-4 py-3 border-b border-white/30 backdrop-blur-xl">

                    {/* LEFT */}
                    <div className="flex items-center gap-2">

                        <div className="w-10 h-10 rounded-[24px]
                        bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c]
                        flex items-center justify-center
                        shadow-lg shadow-[#14b8a6]/25">

                            <RiRobot2Line className="text-white text-[24px]" />

                        </div>

                        <div>

                            <h2 className="text-[14px] sm:text-[18px] font-black
                            bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c]
                            bg-clip-text text-transparent">

                                OxyGen AI

                            </h2>

                            <div className="flex items-center gap-1 mt-1">

                                <div className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse"></div>

                                <p className="text-[12px] text-[var(--text-gray)] font-medium">

                                    Online

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-2 sm:gap-3">

                        <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/70 border border-white/40 shadow-md flex items-center justify-center">

                            <RiRefreshLine className="text-[20px] sm:text-[22px] text-[var(--teal-primary)]" />

                        </button>

                        <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/70 border border-white/40 shadow-md flex items-center justify-center">

                            <RiMore2Fill className="text-[20px] sm:text-[22px] text-[var(--teal-primary)]" />

                        </button>

                    </div>

                </div>

                {/* SCROLLABLE CHAT AREA */}
                <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-8 space-y-6 relative z-10">

                    {/* DATE */}
                    <div className="flex justify-center">

                        <div className="px-4 sm:px-5 py-2 rounded-full bg-white/60 border border-white/40 text-[11px] sm:text-[13px] font-semibold text-[var(--text-gray)]">

                            Today • Wellness Session

                        </div>

                    </div>

                    {/* AI MESSAGE */}
                    <div className="flex gap-3 sm:gap-4 items-start">

                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl
                        bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c]
                        flex items-center justify-center shadow-md shrink-0">

                            <RiRobot2Line className="text-white text-[18px] sm:text-[22px]" />

                        </div>

                        <div className="max-w-[88%] sm:max-w-[75%]
                        bg-white/65
                        border border-white/40
                        backdrop-blur-xl
                        rounded-[24px]
                        rounded-tl-[8px]
                        px-4 sm:px-6 py-4 sm:py-5 shadow-sm">

                            <p className="text-[14px] sm:text-[16px] text-[var(--text-dark)] leading-[1.9]">

                                Hello! I'm OxyGen, your AI wellness companion.
                                How are you feeling today? I'm here to support
                                your mental wellness, healthy habits, fitness,
                                and daily balance.

                            </p>

                            <p className="text-[11px] sm:text-[13px] text-[var(--text-gray)] mt-4">

                                10:02 AM

                            </p>

                        </div>

                    </div>

                    {/* USER MESSAGE */}
                    <div className="flex justify-end">

                        <div className="flex gap-3 sm:gap-4 items-end max-w-[88%] sm:max-w-[80%]">

                            <div className="bg-gradient-to-r
                            from-[#14b8a6]
                            via-[#0ea5a4]
                            to-[#0f9f9c]
                            text-white
                            rounded-[24px]
                            rounded-br-[8px]
                            px-4 sm:px-6 py-4 sm:py-5 shadow-lg">

                                <p className="text-[14px] sm:text-[16px] leading-[1.9]">

                                    I am feeling mentally unwell. and also exhausted.

                                </p>

                                <p className="text-[11px] sm:text-[13px] text-white/70 mt-4">

                                    11:00 AM

                                </p>

                            </div>

                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl
                            bg-white/70
                            border border-white/40
                            flex items-center justify-center shadow-md shrink-0">

                                <RiUser3Line className="text-[18px] sm:text-[22px] text-[var(--teal-primary)]" />

                            </div>

                        </div>

                    </div>

                    {/* AI MESSAGE */}
                    <div className="flex gap-3 sm:gap-4 items-start">

                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl
                        bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c]
                        flex items-center justify-center shadow-md shrink-0">

                            <RiRobot2Line className="text-white text-[18px] sm:text-[22px]" />

                        </div>

                        <div className="max-w-[88%] sm:max-w-[75%]
                        bg-white/65
                        border border-white/40
                        backdrop-blur-xl
                        rounded-[24px]
                        rounded-tl-[8px]
                        px-4 sm:px-6 py-4 sm:py-5 shadow-sm">

                            <p className="text-[14px] sm:text-[16px] text-[var(--text-dark)] leading-[1.9]">

                                I understand. Burnout can affect both mental and
                                physical wellness. Would you like a short breathing
                                exercise, stress-relief activity, or sleep guidance?

                            </p>

                        </div>

                    </div>

                    {/* QUICK ACTIONS */}
                    <div className="flex flex-wrap gap-3">

                        {
                            [
                                {
                                    icon: <RiEmotionHappyLine />,
                                    text: "I feel stressed"
                                },

                                {
                                    icon: <RiMoonClearLine />,
                                    text: "Help me sleep"
                                },

                                {
                                    icon: <RiFlashlightLine />,
                                    text: "Boost energy"
                                },

                                {
                                    icon: <RiBookOpenLine />,
                                    text: "Daily motivation"
                                }

                            ].map((item, index) => (

                                <button
                                    key={index}
                                    className="flex items-center gap-2 sm:gap-3
                                    px-4 sm:px-5 py-2.5 sm:py-3
                                    rounded-full
                                    bg-white/60
                                    border border-white/40
                                    backdrop-blur-xl
                                    text-[13px] sm:text-[15px]
                                    text-[var(--teal-primary)]
                                    font-semibold
                                    hover:scale-105
                                    hover:bg-white/80
                                    transition-all duration-300 shadow-sm">

                                    <span className="text-[16px] sm:text-[18px]">

                                        {item.icon}

                                    </span>

                                    {item.text}

                                </button>

                            ))
                        }

                    </div>

                </div>

                {/* FIXED INPUT AREA */}
                <div className="relative z-20 shrink-0 border-t border-white/30 px-3 sm:px-5 py-3 sm:py-4 backdrop-blur-xl bg-white/20">

                    <div className="flex items-center gap-2 sm:gap-4
                    bg-white/65
                    border border-white/40
                    backdrop-blur-xl
                    rounded-full
                    px-3 py-2 shadow-sm">

                        <button>

                            <RiAddCircleLine className="text-[22px] sm:text-[24px] text-[var(--teal-primary)]" />

                        </button>

                        <input
                            type="text"
                            placeholder="Tell OxyGen how you feel today..."
                            className="flex-1 bg-transparent outline-none text-[13px] sm:text-[14px] text-[var(--text-dark)] placeholder:text-[var(--text-gray)]"
                        />

                        <button>

                            <RiMicLine className="text-[22px] sm:text-[24px] text-[var(--teal-primary)]" />

                        </button>

                        <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full
                        bg-gradient-to-r
                        from-[#14b8a6]
                        via-[#0ea5a4]
                        to-[#0f9f9c]
                        flex items-center justify-center shadow-lg">

                            <RiSendPlaneFill className="text-white text-[18px] sm:text-[20px]" />

                        </button>

                    </div>

                    <p className="text-center text-[9px] sm:text-[10px] tracking-[1px]
                    text-[var(--text-gray)] mt-3 uppercase">

                        Talk with me. Because your mental health matters.

                    </p>

                </div>

            </div>

        </div>

    )
}

export default Chat