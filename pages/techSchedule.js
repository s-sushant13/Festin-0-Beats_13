/* eslint-disable */

import { Anton } from 'next/font/google'
import { motion } from 'framer-motion'
import Heading from '@/components/Heading'

const anton = Anton({
    subsets: ['latin'],
    weight: ["400"],
})

const data = [
    {
      "ques": "TECHNICAL POSTER",
      "ans": [
        "Engineers, like all professionals, must possess a well-developed ability to communicate. This poster competition is designed to emphasize the ability to deliver a visual presentation. Subject matter is to be related to engineering.",
        "Rules:",
        "1. Individual Participation.",
        "2. The subject matter of the poster must address a technical, economic or environmental aspect of engineering, or other basic engineering theme, provided it pertains to some sphere in which an engineer is or should be involved",
        "3. Each poster may be no larger than 48 inches (122 cm) by 36 inches (91.4 cm) unfolded. Posters may be assembled using A4, A5 or 81/2\" by 11\" paper panels.",
        "4. There may be no mechanical or electrical devices attached to the poster.",
        "5. There may be no materials placed in front of, above, below, or to the side of the poster.",
        "6. All material must be accessible without having to lift or turn a page.",
        "7. Each entry may have only one participant name printed on the poster. The name and affiliation of the author must be in a prominent place on the Poster. Time for poster design is 1 Hour."
      ]
    },
    {
      "ques": "TREASURE HUNT (Caribbean hunt)",
      "ans": [
        "Treasure hunts are information based puzzle hunts, in which teams use their collective brainpower to solve clues. Each team is presented with a group of puzzle, or clues, which teams must solve in order to find a piece of information.",
        "Group:",
        "There will be 4 members in a group and only registered members are allowed.",
        "Rounds:",
        "Round 1",
        "There will be questions which they have to solve in 10 min and only those group will be sent to next round who will solve the questions in given time.",
        "Round 2",
        "In this round they will be given a clue, use that clue and earn the other clues and first 5 teams who will find the hidden treasure will send to round 3.",
        "Round 3",
        "Solve the treasure and first three who will solve will be declared as a winner team. Time allotted will be 30min max.",
        "Rules:",
        "1. Only registered participants will be allowed",
        "2. No electronics devices can be used during the event.",
        "3. Carry your own pens.",
        "4. Any kind of misbehavior will leads to disqualification.",
        "5. Late corners will not be entertained.",
        "6. Only predefined teams will be allowed."
      ]
    },
    {
      "ques": "E-GO-GREEN",
      "ans": [
        "It's time to do something for our planet, tighten your gauntlets to present your ideas to save EARTH. You are supposed to present any idea that you think would aid to the goodwill of our planet, think GREEN, E-GO-GREEN!",
        "For example-",
        "Replacing use of plastic or any other pollutants with natural elements.",
        "Use of renewable resources instead of on-renewable resources.",
        "Rules:",
        "1. Individual Participation.",
        "2. Contestants should bring their materials with them.",
        "3. Idea and technical application on them must be done during the event itself",
        "4. Nothing must be done on the material previously; else the participants will be disqualified.",
        "5. Candidate would be given 2-5 minutes to display or present their idea.",
        "6. Your presentation must be completely inspired from nature.",
        "7. The fest committee has the right to disqualify any participant for any misconduct.",
        "8. Time duration —1 hour."
      ]
    },
    {
      "ques": "WORKING MODEL EXHIBITION",
      "ans": [
        "Working Model Exhibition is a competition where contestants present their working projects/models that they have created. It allows students to compete in today's challenging technologies.",
        "Its motive is to implement their theoretical knowledge in to practical by conducting a range of experiments.",
        "In order that the questions or tasks spark a true interest in the student they should be able to have an interesting, eye catching project. It also provides a mechanism for students with intense interest in projects 10 be paired with students/mentors from nearby colleges and universities.",
        "THEMES:",
        "Solid Waste Segregation System",
        "Modern Traffic Control System",
        "Optimum Energy Management System",
        "Rules:",
        "1. Each team will consist of 02 members.",
        "2. The working model must support the theme of the exhibition strictly.",
        "3. The model must be Semi-automatic or fully automatic.",
        "4. The size of the model during display should be 1x1x1 m3.",
        "5. The participants have to explain the concept, novelty, economic viability and functionality of the working model.",
        "6. The Judges' decision will be the final and binding to all.",
        "7. Time duration — 1.5 hours."
      ]
    },
    {
      "ques": "FRUGAL ENGINEERING (JUGAD)",
      "ans": [
        "Frugal Engineering or Jugad is the process of reducing the complexity and cost of a goods and its production. Usually this refers to removing nonessential features from durable goods, such as a car or phone, in order to sell it in developing countries.",
        "Rules:",
        "1. Maximum number of team member is 3.",
        "2. Contestant should bring their material with them.",
        "3. Your presentation must be either cost efficient or complexity reducer or catering some social problem.",
        "4. Only registered participants are allowed.",
        "5. Use of colors or any other decoration material is strictly prohibited.",
        "6. Decoration and customization have to be done with scrap material only, if required.",
        "7. No add on decorative material or color is permitted.",
        "8. Item to be made can be of any nature i.e. any engineering or general use.",
        "9. An open space will be provided.",
        "10. Participants have to explain the concept what they made.",
        "11. The Judges' decision will be the final and binding to all.",
        "12. Contestant should bring their ID cards.",
        "13. Time Duration: 60 minutes."
      ]
    },
    {
      "ques": "TECHNICAL QUIZ",
      "ans": [
        "A quiz is a form of game or mind sport, in which the players (as individuals or in teams) attempt to answer questions correctly.",
        "Quiz (CS/IT/AI/DS/IoT, ECE, ME)",
        "Rules:",
        "1. Individual Participation.",
        "2. For every correct answer 1 mark will be awarded. There will be no negative marking.",
        "3. There will be two rounds. First round will have 40 MCQ for 20min.",
        "4. Only qualified participants will take second round.",
        "5. Second round will have 20 MCQs for 10min.",
        "6. A participant with maximum correct answer in shortest time will get first position.",
        "7. The fest committee has the right to debarred/disqualify any participant for any misconduct/unfair means.",
        "8. There will be separate quiz for CS/IT/AI/DS/IoT, ECE, ME",
        "9. Only registered students will be allowed to participate in the event",
        "Quiz (Logo)",
        "Rules:",
        "1. Individual Participation.",
        "2. Competition will consist of 30 questions.",
        "3. Logo will be displayed for 10 sec.",
        "4. For every correct answer 1 mark will be awarded. There will be no negative marking.",
        "5. You are not allowed to use mobile or other electronic instruments.",
        "6. The fest committee has all the right to debarred/disqualify any participant for any misconduct/unfair means.",
        "7. Only registered students will be allowed to participate in the even"
      ]
    },
  {
    "ques": "ROBOTICS",
    "ans": [
      "Robotics is an interdisciplinary branch of engineering and science that includes mechanical engineering, electronic engineering, information engineering, computer science, and others. Robotics deals with the design, construction, operation, and use of robots, as well as computer systems for their control, sensory feedback, and information processing.",
      "ROBO RACE.",
      "Task:",
      "Design a robot either wired or wire less within the specified dimensions that can operated manually and can travel through all turns of -,he track. The robot that will complete the specified task in least time will be the winner. Think yoar robot can overcome any obstacle-big or small in the least of time.",
      "Robot Specifications:",
      "1. The maximum dimension of the robot can be 25 cm x 20cm x15 cm (1 x b x h).",
      "2. The robot may be wired or wireless.",
      "3. The length of the wire (for wired hots) should be long enough to cover the whole track and wire should remain slack during the complete run.",
      "4. Maximum weight must not exceed 5 kg.",
      "5. The participants will be provided with 220 Volts, 50Hz standard AC supply. participants will have to themselves arrange for adaptor or batteries.",
      "6. The machine must not be made from Lego parts, or any ready-made kit, if we find such machine it will be disqualified.",
      "Batteries & Power:",
      "1. The machine must be powered electrically only. Use of IC engine is not allowed.",
      "2. Batteries must be sealed, immobilized electrolyte type (gel cell, lithium, NiCad, or dry cells).",
      "3. The electric voltage anywhere in the machine should not be more then 12V DC at any point of time.",
      "General Rules:",
      "1. This is racing event so fastest and most balanced robot will win.",
      "2. Robot should be as per the given specifications.",
      "3. Each team can have maximum 3 members. Students from different institutes can form a team.",
      "4. Each member of the team must contain the identity card of his/her respected institute.",
      "5. The robot should not damage the arena.",
      "6. No test practice will be allowed on the arena.",
      "7. The robot must not leave behind any of its parts during the run; else it will result in disqualification.",
      "8. Unethical behavior could lead to disqualification. Faculty coordinators have all the rights to take final decision for any matter during the event.",
      "9. Judge's decision will be considered final.",
      "10. Certificates of Participation will be given to all the teams that will participate in the event, but not to the teams which get disqualified due to disobeying any of the competition rules. *Co—ordination committee reserves the right to add or update any rule.",
      "Track Specifications:",
      "1. The track surface and course line may have unevenness. .",
      "2. There will be certain obstacles in the race track which will try to slow down the robo.",
      "3. Arena will consist of Bridge, speed breakers, marble pit, slippery path, curve ramp down/up etc.",
      "Game Rules:",
      "1. The competition is based on time trail system. There will a qualifying round for each team.",
      "2. The top team from qualifying round makes it to the final round on basis of time trials.",
      "3. Wires should remain slack during the course of the run. Pulling the wire to aid the robot in traversing may lead to disqualification.",
      "4. If any of the robots starts off before start up call, the counter would be restarted and the machines will get a second chance. If repeated again then team will be disqualified.",
      "5. Your robot must be ready when call is made for your team.",
      "6. Team members will be allowed only three times to touch or reset their robots position during the run. However, this will ead to a time penalty and timer will not stop during this course of action.",
      "7. The robot will be judged on basis of (in priority):  Time to complete the track.  Number of checkpoints cleared.",
      "8. Machine must not contain aay readymade kits, pneumatic &hydraulic systems, IC engines.",
      "9. Decision about your robot will be taken by the organizers.",
      "10.No team will get a second caance after completing the track with poor score.",
      "ROBO WAR",
      "Event Description:",
      "1. The objective is to make a manually controlled bot that can immobilize opponent bot in a one on one competition.",
      "2. No. of Participant: 3.",
      "Round 1:",
      "Here the robots will be required 10 wrestle without any weapons activated & try to force their opponent out of the marked area for wrestling using their strength & inertia only, succeeding in which will take the team to the next round. In case no robot is able to force other out in stipulated time interval, points will be allotted on the basis of their performance.",
      "Round 2:",
      "This round will be a one on one battle between the robots with all weapons engaged. The match will end with either one of the robots being rendered immobile or at the end of the stipulated time of 5 minutes. In case no team is able to win the decision on the winner will be taken by the judges on the basis of performance in the match. The decision of the judges will be bounding & final.",
      "Specifications:",
      "1. Robo should fit into a box c f 30CMx30CMx30CM (maximum).",
      "2. Maximum weight of robot should not exceed than 10 kg (Tolerance +/- 0.5 kg).",
      "3. The external device used tc control the machine or any external device (such as batteries, remotes) is not included in the size constraint.",
      "4. The machine should be controlled by a wireless remote control mechanism or wired one throughout the war.",
      "5. In case of wireless system, it should have a minimum four frequency remote control circuit or two dual control circuits or a transmitter-receiver paired module so that the frequency interferences with opponent team can be avoided (in case of any interference in the wireless systems, they will not be considered for rematch or in the results).",
      "6. Remote controls that are readily available in the market may also be used.",
      "7. The machine must not be made from Lego parts, or any readymade Kit, if we find such machine it will be disqualified.",
      "8. If the machine is wired then the wire should remain slack under all circumstances during the competition. All the wires coming out of the machine should be stacked as single unit.",
      "9. The wires should be properly insulated.",
      "10. It is necessary for all that teams that the bot must be electrically or electronically powered if any team uses any type of mechanical powered system like IC ENGINE or other then it will be disqualified.",
      "Weapon Systems:",
      "Robots can have any kind of cutters, flippers, saws, hammers, lifting devices etc. as weapons, with the following exceptions:",
      "1. Liquid projectiles.",
      "2. Acid based Weapons.",
      "3. EMP generators",
      "4. Any kind of flammable liquid.",
      "5. Flame-producing weapons.",
      "6. Any kind of explosive material.",
      "7. Nets, glue or any other entanglement devices",
      "8. High power magnets or electromagnets, Radio jammers.",
      "9. Pneumatic weapons.",
      "Batteries &Power:",
      "1. Batteries must be sealed, immobilized electrolyte types (gel cells, lithium, NiCad, or dry cells).",
      "2. The electric voltage anywhere in the machine should not be more than 24V DC at any point of time. On board power supply of 24V DC will be provided. The teams can also use their own power supply.",
      "Game Rules:",
      "1. Maximum 3 participants in a team.",
      "2. If the participants are not present at the arena on the given time slot then that team will be disqualified.",
      "3. Burning type of instruments not allowed.",
      "4. The machines are not allowed to leave any loose parts on any part of the arena.",
      "5. Judge's decision shall be treated as fmal and binding on all.",
      "6. Bots immobilized for 10 seconds will result in reduction of points.",
      "7. If any machine remains immobilize forl minute it will treated passive and opponent will win the match.",
      "8. In case of both teams immobilize forl minute both team will be disqualify.",
      "9. One or two operators will oierate machine in the event.",
      "10. Damage to arena is not allowed and will lead to disqualification of team.",
      "11. The wires should remain sk..ck during the match.",
      "12. Teams should take care of 'Lath- Bot, they will be responsible for the damage to their bots.",
      "13. Decision made by the judges will be final.",
      "14. Jumping and hopping is not allowed",
      "15. Flying (using airfoil, helium balloons, ornithopters etc.) is not allowed.",
      "16. No rematch will be there.",
      "NOTE: Organizing Committee reserves the right to add or update rules.",
      "Criteria for Victory:",
      "1. A robot that is deemed unsafe by the judges after the beginning the match will be disqualified and therefore declared the loser.",
      "2. The match will be immediaiely halted and the opponent will be awarded a win.",
      "3. Points will be given on the basis of aggression and damage.",
      "General Rules:",
      "1. Any team that is not ready at the time specified will be eliminated from the competition automatically.",
      "2. Judges reserve the right to disqualify any team indulged in",
      "3. Misbehavior / argument.",
      "4. The name of your machine must be prominently displayed on the machine.",
      "5. Certificates of Participation will be given to all the teams that will participate in the event, but not to the teams which get disqualified due to disobeying any of the competition rules.",
      "6. Certificate of participation will be given only to participants who will participate in war",
      "Judging Criteria: Teams will be judged on the basis of time trials.",
      "Team Specifications:",
      "1. A team may consist of a maximum of 3 members.",
      "2. Students from different educational institutes can form a team."
    ]
  },
  
  
    {
      "ques": "LINE FOLLOWER",
      "ans": [
        "Round 1(Quiz):",
        "1. The team should comprise of maximum 3 members.",
        "2. Robots must be autonomous. Data links to of boards computers are allowed, but no wetware (human) operated remote controls will be permitted.",
        "3. Each team will be given a time slot, delays are strictly not allowed.",
        "4. The track will consist of sharp as well as smooth turns. There might be 90 degree & acute angle turns also.",
        "5. Teams will be given 3 trials out of which the best time will be considered by judges.",
        "6. Nudging/Pushing or any type of manual handling of the robot will lead to cancellation of that run.",
        "7. Teams will be given 2 minutes for calibration of the sensors after the first trial.",
        "8. The width of the line will be constant (approx. 1.5 inches) throughout the track.",
        "9. The track might also contain few crossovers (places where the line crosses itself).",
        "10. There shall be no discontinuities in the track.",
        "11. The track will be of black color on a white background. However, the black color may not be completely uniform & there might be slight variation in color.",
        "12. Any robot that loses the line courses must reacquire the line at the point where it was lost, or at any checkpoint.",
        "13. When any robot crosses, the start line before the referee's the passage will be interrupted & resumed from the beginning.",
        "14. Only registered students will be allowed to participate in the event."
      ]
    },
    {
      "ques": "GLIDERS (Glide - It)",
      "ans": [
        "The event consists of designing and constructing a model of a glider with the help of aluminum foil, wooden sticks, paper, wires and thermacol sheets.",
        "General Rules & Guidelines:",
        "1. Team should comprise maximum of two members.",
        "2. Material will be provided by the committee.",
        "3. Judging will be done on the basis of",
        "   a. Time of flight",
        "   b. Displacement of the glider",
        "   c. Design of glider",
        "4. Dimension of glider must not be more than 15 x 15 inches.",
        "5. The fest committee has the right to debarred/disqualify any participant for any misconduct/unfair means.",
        "6. Only registered students will be allowed to participate in the event."
      ]
    },
    {
      "ques": "BRIDGE CHALLENGE (bridge The Gap)",
      "ans": [
        "Problem statement:",
        "The event consist of designing and constructing a model of a truss bridge using Popsicle sticks (ice cream sticks) satisfying the stated constraints.",
        "Event Structure:",
        "1. No. of participants in a team can be 2",
        "2. The shortlisted teams shall construct their bridge under the surveillance of the organizing team at ABESIT.",
        "3. The model built by each team will be tested till failure (yielding) by applying an incremental static load.",
        "Materials:",
        "1. Use Popsicle sticks provided by the organizing team.",
        "2. Sticks can be altered physically by cutting or notching at any angle.",
        "3. Only Fevicol can be used as adhesive, use of other adhesives will lead to disqualifications.",
        "4. Threads can be used during construction however should not be present in the final.",
        "Dimensions and Weight Specification:",
        "1. The Popsicle bridge dimensions should be within the specified limits of:",
        "   i. Length = 56-60cm",
        "   ii. Width = 10-11 cm",
        "   iii. Height = 12-16 cm",
        "2. The members of the bridge can be built by grouping a maximum of 8 sticks together.",
        "3. Clear distance: An 8cm high by 10cm wide clearance must be provided along the entire length of the bridge.",
        "4. The bridge must weigh 300 grams or less.",
        "5. In case of any discrepancies, the decision taken by the judges and the council will be the final verdict.",
        "Testing the bridge:",
        "1. The bridge will tested by placing the ends of the bridge at the ends of a levelled platform having sufficient gap in between the ends.",
        "2. The load will be applied through a hook that connects a steel platform that will be laid upon the span of the bridge.",
        "3. The platform will be same for every team and will be placed at the middle of the structure.",
        "4. The bridge model will be loaded till failure. The maximum deflection at the point of yielding and the load at that moment will be used to evaluate the structure.",
        "Judging Criteria:",
        "1. First the structure will be reviewed to check if it violates any rules mentioned above.",
        "2. The scoring of the structure will be based on performance as well as aesthetics:",
        "3. The bridge will be scored on how well the material has been used to support the load.",
        "4. The efficiency will be calculated as the ratio of ultimate load capacity and the bridge weight.",
        "5. The bridge will also be scored on aesthetics. The judges will judge the bridge based on the detail to connections and members, the uniqueness of the design and its overall look.",
        "\"In engineering, the best solution may not always be the biggest or strongest\".",
        "Scoring Criteria:",
        "Cleanliness of the work (C) = 10%",
        "Aesthetics of the bridge (A) = 20%",
        "Efficiency of the bridge (E) = 70%",
        "Total Score (S)=C+E+ A",
        "Penalties:",
        "Violating any of the conditions mentioned underneath, penalty will be imposed according to the judges and may lead to disqualification:",
        "1. Weight exceeds the limit",
        "   If weight exceeds up to 5% (15gm) then it will lead to 5% penalty on the total score. If weight exceeds above 5% (15gm) then it will lead to 15% penalty on the total score",
        "2. Dimensional specifications are not met",
        "   Penalty of 10% on the total score",
        "3. Use of material, except the ones stated in rules",
        "   Penalty of 50% on the total score or can lead to disqualification as decided by the judges.",
        "NOTE: In case of any discrepancies, the decision taken by the judges and the coordinator will be the final verdict."
      ]
    },
    {
      "ques": "WEB DESIGNING (Web - It)",
      "ans": [
        "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; interface design; authoring, including standardized code and proprietary software; user experience design; and search engine optimization.",
        "Rules:",
        "1. Total duration of the event is of 2 hours.",
        "2. Individual Participation.",
        "3. It will be conducted in two rounds.",
        "4. Weightage of first round and second round will be equally 50-50 percent.",
        "5. Fest committee has right to disqualify any team for any misbehavior / misconduct.",
        "Round 1:",
        "1. In this round each team has to answer 30 questions (written).",
        "2. Duration 30 minutes.",
        "3. For each correct answer here marks will be awarded and minus one for every wrong answer.",
        "Round 2:",
        "1. A team has to create a website of 3 pages on given theme.",
        "2. Duration 90 minutes.",
        "3. Website should be in HTML only; otherwise negative marking will be done."
      ]
    },
    {
      "ques": "PROGRAMMING (Codejam)",
      "ans": [
        "Programming is the process of taking an algorithm and encoding it into a notation, a programming language, so that it can be executed by a computer. Although many programming languages and many different types of computers exist, the important first step is the need to have the solution.",
        "Rules:",
        "1. Individual participation.",
        "2. All the participants must carry their ID cards along with them.",
        "3. Students/participants can code the program in C/C++/JAVA/PYTHON/ MATLAB.",
        "4. There will be three rounds:",
        "Round 1:",
        "i. First round will be a quiz round. The quiz consists of 20 MCQ's (30 minutes) and cut off for second round will be set accordingly.",
        "ii. There will be 3 different quiz for C/C++/JAVA, MATLAB and PYTHON respectively.",
        "Round 2:",
        "i. In second round, participants will have to code 2 programs out of 3 on the systems.",
        "ii. Coding questions for C/C++/JAVA/PYTHON will be common and different for MATLAB.",
        "Round 3:",
        "Third round will consist of 2 programming questions out of which candidate needs to code 1 of them.",
        "5. All the rounds are elimination round.",
        "6. The fest committee has the right to debarred/disqualify any participant for any misconduct/unfair means.",
        "7. The participants shall not be allowed to use mobile or other electronic instruments."
      ]
    }
  
  
  ]

export default function techSchedule() {
    return (

        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-11/12 mx-auto py-12">
            <div className='my-6'>
                <Heading>Technical Events</Heading>

                
            </div>
            <div className="space-y-4">
                {data.map((item, index) => (
                    <details key={index} className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 border-b-2 pb-3"
                        >
                            <h2 className="font-medium">{item.ques}</h2>

                            <svg
                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-300">
                            {item.ans}
                        </p>
                    </details>
                ))}
            </div>
        </motion.div>

    )
}