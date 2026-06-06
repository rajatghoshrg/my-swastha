import React, { useState, useEffect } from 'react'
import {
    RiPlantFill,
    RiCloudyFill,
    RiWaterFlashFill,
    RiMusic2Fill
} from "react-icons/ri";

const yogaSteps = [
    {
        title: "Deep Breathing",
        instruction:
            "Sit comfortably. Inhale deeply through your nose and exhale slowly."
    },
    {
        title: "Neck Stretch",
        instruction:
            "Slowly tilt your head left and right while relaxing your shoulders."
    },
    {
        title: "Cat-Cow Pose",
        instruction:
            "Move between arching and rounding your back with controlled breathing."
    },
    {
        title: "Child Pose",
        instruction:
            "Stretch your lower back and relax your hips."
    },
    {
        title: "Relaxation",
        instruction:
            "Close your eyes and enjoy calm breathing."
    }
]

const Yoga = () => {

    const [selectedTime, setSelectedTime] = useState(10)
    const [timeLeft, setTimeLeft] = useState(600)
    const [running, setRunning] = useState(false)
    const [currentStep, setCurrentStep] = useState(0)

    const totalSteps = 5
    const stepDuration = (selectedTime * 60) / totalSteps

    useEffect(() => {

        let interval

        if (running && timeLeft > 0) {

            interval = setInterval(() => {

                setTimeLeft(prev => prev - 1)

            }, 1000)

        }

        return () => clearInterval(interval)

    }, [running, timeLeft])

    useEffect(() => {

        const elapsed = selectedTime * 60 - timeLeft

        const activeStep = Math.min(
            Math.floor(elapsed / stepDuration),
            totalSteps - 1
        )

        setCurrentStep(activeStep)

    }, [timeLeft, selectedTime])

    const handleSession = (minutes) => {

        setSelectedTime(minutes)
        setTimeLeft(minutes * 60)
        setCurrentStep(0)
        setRunning(false)

    }

    const formatTime = () => {

        const mins = Math.floor(timeLeft / 60)
        const secs = timeLeft % 60

        return `${mins.toString().padStart(2, '0')}:${secs
            .toString()
            .padStart(2, '0')}`

    }

    const currentStepRemaining = () => {

        const elapsed = selectedTime * 60 - timeLeft

        const elapsedInCurrentStep = elapsed % stepDuration

        const remaining = Math.max(
            0,
            Math.ceil(stepDuration - elapsedInCurrentStep)
        )

        const mins = Math.floor(remaining / 60)
        const secs = remaining % 60

        return `${mins.toString().padStart(2, '0')}:${secs
            .toString()
            .padStart(2, '0')}`

    }

    return (

        <div className="
        relative z-10
        pt-[40px]
        pb-10
        px-3 sm:px-5 lg:px-0">

            {/* HEADER */}

            <div>

                <div className="
                inline-flex items-center gap-2
                px-3 py-1.5 rounded-full
                bg-[#14b8a6]/10
                border border-[#14b8a6]/10
                text-[#0f9f9c]
                font-semibold text-[11px]">

                    ✦ GUIDED YOGA SESSION

                </div>

                <h1 className="
                mt-4
                text-[30px]
                sm:text-[38px]
                font-black
                text-[var(--text-dark)]">

                    Yoga Wellness

                    <span className="
                    bg-gradient-to-r
                    from-[#14b8a6]
                    via-[#0ea5a4]
                    to-[#0f9f9c]
                    bg-clip-text
                    text-transparent">

                        {" "}Journey

                    </span>

                </h1>

                <p className="
                mt-3
                text-[14px]
                text-[var(--text-gray)]">

                    Relax, stretch and strengthen your body with guided yoga routines.

                </p>

            </div>

            {/* SESSION BUTTONS */}

            <div className="
            flex gap-3
            flex-wrap
            mt-6">

                {
                    [10, 20, 30].map(time => (

                        <button
                            key={time}
                            onClick={() => handleSession(time)}
                            className={`
                            px-5 py-3
                            rounded-full
                            font-bold
                            transition-all duration-300

                            ${selectedTime === time
                                    ? "bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] text-white shadow-lg"
                                    : "bg-white/60 backdrop-blur-xl border border-white/30 text-[var(--text-dark)]"
                                }`}>

                            {time} Min

                        </button>

                    ))
                }

            </div>

            {/* CONTENT */}

            <div className="
            mt-8
            grid
            lg:grid-cols-2
            gap-6">

                {/* MAIN TIMER */}

                <div className="
                rounded-[30px]
                bg-white/55
                backdrop-blur-2xl
                border border-white/30
                p-6">

                    <h2 className="
                    text-center
                    text-[22px]
                    font-black
                    text-[var(--text-dark)]">

                        Session Timer

                    </h2>

                    <div className="
                    mt-8
                    flex justify-center">

                        <div className="
                        w-[280px]
                        h-[280px]
                        rounded-full
                        border-[14px]
                        border-[#14b8a6]
                        flex
                        items-center
                        justify-center
                        bg-white/40">

                            <span className="
                            text-[48px]
                            font-black
                            text-[#14b8a6]">

                                {formatTime()}

                            </span>

                        </div>

                    </div>

                    <div className="
                    mt-8
                    flex justify-center gap-4">

                        <button
                            onClick={() => setRunning(true)}
                            className="
                            px-6 py-3
                            rounded-full
                            bg-gradient-to-r
                            from-[#14b8a6]
                            via-[#0ea5a4]
                            to-[#0f9f9c]
                            text-white
                            font-bold">

                            Start Session
                        </button>

                        <button
                            onClick={() => setRunning(false)}
                            className="
                            px-6 py-3
                            rounded-full
                            bg-white
                            border border-white/30
                            font-bold">

                            Pause
                        </button>

                    </div>

                    {
                        timeLeft === 0 && (

                            <div className="
                            mt-6
                            p-4
                            rounded-2xl
                            bg-green-100
                            text-green-700
                            text-center
                            font-bold">

                                 Yoga Session Completed Successfully!

                            </div>

                        )
                    }

                </div>

                {/* LIVE GUIDE */}

                <div className="
                rounded-[30px]
                bg-white/55
                backdrop-blur-2xl
                border border-white/30
                p-6">

                    <h2 className="
                    text-[22px]
                    font-black
                    text-[var(--text-dark)]">

                        Live Yoga Guide

                    </h2>

                    {/* STEP TIMER */}

                    <div className="
                    flex justify-center
                    mt-6 mb-6">

                        <div className="
                        w-[140px]
                        h-[140px]
                        rounded-full
                        border-[10px]
                        border-[#14b8a6]
                        bg-white/40
                        flex flex-col
                        items-center
                        justify-center
                        shadow-lg">

                            <span className="
                            text-[28px]
                            font-black
                            text-[#14b8a6]">

                                {currentStepRemaining()}

                            </span>

                            <span className="
                            text-[12px]
                            font-semibold
                            text-[var(--text-gray)]">

                                Step {currentStep + 1}

                            </span>

                        </div>

                    </div>

                    <div className="
                    inline-flex
                    px-3 py-1
                    rounded-full
                    bg-[#14b8a6]/10
                    text-[#14b8a6]
                    text-[12px]
                    font-bold">

                        Step {currentStep + 1} / {totalSteps}

                    </div>

                    <h3 className="
                    mt-5
                    text-[32px]
                    font-black
                    text-[var(--text-dark)]">

                        {yogaSteps[currentStep].title}

                    </h3>

                    <p className="
                    mt-4
                    text-[15px]
                    leading-[1.9]
                    text-[var(--text-gray)]">

                        {yogaSteps[currentStep].instruction}

                    </p>

                    {/* ALL STEPS */}

                    <div className="
                    mt-8
                    flex flex-col gap-3">

                        {
                            yogaSteps.map((step, index) => (

                                <div
                                    key={index}
                                    className={`
                                    p-4
                                    rounded-2xl
                                    transition-all duration-300

                                    ${index === currentStep
                                            ? "bg-gradient-to-r from-[#14b8a6]/15 via-[#0ea5a4]/15 to-[#0f9f9c]/15 border border-[#14b8a6]/20"
                                            : "bg-white/50"
                                        }
                                    `}>

                                    <div className="
                                    flex items-center gap-3">

                                        <div className="
                                        w-8 h-8
                                        rounded-full
                                        bg-gradient-to-r
                                        from-[#14b8a6]
                                        via-[#0ea5a4]
                                        to-[#0f9f9c]
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        text-[13px]
                                        font-bold">

                                            {index + 1}

                                        </div>

                                        <p className="font-semibold">

                                            {step.title}

                                        </p>

                                    </div>

                                </div>

                            ))
                        }

                    </div>

                </div>

            </div>

            {/* MUSIC SECTION */}

            <div className="
            mt-8
            rounded-[30px]
            bg-white/55
            backdrop-blur-2xl
            border border-white/30
            p-6">

                <h2 className="
                text-[22px]
                font-black
                text-[var(--text-dark)]">

                    Yoga Music & Relaxation

                </h2>

                <p className="
                mt-2
                text-[14px]
                text-[var(--text-gray)]">

                    Choose calming sounds while practicing yoga.

                </p>

                <audio
                    controls
                    className="w-full mt-5">

                    <source
                        src="/audio/yoga-music.mp3"
                        type="audio/mpeg"
                    />

                </audio>

                <div className="
                flex flex-wrap
                gap-3
                mt-5">

                    <div className="flex flex-wrap gap-3 mt-5">

                        <button className="
    flex items-center gap-2
    px-4 py-2
    rounded-full
    bg-[#14b8a6]/10
    text-[#0f9f9c]
    font-medium
    hover:bg-[#14b8a6]/20
    transition-all">

                            <RiPlantFill className="text-[18px]" />
                            Forest

                        </button>

                        <button className="
    flex items-center gap-2
    px-4 py-2
    rounded-full
    bg-[#14b8a6]/10
    text-[#0f9f9c]
    font-medium
    hover:bg-[#14b8a6]/20
    transition-all">

                            <RiCloudyFill className="text-[18px]" />
                            Rain Fall

                        </button>

                        <button className="
    flex items-center gap-2
    px-4 py-2
    rounded-full
    bg-[#14b8a6]/10
    text-[#0f9f9c]
    font-medium
    hover:bg-[#14b8a6]/20
    transition-all">

                            <RiWaterFlashFill className="text-[18px]" />
                            Ocean

                        </button>

                        <button className="
    flex items-center gap-2
    px-4 py-2
    rounded-full
    bg-[#14b8a6]/10
    text-[#0f9f9c]
    font-medium
    hover:bg-[#14b8a6]/20
    transition-all">

                            <RiMusic2Fill className="text-[18px]" />
                            Meditation

                        </button>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Yoga