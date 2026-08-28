import React, { useEffect, useState } from 'react';
import { FourSquare } from 'react-loading-indicators';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Password = () => {
    const user = JSON.parse(localStorage.getItem('madam'));
    const name = user?.name;

    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [loading, setLoading] = useState(true);

    // Initial page loader
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const myPassword = '050809';

        if (password !== myPassword) {
            toast.error('Password Bhul Gayi Kutti 😂');
            setPassword('');
        } else {
            navigate('/question');
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;

        // Only allow numbers
        if (/^\d*$/.test(value)) {
            setPassword(value);
        }
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#FDF2F4] via-[#FCE7F3] to-[#F5D0D9] px-4">

            {loading ? (
                <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                    <FourSquare
                        color="#e11d48"
                        size="medium"
                        text=""
                        textColor=""
                    />

                    <p className="font-['Cormorant_Garamond'] text-lg text-rose-900">
                        Ready Raho {name} Jii 😁
                    </p>
                </div>
            ) : (

                <div className="w-full max-w-[340px] animate-float rounded-3xl bg-white p-6 text-center shadow-[0_0_30px_rgba(124,119,119,0.35)]">

                    {/* Header */}
                    <div className="mb-5">
                        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-3xl shadow-inner">
                            🔐
                        </div>

                        <h1 className="text-2xl font-bold text-pink-600">
                            Heyy {name} 💗
                        </h1>

                        <p className="mt-2 font-['Cormorant_Garamond'] text-lg text-gray-600">
                            Enter The Secret Password 🫣
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col"
                    >

                        <label
                            htmlFor="password"
                            className="mb-2 text-left text-lg font-semibold text-gray-700"
                        >
                            Password 😉
                        </label>

                        {/* Password Input */}
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                maxLength={6}
                                inputMode="numeric"
                                autoComplete="off"
                                onChange={handlePasswordChange}
                                placeholder="Enter 6 digit password..."
                                className="w-full rounded-xl border border-pink-200 bg-pink-50/40 px-4 py-3 pr-20 text-center text-lg tracking-[0.3em] outline-none transition focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200"
                            />

                            {/* Show / Hide */}
                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword((prev) => !prev)
                                }
                                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-sm font-semibold text-pink-500 transition hover:bg-pink-100 hover:text-pink-700"
                            >
                                {showPassword ? 'Hide 🙈' : 'Show 👀'}
                            </button>
                        </div>

                        {/* Hint Button */}
                        <button
                            type="button"
                            onClick={() =>
                                setShowHint((prev) => !prev)
                            }
                            className="mt-3 self-start text-sm font-semibold text-pink-500 underline decoration-dotted underline-offset-4 transition hover:text-pink-700"
                        >
                            {showHint ? 'Hide Hint 🤫' : 'Need a Hint? 💡'}
                        </button>

                        {/* Hint */}
                        {showHint && (
                            <div className="mt-3 rounded-xl border border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50 px-4 py-3 text-left shadow-sm">

                                <p className="text-sm font-semibold text-rose-700">
                                    💡 Hint
                                </p>

                                <p className="mt-1 font-['Cormorant_Garamond'] text-base text-gray-600">
                                    It's a special date... 🤭
                                </p>

                                <p className="mt-1 text-xs text-pink-400">
                                    DDMMYY format 😉
                                </p>

                            </div>
                        )}

                        {/* Unlock */}
                        <button
                            type="submit"
                            disabled={password.length !== 6}
                            className="mt-5 w-full rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-3 font-semibold text-white shadow-lg shadow-pink-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:from-pink-200 disabled:to-rose-200 disabled:shadow-none"
                        >
                            Unlock My Heart 💌
                        </button>

                    </form>

                    {/* Bottom */}
                    <p className="mt-5 text-xs italic text-gray-400">
                        Only you can unlock this 💗
                    </p>

                </div>
            )}

            <ToastContainer />
        </div>
    );
};

export default Password;