import React from 'react'

const Dashboard = () => {

    return (

        <div className="space-y-8">

            {/* HERO */}
            <div className="bg-white/30 backdrop-blur-xl rounded-[32px] border border-white/40 p-8 shadow-sm relative overflow-hidden">

                {/* Glow */}
                <div className="absolute top-[-40px] right-[-40px] w-[220px] h-[220px] bg-[#14b8a6]/10 rounded-full blur-3xl"></div>

                {/* CONTENT */}
                <div className="relative z-10">

                    <span className="inline-flex items-center bg-[var(--mint-soft)] text-[var(--teal-dark)] px-4 py-2 rounded-full text-[12px] font-semibold mb-5">

                        ✦ AI WELLNESS OVERVIEW

                    </span>

                    <h1 className="text-[42px] font-black text-[var(--text-dark)] leading-[1.1] mb-4">

                        Welcome Back, Rajat 👋

                    </h1>

                    <p className="text-[16px] text-[var(--text-gray)] leading-[1.9] max-w-3xl">

                        Monitor your physical health, mental wellness,
                        emergency alerts, fitness activities, and AI healthcare
                        insights — all in one smart dashboard.

                    </p>

                </div>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {
                    [
                        {
                            title: "Health Score",
                            value: "92%",
                            desc: "Excellent wellness performance"
                        },

                        {
                            title: "Daily Activity",
                            value: "8.2K",
                            desc: "Steps completed today"
                        },

                        {
                            title: "Water Intake",
                            value: "2.1L",
                            desc: "Hydration goal achieved"
                        }

                    ].map((item, index) => (

                        <div
                            key={index}
                            className="bg-white/30 backdrop-blur-xl rounded-[28px] border border-white/40 p-7 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                        >

                            <p className="text-[14px] text-[var(--text-gray)] mb-4">

                                {item.title}

                            </p>

                            <h2 className="text-[42px] font-black bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] bg-clip-text text-transparent mb-3">

                                {item.value}

                            </h2>

                            <p className="text-[14px] text-[var(--text-gray)] leading-[1.8]">

                                {item.desc}

                            </p>

                        </div>

                    ))
                }

            </div>

            {/* WELLNESS SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* LEFT */}
                <div className="bg-white/30 backdrop-blur-xl rounded-[30px] border border-white/40 p-8 shadow-sm">

                    <h2 className="text-[28px] font-bold text-[var(--text-dark)] mb-6">

                        Daily Wellness Progress

                    </h2>

                    <div className="space-y-6">

                        {
                            [
                                {
                                    label: "Mental Wellness",
                                    progress: "86%"
                                },

                                {
                                    label: "Physical Fitness",
                                    progress: "78%"
                                },

                                {
                                    label: "Sleep Quality",
                                    progress: "91%"
                                }

                            ].map((item, index) => (

                                <div key={index}>

                                    <div className="flex justify-between mb-2">

                                        <span className="text-[14px] font-medium text-[var(--text-dark)]">

                                            {item.label}

                                        </span>

                                        <span className="text-[14px] text-[var(--text-gray)]">

                                            {item.progress}

                                        </span>

                                    </div>

                                    <div className="w-full h-3 bg-white/40 rounded-full overflow-hidden">

                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c]"
                                            style={{ width: item.progress }}
                                        ></div>

                                    </div>

                                </div>

                            ))
                        }

                    </div>

                </div>

                {/* RIGHT */}
                <div className="bg-gradient-to-br from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] rounded-[30px] p-8 text-white shadow-xl relative overflow-hidden">

                    {/* Glow */}
                    <div className="absolute top-[-40px] right-[-40px] w-[180px] h-[180px] bg-white/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">

                        <span className="inline-flex bg-white/20 px-4 py-2 rounded-full text-[12px] font-semibold mb-5">

                            ✦ OXYGEN AI INSIGHT

                        </span>

                        <h2 className="text-[34px] font-black leading-[1.2] mb-5">

                            Your wellness performance improved by 12% this week.

                        </h2>

                        <p className="text-white/85 leading-[1.9] text-[15px] mb-8">

                            Keep maintaining healthy habits, hydration,
                            daily exercise, and mindfulness sessions for even better results.

                        </p>

                        <button className="bg-white text-[var(--teal-primary)] px-7 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">

                            View AI Report

                        </button>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Dashboard