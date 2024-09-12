import React from 'react';
import { FaTrophy, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { RiFootprintFill } from "react-icons/ri";


const PastYearFacts = () => {
    const facts = [
        { icon: FaTrophy, value: '668', label: 'In Prize To Be Won' },
        { icon: FaUsers, value: '3589+', label: 'Participants' },
        { icon: FaCalendarAlt, value: '82+', label: 'Events' },
        { icon: RiFootprintFill, value: '7500', label: 'Footfall' },
    ];

    return (
        <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10">
                    Some Last Year Facts
                </h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {facts.map((fact, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 overflow-hidden shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl w-64"
                        >
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex items-center justify-center mb-3">
                                    <fact.icon className="h-10 w-10 text-indigo-400" />
                                </div>
                                <div className="text-2xl font-semibold text-white text-center">
                                    {fact.value}
                                </div>
                                <div className="mt-1 text-sm text-gray-300 text-center">
                                    {fact.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PastYearFacts;