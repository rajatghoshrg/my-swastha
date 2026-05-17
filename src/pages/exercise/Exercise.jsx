import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
    RiMentalHealthLine,
    RiSunFoggyLine,
    RiHeartPulseLine,
    RiRunLine,
    RiMoonClearLine,
    RiLeafLine,
    RiArrowRightUpLine
} from "react-icons/ri";

const Exercise = () => {

    const navigate = useNavigate()

    const sessions = [

        {
            title: "Yoga",
            subtitle: "Stretch and refresh your body & mind.",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
            icon: <RiLeafLine />,
            path: "/yoga"
        },

        {
            title: "Cardio",
            subtitle: "Boost stamina and heart health daily.",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
            icon: <RiHeartPulseLine />,
            path: "/cardio"
        },

        {
            title: "Meditation",
            subtitle: "Calm your mind with peaceful sessions.",
            image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1200&auto=format&fit=crop",
            icon: <RiMentalHealthLine />,
            path: "/meditation"
        },

        {
            title: "Sleep Relax",
            subtitle: "Relax deeply and improve your sleep.",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
            icon: <RiMoonClearLine />,
            path: "/sleeprelaxation"
        },

        {
            title: "Morning Exercise",
            subtitle: "Start your day with energy & movement.",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
            icon: <RiSunFoggyLine />,
            path: "/morningexercise"
        }

    ]

    return (

        <div className="
        relative z-10
        pt-[40px]
lg:pt-[40px]
        pb-10
        px-3 sm:px-5 lg:px-0
        ">

            {/* PAGE TITLE */}
            <div className="mb-8">

                <div className="
                inline-flex items-center gap-2
                px-3 py-1.5 rounded-full
                bg-[#14b8a6]/10
                border border-[#14b8a6]/10
                text-[#0f9f9c]
                font-semibold text-[10px] sm:text-[12px]">

                    ✦ AI FITNESS & WELLNESS

                </div>

                <h1 className="
mt-4
text-[28px] sm:text-[32px]
leading-[1.1]
tracking-[-1px]
font-black
text-[var(--text-dark)]">

                    Choose Your{" "}

                    <span className="
    bg-gradient-to-r
    from-[#14b8a6]
    via-[#0ea5a4]
    to-[#0f9f9c]
    bg-clip-text
    text-transparent">

                        Wellness Session

                    </span>

                </h1>
                <p className="
mt-4
max-w-[650px]
text-[13px] sm:text-[15px]
leading-[1.8]
text-[var(--text-gray)]">

                    Relax, recharge, and level up your wellness with AI-powered sessions.


                </p>

            </div>

            {/* SESSION GRID */}
            <div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-3">

                {
                    sessions.map((session, index) => (

                        <button
                            key={index}
                            onClick={() => navigate(session.path)}
                            className="
                group
                text-left
                overflow-hidden
                rounded-[20px]
                bg-gradient-to-br
                from-white/60
                via-white/40
                to-white/20
                backdrop-blur-2xl
                border border-white/30
                shadow-[0_8px_30px_rgba(15,157,148,0.06)]
                hover:scale-[1.01]
                transition-all duration-300">

                            {/* IMAGE */}
                            <div className="relative overflow-hidden">

                                <img
                                    src={session.image}
                                    alt={session.title}
                                    className="
                        w-full
                        h-[135px]
                        sm:h-[150px]
                        object-cover
                        group-hover:scale-105
                        transition-all duration-500"
                                />

                                {/* OVERLAY */}
                                <div className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/45
                    via-black/5
                    to-transparent"></div>

                                {/* ICON */}
                                <div className="
                    absolute top-3 left-3
                    w-9 h-9
                    rounded-xl
                    bg-white/20
                    backdrop-blur-xl
                    border border-white/30
                    flex items-center justify-center">

                                    <span className="text-white text-[18px]">

                                        {session.icon}

                                    </span>

                                </div>

                            </div>

                            {/* CONTENT */}
                            <div className="p-3">

                                <div className="
                    flex items-start justify-between gap-2">

                                    <div>

                                        <h2 className="
                            text-[15px]
                            sm:text-[16px]
                            font-black
                            text-[var(--text-dark)]">

                                            {session.title}

                                        </h2>

                                        <p className="
                            mt-1.5
                            text-[11px]
                            leading-[1.6]
                            text-[var(--text-gray)]">

                                            {session.subtitle}

                                        </p>

                                    </div>

                                    <div className="
                        shrink-0
                        w-8 h-8
                        rounded-full
                        bg-gradient-to-r
                        from-[#14b8a6]
                        via-[#0ea5a4]
                        to-[#0f9f9c]
                        text-white
                        flex items-center justify-center
                        shadow-md
                        group-hover:rotate-45
                        transition-all duration-300">

                                        <RiArrowRightUpLine className="text-[14px]" />

                                    </div>

                                </div>

                                {/* BUTTON */}
                                <div className="
                    mt-3
                    flex items-center justify-between">

                                    <div className="
                        px-2.5 py-1
                        rounded-full
                        bg-[#14b8a6]/10
                        text-[#0f9f9c]
                        text-[10px]
                        font-bold">

                                        AI Guided

                                    </div>

                                    <button
                                        onClick={() => navigate(session.path)}
                                        className="
    px-4 py-1.5
    rounded-full
    bg-gradient-to-r
    from-[#14b8a6]
    via-[#0ea5a4]
    to-[#0f9f9c]
    text-white
    text-[12px]
    font-bold
    shadow-sm
    hover:scale-105
    transition-all duration-300">

                                        Open

                                    </button>

                                </div>

                            </div>

                        </button>

                    ))
                }

            </div>

        </div>

    )
}

export default Exercise