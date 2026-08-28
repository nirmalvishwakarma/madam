import React, { useState } from 'react';

const photos = [
    {
        id: 1,
        src: '/photos/photo1.jpg',
        title: 'The Beginning 💗',
        caption: 'Where our little story started...',
    },
    {
        id: 2,
        src: '/photos/photo2.jpg',
        title: 'That Smile 🥰',
        caption: 'One smile, and my whole day gets better.',
    },
    {
        id: 3,
        src: '/photos/photo3.jpg',
        title: 'Beautiful You 🌸',
        caption: 'Some moments deserve to be remembered forever.',
    },
    {
        id: 4,
        src: '/photos/photo4.jpg',
        title: 'My Favorite Person 🫶',
        caption: 'Out of everyone, somehow I found you.',
    },
    {
        id: 5,
        src: '/photos/photo5.jpg',
        title: 'A Little Memory ✨',
        caption: 'A small moment that means a lot to me.',
    },
    {
        id: 6,
        src: '/photos/photo6.jpg',
        title: 'Us ❤️',
        caption: 'And hopefully, many more memories to come.',
    },
];

const Album = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const nextPhoto = () => {
        const currentIndex = photos.findIndex(
            (photo) => photo.id === selectedPhoto.id
        );

        const nextIndex =
            (currentIndex + 1) % photos.length;

        setSelectedPhoto(photos[nextIndex]);
    };

    const previousPhoto = () => {
        const currentIndex = photos.findIndex(
            (photo) => photo.id === selectedPhoto.id
        );

        const previousIndex =
            (currentIndex - 1 + photos.length) %
            photos.length;

        setSelectedPhoto(photos[previousIndex]);
    };

    return (
        <div className="min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 px-4 py-10 sm:px-6">

            {/* Background decoration */}
            <div className="pointer-events-none fixed left-[-80px] top-[-80px] h-64 w-64 rounded-full bg-pink-300/20 blur-3xl" />

            <div className="pointer-events-none fixed bottom-[-80px] right-[-80px] h-72 w-72 rounded-full bg-rose-300/20 blur-3xl" />

            {/* Main */}
            <div className="relative z-10 mx-auto max-w-5xl">

                {/* Header */}
                <div className="mb-10 text-center">

                    <div className="mb-3 text-xl tracking-[0.5em] text-rose-400">
                        ♥ ♥ ♥
                    </div>

                    <h1 className="font-['Great_Vibes'] text-4xl text-rose-800 sm:text-5xl md:text-6xl">
                        Our Little Memories
                    </h1>

                    <p className="mx-auto mt-3 max-w-lg font-['Cormorant_Garamond'] text-lg italic text-rose-700 sm:text-xl">
                        Every picture holds a moment,
                        <br />
                        and every moment reminds me of you. 💗
                    </p>

                </div>


                {/* Album */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">

                    {photos.map((photo, index) => (
                        <button
                            key={photo.id}
                            type="button"
                            onClick={() => setSelectedPhoto(photo)}
                            className={`
                                group relative overflow-hidden
                                rounded-2xl
                                bg-white
                                p-2
                                shadow-lg
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                hover:rotate-1
                                hover:shadow-2xl
                                focus:outline-none
                                focus:ring-2
                                focus:ring-rose-400

                                ${
                                    index % 3 === 1
                                        ? 'md:translate-y-5'
                                        : ''
                                }
                            `}
                        >

                            {/* Image */}
                            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">

                                <img
                                    src={photo.src}
                                    alt={photo.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                {/* Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                                {/* Heart */}
                                <span className="absolute right-3 top-3 text-xl opacity-0 drop-shadow-md transition duration-300 group-hover:opacity-100">
                                    💗
                                </span>

                                {/* Caption */}
                                <div className="absolute bottom-0 left-0 right-0 p-3 text-left">

                                    <h2 className="font-['Great_Vibes'] text-xl text-white sm:text-2xl">
                                        {photo.title}
                                    </h2>

                                    <p className="mt-1 line-clamp-2 font-['Cormorant_Garamond'] text-sm text-white/90">
                                        {photo.caption}
                                    </p>

                                </div>

                            </div>

                        </button>
                    ))}

                </div>


                {/* Bottom message */}
                <div className="mt-14 text-center">

                    <div className="mx-auto h-px w-24 bg-rose-300" />

                    <p className="mt-6 font-['Great_Vibes'] text-3xl text-rose-700 sm:text-4xl">
                        To Be Continued... 💌
                    </p>

                    <p className="mt-2 font-['Cormorant_Garamond'] text-lg italic text-rose-600">
                        Because I want to make a thousand more memories with you.
                    </p>

                    <div className="mt-4 text-xl">
                        💗 ✨ 🫶 ✨ 💗
                    </div>

                </div>

            </div>


            {/* ==========================================
                FULLSCREEN PHOTO VIEWER
            ========================================== */}

            {selectedPhoto && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedPhoto(null)}
                >

                    {/* Close */}
                    <button
                        type="button"
                        onClick={() => setSelectedPhoto(null)}
                        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl text-white backdrop-blur transition hover:bg-white/30"
                    >
                        ✕
                    </button>


                    {/* Previous */}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            previousPhoto();
                        }}
                        className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur transition hover:bg-white/30 sm:left-6"
                    >
                        ‹
                    </button>


                    {/* Photo */}
                    <div
                        className="relative flex max-h-[90vh] max-w-3xl flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <img
                            src={selectedPhoto.src}
                            alt={selectedPhoto.title}
                            className="max-h-[70vh] max-w-full rounded-2xl object-contain shadow-2xl"
                        />

                        <div className="mt-4 text-center">

                            <h2 className="font-['Great_Vibes'] text-3xl text-white sm:text-4xl">
                                {selectedPhoto.title}
                            </h2>

                            <p className="mt-1 font-['Cormorant_Garamond'] text-base text-white/80 sm:text-lg">
                                {selectedPhoto.caption}
                            </p>

                        </div>

                    </div>


                    {/* Next */}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextPhoto();
                        }}
                        className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur transition hover:bg-white/30 sm:right-6"
                    >
                        ›
                    </button>

                </div>
            )}

        </div>
    );
};

export default Album;