import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
    return (

        <div className="relative z-10 min-h-screen bg-[#f5f7f6]/80 backdrop-blur-sm">

            <Navbar />

            <Outlet />

            <Footer />

        </div>

    )
}

export default MainLayout