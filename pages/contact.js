// import Heading from '@/components/Heading'
import React from 'react'
import { Anton } from 'next/font/google'
// import { FaBusAlt } from "react-icons/fa";
import { IoAirplaneOutline } from "react-icons/io5";
import { IoTrainOutline } from "react-icons/io5";
import { TbBus } from "react-icons/tb";
// import localFont from 'next/font/local'
import Link from 'next/link';
import { FaExternalLinkAlt } from "react-icons/fa";
import Head from 'next/head';
import { Roboto } from "next/font/google";
import localFont from 'next/font/local'


const pricedown = localFont({
    src: './../assets/fonts/pricedown.ttf',
})

const chalet = localFont({
    src: './../assets/fonts/ChaletComprime-CologneSixty.ttf'
})


// const pricedown = localFont({
//     src: './../assets/fonts/pricedown.ttf',
// })

// const chalet = localFont({
//     src: './../assets/fonts/ChaletComprime-CologneSixty.ttf'
// })

// const chaletLondon = localFont({})


const anton = Anton({
    subsets: ['latin-ext'],
    weight: ["400"],
})

const studentCoordinators = [
    { name: "Keshav Malik", phone: "+91 8800134039" },
    { name: "Pranav Tripathi", phone: "+91 9560993089" },
    { name: "Kanishk Chaurasia", phone: "+91 9312442192" },
    { name: "Mridul Goel", phone: "+91 8375832267" },
    { name: "Sushant Sharma", phone: "+91 9103226627" },
];

const facultyCoordinators = [
    { name: "Dr. Sandeep Kumar", phone: "+91 9953867649" },
    { name: "Prof. Avdhesh Kr Tiwari", phone: "+91 8887793030" },
    { name: "Prof. Satyendra Singh", phone: "+91 7877075767" }
]

const contact = () => {
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <div className='flex flex-col md:pt-32 md:px-10 px-5 gap-10'>
                <div className=''>
                    <div className={`${chalet.className} text-5xl`} >
                    How Can We Help at Festin-O-Beats?

                    </div>


                    <div className={`text-md md:text-lg text-gray-200 text-left`}>
                    Have questions about events, registration, or the venue? <br />
                    We're here to help! Reach out for any assistance related to Festin-O-Beats.
                    </div>

                    <div className='mt-10'>
                        <div className={`text-xl md:text-3xl text-left mb-3 ${anton.className}`}>
                            Reaching <span className='text-michael-blue'>ABES Institute of Technology,Ghaziabad</span>
                        </div>
                        <div>
                            <iframe
                                width="100%"
                                height="300"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ABESIT+(Hacknovate%205.0)&amp;t=p&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                className='rounded-2xl'
                            />
                        </div>
                    </div>
                </div>



                <div className="flex justify-between py-8 md:flex-row flex-col md:gap-0 gap-10">
                    <div className='grid md:grid-cols-2'>
                        <div className={`flex flex-col text-md`}>
                            <h2 className='text-xl font-semibold mb-2'>Student Co-ordinators</h2>
                            {studentCoordinators.map((item, index) => (
                                <div key={index} className="mb-2">
                                    <span className="font-light">{item.name} :</span>
                                    <a href={`tel:${item.phone}`} className="ml-2 text-blue-500 hover:underline">{item.phone}</a>
                                </div>
                            ))
                            }

                        </div>
                        <div className={`flex flex-col text-md`}>
                            <h2 className='text-xl font-semibold mb-2'>Faculty Co-ordinators</h2>
                            {facultyCoordinators.map((item, index) => (
                                <div key={index} className="mb-2">
                                    <span className="font-light">{item.name} :</span>
                                    <a href={`tel:${item.phone}`} className="ml-2 text-blue-500 hover:underline">{item.phone}</a>
                                </div>
                            ))
                            }

                        </div>

                    </div>

                    <div>
                        <div className={`${chalet.className} text-4xl`}> Address </div>
                        <div className={`text-lg`}>
                            ABES Institute of Technology, 19th km Stone, NH-24, Ghaziabad, Uttar Pradesh, 201009
                        </div>
                        <Link className='flex gap-2 items-center text-blue-400' target='_blank' href={'https://maps.app.goo.gl/oa1oGENZECBd6jyB7'}> <FaExternalLinkAlt stroke='1' /> <span> Google Maps</span> </Link>
                    </div>

                </div>

            </div>
        </>

    )
}

export default contact