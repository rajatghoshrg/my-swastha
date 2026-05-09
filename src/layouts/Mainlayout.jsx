import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
    return (

        <div className="min-h-screen bg-[#f5f7f6]">

            <Navbar />

            {/* Page Content */}
            <Outlet />

            <Footer />

        </div>

    )
}

export default MainLayout