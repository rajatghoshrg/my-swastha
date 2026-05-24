import React, { useState, useEffect } from 'react'

const yogaSteps = [

    {
        title: "Deep Breathing",
        duration: 120,
        instruction: "Sit comfortably. Inhale deeply through your nose and exhale slowly."
    },

    {
        title: "Neck Stretch",
        duration: 120,
        instruction: "Slowly tilt your head left and right. Relax your shoulders."
    },

    {
        title: "Cat-Cow Pose",
        duration: 180,
        instruction: "Move between arching and rounding your back with controlled breathing."
    },

    {
        title: "Child Pose",
        duration: 120,
        instruction: "Stretch your back and hips while focusing on calm breathing."
    },

    {
        title: "Relaxation",
        duration: 60,
        instruction: "Close your eyes, breathe naturally and relax your entire body."
    }

]

const Yoga = () => {

    const [selectedTime, setSelectedTime] = useState(10)
    const [timeLeft, setTimeLeft] = useState(600)
    const [running, setRunning] = useState(false)
    const [currentStep, setCurrentStep] = useState(0)

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

        let cumulative = 0

        for (let i = 0; i < yogaSteps.length; i++) {

            cumulative += yogaSteps[i].duration

            if (elapsed < cumulative) {

                setCurrentStep(i)
                break

            }

        }

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
                sm:text-[36px]
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
                            px-5 py-2.5
                            rounded-full
                            font-bold
                            transition-all duration-300

                            ${selectedTime === time

                                    ? "bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] text-white shadow-lg"

                                    : "bg-white/60 backdrop-blur-xl border border-white/30"

                                }
                            `}>

                            {time} Min

                        </button>

                    ))
                }

            </div>

            {/* MAIN SECTION */}

            <div className="
            mt-8
            grid
            lg:grid-cols-2
            gap-5">

                {/* TIMER */}

                <div className="
                rounded-[28px]
                bg-white/50
                backdrop-blur-xl
                border border-white/30
                p-6">

                    <h2 className="
                    text-[22px]
                    font-black
                    text-center
                    text-[var(--text-dark)]">

                        Session Timer

                    </h2>

                    <div className="
                    w-[260px]
                    h-[260px]
                    mx-auto
                    mt-6
                    rounded-full
                    border-[12px]
                    border-[#14b8a6]
                    flex items-center justify-center">

                        <span className="
                        text-[42px]
                        font-black
                        text-[#14b8a6]">

                            {formatTime()}

                        </span>

                    </div>

                    <div className="
                    flex justify-center gap-4
                    mt-6">

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

                            Start

                        </button>

                        <button
                            onClick={() => setRunning(false)}
                            className="
                            px-6 py-3
                            rounded-full
                            bg-white
                            shadow-md
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
                            font-bold
                            text-center">

                                🎉 Yoga Session Completed Successfully!

                            </div>

                        )
                    }

                </div>

                {/* LIVE GUIDE */}

                <div className="
                rounded-[28px]
                bg-white/50
                backdrop-blur-xl
                border border-white/30
                p-6">

                    <h2 className="
                    text-[22px]
                    font-black
                    text-[var(--text-dark)]">

                        Live Yoga Guide

                    </h2>

                    <div className="
                    mt-5
                    px-3 py-1
                    rounded-full
                    inline-flex
                    bg-[#14b8a6]/10
                    text-[#14b8a6]
                    text-[12px]
                    font-bold">

                        Step {currentStep + 1} / {yogaSteps.length}

                    </div>

                    <h3 className="
                    mt-5
                    text-[30px]
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

                                            : "bg-white/60"

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
                                        flex items-center justify-center
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

            {/* MUSIC */}

            <div className="
            mt-8
            rounded-[28px]
            bg-white/50
            backdrop-blur-xl
            border border-white/30
            p-6">

                <h2 className="
                text-[22px]
                font-black
                text-[var(--text-dark)]">

                    Relaxing Yoga Music

                </h2>

                <audio
                    controls
                    className="w-full mt-5">

                    <source
                        src="/audio/yoga-music.mp3"
                        type="audio/mpeg"
                    />

                </audio>

                <div className="
                mt-5
                flex flex-wrap gap-3">

                    <button className="px-4 py-2 rounded-full bg-[#14b8a6]/10">
                        🌲 Forest
                    </button>

                    <button className="px-4 py-2 rounded-full bg-[#14b8a6]/10">
                        🌧 Rain
                    </button>

                    <button className="px-4 py-2 rounded-full bg-[#14b8a6]/10">
                        🌊 Ocean
                    </button>

                    <button className="px-4 py-2 rounded-full bg-[#14b8a6]/10">
                        🎵 Meditation
                    </button>

                </div>

            </div>

        </div>

    )

}

export default Yoga