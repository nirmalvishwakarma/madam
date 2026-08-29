import React, { useEffect, useState } from 'react';
import { FourSquare } from 'react-loading-indicators';
import { Link } from 'react-router-dom';

const EMOJIS = ['💗', '💖', '💕', '❤️', '💘', '🥰', '😘', '🌸', '🫶', '🧿'];

const LoveLetter = () => {
    const user = JSON.parse(localStorage.getItem('madam'));
    const name = user?.name;

    const [timer, setTimer] = useState(101);
    const [loading, setLoading] = useState(true);

    const [showRain, setShowRain] = useState(false);
    const [rainEmojis, setRainEmojis] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => {
                if (prev <= 1) {
                    clearInterval(interval);

                    setLoading(false);

                    // Start emoji rain
                    setShowRain(true);

                    // Create emojis
                    const emojis = Array.from({ length: 100 }, (_, index) => ({
                        id: index,
                        emoji: EMOJIS[
                            Math.floor(Math.random() * EMOJIS.length)
                        ],
                        left: Math.random() * 100,
                        size: 18 + Math.random() * 25,
                        delay: Math.random() * 2,
                        duration: 5 + Math.random() * 3,
                    }));

                    setRainEmojis(emojis);

                    return 0;
                }

                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Emoji rain only for 10 seconds
    useEffect(() => {
        if (!showRain) return;

        const rainTimer = setTimeout(() => {
            setShowRain(false);
        }, 10000);

        return () => clearTimeout(rainTimer);
    }, [showRain]);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-[#FDF2F4] via-[#FCE7F3] to-[#F5D0D9] flex items-center justify-center p-5">

            {/* EMOJI RAIN */}
            {showRain && (
                <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">

                    {rainEmojis.map(item => (
                        <span
                            key={item.id}
                            className="emoji-rain"
                            style={{
                                left: `${item.left}%`,
                                fontSize: `${item.size}px`,
                                animationDelay: `${item.delay}s`,
                                animationDuration: `${item.duration}s`,
                            }}
                        >
                            {item.emoji}
                        </span>
                    ))}

                </div>
            )}

            {loading ? (
                <div className="relative z-10 flex flex-col items-center justify-center gap-4">

                    <FourSquare
                        color="#e11d48"
                        size="medium"
                        text=""
                        textColor=""
                    />

                    <p className="font-['Cormorant_Garamond'] text-center text-lg text-rose-900">
                        Ruk Bhi Jao Itni Bhi Kya Jaldi Hai 😁💗
                    </p>

                    <div className="relative flex h-20 w-20 items-center justify-center">
                        {/* Outer ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-rose-300 animate-ping opacity-30" />

                        {/* Main circle */}
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg shadow-rose-300/50">
                            <h1 className="text-2xl font-bold text-white tabular-nums">
                                {timer}
                            </h1>
                        </div>

                        {/* Small heart */}
                        <span className="absolute -right-1 -top-1 text-lg">
                            💗
                        </span>
                    </div>
                </div>
            ) : (
                <div className="love-letter-enter w-full max-w-2xl rounded-2xl border border-[#F3C6D0] bg-[#FFFDF8] p-3 shadow-2xl md:p-12">
                    <div className="text-center">
                        <div className="mb-4 text-2xl text-[#C2415D] animate-float">
                            ♥ ♥ ♥
                        </div>

                        <h1 className="font-['Great_Vibes'] text-2xl text-[#7F1D3D]">
                            My Dearest {name} 💗
                        </h1>

                        <p className="mt-2 font-['Cormorant_Garamond'] text-lg italic text-[#9F5B72]">
                            A little something from my heart...
                        </p>
                    </div>

                    <div className="mt-8 border-t border-[#F3C6D0] pt-8 font-['Dancing_Script']">
                        <p className="text-xl leading-9 text-[#5C3744] font-bold">
                            Dear {name},
                        </p>

                        <p className="mt-5 text-xl leading-9 text-[#5C3744]">
                            I don't really know where to start, because somehow
                            words never feel enough when it comes to you. 💗
                        </p>

                        <p className="mt-5 text-xl leading-9 text-[#5C3744]">
                            But if there is one thing I want you to know, it's
                            that having you in my life makes ordinary moments
                            feel a little more special.
                        </p>

                        <p className="mt-5 text-xl leading-9 text-[#5C3744]">
                            Your smile, your little habits, the way you talk...
                            somehow all of it became my favorite.🙃
                        </p>

                        <p className="mt-5 text-xl leading-9 text-[#5C3744]">
                            I was very happy when I met you after so many years,
                            and after so many years my wish got fulfilled.
                            I wanted to spend more time with you at that time,
                            but time didn't really want that to happen. 😗
                            But now I have already chosen you as my life-long
                            partner🫂 because you are what I want in my life.
                            You are the person, I had been searching for
                            so many years, and I have already decided
                            to stay with you! 💗
                        </p>

                        <p className="mt-5 text-xl leading-9 text-[#5C3744]">
                            <span className='font-bold leading-9 text-[#5C3744]'>
                                Lines For You:
                            </span>
                            <br />
                            Yeah, you are the rays of the sun and the glow of the moon, ☀️🌙
                            the sound of your voice, my heart's favorite tune. 🎶💗
                            You turn my ordinary days into something divine, ✨
                            and somehow, in this endless world, I'm grateful that you're mine. 🤍
                        </p>

                        <p className="mt-5 text-xl leading-9 text-[#5C3744]">
                            Yeah! but now your turn to express, your feeling
                            and go ahead, now i am waiting for your reply!
                        </p>

                        <p className="mt-5 text-xl leading-9 text-[#5C3744]">
                            So this little page isn't just a letter.
                            It's my tiny way of telling you that you are
                            incredibly special to me.
                        </p>

                        <p className="mt-5 text-[15px] leading-9 text-[#5C3744] font-bold">
                            I Love You {name}, Soo Much 🤍🫶!
                        </p>

                        <div className="flex w-full justify-center py-6">
                            <a
                                href="https://www.instagram.com/niru21x/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 px-5 py-3 font-['Dancing_Script'] text-[15px] text-white shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] ">
                                💌 Reply to Me on Instagram
                            </a>
                        </div>


                    </div>

                    <div className="mt-8 border-t border-[#F3C6D0] pt-6 text-right font-bold">
                        <p className="font-['Great_Vibes'] text-2xl text-[#7F1D3D]">
                            Your, Sir Jii 💌
                        </p>

                        <p className="mt-2 font-['Cormorant_Garamond'] text-lg text-[#9F5B72]">
                            With All My Love 🫀
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoveLetter;