import React, { useEffect, useRef, useState } from 'react';

import img1 from './img/img1.jpeg';
import img2 from './img/img2.jpeg';
import img3 from './img/img3.jpeg';
import img4 from './img/img4.jpeg';
import img5 from './img/img5.jpeg';
import img6 from './img/img6.jpeg';
import img7 from './img/img7.jpeg';
import img8 from './img/img8.jpeg';
import img9 from './img/img9.jpeg';
import img10 from './img/img10.jpeg';
import img11 from './img/img11.jpeg';
import { Navigate } from 'react-router-dom';

const photos = [
    {
        id: 1,
        src: img1,
        title: 'The Beginning 💗',
        caption: 'Where our little story started...',
    },
    {
        id: 2,
        src: img2,
        title: 'That Smile 🥰',
        caption: 'One smile, and my whole day gets better.',
    },
    {
        id: 3,
        src: img3,
        title: 'Beautiful You 🌸',
        caption: 'Some moments deserve to be remembered forever.',
    },
    {
        id: 4,
        src: img4,
        title: 'My Favorite Person 🫶',
        caption: 'Out of everyone, somehow I found you.',
    },
    {
        id: 5,
        src: img5,
        title: 'A Little Memory ✨',
        caption: 'A small moment that means a lot to me.',
    },
    {
        id: 6,
        src: img6,
        title: 'You is You ❤️',
        caption: 'You Never Chnaged!',
    }, {
        id: 7,
        src: img7,
        title: 'Some Old Memory👀',
        caption: 'I am There Beside You!',
    }, {
        id: 8,
        src: img8,
        title: 'I like it',
        caption: 'In This Dress I love You🤍',
    }, {
        id: 9,
        src: img9,
        title: 'This Also',
        caption: 'I Like All The Photo of Yours, it Melt My heart!',
    }, {
        id: 10,
        src: img10,
        title: 'I Rember This Place',
        caption: 'I Have Gone This Place Years Ago!',
    }, {
        id: 11,
        src: img11,
        title: 'Us ❤️',
        caption: 'I Hope, Next Time it Should Be More Photo Of Uss!👀',
    },
];

const Album = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            const height = window.innerHeight;

            const index = Math.round(scrollTop / height);

            setActiveIndex(
                Math.min(Math.max(index, 0), photos.length - 1)
            );
        };

        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative h-screen overflow-hidden bg-black text-white">

            {/* Ambient pink glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/10 blur-[120px]" />

            {/* Header */}
            <div className="pointer-events-none absolute left-0 right-0 top-0 z-50 px-6 pt-8 text-center">

                <div className="mb-3 text-sm tracking-[0.7em] text-pink-400">
                    ♥ ♥ ♥
                </div>

                <h1 className="font-['Great_Vibes'] text-4xl text-pink-100 sm:text-5xl md:text-6xl">
                    Our Little Memories
                </h1>

                <p className="mx-auto mt-2 max-w-md font-['Cormorant_Garamond'] text-base italic text-pink-200/70 sm:text-lg">
                    Scroll slowly...
                    <br />
                    Every memory has a story. 💗
                </p>

            </div>

            {/* 3D Scroll Area */}
            <div
                ref={containerRef}
                className="relative z-10 h-screen snap-y snap-mandatory overflow-y-scroll"
                style={{
                    perspective: '1200px',
                    scrollBehavior: 'smooth',
                }}
            >

                {photos.map((photo, index) => {

                    const distance = index - activeIndex;

                    const isActive = index === activeIndex;

                    return (
                        <section
                            key={photo.id}
                            className="relative flex h-screen snap-center items-center justify-center"
                            style={{
                                transformStyle: 'preserve-3d',
                            }}
                        >

                            {/* 3D Card */}
                            <div
                                className="relative w-[78vw] max-w-[420px] sm:w-[60vw]"
                                style={{
                                    transform: `
                                        translateZ(${isActive ? 80 : -Math.abs(distance) * 180}px)
                                        rotateY(${distance * 8}deg)
                                        scale(${isActive ? 1 : 0.82})
                                    `,
                                    opacity:
                                        Math.abs(distance) > 2
                                            ? 0
                                            : 1 - Math.abs(distance) * 0.25,
                                    transition:
                                        'transform 700ms cubic-bezier(0.22,1,0.36,1), opacity 500ms ease',
                                    transformStyle: 'preserve-3d',
                                }}
                            >

                                {/* Glow */}
                                <div
                                    className={`absolute -inset-3 rounded-[28px] bg-pink-500/30 blur-2xl transition-opacity duration-700 ${isActive
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                        }`}
                                />

                                {/* Image Frame */}
                                <div
                                    className={`relative overflow-hidden rounded-[24px] border ${isActive
                                        ? 'border-pink-300/50'
                                        : 'border-white/10'
                                        } bg-zinc-950 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.8)]`}
                                >

                                    <div className="relative aspect-[3/4] overflow-hidden rounded-[18px]">

                                        <img
                                            src={photo.src}
                                            alt={photo.title}
                                            className="h-full w-full object-cover"
                                            draggable="false"
                                        />

                                        {/* Dark cinematic overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                        {/* Pink light */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10" />

                                        {/* Text */}
                                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">

                                            <div className="mb-2 text-xs uppercase tracking-[0.35em] text-pink-300/80">
                                                Memory {String(index + 1).padStart(2, '0')}
                                            </div>

                                            <h2 className="font-['Great_Vibes'] text-3xl text-white sm:text-4xl">
                                                {photo.title}
                                            </h2>

                                            <p className="mt-2 font-['Cormorant_Garamond'] text-base italic text-white/80 sm:text-lg">
                                                {photo.caption}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </section>
                    );
                })}

                {/* Final message */}
                {/* Final message */}
                <section className="flex h-screen snap-center items-center justify-center px-6">

                    <div className="text-center pt-24">

                        <div className="mb-5 text-2xl text-pink-400">
                            💗 ✨ 🫶 ✨ 💗
                        </div>

                        <h2 className="font-['Great_Vibes'] text-5xl text-pink-100 sm:text-6xl">
                            To Be Continued...
                        </h2>

                        <p className="mt-4 font-['Cormorant_Garamond'] text-xl italic text-pink-200/70">
                            Because I want to make
                            <br />
                            a thousand more memories with you.
                        </p>

                        {/* Love Letter Button */}
                        <button
                            type="button"
                            onClick={() => Navigate('/loveLetter')}
                            className="mt-8 rounded-full border border-pink-400/40 bg-pink-500/10 px-7 py-3 font-['Cormorant_Garamond'] text-lg text-pink-100 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:bg-pink-500/20 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]"
                        >
                            💌 Read My Love Letter
                        </button>

                    </div>

                </section>


            </div>

            {/* Scroll indicator */}
            <div className="pointer-events-none absolute bottom-7 left-1/2 z-50 -translate-x-1/2 text-center">

                <div className="mb-2 text-[10px] uppercase tracking-[0.4em] text-white/40">
                    Scroll
                </div>

                <div className="mx-auto h-10 w-5 rounded-full border border-white/20 p-1">

                    <div className="mx-auto h-2 w-1 rounded-full bg-pink-400 animate-bounce" />

                </div>

            </div>

            {/* Progress */}
            <div className="absolute bottom-8 right-5 z-50 text-right">

                <div className="font-['Cormorant_Garamond'] text-sm text-white/40">
                    {String(activeIndex + 1).padStart(2, '0')}
                    {' / '}
                    {String(photos.length).padStart(2, '0')}
                </div>

            </div>

        </div>
    );
};

export default Album;
