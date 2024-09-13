/* eslint-disable */


import { useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import { Anton, } from "next/font/google";
import { motion } from "framer-motion";

import { FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa6";

import { Rubik_Mono_One } from "next/font/google";
import { FaFacebook } from "react-icons/fa6";


const rubik = Rubik_Mono_One({
    subsets: ["latin-ext"],
    weight: ["400"],
});


const pricedown = localFont({
    src: "./../assets/fonts/pricedown.ttf",
});

const anton = Anton({
    subsets: ["latin-ext"],
    weight: ["400"],
});

export default function Hero() {


    return (
        <>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="bg-[url(/Hero.webp)] bg-cover bg-center md:bg-cover bg-no-repeat h-screen flex justify-center items-center transition-all"
            >
                <div className="bg-gradient-to-t from-black to-transparent md:bg-gradient-to-r md:from-black md:to-transparent h-screen w-screen flex flex-col md:flex-row items-center justify-around mx-auto">
                    <div className="text-white flex flex-col mt-20 items-center md:items-start gap-5">
                        <div className="flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                            >
                                <img
                                    src="/logo.png"
                                    alt="Logo"
                                    className="mx-auto h-32 w-64 sm:h-40 sm:w-80 md:h-48 md:w-96 object-contain"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 1.1 }}
                                className="flex flex-col md:flex-row gap-3 mt-5 mx-auto md:mx-0"
                            >
                                <div className="w-24 sm:w-28 md:w-32 mx-auto md:mx-0">
                                    <p className={`text-sm md:text-lg text-center ${anton.className}`}>
                                        Organised by
                                    </p>
                                    <img src="/newlogo.webp" alt="8-9 oct" className="w-full" />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="bg-black p-3 bg-opacity-40 backdrop-blur-lg rounded-lg mt-5 md:mt-0">
                        <div className={`flex justify-center text-center items-center ${rubik.className}`}>
                            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-4 py-2">
                                Registration<br />
                                Open!!
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.5 }}
                    className="absolute bottom-10 right-10 md:flex hidden flex-col gap-2"
                >
                    <div className={`text-xl ${anton.className}`}>Follow Us</div>

                    <div className="flex gap-7">


                        <Link href="https://www.facebook.com/abesit.in">

                            <FaFacebook className="" size={25} />
                        </Link>
                        <Link href="https://www.linkedin.com/school/abesit-college-of-engineering/posts/?feedView=all">
                            <FaLinkedin className="" size={25} />
                        </Link>

                        <Link href="https://www.instagram.com/abesit_ghaziabad/?hl=en">
                            <FaInstagram className="" size={25} />
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}


