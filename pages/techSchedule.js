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
    "ques": "TECHNICAL POSTER (Techxhibit)",
    "ans": "• Individual Participation\n• Subject matter must address a technical, economic, environmental, or sustainability aspect of engineering.\n• Poster size: 48 inches x 36 inches.\n• No mechanical/electrical devices attached to the poster.\n• No materials should be placed around or on top of the poster.\n• Time for poster design: 1 hour."
  },
  {
    "ques": "TREASURE HUNT (Techsplore)",
    "ans": "• Team size: 4 members\n• Round 1: Solve questions in 10 minutes\n• Round 2: Solve clues, first 5 teams advance\n• Round 3: First 3 teams to find the treasure win.\n• No electronic devices allowed\n• Misbehavior leads to disqualification."
  },
  {
    "ques": "E-GO-GREEN (Eco-Innovate)",
    "ans": "• Individual participation\n• Present an idea to save the Earth using renewable resources or replacing pollutants.\n• Time duration: 1 hour\n• Presentation should be inspired by nature.\n• No pre-made materials allowed."
  },
  {
    "ques": "WORKING MODEL EXHIBITION (Protype Parade)",
    "ans": "• Team size: 2 members\n• Models must be semi-automatic or fully automatic.\n• Themes: Solid Waste Segregation System, Modern Traffic Control, Optimum Energy Management\n• Model size: 1x1x1 m\n• Time duration: 1.5 hours."
  },
  {
    "ques": "FRUGAL ENGINEERING (Jugad Junction)",
    "ans": "• Team size: Maximum 3 members\n• Bring your own material\n• Create a cost-efficient or complexity-reducing product.\n• Scrap material allowed for decoration.\n• Time duration: 60 minutes."
  },
  {
    "ques": "TECHNICAL QUIZ (Quizdom)",
    "ans": "• Individual participation\n• Quiz on CS/IT/AI/DS/IoT, ECE, ME\n• 2 rounds: Round 1: 40 MCQs (20 min), Round 2: 20 MCQs (10 min)\n• No negative marking\n• Winner based on maximum correct answers in the shortest time."
  },
  {
    "ques": "GLIDERS (Aero Acrobats)",
    "ans": "• Team size: 2 members\n• Materials provided by the committee\n• Judging based on time of flight, displacement, and design\n• Glider size: 15x15 inches."
  },
  {
    "ques": "BRIDGE CHALLENGE (Structura)",
    "ans": "• Team size: 2 members\n• Build a truss bridge using Popsicle sticks and Fevicol\n• Bridge size: Length - 56-60cm, Width - 10-11cm, Height - 12-16cm\n• Time duration: Based on structure’s efficiency and aesthetics."
  },
  {
    "ques": "WEB DESIGNING (Webweave)",
    "ans": "• Individual participation\n• 2 rounds: Round 1: 30 questions (30 min), Round 2: Create a 3-page website (90 min)\n• Websites must be in HTML only."
  },
  {
    "ques": "PROGRAMMING (Code Crusaders)",
    "ans": "• Individual participation\n• 3 rounds: Round 1: Quiz (20 MCQs, 30 min), Round 2 & 3: Coding challenges\n• Languages: C, C++, Java, Python, MATLAB."
  },
  {
    "ques": "DRONE FLYING COMPETITION (Aero Ace)",
    "ans": "• Team size: 1-2 members\n• Build and fly a drone through an obstacle course.\n• Judging based on time and number of obstacles cleared."
  },
  {
    "ques": "GAME OF CODES (Codecraft)",
    "ans": "• Individual participation\n• 2 rounds: Round 1: Solve basic coding challenges, Round 2: Solve advanced problems (1.5 hours)\n• Focus on problem-solving and efficiency."
  }
];


export default function techSchedule() {
    return (

      <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="w-11/12 mx-auto py-12 my-6"
    >
      <div>
        <Heading>Technical Events</Heading>
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