import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home";

import Dashboard from "../pages/Dashboard";
import Chat from "../pages/Chat";
import Checkup from "../pages/Checkup";
import Emergency from "../pages/Emergency";

import Exercise from "../pages/exercise/Exercise";

import Calculators from "../pages/calculators/Calculators";

function AppRoutes() {

    return (

        <Routes>

            {/* ================= LANDING PAGE ================= */}
            <Route
                path="/"
                element={<MainLayout />}
            >

                <Route
                    index
                    element={<Home />}
                />

            </Route>

            {/* ================= DASHBOARD LAYOUT ================= */}
            <Route
                element={<DashboardLayout />}
            >

                {/* Dashboard */}
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                {/* Chat */}
                <Route
                    path="/oxygen"
                    element={<Chat />}
                />

                {/* Daily Checkup */}
                <Route
                    path="/checkup"
                    element={<Checkup />}
                />

                {/* Emergency */}
                <Route
                    path="/emergency"
                    element={<Emergency />}
                />

                {/* Exercise Main Page */}
                <Route
                    path="/exercise"
                    element={<Exercise />}
                />

                {/* Exercise Session Pages
                <Route
                    path="/yoga"
                    element={<Yoga />}
                />

                <Route
                    path="/meditation"
                    element={<Meditation />}
                />

                <Route
                    path="/morningexercise"
                    element={<MorningExercise />}
                />

                <Route
                    path="/cardio"
                    element={<Cardio />}
                />

                <Route
                    path="/sleeprelaxation"
                    element={<SleepRelaxation />}
                /> */}

                {/* Calculators */}
                <Route
                    path="/calculators"
                    element={<Calculators />}
                />

            </Route>

        </Routes>

    );
}

export default AppRoutes;