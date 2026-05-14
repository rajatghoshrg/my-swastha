import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import SideBar from '../components/SideBar'
import Topbar from '../components/Topbar'

const DashboardLayout = () => {

    const [open, setOpen] = useState(false)

    return (

        <div className="relative min-h-screen overflow-hidden">

            {/* FULL PAGE BACKGROUND IMAGE */}
            <img
                src="/images/webpage_bg.png"
                alt="background"
                className="fixed inset-0 w-full h-full object-cover opacity-[0.45]"
            />

            {/* WHITE OVERLAY */}
            <div className="fixed inset-0 bg-white/45 backdrop-blur-[2px]"></div>

            {/* SIDEBAR */}
            <SideBar
                open={open}
                setOpen={setOpen}
            />

            {/* TOPBAR */}
            <Topbar
                open={open}
                setOpen={setOpen}
            />

            {/* MAIN CONTENT */}
            <main className="relative z-10 lg:ml-[280px] pt-[90px] px-3 sm:px-5 lg:px-6 pb-6">

                <Outlet />

            </main>

        </div>

    )
}

export default DashboardLayout