import React from 'react';
import { Roboto, Anton } from "next/font/google";
import Heading from "./Heading";
import { motion } from "framer-motion";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

const anton = Anton({
    subsets: ['latin-ext'],
    weight: ["400"],
});

const Glimpse = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-8"
        >
            <div className="w-full md:w-2/3 lg:w-3/4 mb-8 md:mb-0 md:pr-8">
                <img
                    src='/last.png'
                    alt='Glimpse of Festin-O-Bests 12.0'
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </div>

            <div className="w-full md:w-1/3 lg:w-1/4">
                <Heading>Glimpse of Festin-O-Bests 12.0</Heading>

                <div className={`text-base text-center md:text-left mt-4 ${roboto.className}`}>
                    <p>
                        Here's a glimpse of last year's highlights—milestones, achievements, and memorable moments that shaped our journey. Let's make this year even better!
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Glimpse;