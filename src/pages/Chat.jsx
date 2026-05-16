import React, { useEffect, useRef, useState } from 'react'

import {
    RiEmotionHappyLine,
    RiMoonClearLine,
    RiFlashlightLine,
    RiBookOpenLine,
    RiMicLine,
    RiSendPlaneFill,
    RiAddCircleLine,
    RiRobot2Line,
    RiUser3Line,
    RiRefreshLine,
    RiMore2Fill
} from "react-icons/ri";

const Chat = () => {

    const [message, setMessage] = useState("")

    const [loading, setLoading] = useState(false)

    const [messages, setMessages] = useState([])

    const messagesEndRef = useRef(null)

    useEffect(() => {

        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        })

    }, [messages, loading])

    useEffect(() => {

        const welcomeMessage = {

            id: Date.now(),

            sender: "ai",

            text: "Hello! I'm OxyGen AI. How are you feeling today?",

            time: "Now"

        }

        setMessages([welcomeMessage])

    }, [])

    const sendMessage = async () => {

        if (!message.trim()) return

        const userMessage = {

            id: Date.now(),

            sender: "user",

            text: message,

            time: "Now"

        }

        setMessages((prev) => [...prev, userMessage])

        const currentMessage = message

        setMessage("")

        setLoading(true)

        try {

            const response = await fetch(
                "http://127.0.0.1:8000/chat/",
                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        message: currentMessage
                    })

                }
            )

            const data = await response.json()

            const aiMessage = {

                id: Date.now(),

                sender: "ai",

                text: data.reply,

                time: "Now"

            }

            setMessages((prev) => [...prev, aiMessage])

        }

        catch (error) {

            console.log(error)

        }

        finally {

            setLoading(false)

        }

    }

    return (

        <div className="
        fixed
        top-[90px]
        left-[12px]
        right-[12px]
        bottom-[12px]

        lg:top-[100px]
        lg:left-[300px]
        lg:right-[20px]
        lg:bottom-[20px]

        flex
        ">

            {/* CHAT CONTAINER */}
            <div className="w-full h-full
            rounded-[16px]
            bg-gradient-to-br from-white/60 via-white/40 to-white/20
            backdrop-blur-2xl
            border border-white/30
            shadow-[0_10px_50px_rgba(15,157,148,0.12)]
            overflow-hidden relative
            flex flex-col">

                {/* TOP GLOW */}
                <div className="absolute top-[-80px] right-[-60px] w-[220px] h-[220px] bg-[#14b8a6]/10 rounded-full blur-3xl"></div>

                {/* HEADER */}
                <div className="relative z-20 shrink-0 flex items-center justify-between px-4 py-3 border-b border-white/30 backdrop-blur-xl">

                    {/* LEFT */}
                    <div className="flex items-center gap-2">

                        <div className="w-10 h-10 rounded-[24px]
                        bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c]
                        flex items-center justify-center
                        shadow-lg shadow-[#14b8a6]/25">

                            <RiRobot2Line className="text-white text-[24px]" />

                        </div>

                        <div>

                            <h2 className="text-[14px] sm:text-[18px] font-black
                            bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c]
                            bg-clip-text text-transparent">

                                OxyGen AI

                            </h2>

                            <div className="flex items-center gap-1 mt-1">

                                <div className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse"></div>

                                <p className="text-[12px] text-[var(--text-gray)] font-medium">

                                    Online

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-2 sm:gap-3">

                        <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/70 border border-white/40 shadow-md flex items-center justify-center">

                            <RiRefreshLine className="text-[20px] sm:text-[22px] text-[var(--teal-primary)]" />

                        </button>

                        <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/70 border border-white/40 shadow-md flex items-center justify-center">

                            <RiMore2Fill className="text-[20px] sm:text-[22px] text-[var(--teal-primary)]" />

                        </button>

                    </div>

                </div>

                {/* SCROLLABLE CHAT AREA */}
                <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-8 space-y-6 relative z-10">

                    {/* DATE */}
                    <div className="flex justify-center">

                        <div className="px-4 sm:px-5 py-2 rounded-full bg-white/60 border border-white/40 text-[11px] sm:text-[13px] font-semibold text-[var(--text-gray)]">

                            Today • Wellness Session

                        </div>

                    </div>

                    {/* DYNAMIC MESSAGES */}
                    {
                        messages.map((msg) => (

                            msg.sender === "ai"

                                ? (

                                    <div
                                        key={msg.id}
                                        className="flex gap-3 sm:gap-4 items-start"
                                    >

                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl
                                        bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c]
                                        flex items-center justify-center shadow-md shrink-0">

                                            <RiRobot2Line className="text-white text-[18px] sm:text-[22px]" />

                                        </div>

                                        <div className="max-w-[88%] sm:max-w-[75%]
                                        bg-white/65
                                        border border-white/40
                                        backdrop-blur-xl
                                        rounded-[24px]
                                        rounded-tl-[8px]
                                        px-4 sm:px-6 py-4 sm:py-5 shadow-sm">

                                            <p className="text-[14px] sm:text-[16px] text-[var(--text-dark)] leading-[1.9]">

                                                {msg.text}

                                            </p>

                                            <p className="text-[11px] sm:text-[13px] text-[var(--text-gray)] mt-4">

                                                {msg.time}

                                            </p>

                                        </div>

                                    </div>

                                )

                                : (

                                    <div
                                        key={msg.id}
                                        className="flex justify-end"
                                    >

                                        <div className="flex gap-3 sm:gap-4 items-end max-w-[88%] sm:max-w-[80%]">

                                            <div className="bg-gradient-to-r
                                            from-[#14b8a6]
                                            via-[#0ea5a4]
                                            to-[#0f9f9c]
                                            text-white
                                            rounded-[24px]
                                            rounded-br-[8px]
                                            px-4 sm:px-6 py-4 sm:py-5 shadow-lg">

                                                <p className="text-[14px] sm:text-[16px] leading-[1.9]">

                                                    {msg.text}

                                                </p>

                                                <p className="text-[11px] sm:text-[13px] text-white/70 mt-4">

                                                    {msg.time}

                                                </p>

                                            </div>

                                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl
                                            bg-white/70
                                            border border-white/40
                                            flex items-center justify-center shadow-md shrink-0">

                                                <RiUser3Line className="text-[18px] sm:text-[22px] text-[var(--teal-primary)]" />

                                            </div>

                                        </div>

                                    </div>

                                )

                        ))
                    }

                    {/* LOADING */}
                    {
                        loading && (

                            <div className="flex gap-3 sm:gap-4 items-start">

                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl
                                bg-gradient-to-r from-[#14b8a6] via-[#0ea5a4] to-[#0f9f9c]
                                flex items-center justify-center shadow-md shrink-0">

                                    <RiRobot2Line className="text-white text-[18px] sm:text-[22px]" />

                                </div>

                                <div className="bg-white/65
                                border border-white/40
                                backdrop-blur-xl
                                rounded-[24px]
                                rounded-tl-[8px]
                                px-5 py-4 shadow-sm">

                                    <p className="text-[14px] text-[var(--text-gray)] animate-pulse">

                                        OxyGen is typing...

                                    </p>

                                </div>

                            </div>

                        )
                    }

                    {/* QUICK ACTIONS */}
                    <div className="flex flex-wrap gap-3">

                        {
                            [
                                {
                                    icon: <RiEmotionHappyLine />,
                                    text: "I feel stressed"
                                },

                                {
                                    icon: <RiMoonClearLine />,
                                    text: "Help me sleep"
                                },

                                {
                                    icon: <RiFlashlightLine />,
                                    text: "Boost energy"
                                },

                                {
                                    icon: <RiBookOpenLine />,
                                    text: "Daily motivation"
                                }

                            ].map((item, index) => (

                                <button
                                    key={index}
                                    className="flex items-center gap-2 sm:gap-3
                                    px-4 sm:px-5 py-2.5 sm:py-3
                                    rounded-full
                                    bg-white/60
                                    border border-white/40
                                    backdrop-blur-xl
                                    text-[13px] sm:text-[15px]
                                    text-[var(--teal-primary)]
                                    font-semibold
                                    hover:scale-105
                                    hover:bg-white/80
                                    transition-all duration-300 shadow-sm">

                                    <span className="text-[16px] sm:text-[18px]">

                                        {item.icon}

                                    </span>

                                    {item.text}

                                </button>

                            ))
                        }

                    </div>

                    <div ref={messagesEndRef}></div>

                </div>

                {/* FIXED INPUT AREA */}
                <div className="relative z-20 shrink-0 border-t border-white/30 px-3 sm:px-5 py-3 sm:py-4 backdrop-blur-xl bg-white/20">

                    <div className="flex items-center gap-2 sm:gap-4
                    bg-white/65
                    border border-white/40
                    backdrop-blur-xl
                    rounded-full
                    px-3 py-2 shadow-sm">

                        <button>

                            <RiAddCircleLine className="text-[22px] sm:text-[24px] text-[var(--teal-primary)]" />

                        </button>

                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Tell OxyGen how you feel today..."
                            className="flex-1 bg-transparent outline-none text-[13px] sm:text-[14px] text-[var(--text-dark)] placeholder:text-[var(--text-gray)]"
                        />

                        <button>

                            <RiMicLine className="text-[22px] sm:text-[24px] text-[var(--teal-primary)]" />

                        </button>

                        <button
                            onClick={sendMessage}
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full
                            bg-gradient-to-r
                            from-[#14b8a6]
                            via-[#0ea5a4]
                            to-[#0f9f9c]
                            flex items-center justify-center shadow-lg">

                            <RiSendPlaneFill className="text-white text-[18px] sm:text-[20px]" />

                        </button>

                    </div>

                    <p className="text-center text-[9px] sm:text-[10px] tracking-[1px]
                    text-[var(--text-gray)] mt-3 uppercase">

                        Talk with me. Because your mental health matters.

                    </p>

                </div>

            </div>

        </div>

    )
}

export default Chat