import React from 'react'

import {
    FaGlobe,
    FaInstagram,
    FaDiscord,
    FaYoutube
} from "react-icons/fa";

const Footer = () => {
    return (

        <footer id="community" className="mt-20 bg-[#eef6f4] rounded-[32px] border border-[var(--border-light)] px-8 lg:px-14 py-10">

            {/* TOP SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* BRAND */}
                <div>

                    <h2 className="text-[28px] font-bold mb-4">

                        <span className="bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] bg-clip-text text-transparent">

                            My Swastha

                        </span>

                    </h2>

                    <p className="text-[14px] leading-[1.8] text-[var(--text-gray)] mb-5 max-w-[280px]">
                        Personalized AI wellness guidance for mental balance, physical fitness, healthy routines, and smarter living.
                    </p>

                    {/* SOCIALS */}
                    <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 hover:text-[var(--teal-primary)] transition-all">
                            <FaGlobe size={16} />
                        </div>

                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 hover:text-pink-500 transition-all">
                            <FaInstagram size={16} />
                        </div>

                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 hover:text-indigo-500 transition-all">
                            <FaDiscord size={16} />
                        </div>

                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 hover:text-red-500 transition-all">
                            <FaYoutube size={16} />
                        </div>

                    </div>

                </div>

                {/* SERVICES */}
                <div>

                    <h3 className="text-[16px] font-semibold text-[var(--text-dark)] mb-5">
                        Services
                    </h3>

                    <div className="flex flex-col gap-3 text-[14px] text-[var(--text-gray)]">

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer transition-all">
                            Oxygen AI
                        </span>

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer transition-all">
                            Emergency Guidance
                        </span>

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer transition-all">
                            Health Calculators
                        </span>

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer transition-all">
                            Daily Checkup
                        </span>

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer transition-all">
                            Exercise With Me
                        </span>

                    </div>

                </div>

                {/* COMPANY */}
                <div>

                    <h3 className="text-[16px] font-semibold text-[var(--text-dark)] mb-5">
                        Company
                    </h3>

                    <div className="flex flex-col gap-3 text-[14px] text-[var(--text-gray)]">

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer transition-all">
                            About Us
                        </span>

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer transition-all">
                            Community
                        </span>

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer transition-all">
                            Careers
                        </span>

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer transition-all">
                            Pricing
                        </span>

                    </div>

                </div>

                {/* SUPPORT */}
                <div>

                    <h3 className="text-[16px] font-semibold text-[var(--text-dark)] mb-5">
                        Support
                    </h3>

                    <div className="flex flex-col gap-3 text-[14px] text-[var(--text-gray)]">

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer transition-all">
                            Help Center
                        </span>

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer transition-all">
                            Contact Support
                        </span>

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer transition-all">
                            Privacy Policy
                        </span>

                        <span className="hover:text-[var(--teal-primary)] cursor-pointer transition-all">
                            Terms of Service
                        </span>

                    </div>

                </div>

            </div>

            {/* DIVIDER */}
            <div className="w-full h-[1px] bg-[var(--border-light)] my-8"></div>

            {/* BOTTOM */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-[13px] text-[var(--text-gray)]">

                <p>
                    © 2026 My Swastha Healthtech Pvt Ltd. All rights reserved.
                </p>

                <p className="text-center">
                    Developed by <span className="font-semibold text-[var(--teal-primary)]">Rajat Ghosh</span> &{' '}
                    <span className="font-semibold text-[var(--teal-primary)]">Indranee Pal</span>
                </p>

                <p>
                    Made with ❤️ for healthier living
                </p>

            </div>

        </footer>

    )
}

export default Footer