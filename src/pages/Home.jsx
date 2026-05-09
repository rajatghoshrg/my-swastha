import React, { useEffect, useState } from 'react'

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
                <section id="home" className="relative mt-8 overflow-hidden rounded-[32px] border border-[var(--border-light)] bg-white">

                    {/* Background Image */}
                    <img
                        src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&auto=format&fit=crop"
                        alt="Healthcare"
                        className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-white/85"></div>

                    {/* Floating Gradient Blobs */}
                    <div className="absolute top-[-80px] left-[-80px] w-[260px] h-[260px] bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

                    <div className="absolute bottom-[-100px] right-[-60px] w-[280px] h-[280px] bg-teal-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

                    {/* Content */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-8 lg:px-16 py-16">

                        {/* LEFT SIDE */}
                        <div className="max-w-[620px]">

                            {/* Badge */}
                            <div className="inline-flex items-center bg-[var(--mint-soft)] text-[var(--teal-dark)] px-5 py-2 rounded-full text-xs font-semibold mb-6">
                                ✦ NEXT GEN WELLNESS
                            </div>

                            {/* Heading */}
                            <h1 className="text-[36px] lg:text-[44px] leading-[1.2] font-bold text-[var(--text-dark)] mb-5">

                                Your Personal Partner for

                                <span className="block mt-2 bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] bg-clip-text text-transparent transition-all duration-500">
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
                        <div className="flex justify-center lg:justify-end relative">

                            {/* Glow Effect */}
                            <div className="absolute w-[360px] h-[360px] bg-[var(--teal-primary)]/20 blur-3xl rounded-full animate-pulse"></div>

                            {/* Video Container */}
                            <div className="relative w-full max-w-[380px] h-[500px] rounded-[36px] overflow-hidden border border-white/40 shadow-2xl backdrop-blur-xl bg-white/20 animate-[float_5s_ease-in-out_infinite]">

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 z-10"></div>

                                {/* AI Video */}
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/videos/yoga_ai.mp4" type="video/mp4" />
                                </video>

                                {/* Floating Badge */}
                                <div className="absolute top-5 left-5 z-20 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-lg">

                                    <p className="text-[12px] font-semibold text-[var(--teal-dark)]">
                                        ✦ AI Wellness Experience
                                    </p>

                                </div>

                                {/* Bottom Text */}
                                <div className="absolute bottom-6 left-6 z-20">

                                    <h3 className="text-white text-[26px] font-bold mb-2">
                                        Mind & Body Wellness
                                    </h3>

                                    <p className="text-white/80 text-[14px] max-w-[260px] leading-[1.7]">
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
                <section id="testimonials" className="mt-24">

                    {/* HEADING */}
                    <div className="text-center mb-12">

                        <span className="inline-block bg-[var(--mint-soft)] text-[var(--teal-dark)] px-5 py-2 rounded-full text-[12px] font-semibold mb-5">
                            ✦ TESTIMONIALS & IMPACT
                        </span>

                        <h2 className="text-[34px] font-bold text-[var(--text-dark)] mb-4">
                            Trusted Healthcare Experience
                        </h2>

                        <p className="text-[15px] text-[var(--text-gray)] max-w-3xl mx-auto leading-[1.9]">

                            Thousands of users rely on My Swastha for AI-powered wellness,
                            emergency assistance, personalized fitness, and smarter healthcare support.

                        </p>

                    </div>

                    {/* MAIN SECTION */}
                    <div className="bg-gradient-to-br from-[var(--mint-soft)] to-[#eef8f5] rounded-[40px] border border-[var(--border-light)] p-10 shadow-sm overflow-hidden relative">

                        {/* Decorative Blur */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--mint-light)] rounded-full blur-3xl opacity-40"></div>

                        {/* STATS */}
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">

                            <div className="bg-white/60 backdrop-blur-sm rounded-[24px] py-8 border border-white/40 shadow-sm">

                                <h2 className="text-5xl font-bold text-[var(--teal-primary)] mb-2">
                                    2.4M
                                </h2>

                                <p className="text-[13px] uppercase tracking-wide text-[var(--text-gray)]">
                                    Active Users
                                </p>

                            </div>

                            <div className="bg-white/60 backdrop-blur-sm rounded-[24px] py-8 border border-white/40 shadow-sm">

                                <h2 className="text-5xl font-bold text-[var(--teal-primary)] mb-2">
                                    99%
                                </h2>

                                <p className="text-[13px] uppercase tracking-wide text-[var(--text-gray)]">
                                    Accuracy Rating
                                </p>

                            </div>

                            <div className="bg-white/60 backdrop-blur-sm rounded-[24px] py-8 border border-white/40 shadow-sm">

                                <h2 className="text-5xl font-bold text-[var(--teal-primary)] mb-2">
                                    24/7
                                </h2>

                                <p className="text-[13px] uppercase tracking-wide text-[var(--text-gray)]">
                                    Health Support
                                </p>

                            </div>

                        </div>

                        {/* TESTIMONIAL CARDS */}
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">

                            {/* CARD 1 */}
                            <div className="bg-white/75 backdrop-blur-md rounded-[30px] p-7 border border-white/50 shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                                {/* TOP */}
                                <div className="flex items-center justify-between mb-6">

                                    <div className="flex items-center gap-4">

                                        <img
                                            src="https://randomuser.me/api/portraits/women/44.jpg"
                                            alt="user"
                                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                                        />

                                        <div>

                                            <h4 className="text-[17px] font-semibold text-[var(--text-dark)]">
                                                Priya Sharma
                                            </h4>

                                            <p className="text-[12px] text-[var(--text-gray)]">
                                                Fitness & Wellness User
                                            </p>

                                        </div>

                                    </div>

                                    <span className="text-yellow-500 text-sm">
                                        ★★★★★
                                    </span>

                                </div>

                                {/* REVIEW */}
                                <p className="text-[14px] leading-[2] text-[var(--text-gray)] mb-6">

                                    “My Swastha completely transformed how I manage my health.
                                    The AI wellness guidance and emergency support make daily care stress-free.”

                                </p>

                                {/* BOTTOM */}
                                <div className="flex items-center justify-between text-[12px] text-[var(--text-gray)]">

                                    <span>Verified User</span>

                                    <span className="text-[var(--teal-primary)] font-medium">
                                        Mental Wellness
                                    </span>

                                </div>

                            </div>

                            {/* CARD 2 */}
                            <div className="bg-white/75 backdrop-blur-md rounded-[30px] p-7 border border-white/50 shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                                <div className="flex items-center justify-between mb-6">

                                    <div className="flex items-center gap-4">

                                        <img
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                            alt="user"
                                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                                        />

                                        <div>

                                            <h4 className="text-[17px] font-semibold text-[var(--text-dark)]">
                                                Rahul Verma
                                            </h4>

                                            <p className="text-[12px] text-[var(--text-gray)]">
                                                Fitness Tracking User
                                            </p>

                                        </div>

                                    </div>

                                    <span className="text-yellow-500 text-sm">
                                        ★★★★★
                                    </span>

                                </div>

                                <p className="text-[14px] leading-[2] text-[var(--text-gray)] mb-6">

                                    “The personalized exercise plans and progress tracking helped
                                    me stay consistent with my fitness and wellness goals.”

                                </p>

                                <div className="flex items-center justify-between text-[12px] text-[var(--text-gray)]">

                                    <span>Verified User</span>

                                    <span className="text-orange-500 font-medium">
                                        Fitness & Yoga
                                    </span>

                                </div>

                            </div>

                            {/* CARD 3 */}
                            <div className="bg-white/75 backdrop-blur-md rounded-[30px] p-7 border border-white/50 shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                                <div className="flex items-center justify-between mb-6">

                                    <div className="flex items-center gap-4">

                                        <img
                                            src="https://randomuser.me/api/portraits/women/68.jpg"
                                            alt="user"
                                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                                        />

                                        <div>

                                            <h4 className="text-[17px] font-semibold text-[var(--text-dark)]">
                                                Ananya Roy
                                            </h4>

                                            <p className="text-[12px] text-[var(--text-gray)]">
                                                Emergency Support User
                                            </p>

                                        </div>

                                    </div>

                                    <span className="text-yellow-500 text-sm">
                                        ★★★★★
                                    </span>

                                </div>

                                <p className="text-[14px] leading-[2] text-[var(--text-gray)] mb-6">

                                    “The emergency guidance feature gives me confidence and peace
                                    of mind. Healthcare support now feels accessible anytime.”

                                </p>

                                <div className="flex items-center justify-between text-[12px] text-[var(--text-gray)]">

                                    <span>Verified User</span>

                                    <span className="text-red-500 font-medium">
                                        Emergency Care
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </div >

        </div >
    )
}

export default Home