/* eslint-disable */


import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { motion } from "framer-motion";
import { Anton } from 'next/font/google'
import Heading from "./Heading";




const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

const anton = Anton({
    subsets: ['latin-ext'],
    weight: ["400"],
})

const pricedown = localFont({
    src: "./../assets/fonts/pricedown.ttf",
});

const About = () => {
    return (



        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl bg-[url(/about.jpg)] bg-cover bg-no-repeat flex flex-col justify-center items-center w-full py-10 sm:py-16 md:py-20 gap-6 sm:gap-8 md:gap-10"
            id="about"
        >
            <div className="flex">
                <Heading>What is Feastin-O-Beats 13.0 ?</Heading>
            </div>

            <div className="flex justify-center w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                <p className="text-sm sm:text-base md:text-lg font-medium text-center max-w-4xl">
                    The College Annual Fest is a celebration that allows your creativity to take flight, helping you discover your potential as a performer while unveiling hidden talents in a variety of forms. The festive atmosphere draws students from various colleges to a shared platform designed to boost confidence in numerous ways. Whether it's leadership, teamwork, organization, collaboration, or cultural exchange, Festin-O-Beats 13.0 embodies it all with flair. We warmly invite you to be part of the excitement and contribute to making this year's event as successful as ever!
                </p>
            </div>
        </motion.div>
    );
};

export default About;

