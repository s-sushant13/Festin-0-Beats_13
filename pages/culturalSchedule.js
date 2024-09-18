/* eslint-disable */

import React from 'react'
import { Anton } from 'next/font/google'
import { motion } from 'framer-motion'
import Heading from '@/components/Heading'

const anton = Anton({
    subsets: ['latin'],
    weight: ["400"],
})

const data = [
  {
    "ques": "Solo/Duet/Group Singing",
    "ans": "• Team size: Solo - 1, Duet - 2, Group - 4-6 members\n• The competition has two rounds.\n• Round 1: Free genre selection.\n• Round 2: Genre given by judges, song of choice.\n• Duration: Round 1 - 3 minutes, Round 2 - 4-5 minutes\n• Songs must be in Hindi.\n• No inappropriate content.\n• Tracks should be submitted two days before the performance.\n• Dress code must be followed.\n• Performer must remain on stage.\n• Committee can cancel any performance deemed inappropriate."
  },
  {
    "ques": "Solo/Duet/Group Dancing",
    "ans": "• Team size: Solo - 1, Duet - 2, Group - 3-16 members\n• Songs must be free of offensive language.\n• Tracks must be provided 48 hours in advance.\n• Dress code should match the performance.\n• Props are allowed only in group performances.\n• Duration: Solo/Duet - Round 1: 3 minutes, Round 2: 4-5 minutes, Group - Round 1: 4-5 minutes, Round 2: 7-8 minutes\n• Committee reserves the right to cancel any inappropriate performance."
  },
  {
    "ques": "Skit and Stand-up Comedy",
    "ans": "• Script must be approved by the committee.\n• No double-meaning dialogues.\n• Theme must be based on social issues.\n• Props allowed with prior permission.\n• Team size: Maximum 12 members\n• Duration: 15 minutes\n• Dress code must be followed.\n• Committee reserves the right to cancel any offensive performance."
  },
  {
    "ques": "Nukkad Natak (Street Play)",
    "ans": "• Pre-registration of the script is mandatory.\n• Original content only, no copying.\n• Team size: 6-15 members\n• Duration: 12-20 minutes\n• Props allowed with prior confirmation.\n• Play may be in Hindi or English.\n• No abusive language allowed.\n• Evaluation based on creativity, clarity, and relevance.\n• Performances held in open space, no microphones or sound systems allowed.\n• Use of DHOL and household articles is permitted."
  },
  {
    "ques": "Fashion Show",
    "ans": "• Two rounds: Ramp walk and judges' round\n• Ramp walk includes introduction and talent show, judges' round includes a questioning session.\n• Participants must arrange their own outfits.\n• Ramp chart provided one hour before the show.\n• Dress code must be decent.\n• Committee can cancel any performance deemed offensive."
  },
  {
    "ques": "Follow the Beats",
    "ans": "• Music genre can vary, songs will be shuffled.\n• Any inappropriate actions result in disqualification.\n• Judges' decision is final and binding."
  },
  {
    "ques": "Battle of Bands",
    "ans": "• Bands must register 3 days before the event.\n• Bands should arrive one hour before the event.\n• Songs must be Sufi; no metal or hard rock allowed.\n• Band size: Maximum 10 members\n• Duration: Maximum 20 minutes\n• No offensive words or actions allowed.\n• Committee can cancel any performance deemed inappropriate.\n• The Band members will not be granted permission to enter the audience in between performance."
  },
  
];

  
export default function culturalSchedule() {
  return (

        <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="w-11/12 mx-auto py-12 my-6"
    >
      <div>
        <Heading>Cultural Events</Heading>
      </div>
      <div className="space-y-4">
        {data.map((item, index) => (
          <details
            key={index}
            className="group [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 border-b-2 pb-3">
              <h2 className="font-medium">{item.ques}</h2>
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-4 px-4 leading-relaxed text-gray-300">
              {item.ans.split('\n').map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </details>
        ))}
      </div>
    </motion.div>

    )
}