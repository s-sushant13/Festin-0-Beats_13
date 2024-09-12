/* eslint-disable */


import Link from "next/link";
import { Anton } from "next/font/google";
import localFont from 'next/font/local'


import TechnicalHead from "./TechHead";
import Core from "./core";
import Cultural from "./cultural";
import Literary from "./literary";
import Technical from "./technical";
import FineArts from "./fineArts";

const pricedown = localFont({
    src: './../assets/fonts/pricedown.ttf',
})

const anton = Anton({
    subsets: ["latin-ext"],
    weight: ["400"],
});

const TeamPage = () => {
    return (
        <div className=" flex flex-col gap-5">
            <TechnicalHead />
            <Core />
            <Cultural />
            <Literary />
            <Technical />
            <FineArts />

        </div>
    );
}

export default TeamPage;