import React, { useEffect, useState } from "react";
import EnterName from "./EnterName";

const TARGET_DATE = new Date("2026-08-29T00:00:00");

export default function CountDown() {
    const [timeLeft, setTimeLeft] = useState(
        getTimeLeft(TARGET_DATE)
    );

    const [finished, setFinished] = useState(
        new Date().getTime() >= TARGET_DATE.getTime()
    );

    useEffect(() => {
        const timer = setInterval(() => {
            const remaining = getTimeLeft(TARGET_DATE);

            setTimeLeft(remaining);

            // Timer finished
            if (
                remaining.days === 0 &&
                remaining.hours === 0 &&
                remaining.minutes === 0 &&
                remaining.seconds === 0
            ) {
                setFinished(true);
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Show EnterName after countdown finishes
    if (finished) {
        return <EnterName />;
    }

    return (
        <section className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#07080d] px-3 py-8 text-white sm:px-6 sm:py-12">
            <div className="w-full max-w-5xl text-center">

                {/* Heading */}
                <div className="mb-6 sm:mb-8 md:mb-10">
                    <p className="mb-2 text-[12px] font-bold tracking-[0.2em] text-indigo-400 sm:text-xs sm:tracking-[0.3em]">
                        SOMETHING SPECIAL IS COMING
                    </p>

                    <h1 className="text-[clamp(2rem,8vw,4.5rem)] font-bold leading-tight tracking-tight">
                        Count Down
                    </h1>
                </div>

                {/* Countdown */}
                <div className="grid w-full grid-cols-4 gap-1.5 sm:gap-3 md:gap-6">

                    <CountdownBox
                        value={timeLeft.days}
                        label="Days"
                    />

                    <CountdownBox
                        value={timeLeft.hours}
                        label="Hours"
                    />

                    <CountdownBox
                        value={timeLeft.minutes}
                        label="Minutes"
                    />

                    <CountdownBox
                        value={timeLeft.seconds}
                        label="Seconds"
                        highlight
                    />

                </div>
            </div>
        </section>
    );
}

function CountdownBox({
    value,
    label,
    highlight = false,
}) {
    return (
        <div
            className={` flex min-w-0 flex-col items-center justify-center rounded-lg border px-1.5 py-3 sm:rounded-xl sm:px-3 sm:py-5 md:rounded-2xl md:px-5 md:py-7
                ${highlight ? "border-indigo-400/40 bg-indigo-500/10 shadow-[0_0_25px_rgba(99,102,241,0.15)]" : "border-white/10 bg-white/[0.04]"
                }
            `}
        >
            <div
                className={`
                    font-bold
                    tabular-nums
                    leading-none
                    text-[clamp(1.5rem,8vw,4rem)]

                    ${highlight
                        ? "text-indigo-300"
                        : "text-white"
                    }
                `}
            >
                {String(value).padStart(2, "0")}
            </div>

            <div className="mt-2 text-[7px] font-medium uppercase tracking-[0.12em] text-white/40 sm:text-[10px] sm:tracking-[0.2em] md:text-xs">
                {label}
            </div>
        </div>
    );
}

function getTimeLeft(targetDate) {
    const now = Date.now();
    const target = new Date(targetDate).getTime();

    const difference = Math.max(target - now, 0);

    return {
        days: Math.floor(
            difference / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        ),

        minutes: Math.floor(
            (difference / (1000 * 60)) % 60
        ),

        seconds: Math.floor(
            (difference / 1000) % 60
        ),
    };
}