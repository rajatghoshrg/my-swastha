import React, { useEffect, useState } from 'react'
import {
    Sparkles,
    ShieldAlert,
    Activity,
    Dumbbell
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

    const [currentText, setCurrentText] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentText((prev) => (prev + 1) % headings.length)

        }, 1000)

        return () => clearInterval(interval)

    }, [])

    return (

        <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-dark)]">

            {/* Main Container */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-5">

                {/* ================= NAVBAR ================= */}
                <nav className="w-full h-[74px] bg-[var(--mint-light)] rounded-full px-8 flex items-center justify-between border border-[var(--border-light)] shadow-sm">

                    {/* Logo */}
                    <h1 className="text-[28px] font-bold tracking-tight">

                        <span className="text-[var(--teal-primary)]">
                            My
                        </span>{" "}

                        <span className="text-[var(--teal-dark)]">
                            Swastha
                        </span>

                    </h1>

                    {/* Nav Links */}
                    <ul className="hidden md:flex items-center gap-12 text-[16px] text-[var(--text-gray)] font-medium">

                        <li className="text-[var(--teal-primary)] border-b-2 border-[var(--teal-primary)] pb-1 cursor-pointer">
                            Dashboard
                        </li>

                        <li className="hover:text-[var(--teal-primary)] transition-all cursor-pointer">
                            Hospitals
                        </li>

                        <li className="hover:text-[var(--teal-primary)] transition-all cursor-pointer">
                            Services
                        </li>

                        <li className="hover:text-[var(--teal-primary)] transition-all cursor-pointer">
                            Community
                        </li>

                    </ul>

                    {/* Buttons */}
                    <div className="flex items-center gap-4">

                        <button className="text-[15px] text-[var(--text-gray)] font-medium hover:text-[var(--teal-primary)] transition-all">
                            Sign In
                        </button>

                        <button className="bg-[var(--teal-primary)] hover:bg-[var(--teal-dark)] text-white px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all shadow-sm">
                            Sign Up
                        </button>

                    </div>

                </nav>

                {/* ================= HERO SECTION ================= */}
                <section className="relative mt-8 overflow-hidden rounded-[32px] border border-[var(--border-light)] bg-white">

                    {/* Background Image */}
                    <img
                        src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&auto=format&fit=crop"
                        alt="Healthcare"
                        className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-white/85"></div>

                    {/* Content */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-8 lg:px-16 py-16">

                        {/* LEFT SIDE */}
                        <div className="max-w-[620px]">

                            {/* Badge */}
                            <div className="inline-flex items-center bg-[var(--mint-soft)] text-[var(--teal-dark)] px-5 py-2 rounded-full text-xs font-semibold mb-6">
                                ✦ NEXT GEN WELLNESS
                            </div>

                            {/* Heading */}
                            <h1 className="text-[28px] lg:text-[40px] leading-[1.2] font-bold text-[var(--text-dark)] mb-5">

                                Your Personal AI Partner for

                                <span className="block text-[var(--teal-primary)] mt-2 transition-all duration-500">
                                    {headings[currentText]}
                                </span>

                            </h1>

                            {/* Description */}
                            <p className="text-[16px] leading-[1.9] text-[var(--text-gray)] mb-10 max-w-[580px]">

                                Empowering smarter living with AI-powered healthcare, real-time vitals monitoring, personalized wellness recommendations, mental health assistance, and instant emergency guidance — all inside My Swastha.

                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4">

                                <button className="bg-[var(--soft-orange)] hover:bg-[var(--soft-orange-dark)] text-[var(--text-dark)] px-8 py-3 rounded-full text-[15px] font-semibold shadow-sm transition-all">
                                    Get Started →
                                </button>

                                <button className="bg-white border border-[var(--border-light)] hover:border-[var(--teal-primary)] hover:text-[var(--teal-primary)] px-8 py-3 rounded-full text-[15px] font-semibold text-[var(--text-gray)] transition-all">
                                    View Demo
                                </button>

                            </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="flex justify-center lg:justify-end">

                            <div className="w-full max-w-[300px] bg-white rounded-[28px] p-6 shadow-lg border border-[var(--border-light)]">

                                <p className="text-xs uppercase tracking-wide text-[var(--text-gray)] mb-3">
                                    AI HEALTH STATUS
                                </p>

                                <h2 className="text-5xl font-bold text-[var(--teal-primary)] mb-4">
                                    98%
                                </h2>

                                <p className="text-[15px] leading-[1.8] text-[var(--text-gray)] mb-5">

                                    Your wellness score is excellent today.
                                    Maintain hydration and healthy routines.

                                </p>

                                {/* Progress */}
                                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-6">

                                    <div className="w-[98%] h-full bg-[var(--teal-primary)] rounded-full"></div>

                                </div>

                                {/* Stats */}
                                <div className="flex justify-between">

                                    <div>
                                        <h4 className="text-lg font-bold text-[var(--teal-primary)]">
                                            8h
                                        </h4>

                                        <p className="text-xs text-[var(--text-gray)]">
                                            Sleep
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-bold text-[var(--teal-primary)]">
                                            92%
                                        </h4>

                                        <p className="text-xs text-[var(--text-gray)]">
                                            Activity
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-bold text-[var(--teal-primary)]">
                                            2.1L
                                        </h4>

                                        <p className="text-xs text-[var(--text-gray)]">
                                            Water
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                {/* ================= SECTION TITLE ================= */}
                <section className="mt-16 text-center">

                    <h2 className="text-[34px] font-bold text-[var(--text-dark)] mb-3">
                        Integrated Health Ecosystem
                    </h2>

                    <p className="text-[15px] text-[var(--text-gray)] max-w-2xl mx-auto leading-[1.8]">
                        Four intelligent pillars powering a smarter, safer, and healthier future for you.
                    </p>

                </section>

                {/* ================= CARDS GRID ================= */}
                <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">

                    {/* AI CHAT */}
                    <div className="bg-white rounded-[24px] p-6 border border-[var(--border-light)] shadow-sm min-h-[260px] flex flex-col justify-between hover:shadow-md transition-all">

                        <div>

                            <div className="w-11 h-11 rounded-xl bg-[var(--mint-soft)] flex items-center justify-center mb-5">
                                <Sparkles size={20} className="text-[var(--teal-primary)]" />
                            </div>

                            <h3 className="text-[20px] font-bold text-[var(--text-dark)] mb-4">
                                OxyGen AI Chat
                            </h3>

                            <p className="text-[13px] leading-[1.9] text-[var(--text-gray)]">
                                Your trusted AI companion for mental wellness, support, and emotional care available 24/7.
                            </p>

                        </div>

                        <button className="w-full bg-[var(--teal-primary)] hover:bg-[var(--teal-dark)] text-white py-2.5 rounded-full text-[14px] font-semibold transition-all mt-6">
                            Start Consultation →
                        </button>

                    </div>

                    {/* EMERGENCY */}
                    <div className="bg-[#fff7f7] rounded-[24px] p-6 border border-red-100 shadow-sm min-h-[260px] flex flex-col justify-between hover:shadow-md transition-all">

                        <div>

                            <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center mb-5">
                                <ShieldAlert size={20} className="text-red-600" />
                            </div>

                            <h3 className="text-[20px] font-bold text-red-600 mb-4">
                                Emergency Guidance
                            </h3>

                            <p className="text-[13px] leading-[1.9] text-[var(--text-gray)]">
                                Smart emergency assistance with instant guidance, medical support, and emergency responder access.
                            </p>

                        </div>

                        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-full text-[14px] font-semibold transition-all mt-6">
                            Emergency →
                        </button>

                    </div>

                    {/* CALCULATOR */}
                    <div className="bg-white rounded-[24px] p-6 border border-[var(--border-light)] shadow-sm min-h-[260px] flex flex-col justify-between hover:shadow-md transition-all">

                        <div>

                            <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center mb-5">
                                <Activity size={20} className="text-orange-500" />
                            </div>

                            <h3 className="text-[20px] font-bold text-[var(--text-dark)] mb-4">
                                Precision Calculators
                            </h3>

                            <p className="text-[13px] leading-[1.9] text-[var(--text-gray)]">
                                BMI, BMR, calorie, and nutrition calculations based on health data.
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

                    {/* EXERCISE */}
                    <div className="bg-white rounded-[24px] p-6 border border-[var(--border-light)] shadow-sm min-h-[260px] flex flex-col justify-between hover:shadow-md transition-all">

                        <div>

                            <div className="w-11 h-11 rounded-xl bg-[var(--mint-soft)] flex items-center justify-center mb-5">
                                <Dumbbell size={20} className="text-[var(--teal-primary)]" />
                            </div>

                            <h3 className="text-[20px] font-bold text-[var(--text-dark)] mb-4">
                                Exercise With Me
                            </h3>

                            <p className="text-[13px] leading-[1.9] text-[var(--text-gray)]">
                                Personalized fitness, yoga, and meditation support for a healthier you.
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

                {/* ================= STATS ================= */}
                <section className="mt-24 bg-[var(--mint-soft)] rounded-[40px] py-16 px-10 border border-[var(--border-light)]">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

                        <div>

                            <h2 className="text-6xl font-bold text-[var(--teal-primary)] mb-3">
                                2.4M
                            </h2>

                            <p className="text-[var(--text-gray)] uppercase tracking-wide text-sm">
                                Active Users
                            </p>

                        </div>

                        <div>

                            <h2 className="text-6xl font-bold text-[var(--teal-primary)] mb-3">
                                99%
                            </h2>

                            <p className="text-[var(--text-gray)] uppercase tracking-wide text-sm">
                                Accuracy Rating
                            </p>

                        </div>

                        <div>

                            <h2 className="text-6xl font-bold text-[var(--teal-primary)] mb-3">
                                24/7
                            </h2>

                            <p className="text-[var(--text-gray)] uppercase tracking-wide text-sm">
                                Health Support
                            </p>

                        </div>

                    </div>

                </section>

                {/* ================= FOOTER ================= */}
                <footer className="flex flex-col md:flex-row items-center justify-between py-12 mt-12 text-[var(--text-gray)] gap-6">

                    <div>

                        <h3 className="text-2xl font-bold text-[var(--teal-primary)] mb-2">
                            My Swastha
                        </h3>

                        <p>
                            © 2026 Healthtech Innovations Pvt Ltd. All rights reserved.
                        </p>

                    </div>

                    <div className="flex gap-6 flex-wrap justify-center">

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer">
                            Privacy Policy
                        </span>

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer">
                            Terms of Service
                        </span>

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer">
                            Contact Support
                        </span>

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer">
                            Health Disclaimer
                        </span>

                    </div>

                </footer>

            </div>
        </div>
    )
}

export default Home