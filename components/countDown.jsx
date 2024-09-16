import { useEffect, useState } from 'react';
import { Rubik_Mono_One } from "next/font/google";

const rubik = Rubik_Mono_One({
    subsets: ["latin-ext"],
    weight: ["400"],
});

const CountdownTimer = () => {
    const [countdown, setCountdown] = useState('');
    const [festStarted, setFestStarted] = useState(false);

    const calculateCountdown = () => {
        const festStartDate = new Date('2024-10-08T00:00:00').getTime();
        const now = new Date().getTime();
        const distance = festStartDate - now;

        if (distance < 0) {
            setCountdown('');
            setFestStarted(true);
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Format all digits to always have two digits
            const formattedSeconds = seconds.toString().padStart(2, '0');
            const formattedMinutes = minutes.toString().padStart(2, '0');
            const formattedHours = hours.toString().padStart(2, '0');
            const formattedDays = days.toString().padStart(2, '0');

            setCountdown(`${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
            setFestStarted(false);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(calculateCountdown, 1000);


        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={`flex flex-col justify-center w-full text-center items-center ${rubik.className}`}>
            <div className="text-xl sm:text-xl md:text-2xl mb-2 text-[#EAC885]">
                {festStarted ? 'FEST BEGINS' : 'MEGA FEST COUNTDOWN'}
            </div>
            {!festStarted && (
                <div className="text-2xl sm:text-xl md:text-3xl">{countdown}</div>
            )}
        </div>
    );
};

export default CountdownTimer;