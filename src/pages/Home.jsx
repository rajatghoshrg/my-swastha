import React, { useEffect, useState } from 'react'

import { useNavigate } from "react-router-dom";

import {
    Sparkles,
    ShieldAlert,
    Activity,
    Dumbbell,
    HeartPulse
} from 'lucide-react'

const Home = () => {

    const headings = [
        "Smart Wellness",
        "Healthier Living",
        "Safer Living",
        "Complete Care",
        "Daily Wellness",
        "Mental Strength"
    ]

    const navigate = useNavigate();

    const [currentText, setCurrentText] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentText((prev) => (prev + 1) % headings.length)

        }, 1000)

        return () => clearInterval(interval)

    }, [])

    return (

        <div className="min-h-screen text-[var(--text-dark)] animate-fadeIn">

            {/* Main Container */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-5">

                {/* ================= HERO SECTION ================= */}
                <section
                    id="home"
                    className="relative mt-6 overflow-hidden rounded-[28px] sm:rounded-[32px] border border-[var(--border-light)] bg-white"
                >

                    {/* Background Image */}
                    <img
                        src="/images/hero_bg_banner.jpg"
                        alt="Healthcare"
                        className="absolute inset-0 h-full w-full object-cover opacity-[0.35]"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-white/88"></div>

                    {/* Floating Gradient Blobs */}
                    <div className="absolute top-[-80px] left-[-80px] w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

                    <div className="absolute bottom-[-100px] right-[-60px] w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] bg-teal-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

                    {/* Content */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 px-5 sm:px-8 lg:px-16 py-12 sm:py-16">

                        {/* LEFT SIDE */}
                        <div className="max-w-[620px]">

                            {/* Badge */}
                            <div className="relative inline-flex items-center overflow-hidden bg-gradient-to-r from-[#d8fff7] via-[#c8f7f0] to-[#e4fffb] text-[var(--teal-dark)] px-5 sm:px-6 py-2 rounded-full text-[9px] sm:text-xs font-bold mb-3 sm:mb-4 border border-white/60 shadow-[0_6px_20px_rgba(20,184,166,0.18)] backdrop-blur-xl">

                                {/* Gloss Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-transparent opacity-70"></div>

                                {/* Shine */}
                                <div className="absolute top-0 left-[-40%] w-[40%] h-full bg-white/40 blur-md rotate-12 animate-[shine_4s_linear_infinite]"></div>

                                {/* Text */}
                                <span className="relative z-10 tracking-[1px]">

                                    ✦ NEXT GEN WELLNESS

                                </span>

                            </div>

                            {/* Heading */}
                            <h1 className="text-[26px] sm:text-[38px] lg:text-[56px] leading-[1.20] font-black tracking-[-1.5px] text-[var(--text-dark)] mb-5">
                                Your Personal Partner for

                                <span className="block mt-2 bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] bg-clip-text text-transparent transition-all duration-500">

                                    {headings[currentText]}

                                </span>

                            </h1>

                            {/* Description */}
                            <p className="text-[15px] sm:text-[18px] leading-[1.9] text-[var(--text-gray)] mb-6 sm:mb-8 max-w-[580px]">
                                AI-powered healthcare, wellness guidance, mental health support, and emergency care — all in one place.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

                                <button
                                    onClick={() => navigate("/dashboard")}
                                    className="w-full sm:w-auto bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(20,184,166,0.25)] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-all duration-300"
                                >

                                    Get Started →

                                </button>

                                <button className="w-full sm:w-auto bg-white border border-[var(--border-light)] hover:border-[var(--teal-primary)] hover:text-[var(--teal-primary)] px-8 py-4 rounded-full text-[16px] font-semibold text-[var(--text-gray)] transition-all">

                                    View Demo

                                </button>

                            </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="flex justify-center lg:justify-end relative mt-2 lg:mt-0">

                            {/* Glow Effect */}
                            <div className="absolute w-[240px] sm:w-[360px] h-[240px] sm:h-[360px] bg-[var(--teal-primary)]/20 blur-3xl rounded-full animate-pulse"></div>

                            {/* Video Container */}
                            <div className="relative w-full max-w-[560px] lg:max-w-[700px] aspect-video rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/40 shadow-2xl backdrop-blur-xl bg-white/20 animate-[float_5s_ease-in-out_infinite]">

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-white/10 z-10"></div>

                                {/* Video */}
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="auto"
                                    className="w-full h-full object-cover"
                                >

                                    <source
                                        src="/videos/herosection_video.mp4"
                                        type="video/mp4"
                                    />

                                </video>

                                {/* Floating Badge */}
                                <div className="absolute top-3 sm:top-5 left-3 sm:left-5 z-20 bg-white/80 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/40 shadow-lg">

                                    <p className="text-[10px] sm:text-[12px] font-semibold text-[var(--teal-dark)]">

                                        ✦ AI Wellness Experience

                                    </p>

                                </div>

                                {/* Bottom Content */}
                                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20">

                                    <h3 className="text-white text-[18px] sm:text-[30px] font-bold mb-1 sm:mb-2">

                                        Mind & Body Wellness

                                    </h3>

                                    <p className="text-white/85 text-[11px] sm:text-[14px] max-w-[220px] sm:max-w-[320px] leading-[1.6] sm:leading-[1.7]">

                                        Personalized AI-guided yoga, meditation, and wellness support for healthier living.

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* ================= SECTION TITLE ================= */}
                <section id="services" className="mt-16 text-center">

                    <h2 className="text-[34px] font-bold text-[var(--text-dark)] mb-3">
                        Integrated Health Ecosystem
                    </h2>

                    <p className="text-[15px] text-[var(--text-gray)] max-w-2xl mx-auto leading-[1.8]">
                        Five intelligent pillars powering a smarter, safer, and healthier future for you.
                    </p>

                </section>

                {/* ================= CARDS GRID ================= */}
                <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 mt-12">

                    {/* AI CHAT */}
                    <div className="bg-white rounded-[24px] p-6 border border-[var(--border-light)] shadow-sm min-h-[270px] flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                        <div>

                            <div className="w-11 h-11 rounded-xl bg-[var(--mint-soft)] flex items-center justify-center mb-5">
                                <Sparkles size={20} className="text-[var(--teal-primary)]" />
                            </div>

                            <h3 className="text-[20px] font-bold text-[var(--text-dark)] mb-4">
                                OxyGen AI
                            </h3>

                            <p className="text-[13px] leading-[1.9] text-[var(--text-gray)]">
                                Your trusted AI companion for mental wellness, emotional support,
                                and healthcare guidance available 24/7.
                            </p>

                        </div>

                        <button className="w-full bg-[var(--teal-primary)] hover:bg-[var(--teal-dark)] text-white py-2.5 rounded-full text-[14px] font-semibold transition-all mt-6">
                            Start Consultation →
                        </button>

                    </div>

                    {/* EMERGENCY */}
                    <div className="bg-[#fff7f7] rounded-[24px] p-6 border border-red-100 shadow-sm min-h-[270px] flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                        <div>

                            <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center mb-5">
                                <ShieldAlert size={20} className="text-red-600" />
                            </div>

                            <h3 className="text-[20px] font-bold text-red-600 mb-4">
                                Emergency Guidance
                            </h3>

                            <p className="text-[13px] leading-[1.9] text-[var(--text-gray)]">
                                Smart emergency assistance with instant medical guidance
                                and responder support in critical situations.
                            </p>

                        </div>

                        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-full text-[14px] font-semibold transition-all mt-6">
                            Emergency →
                        </button>

                    </div>

                    {/* CALCULATORS */}
                    <div className="bg-white rounded-[24px] p-6 border border-[var(--border-light)] shadow-sm min-h-[270px] flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                        <div>

                            <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center mb-5">
                                <Activity size={20} className="text-orange-500" />
                            </div>

                            <h3 className="text-[20px] font-bold text-[var(--text-dark)] mb-4">
                                Precision Calculators
                            </h3>

                            <p className="text-[13px] leading-[1.9] text-[var(--text-gray)]">
                                BMI, BMR, calorie, hydration, and nutrition calculations
                                based on your wellness data.
                            </p>

                            <div className="flex gap-2 flex-wrap mt-5">

                                <span className="bg-[var(--mint-light)] px-3 py-1 rounded-full text-[11px] text-[var(--text-gray)]">
                                    BMI
                                </span>

                                <span className="bg-[var(--mint-light)] px-3 py-1 rounded-full text-[11px] text-[var(--text-gray)]">
                                    BMR
                                </span>

                                <span className="bg-[var(--mint-light)] px-3 py-1 rounded-full text-[11px] text-[var(--text-gray)]">
                                    Calories
                                </span>

                            </div>

                        </div>

                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-full text-[14px] font-semibold transition-all mt-6">
                            Open Calculators →
                        </button>

                    </div>

                    {/* DAILY CHECKUP */}
                    <div className="bg-[#f5fbff] rounded-[24px] p-6 border border-blue-100 shadow-sm min-h-[270px] flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                        <div>

                            <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                                <HeartPulse size={20} className="text-blue-600" />
                            </div>

                            <h3 className="text-[20px] font-bold text-blue-600 mb-4">
                                Daily Checkup
                            </h3>

                            <p className="text-[13px] leading-[1.9] text-[var(--text-gray)]">
                                Answer quick daily health check-up questions and receive personalized AI-powered wellness insights.
                            </p>

                            <div className="mt-6">

                                <div className="flex justify-between mb-2 text-[11px] font-medium text-[var(--text-gray)]">
                                    <span>Today's Wellness</span>
                                    <span>91%</span>
                                </div>

                                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="w-[91%] h-full bg-blue-500 rounded-full"></div>
                                </div>

                            </div>

                        </div>

                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-full text-[14px] font-semibold transition-all mt-6">
                            Start Checkup →
                        </button>

                    </div>

                    {/* EXERCISE */}
                    <div className="bg-white rounded-[24px] p-6 border border-[var(--border-light)] shadow-sm min-h-[270px] flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                        <div>

                            <div className="w-11 h-11 rounded-xl bg-[var(--mint-soft)] flex items-center justify-center mb-5">
                                <Dumbbell size={20} className="text-[var(--teal-primary)]" />
                            </div>

                            <h3 className="text-[20px] font-bold text-[var(--text-dark)] mb-4">
                                Exercise With Me
                            </h3>

                            <p className="text-[13px] leading-[1.9] text-[var(--text-gray)]">
                                Personalized fitness, yoga, and meditation support
                                for a healthier lifestyle.
                            </p>

                            <div className="mt-6">

                                <div className="flex justify-between mb-2 text-[11px] font-medium text-[var(--text-gray)]">
                                    <span>Weekly Goal</span>
                                    <span>86%</span>
                                </div>

                                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="w-[86%] h-full bg-[var(--teal-primary)] rounded-full"></div>
                                </div>

                            </div>

                        </div>

                        <button className="w-full bg-[var(--teal-primary)] hover:bg-[var(--teal-dark)] text-white py-2.5 rounded-full text-[14px] font-semibold transition-all mt-6">
                            Start Fitness →
                        </button>

                    </div>

                </section>

                {/* ================= TESTIMONIAL SECTION ================= */}
                <section id="testimonials" className="mt-20 sm:mt-24">

                    {/* HEADING */}
                    <div className="text-center mb-10 sm:mb-14 px-4">

                        <span className="inline-block bg-[var(--mint-soft)] text-[var(--teal-dark)] px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-[12px] font-semibold mb-4 sm:mb-5">

                            ✦ TESTIMONIALS & IMPACT

                        </span>

                        <h2 className="text-[28px] sm:text-[40px] font-black text-[var(--text-dark)] mb-4">

                            Trusted Healthcare Experience

                        </h2>

                        <p className="text-[14px] sm:text-[16px] text-[var(--text-gray)] max-w-3xl mx-auto leading-[1.9]">

                            Thousands rely on My Swastha for smarter wellness, fitness guidance,
                            mental health support, and instant healthcare assistance.

                        </p>

                    </div>

                    {/* MAIN BOX */}
                    <div className="bg-gradient-to-br from-[var(--mint-soft)] to-[#eef8f5] rounded-[28px] sm:rounded-[40px] border border-[var(--border-light)] p-5 sm:p-10 shadow-sm overflow-hidden relative">

                        {/* Blur */}
                        <div className="absolute top-0 right-0 w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-[var(--mint-light)] rounded-full blur-3xl opacity-40"></div>

                        {/* STATS */}
                        <div className="relative z-10 grid grid-cols-3 gap-3 sm:gap-8 mb-10 sm:mb-16">

                            {/* CARD */}
                            {
                                [
                                    { number: "2.4M", label: "Active Users" },
                                    { number: "99%", label: "Accuracy Rating" },
                                    { number: "24/7", label: "Health Support" }
                                ].map((item, index) => (

                                    <div
                                        key={index}
                                        className="group relative overflow-hidden bg-white/70 backdrop-blur-xl rounded-[18px] sm:rounded-[30px] p-3 sm:p-8 border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                                    >

                                        {/* Glow */}
                                        <div className="absolute top-[-20px] right-[-20px] w-[60px] sm:w-[120px] h-[60px] sm:h-[120px] bg-[#14b8a6]/20 blur-3xl rounded-full"></div>

                                        {/* Number */}
                                        <h2 className="text-2xl sm:text-6xl font-black bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] bg-clip-text text-transparent mb-1 sm:mb-3">

                                            {item.number}

                                        </h2>

                                        {/* Label */}
                                        <p className="text-[7px] sm:text-[13px] uppercase tracking-[1px] sm:tracking-[2px] text-[var(--text-gray)] font-medium mb-2 sm:mb-4 leading-[1.4]">

                                            {item.label}

                                        </p>

                                        {/* Line */}
                                        <div className="w-6 sm:w-14 h-[2px] sm:h-[4px] rounded-full bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c]"></div>

                                    </div>

                                ))
                            }

                        </div>

                        {/* TESTIMONIALS */}
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">

                            {
                                [
                                    {
                                        img: "https://randomuser.me/api/portraits/women/44.jpg",
                                        name: "Indu Bala Ghosh",
                                        role: "Mental Wellness User",
                                        review: "My Swastha transformed how I manage my wellness. The AI support feels personal and reliable.",
                                        tag: "Mental Wellness",
                                        color: "text-[var(--teal-primary)]"
                                    },

                                    {
                                        img: "https://randomuser.me/api/portraits/men/32.jpg",
                                        name: "Bubbu Ghosh",
                                        role: "Fitness Tracking User",
                                        review: "The personalized fitness guidance helped me stay consistent and improve my daily habits.",
                                        tag: "Fitness & Yoga",
                                        color: "text-orange-500"
                                    },

                                    {
                                        img: "https://randomuser.me/api/portraits/women/68.jpg",
                                        name: "Puchu Pal",
                                        role: "Emergency Support User",
                                        review: "Emergency guidance and instant healthcare support give me peace of mind every day.",
                                        tag: "Emergency Care",
                                        color: "text-red-500"
                                    }
                                ].map((user, index) => (

                                    <div
                                        key={index}
                                        className="bg-white/75 backdrop-blur-md rounded-[24px] sm:rounded-[30px] p-5 sm:p-7 border border-white/50 shadow-md hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                                    >

                                        {/* TOP */}
                                        <div className="flex items-center justify-between mb-5">

                                            <div className="flex items-center gap-3">

                                                <img
                                                    src={user.img}
                                                    alt={user.name}
                                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow-sm"
                                                />

                                                <div>

                                                    <h4 className="text-[15px] sm:text-[17px] font-semibold text-[var(--text-dark)]">

                                                        {user.name}

                                                    </h4>

                                                    <p className="text-[11px] sm:text-[12px] text-[var(--text-gray)]">

                                                        {user.role}

                                                    </p>

                                                </div>

                                            </div>

                                            <span className="text-yellow-500 text-xs sm:text-sm">

                                                ★★★★★

                                            </span>

                                        </div>

                                        {/* REVIEW */}
                                        <p className="text-[13px] sm:text-[14px] leading-[1.9] sm:leading-[2] text-[var(--text-gray)] mb-5 sm:mb-6">

                                            “{user.review}”

                                        </p>

                                        {/* FOOTER */}
                                        <div className="flex items-center justify-between text-[11px] sm:text-[12px] text-[var(--text-gray)]">

                                            <span>Verified User</span>

                                            <span className={`${user.color} font-medium`}>

                                                {user.tag}

                                            </span>

                                        </div>

                                    </div>

                                ))
                            }

                        </div>

                    </div>

                </section>

            </div >

        </div >
    )
}

export default Home