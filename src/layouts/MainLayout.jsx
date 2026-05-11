import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {

    return (

        <div className="relative min-h-screen overflow-hidden">

            {/* FIXED BACKGROUND IMAGE */}
            <img
                src="/images/webpage_bg.png"
                alt="background"
                className="fixed inset-0 w-full h-full object-cover opacity-[0.45]"
            />

            {/* WHITE OVERLAY */}
            <div className="fixed inset-0 bg-white/45 backdrop-blur-[2px]"></div>

            {/* CONTENT */}
            <div className="relative z-10 min-h-screen">

                <Navbar />

                <Outlet />

                <Footer />

            </div>

        </div>

    )
}

export default MainLayout