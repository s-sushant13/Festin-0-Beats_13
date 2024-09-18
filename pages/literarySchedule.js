/* eslint-disable */





import { Anton } from 'next/font/google'
import { motion } from 'framer-motion'
import Heading from '@/components/Heading'
import React from 'react'

const anton = Anton({
    subsets: ['latin'],
    weight: ["400"],
})

const data = [
  {
    "ques": "JAM (JUST A MINUTE)",
    "ans": "• The JAM master is final authority.\n• Slam the table and say 'JAM' to object.\n• Penalty for objecting out of turn, early/late start, speaking too fast/slow, grammatical errors, or undue stress on words.\n• Repetition of a used idea or failure to follow random rules leads to penalties.\n• 60 seconds total time per round.\n• Points: Positive for speaking time, correct objections; Negative for incorrect objections.\n• Bonus points for being the last speaker."
  },
  {
    "ques": "POSITIVE IN MOTION (How Positive You Can)",
    "ans": "• Participants must write a positive aspect from a negative image shown on the projector (50-100 words).\n• Time limit: 15 minutes.\n• Follow rules of grammar, usage, and punctuation.\n• Language: Hindi or English (not mixed).\n• Participants should carry their own pen/pencil."
  },
  {
    "ques": "HASO AUR HASAO (How to make it Funny)",
    "ans": "• Participants will add humor to a given popular story (150-200 words).\n• Follow rules of grammar, usage, and punctuation.\n• Language: Hindi or English (not mixed).\n• Participants should carry their own pen/pencil."
  },
  {
    "ques": "DEBATE-HINDI/ENGLISH (Clash of Minds)",
    "ans": "• Individual contest.\n• Time limit: 3 minutes for each side, 1 minute for contradictory points.\n• Topics announced in advance.\n• Participants may speak for or against the motion.\n• Points deducted for exceeding time limit.\n• Judging criteria: Interpretation, argument logic, evidence, audibility, rebuttal."
  },
  {
    "ques": "KAVYA RACHNA (Poetry Writing)",
    "ans": "• Participants must write a poem (16-20 lines).\n• Topics provided on a random basis.\n• Follow rules of grammar, usage, and punctuation.\n• Language: Hindi or English (not mixed).\n• Participants should carry their own pen/pencil."
  },
  {
    "ques": "READ-A-THON",
    "ans": "• Participants choose a book from a given list.\n• Time limit: 5-7 minutes to present a summary and learning.\n• Books include 'Wings of Fire by Dr. APJ Abdul Kalam. ,' 'Rich Dad Poor Dad by Robert Kiyosaki,' 'You Can Win by Shiv Khera,' 'The Monk Who Sold His Ferrari,''The Monk Who Sold His Ferrari Book by Robin Sharma,' 'Ignited Minds by A. P. J. Abdul Kalam,''The Power of your subconscious mind by Joseph Murphy,''Life of Swami Vivekananda by Swami Vivekanand,' 'How to stop worrying and start living by Dale Carnegie,''“How to win friends and influence people” by Dale Carnegie,' 'The Power of Positive Thinking by Norman Vincent Peale,' 'Bhagavad Gita,' 'Ramcharitmanas by Tulsidas,'\n• Language: Hindi or English."
  },
  {
    "ques": "SLOGAN SHIKAR (Slogan Writing)",
    "ans": "• Topic given on the spot, related to social issues.\n• Participants write one slogan (bonus marks for decoration).\n• Time limit: 30 minutes.\n• Language: Hindi or English."
  },
  {
    "ques": "BUJHO TOH JANE (Wordsworth)",
    "ans": "• Participants are given a pair of alphabets and must write maximum words containing those alphabets.\n• Follow rules of grammar, usage, and punctuation.\n• Language: Concrete and specific, with restraint on adjectives and adverbs.\n• Participants should carry their own pen/pencil."
  },
  {
    "ques": "BUSINESS JUGAD",
    "ans": "• Individual or team (max 3 members) submit a business plan.\n• Time limit: 10 minutes for presentation.\n• Submission includes a report and presentation.\n• Plan should cover market analysis, marketing strategy, cost estimation, technical and financial viability.\n• Judging criteria: Concept, presentation, commercial potential, social impact."
  },
  {
    "ques": "AD MAD SHOW",
    "ans": "• Team size: Individual to max 3 members.\n• 2 rounds: Round 1: Prepare an original advertisement, Round 2: Create an advertisement on a given product within 30 minutes.\n• Time limit: 3 minutes for presentation.\n• No obscenity or offensive content.\n• Judging criteria: Creativity, message conveyed, presentation, coordination."
  },
  {
    "ques": "SPELL BEE",
    "ans": "• Preliminary round to qualify for finals.\n• Each word must be spelled within 30 seconds.\n• Online registration is required.\n• The organizing committee reserves the right to modify rules."
  },
  {
    "ques": "DUMB CHARADES",
    "ans": "• Team size: 4 members.\n• One participant enacts the title of a book, while the other guesses within 1 minute.\n• 4 rounds with scoring of 10 marks each.\n• Tie-breaker round in case of a tie."
  },
  {
    "ques": "YUVA SANSAD (National Youth Parliament)",
    "ans": "• English or Hindi.\n• Topic of debate is selected by lottery.\n• Avoid referencing real political parties or personalities.\n• Time limit: 55 minutes (20 minutes for questions, remaining for discussion).\n• Members must follow parliamentary conduct."
  },
  {
    "ques": "DAASTAN SUNAO (Storytelling)",
    "ans": "• Stories must be authentic, adapted, or original.\n• No sensitive topics like race, religion, or politics.\n• Time limit: 5-7 minutes.\n• Language: Hindi or English."
  }
];

  

export default function LiterarySchedule() {
    return (
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-11/12 mx-auto py-12 my-6"
      >
        <div>
          <Heading>Literary Events</Heading>
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