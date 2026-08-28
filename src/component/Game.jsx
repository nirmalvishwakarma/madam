import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CuteLoveGame = () => {
    const [score, setScore] = useState(0);

    const [heartPosition, setHeartPosition] = useState({
        top: 50,
        left: 50,
    });

    const moveHeart = () => {
        setScore((prev) => prev + 1);

        setHeartPosition({
            top: Math.floor(Math.random() * 75) + 10,
            left: Math.floor(Math.random() * 75) + 10,
        });
    };

    const getMessage = () => {
        if (score === 0) return 'Catch the heart if you can! 🫣';
        if (score < 3) return 'Awww, you caught it! 💗';
        if (score < 6) return 'You are getting good at this! 🥰';
        if (score < 10) return 'Okayyy, someone really wants my heart! 😏💗';

        return 'Fine... You caught my heart forever! 🫶❤️';
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200 p-4 sm:p-6">

            <div className="w-full max-w-md rounded-[28px] border border-pink-200/60 bg-white/75 p-5 shadow-[0_20px_60px_rgba(190,24,93,0.12)] backdrop-blur-xl sm:p-7">

                {/* Header */}
                <div className="text-center">

                    <div className="mb-1 text-xl text-rose-500">
                        ✦
                    </div>

                    <h1 className="font-['Great_Vibes'] text-3xl text-rose-800 sm:text-4xl">
                        Catch My Heart 💗
                    </h1>

                    <p className="mt-2 font-['Cormorant_Garamond'] text-lg text-rose-900">
                        {getMessage()}
                    </p>

                </div>

                {/* Score */}
                <div className="mx-auto mt-5 flex w-fit flex-col items-center rounded-full border border-rose-200 bg-rose-50 px-6 py-2">

                    <span className="font-['Cormorant_Garamond'] text-sm text-rose-700">
                        Hearts Caught
                    </span>

                    <span className="text-2xl font-bold text-rose-600">
                        {score}
                    </span>

                </div>

                {/* Game Area */}
                <div className="relative mt-5 h-[300px] overflow-hidden rounded-3xl border border-pink-200 bg-gradient-to-br from-white/80 via-pink-50/80 to-rose-100/80 shadow-inner sm:h-[330px]">

                    {/* Decorations */}
                    <span className="absolute left-5 top-5 text-sm opacity-30">
                        ♡
                    </span>

                    <span className="absolute right-7 top-10 text-lg opacity-30">
                        ✦
                    </span>

                    <span className="absolute bottom-8 left-8 text-lg opacity-30">
                        ♡
                    </span>

                    <span className="absolute bottom-5 right-5 text-sm opacity-30">
                        ✦
                    </span>

                    {/* Moving Heart */}
                    <button
                        type="button"
                        onClick={moveHeart}
                        aria-label="Catch my heart"
                        className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer border-0 bg-transparent text-4xl transition-all duration-300 hover:scale-125 active:scale-75 sm:text-5xl"
                        style={{
                            top: `${heartPosition.top}%`,
                            left: `${heartPosition.left}%`,
                        }}
                    >
                        💗
                    </button>

                    {/* Hint */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/60 px-4 py-1 font-['Cormorant_Garamond'] text-sm text-rose-700 backdrop-blur">
                        Tap the heart 💕
                    </div>

                </div>

                {/* After 10 Points */}
                {score >= 10 && (
                    <div className="mt-5 animate-[fadeIn_0.6s_ease-in-out] rounded-2xl border border-pink-200 bg-gradient-to-r from-rose-50 to-pink-50 p-5 text-center">

                        <div className="animate-pulse text-4xl">
                            💖
                        </div>

                        <h2 className="mt-1 font-['Great_Vibes'] text-3xl text-rose-700">
                            You Win! 🥹
                        </h2>

                        <p className="mt-2 font-['Cormorant_Garamond'] text-lg text-rose-900">
                            You didn't just catch the heart...
                            <br />
                            You caught mine. 🫶
                        </p>

                        {/* Link Button */}
                        <Link
                            to="/love-letter"
                            className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-3 font-['Cormorant_Garamond'] text-sm font-bold text-white shadow-lg shadow-rose-300/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
                        >
                            Open Your Love Letter 💌
                        </Link>

                    </div>
                )}

            </div>

        </div>
    );
};

export default CuteLoveGame;