import React from 'react'
import { Outlet } from 'react-router-dom'

import SideBar from '../components/SideBar'
import Topbar from '../components/Topbar'

const DashboardLayout = () => {

    return (

        <div className="relative min-h-screen flex overflow-hidden">

            {/* FULL PAGE BACKGROUND IMAGE */}
            <img
                src="/images/webpage_bg.png"
                alt="background"
                className="fixed inset-0 w-full h-full object-cover opacity-[0.45]"
            />

            {/* WHITE OVERLAY */}
            <div className="absolute inset-0 bg-white/45 backdrop-blur-[2px]"></div>

            {/* SIDEBAR */}
            <div className="relative z-10">

                <SideBar />

            </div>

            {/* MAIN CONTENT */}
            <div className="relative z-10 flex-1 lg:ml-[280px] p-4 sm:p-6 lg:p-8">

                {/* TOPBAR */}
                <Topbar />

                {/* PAGE CONTENT */}
                <div className="mt-8">

                    <Outlet />

                </div>

            </div>

        </div>

    )
}

export default DashboardLayout