import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { FourSquare } from 'react-loading-indicators';

const EnterName = () => {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = () => {
        if (!name.trim()) {
            toast.error('Naam Likh Bhi Lo Madam Jii 😁');
            return;
        }

        localStorage.setItem(
            'madam',
            JSON.stringify({
                name: name.trim(),
            })
        );

        setIsSubmitting(true);

        setTimeout(() => {
            navigate('/password');
        }, 1200);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100 px-4">

            {/* Background glow */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-pink-300/30 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-rose-300/30 blur-3xl" />

            {/* Loading */}
            {loading ? (
                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                    <FourSquare
                        color="#e11d48"
                        size="medium"
                        text=""
                        textColor=""
                    />

                    <p className="font-['Great_Vibes'] text-lg font-semibold text-rose-900">
                        Wait Madam Jii... 🫣💗
                    </p>

                </div>
            ) : (

                /* Main Card */
                <div className="relative z-10 w-full max-w-sm">

                    <div className="rounded-3xl border border-white/80 bg-white/70 p-5 shadow-[0_15px_50px_rgba(190,24,93,0.18)] backdrop-blur-xl sm:p-6">

                        {/* Header */}
                        <div className="flex items-center gap-4">

                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 text-3xl shadow-lg shadow-rose-300/30">
                                💗
                            </div>

                            <div>
                                <p className="font-['Cormorant_Garamond'] text-sm font-semibold uppercase tracking-wider text-rose-400">
                                    Welcome
                                </p>

                                <h1 className="font-['Great_Vibes'] text-3xl text-rose-700">
                                    Heyy Madam Jii
                                </h1>
                            </div>

                        </div>

                        {/* Description */}
                        <p className="mt-5 font-['Cormorant_Garamond'] text-lg leading-6 text-rose-900/75">
                            Bas ek chhoti si cheez bata do...
                            <br />
                            <span className="font-semibold text-rose-700">
                                Aapka naam kya hai? 🫣
                            </span>
                        </p>

                        {/* Input */}
                        <div className="mt-5">

                            <label
                                htmlFor="name"
                                className="mb-2 block font-['Cormorant_Garamond'] text-base font-semibold text-rose-900"
                            >
                                Your Name 💕
                            </label>

                            <div className="relative">

                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                                    🥰
                                </span>

                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    maxLength={30}
                                    autoComplete="off"
                                    placeholder="Enter your name..."
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                    onKeyDown={handleKeyDown}
                                    className="w-full rounded-xl border border-rose-200 bg-white/80 py-3 pl-11 pr-4 font-['Cormorant_Garamond'] text-lg text-rose-900 outline-none transition focus:border-rose-400 focus:ring-4 focus:ring-rose-200/40"
                                />

                            </div>

                        </div>

                        {/* Button */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 py-3 font-['Cormorant_Garamond'] text-lg font-bold text-white shadow-lg shadow-rose-300/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:cursor-wait disabled:opacity-70"
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="animate-spin">
                                        💗
                                    </span>
                                    Please wait...
                                </>
                            ) : (
                                <>
                                    Continue
                                    <span className="transition group-hover:translate-x-1">
                                        →
                                    </span>
                                </>
                            )}
                        </button>

                        {/* Footer */}
                        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-rose-400">
                            <span>Made with</span>
                            <span className="text-sm">💗</span>
                            <span>just for you</span>
                        </div>

                    </div>

                </div>
            )}

            <ToastContainer
                position="top-center"
                autoClose={2500}
                theme="colored"
            />
        </div>
    );
};

export default EnterName;