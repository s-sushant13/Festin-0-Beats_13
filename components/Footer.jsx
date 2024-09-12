/* eslint-disable */


import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { Anton } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";

const anton = Anton({
    subsets: ["latin-ext"],
    weight: ["400"],
});
function Footer() {
    return (
        <>
            <footer
                id="contact"
                className={`px-6 sm:px-12 md:px-24 py-10 mt-5 bg-black ${anton.className} tracking-widest border-t border-gray-500`}
            >
                {/* Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo Section */}
                    <div className="flex gap-8 items-center flex-col md:flex-row">
                        <Image src="/newlogo.webp" width={120} height={10} />
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={200}
                            height={50}
                            className="mb-2"
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-5">
                        <Link href="/#about">
                            <p className="text-white text-[16px]">About</p>
                        </Link>
                        <Link href="/events">
                            <p className="text-white text-[16px]">Events</p>
                        </Link>
                        <Link href="https://chatgpt.com/">
                            <p className="text-white text-[16px]">Register</p>
                        </Link>
                    </div>

                    {/* Social Links and Contact */}
                    <div className="flex flex-col gap-4 items-center">
                        <p className="text-white text-2xl mb-2">Find us at:</p>
                        <div className="flex gap-4">
                            <Link href="https://www.facebook.com/abesit.in">

                                <FaFacebook className="text-gray-500 transition-all text-3xl hover:text-blue-500 hover:scale-90" />
                            </Link>
                            <Link href="https://www.linkedin.com/school/abesit-college-of-engineering/posts/?feedView=all">
                                <FaLinkedin className="text-gray-500 transition-all text-3xl hover:text-indigo-400 hover:scale-90" />
                            </Link>

                            <Link href="https://www.instagram.com/abesit_ghaziabad/?hl=en">
                                <FaInstagram className="text-gray-500 transition-all text-3xl hover:text-pink-600 hover:scale-90" />
                            </Link>
                        </div>
                        <div className="flex items-center gap-1">
                            <MdAlternateEmail className="text-white" />
                            <p className="text-white text-sm">
                                info@abesit.in</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="mt-6" />

                {/* Footer Bottom */}
                <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-white text-center md:text-left">
                        © Copyright ABESIT. All Right Reserved
                    </p>
                    <p className="text-sm text-white text-center md:text-left">
                        Looking forward to seeing you all at the event!
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
