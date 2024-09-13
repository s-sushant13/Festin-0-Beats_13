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
    "ques": "RANG TARANG/ RANGOLI",
    "ans": "• No. of participants: 2 member\n• Time: 1 hour\n• Participants are required to bring their own colours accordingly.\n• Theme will be disclosed 30 minutes before the competition.\n• Only powdered colours are allowed.\n• No patterns are allowed.\n• Mobile phone is not allowed."
  },
  {
    "ques": "HENNA HARMONY/ MEHNDI",
    "ans": "• No. of participants: 1 member\n• Time: 1 hour\n• Participants are required to bring their own mehndi.\n• The mehndi must cover one hand covering both sides of the palm.\n• The mehndi must extend up to the wrist.\n• Participants are required to bring their own partner on whose hand the mehndi will be done.\n• High lighteners are not allowed.\n• Mobile phone is not allowed."
  },
  {
    "ques": "COLLACOMBO /COLLAGE MAKING",
    "ans": "• No. of participants: 2 members\n• Theme will be Role of Theater in Society.\n• Time: 1 hour\n• Participants are required to bring their own material, only chart paper will be provided.\n• Participants will have to portray their collage to the judges at the end of the competition.\n• NOTE: ONLY NEWSPAPER CUTTINGS ARE ALLOWED (Print outs, cuttings from Magazines etc. are not allowed.)\n• Mobile phone is not allowed."
  },
  {
    "ques": "COLORFUL STILLNESS/ POSTER MAKING",
    "ans": "• No. of participants: 1 member\n• Participants will be given a theme before 15 minutes.\n• Duration will not be more than 60 Minutes.\n• Participants should bring their own materials.\n• College will provide drawing paper/ sheet.\n• Mobile Phone is not allowed."
  },
  {
    "ques": "A BRUSH WITH MAGIC/ FACE PAINTING",
    "ans": "• No. of participants: 2 members\n• Time: 45 minutes\n• Participants are required to bring their own colours.\n• Participants are required to bring their partner on whose face the painting will be done.\n• Mobile Phone is not allowed."
  },
  {
    "ques": "POTTERY: REDEFINING COOLNESS/POT PAINTING",
    "ans": "• No. of participants: 1 member\n• Time: 1 hour 30 minutes\n• Participants are required to bring their own material for decoration, colours etc.\n• Pots will be provided by the college.\n• Mobile Phone is not allowed.\n\nNOTE: Maximum 15 participants are allowed which will be based on first come first basis."
  },
  {
    "ques": "CRAFTY MINDS/ BEST OUT OF SCRAP",
    "ans": "• No. of participants: 2 members\n• Time: 1 hour\n• Participants will be free to choose the theme.\n• Participants are required to bring their own waste material and other required items.\n• Mobile Phone is not allowed."
  },
  {
    "ques": "RID THE FLAME/ COOK WITHOUT FIRE",
    "ans": "• No. of participants per team: 2 members\n• Time: 1 hour\n• Participants are required to bring their own material as per their requirement.\n• Boiled food from home is not allowed (like boiled potatoes, boiled dal etc.)"
  },
  {
    "ques": "THE ESSENCE OF COOL/ TATTOO MAKING",
    "ans": "• No. of participants: 1 member\n• Tattoo making area- upper portion of arm (shoulder to elbow.)\n• Time limit: 30 minutes\n• Arrangements of all the materials have to be done by participants.\n• Participants are required to bring their partner on whose arm the tattoo will be designed.\n• Theme will be disclosed 30 minutes before the competition.\n• Mobile Phone is not allowed."
  },
  {
    "ques": "CREATE YOUR OWN HAIR JOURNEY/ HAIR STYLING",
    "ans": "• No of participants: 1 member\n• Time period: 30 minutes\n• Participants are required to bring their partner on whom hair styling will be done.\n• Participants are required to bring their accessories and material.\n• Mobile Phone is not allowed."
  },
  {
    "ques": "RANGREZ/T- SHIRT PAINTING",
    "ans": "• No of participants in a team: 1 member\n• Time period: 45 minutes\n• Theme will be disclosed on the spot.\n• Participants are required to bring their material except T shirt, which will be provided by the institute.\n• Mobile Phone is not allowed.\n\nNOTE: Maximum 15 participants are allowed which will be based on first come first basis."
  },
  {
    "ques": "CLICK OUT/ BEST SHOT (Still photography)",
    "ans": "• No. of participants per team: 1 member\n• Participants have to register with their digital camera.\n• Photographs only from institute campus with dated________ should be submitted.\n• Participant must ensure that the registered photograph is taken by him/ her only else his/ her participation will be cancel.\n• Digital manipulations and adjustments are not allowed (no Photoshop or any software effects allowed).\n• Full Day (10:00 a.m. to 2:00 p.m.) will be given to the participants.\n• Participants have to submit their photograph up to 2:00 pm, otherwise it will not be accepted."
  },
  {
    "ques": "BE THE STAR/ MOVIE MAKING",
    "ans": "• No. of participants per team: 4 members (Maximum)\n• Participants should register with their digital camera.\n• Dated Videos only from institute campus should be submitted.\n• Digital manipulations and adjustments are not allowed (no Photoshop or any software effects allowed).\n• Full Day (9:30am to 2:00 pm) will be given to the participants.\n• Participants have to submit their photograph up to 2:00 pm, otherwise it will not be accepted."
  },
  {
    "ques": "HOBBYHORSE/ HOBBY COLLECTION",
    "ans": "• No of participants: 1 member.\n• Time period: 45 minutes.\n• Participants are required to bring their collection.\n• Judges would also do the questionnaire round regarding the collection they have bought."
  },
  {
    "ques": "CARICATURE/ CARTOONING",
    "ans": "• No of participants: 1 member.\n• Time period: 1 hour.\n• Item will be conducted on the spot on the given subject/ idea.\n• Participants shall bring their own material.\n• Institute will provide drawing paper/sheet.\n• Mobile Phone is not allowed."
  },
  {
    "ques": "COLOUR THE CANVAS/ ON SPOT PAINTING",
    "ans": "• No of participants: 1 member.\n• Time period: 1 hour.\n• Painting will be conducted on the spot on the theme given at the event center.\n• Painting can be done in oil, water, poster or pastel colours.\n• Candidate shall bring their own material like brushes, paints etc. Only the paper/ sheet will be provided by the institute.\n• Mobile Phone is not allowed."
  }
]

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