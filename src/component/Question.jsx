import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";
import { FourSquare } from "react-loading-indicators";

const Question = () => {
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(10);

    const user = JSON.parse(localStorage.getItem("madam"));
    const name = user?.name || "Madam Jii";

    // Initial loading screen
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    const valueText = (value) => `${value}%`;

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    const getLoveMessage = () => {
        if (value < 20) {
            return "Tu Bhag Ja Itna toh Kutte Bhi Nahi Karte!";
        } else if (value < 30) {
            return "Mujhe Laga Hi Tha 🥹";
        } else if (value < 40) {
            return "Itna Kam? 🥺";
        } else if (value < 50) {
            return "Hmm... Thoda Aur Chahiye! 😏💗";
        } else if (value < 60) {
            return "Thoda Aur Chahiye! 😗";
        } else if (value < 80) {
            return "Awww, That's Cute 🥰";
        } else if (value < 100) {
            return "I Knew It! 😌💗";
        } else if (value < 110) {
            return "I Don't Believe You 🧐";
        } else {
            return "Aap Mujhse Itna Pyaar Karti Ho Ki Pure 100% Se Bhi Upar Aagaye! Awww 💗😘";
        }
    };

    return (
        <div className="question-container flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100 px-4 py-6 sm:px-6">

            {/* Loading */}
            {loading ? (
                <div className="flex w-full max-w-sm flex-col items-center justify-center gap-4 text-center">

                    <div>
                        <FourSquare
                            color="#e11d48"
                            size="medium"
                            text=""
                            textColor=""
                        />
                    </div>

                    <p className="font-['Great_Vibes'] text-lg font-semibold text-rose-900 sm:text-xl">
                        Sahi Jawab De Hi Diya Aapne 😁
                    </p>

                </div>
            ) : (

                /* Main Card */
                <div className="w-full max-w-md rounded-3xl border border-white/70 bg-white/60 px-5 py-7 shadow-[0_20px_60px_rgba(190,24,93,0.18)] backdrop-blur-xl sm:px-8 sm:py-9">

                    {/* Top Heart */}
                    <div className="mb-5 flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-pink-500 text-3xl shadow-lg shadow-rose-300/40">
                            💗
                        </div>
                    </div>

                    {/* Greeting */}
                    <div className="text-center">

                        <p className="font-['Cormorant_Garamond'] text-base font-medium text-rose-700 sm:text-lg">
                            Dear {name} 💗
                        </p>

                        <h1 className="mt-4 font-['Great_Vibes'] text-3xl leading-tight text-rose-700 sm:text-4xl">
                            Aap Mujhse Kitni Mohobaat Karti Ho?
                        </h1>

                        <p className="mt-3 text-2xl">
                            🫣💗
                        </p>

                    </div>

                    {/* Love Percentage */}
                    <div className="mt-7">

                        <div className="mb-2 flex items-center justify-between px-1 font-['Cormorant_Garamond'] text-sm font-semibold text-rose-700 sm:text-base">
                            <span>Thoda Sa 💕</span>
                            <span>Bahut Saara 💗</span>
                        </div>

                        <Box sx={{ width: "100%" }}>
                            <Slider
                                aria-label="Love"
                                value={value}
                                onChange={handleChange}
                                getAriaValueText={valueText}
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={110}
                                sx={{
                                    color: "#e11d48",
                                    "& .MuiSlider-thumb": {
                                        width: 24,
                                        height: 24,
                                    },
                                }}
                            />
                        </Box>

                    </div>

                    {/* Percentage Circle */}
                    <div className="mt-5 flex justify-center">

                        <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-rose-300 bg-white/70 shadow-inner">

                            <span className="font-['Cormorant_Garamond'] text-2xl font-bold text-rose-600">
                                {value}%
                            </span>

                            <span className="text-xl text-rose-400">
                                Love
                            </span>

                        </div>

                    </div>

                    {/* Message */}
                    <div className="mt-6 min-h-[80px] rounded-2xl bg-rose-50/80 px-4 py-4 text-center shadow-inner">

                        <p className="font-['Cormorant_Garamond'] text-lg font-semibold leading-7 text-rose-900 sm:text-xl">
                            {getLoveMessage()}
                        </p>

                    </div>

                    {/* Button */}
                    <div className="mt-7 flex justify-center">

                        {value > 100 ? (

                            <Link
                                to="/game"
                                className="w-full rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 text-center font-['Cormorant_Garamond'] text-lg font-bold text-white shadow-lg shadow-rose-300/40 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl active:scale-95 sm:text-xl"
                            >
                                Open Game Bar👾
                            </Link>

                        ) : (

                            <button
                                type="button"
                                className="w-full cursor-not-allowed rounded-full bg-rose-200 px-6 py-3 font-['Cormorant_Garamond'] text-lg font-bold text-rose-700 shadow-md sm:text-xl"
                            >
                                I Don't Accept 😒
                            </button>

                        )}

                    </div>

                    {/* Bottom Text */}
                    <p className="mt-6 text-center font-['Cormorant_Garamond'] text-sm italic text-rose-500 sm:text-base">
                        Psst... 100% se thoda zyada karna padega 😌💗
                    </p>

                </div>
            )}
        </div>
    );
};

export default Question;
