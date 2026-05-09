import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";

function AppRoutes() {

    return (

        <Routes>

            {/* Layout Route */}
            <Route path="/" element={<MainLayout />}>

                {/* Home Page */}
                <Route index element={<Home />} />

            </Route>

        </Routes>

    );
}

export default AppRoutes;