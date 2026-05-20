import React from 'react'

import {
    RiHeartPulseFill,
    RiMentalHealthFill,
    RiCapsuleFill,
    RiBodyScanLine,
    RiArrowRightUpLine,
    RiPulseFill,
    RiCalendarCheckFill,
    RiShieldCrossFill
} from "react-icons/ri";

const Checkup = () => {

    const checkups = [

        {
            title: "BMI Check",
            desc: "Track your body mass index and maintain healthy fitness goals.",
            icon: <RiBodyScanLine />,
            color: "from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c]"
        },

        {
            title: "Heart Health",
            desc: "Monitor pulse, heart condition, and wellness performance.",
            icon: <RiHeartPulseFill />,
            color: "from-[#ff8a8a] via-[#ff6b6b] to-[#ff5252]"
        },

        {
            title: "Mental Wellness",
            desc: "Analyze stress, mood balance, and emotional health.",
            icon: <RiMentalHealthFill />,
            color: "from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]"
        },

        {
            title: "Daily Nutrition",
            desc: "Get AI-powered nutrition and healthy lifestyle insights.",
            icon: <RiCapsuleFill />,
            color: "from-[#f59e0b] via-[#f97316] to-[#ea580c]"
        }

    ]

    return (

        <div className="
        relative z-10
        pt-[60px]
        lg:pt-[75px]
        pb-10
        px-3 sm:px-5 lg:px-0
        ">

            {/* TOP SECTION */}
            <div className="mb-8">

                <div className="
                inline-flex items-center gap-2
                px-3 py-1.5 rounded-full
                bg-[#14b8a6]/10
                border border-[#14b8a6]/10
                text-[#0f9f9c]
                font-semibold text-[11px] sm:text-[12px]">

                    ✦ AI HEALTH CHECKUP

                </div>

                <h1 className="
                mt-4
                text-[28px] sm:text-[34px]
                leading-[1.1]
                tracking-[-1px]
                font-black
                text-[var(--text-dark)]">

                    Smart Health

                    <span className="
                    bg-gradient-to-r
                    from-[#14b8a6]
                    via-[#0ea5a4]
                    to-[#0f9f9c]
                    bg-clip-text
                    text-transparent">

                        {" "}Checkups

                    </span>

                </h1>

                <p className="
                mt-4
                max-w-[650px]
                text-[13px] sm:text-[15px]
                leading-[1.8]
                text-[var(--text-gray)]">

                    Stay aware of your body, mind, and wellness with AI-powered health insights.

                </p>

            </div>

            {/* HEALTH OVERVIEW */}
            <div className="
            rounded-[24px]
            overflow-hidden
            bg-gradient-to-r
            from-[#14b8a6]
            via-[#0ea5a4]
            to-[#0f9f9c]
            p-6 sm:p-8
            text-white
            shadow-[0_15px_50px_rgba(15,157,148,0.20)]">

                <div className="
                flex flex-col lg:flex-row
                items-start lg:items-center
                justify-between gap-6">

                    <div>

                        <div className="flex items-center gap-3">

                            <div className="
                            w-14 h-14
                            rounded-2xl
                            bg-white/20
                            flex items-center justify-center
                            backdrop-blur-xl">

                                <RiPulseFill className="text-[28px]" />

                            </div>

                            <div>

                                <p className="text-white/80 text-[13px] font-semibold">

                                    HEALTH SCORE

                                </p>

                                <h2 className="text-[34px] font-black">

                                    92%

                                </h2>

                            </div>

                        </div>

                        <p className="
                        mt-4
                        max-w-[500px]
                        text-[14px]
                        leading-[1.8]
                        text-white/90">

                            Your overall wellness performance is excellent this week.
                            Keep maintaining healthy habits and daily routines.

                        </p>

                    </div>

                    <button className="
                    px-5 py-3
                    rounded-full
                    bg-white
                    text-[#0f9f9c]
                    font-bold
                    text-[13px]
                    shadow-lg
                    hover:scale-105
                    transition-all duration-300">

                        Start Full Checkup

                    </button>

                </div>

            </div>

            {/* CHECKUP CARDS */}
            <div className="
            mt-8
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4">

                {
                    checkups.map((item, index) => (

                        <div
                            key={index}
                            className="
                            group
                            rounded-[22px]
                            bg-gradient-to-br
                            from-white/60
                            via-white/40
                            to-white/20
                            backdrop-blur-2xl
                            border border-white/30
                            shadow-[0_8px_30px_rgba(15,157,148,0.06)]
                            p-4
                            hover:scale-[1.01]
                            transition-all duration-300">

                            <div className="
                            flex items-start justify-between">

                                <div className={`
                                w-12 h-12
                                rounded-2xl
                                bg-gradient-to-r
                                ${item.color}
                                flex items-center justify-center
                                text-white
                                shadow-lg`}>

                                    <span className="text-[22px]">

                                        {item.icon}

                                    </span>

                                </div>

                                <button className="
                                w-9 h-9
                                rounded-full
                                bg-[#14b8a6]/10
                                text-[#0f9f9c]
                                flex items-center justify-center
                                group-hover:rotate-45
                                transition-all duration-300">

                                    <RiArrowRightUpLine className="text-[18px]" />

                                </button>

                            </div>

                            <h2 className="
                            mt-4
                            text-[18px]
                            font-black
                            text-[var(--text-dark)]">

                                {item.title}

                            </h2>

                            <p className="
                            mt-2
                            text-[13px]
                            leading-[1.7]
                            text-[var(--text-gray)]">

                                {item.desc}

                            </p>

                            <button className="
                            mt-5
                            px-4 py-2
                            rounded-full
                            bg-gradient-to-r
                            from-[#14b8a6]
                            via-[#0ea5a4]
                            to-[#0f9f9c]
                            text-white
                            text-[12px]
                            font-bold
                            shadow-md
                            hover:scale-105
                            transition-all duration-300">

                                Checkup

                            </button>

                        </div>

                    ))
                }

            </div>

            {/* RECENT CHECKUPS */}
            <div className="mt-8">

                <div className="
                flex items-center justify-between
                mb-5">

                    <div>

                        <h2 className="
                        text-[22px]
                        font-black
                        text-[var(--text-dark)]">

                            Recent Reports

                        </h2>

                        <p className="
                        mt-1
                        text-[13px]
                        text-[var(--text-gray)]">

                            Your latest AI health summaries and wellness reports.

                        </p>

                    </div>

                </div>

                <div className="
                grid
                grid-cols-1
                lg:grid-cols-3
                gap-4">

                    {
                        [
                            "Weekly Wellness Report",
                            "Heart Health Summary",
                            "Mental Wellness Analysis"
                        ].map((report, index) => (

                            <div
                                key={index}
                                className="
                                rounded-[22px]
                                bg-gradient-to-br
                                from-white/60
                                via-white/40
                                to-white/20
                                backdrop-blur-2xl
                                border border-white/30
                                p-4
                                shadow-[0_8px_30px_rgba(15,157,148,0.06)]">

                                <div className="
                                w-11 h-11
                                rounded-2xl
                                bg-[#14b8a6]/10
                                text-[#0f9f9c]
                                flex items-center justify-center">

                                    {
                                        index === 0
                                            ? <RiCalendarCheckFill className="text-[22px]" />
                                            : index === 1
                                                ? <RiHeartPulseFill className="text-[22px]" />
                                                : <RiShieldCrossFill className="text-[22px]" />
                                    }

                                </div>

                                <h3 className="
                                mt-4
                                text-[17px]
                                font-black
                                text-[var(--text-dark)]">

                                    {report}

                                </h3>

                                <p className="
                                mt-2
                                text-[12px]
                                leading-[1.7]
                                text-[var(--text-gray)]">

                                   wellness insights based on your latest health activity.

                                </p>

                                <button className="
                                mt-4
                                text-[#0f9f9c]
                                text-[12px]
                                font-bold">

                                    Report →

                                </button>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>

    )
}

export default Checkup