import React, { useState, useEffect } from 'react'

const Yoga = () => {

    const [selectedTime, setSelectedTime] = useState(10)
    const [timeLeft, setTimeLeft] = useState(600)
    const [running, setRunning] = useState(false)

    useEffect(() => {

        let interval

        if (running && timeLeft > 0) {

            interval = setInterval(() => {

                setTimeLeft(prev => prev - 1)

            }, 1000)

        }

        return () => clearInterval(interval)

    }, [running, timeLeft])

    const handleSession = (minutes) => {

        setSelectedTime(minutes)
        setTimeLeft(minutes * 60)
        setRunning(false)

    }

    const formatTime = () => {

        const mins = Math.floor(timeLeft / 60)
        const secs = timeLeft % 60

        return `${mins.toString().padStart(2, "0")}:${secs
            .toString()
            .padStart(2, "0")}`

    }

    return (

        <div className="
        pt-[70px]
        pb-10
        px-4
        ">

            {/* HEADER */}

            <div>

                <h1 className="
                text-[32px]
                font-black
                text-[var(--text-dark)]">

                    Yoga Sessions

                </h1>

                <p className="
                mt-2
                text-[14px]
                text-[var(--text-gray)]">

                    Improve flexibility, posture and inner peace through guided yoga.

                </p>

            </div>

            {/* SESSION BUTTONS */}

            <div className="
            flex gap-3
            mt-6
            flex-wrap">

                {
                    [10, 20, 30].map(time => (

                        <button
                            key={time}
                            onClick={() => handleSession(time)}
                            className={`
                            px-5 py-3
                            rounded-full
                            font-bold
                            transition-all

                            ${selectedTime === time

                                    ? "bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c] text-white"

                                    : "bg-white/60 text-[var(--text-dark)]"

                                }`}>

                            {time} Min

                        </button>

                    ))
                }

            </div>

            {/* MAIN AREA */}

            <div className="
            grid
            lg:grid-cols-2
            gap-5
            mt-8">

                {/* TIMER */}

                <div className="
                rounded-[28px]
                p-6
                bg-white/50
                backdrop-blur-xl
                border border-white/30">

                    <h2 className="
                    text-[22px]
                    font-black
                    text-center">

                        Session Timer

                    </h2>

                    <div className="
                    w-[250px]
                    h-[250px]
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
                    flex justify-center
                    gap-4
                    mt-6">

                        <button
                            onClick={() => setRunning(true)}
                            className="
                            px-5 py-3
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
                            px-5 py-3
                            rounded-full
                            bg-white
                            shadow-md
                            font-bold">

                            Pause

                        </button>

                    </div>

                </div>

                {/* YOGA FLOW */}

                <div className="
                rounded-[28px]
                p-6
                bg-white/50
                backdrop-blur-xl
                border border-white/30">

                    <h2 className="
                    text-[22px]
                    font-black">

                        Today's Yoga Flow

                    </h2>

                    <div className="
                    mt-6
                    flex flex-col gap-4">

                        {
                            [
                                "Deep Breathing (2 mins)",
                                "Neck Stretch (2 mins)",
                                "Cat-Cow Pose (3 mins)",
                                "Child Pose (2 mins)",
                                "Relaxation (1 min)"
                            ].map((step, index) => (

                                <div
                                    key={index}
                                    className="
                                    flex items-center gap-4
                                    p-4
                                    rounded-2xl
                                    bg-white/70">

                                    <div className="
                                    w-9 h-9
                                    rounded-full
                                    bg-gradient-to-r
                                    from-[#14b8a6]
                                    via-[#0ea5a4]
                                    to-[#0f9f9c]
                                    text-white
                                    flex items-center justify-center
                                    font-bold">

                                        {index + 1}

                                    </div>

                                    <p className="font-medium">

                                        {step}

                                    </p>

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
            p-6
            bg-white/50
            backdrop-blur-xl
            border border-white/30">

                <h2 className="
                text-[22px]
                font-black">

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
                flex gap-3
                flex-wrap
                mt-5">

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