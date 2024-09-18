import { useEffect, useState } from 'react';
import { Rubik_Mono_One } from "next/font/google";

const rubik = Rubik_Mono_One({
    subsets: ["latin-ext"],
    weight: ["400"],
});

const CountdownTimer = () => {
    const [countdown, setCountdown] = useState('');
    const [registrationEnded, setRegistrationEnded] = useState(false);

    const calculateCountdown = () => {
        const registrationEndDate = new Date('2024-10-01T00:00:00').getTime(); // Updated to October 1st
        const now = new Date().getTime();
        const distance = registrationEndDate - now;

        if (distance < 0) {
            setCountdown('');
            setRegistrationEnded(true);
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const formattedSeconds = seconds.toString().padStart(2, '0');
            const formattedMinutes = minutes.toString().padStart(2, '0');
            const formattedHours = hours.toString().padStart(2, '0');
            const formattedDays = days.toString().padStart(2, '0');

            setCountdown(`${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
            setRegistrationEnded(false);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(calculateCountdown, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={`flex flex-col justify-center w-full text-center items-center ${rubik.className}`}>
            <div className="text-xl sm:text-xl md:text-2xl mb-2 text-[#EAC885]">
                {registrationEnded ? 'REGISTRATION CLOSED' : 'REGISTRATION ENDS IN'}
            </div>
            {!registrationEnded && (
                <div className="text-2xl sm:text-xl md:text-3xl">{countdown}</div>
            )}
        </div>
    );
};

export default CountdownTimer;
