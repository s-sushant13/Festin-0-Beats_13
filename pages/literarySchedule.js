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
        ques: "JAM (JUST A MINUTE)",
        ans: [
            "JAM (JUST A MINUTE) is an all-round fun ques that is all about the control of the mind over the thought.",
            "",
            "1. The JAM master is God. No questions or arguments once the final decision has been made.",
            "2. To object, slam the table and say 'JAM'. The JAM master decides when you are allowed to put forth your objection.",
            "3. You get a penalty if the competition objects on any of the following counts:",
            "   a. You object out of turn.",
            "   b. Early start and late start.",
            "   c. Speaking too fast or too slow.",
            "   d. Grammatical errors.",
            "   e. Undue stress on words, undue emphasis in the sentences.",
            "   f. Repetition of a previously used idea.",
            "   g. Not following the 'random ans' as set by the JAM master. For example the most popular random rule was 'Praise Guntas before objecting'.",
            "   If you forget to do so or the JAM master thinks that the praise was not good enough you will not be allowed to object and lose points for an incorrect/bad objection",
            "4. The total time is sixty seconds, inclusive of all the time that all the speakers in a given round are allowed to speak.",
            "5. Points are given in the following manner:",
            "   a. Positive points for every second that you speak",
            "   b. Positive points for every correct objection",
            "   c. Negative points for every incorrect objection",
            "   d. Bonus points for being the last speaker",
            "6. The winner is the person with the maximum number of points at the end of the round"
        ]
    },
    {
        ques: "POSTIVITY IN MOTION",
        ans: [
            "In this ques a negative aspect of an image will be displayed on projector for a duration of 15 minutes, during this time period participants have to write a positive aspect from the given image. (50-100 words)",
            "",
            "• Obey the ans of grammar, usage and punctuation.",
            "• Make your language concrete, not abstract; specific, not general.",
            "• Maintain a consistent style and tone.",
            "• Use adjectives and adverbs with restraint.",
            "• Use of vulgar language is not permissible.",
            "• Language either Hindi or English but not a mixed one.",
            "• Participants should carry their own pen/pencil."
        ]
    },

    {
        ques: "HASO AUR HASAO",
        ans: [
            "In this ques a popular or well-known story will be given as a subject. Participants have to insert some fun in given story. (150-200 words).",
            "",
            "• Obey the ans of grammar, usage and punctuation.",
            "• Make your language concrete, not abstract; specific, not general.",
            "• Maintain a consistent style and tone.",
            "• Use adjectives and adverbs with restraint.",
            "• Use of vulgar language is not permissible.",
            "• Language either Hindi or English but not a mixed one.",
            "• Participants should carry their own pen/pencil"
        ]
    },
    {
        ques: "DEBATE-HINDI/ENGLISH",
        ans: [
            "Objective:",
            "To provide a platform to students to present their power of expression with an effective speaking skill.",
            "",
            "ans:",
            "1. This will be an individual contest.",
            "2. Time limit: 3 min for each side of the person and 1min for debate on contradictory points.",
            "3. The topics would be declared in advance (list attached)",
            "4. Participants will have choices to speak for and against the motion.",
            "5. Participants should speak relevant points related to the topic.",
            "6. Each speaker will present his/her speech in Hindi.",
            "7. Warning bell will be rung after 2 ½ min for each of the participant and final bell after 3 min.",
            "8. Exceeding the prescribed time will result negative marks.",
            "",
            "Evaluation Parameters:",
            "The speaker will be judged on the following criteria, and will be awarded marks accordingly.",
            "",
            "Evaluation Basis: Marking Scheme (Marks)",
            "• Interpretation of the motion 10",
            "• Logical presentation of argument 10",
            "• Evidences and examples 10",
            "• Audibility and loudness 10",
            "• Rebuttal of interjection 10",
            "Total of 50 Marks",
            "",
            "Tie Rule: If there is a tie between two a random topic will be given by judges and finalize the winner.",
            "",
            "Benefits:",
            "• Improves speaking skills of the student",
            "• Gives a platform to express his/her views",
            "• Helps in enhancing the influencing power of the student",
            "• Improves orating skills."
        ]
    },
    {
        ques: "KAVYA RACHNA",
        ans: [
            "In this ques participants have to write a poem. Individual and separate topic will be given to all on random basis. (16-20 lines)",
            "",
            "• Obey the ans of grammar, usage and punctuation.",
            "• Make your language concrete, not abstract; specific, not general.",
            "• Maintain a consistent style and tone.",
            "• Use adjectives and adverbs with restraint.",
            "• Use of vulgar language is not permissible.",
            "• Language can be either Hindi or English but not a mixed one.",
            "• Participants should carry their own pen/pencil"
        ]
    },
    {
        ques: "READ A THON",
        ans: [
            "• Participant must select any one book of their choice (but it should be non-fictional) for Read-a-thon.",
            "• Time limit is 5-7 minutes to brief the book inclusive of participant's introduction",
            "• The judge's decision would be considered final",
            "• The language for the competition can be English or Hindi",
            "• The participants need to describe the summary, and the learning's from the book",
            "• Contestants should also state the inspiration behind reading that book",
            "• Decision of the jury for the ques will be final and binding to all."
        ]
    },
    {
        ques: "SLOGAN SHIKHAR",
        ans: [
            "In this ques, 1 topic will be given on the spot. Topic is related to social issues of the society. Participants have to write one slogan on given topic. (Additional marks will be provided for decoration.)",
            "",
            "• The students should carry colour pens, sketch pens with them.",
            "• A 30 minutes time will be given for activity.",
            "• Entries should be in English or Hindi."
        ]
    },
    {
        ques: "BHUJO TOH JANE",
        ans: [
            "In this ques, pair of alphabets will be given to participants. The task is to write the maximum words possible having the pair of alphabets in the beginning, or in the middle or at the last of word.",
            "",
            "• Obey the ans of grammar, usage and punctuation.",
            "• Make your language concrete, not abstract; specific, not general.",
            "• Maintain a consistent style and tone.",
            "• Use adjectives and adverbs with restraint.",
            "• Use of vulgar language is not permissible.",
            "• Participants should carry their own pen/pencil."
        ]
    },
    {
        ques: "BUSINESS JUGAD",
        ans: [
            "Objective:",
            "A business plan is a written description of your business's future, a document that tells what you plan to do and how you plan to do it. The objective of the Annual Business Plan Competition is to encourage student entrepreneurs and support the growth of jobs.",
            "",
            "ans:",
            "Entry should be individual or comprise of a team of max 3 members",
            "1. Each team can submit only one Business Plan.",
            "2. Max. Time limit for presentation: 10 mins.",
            "3. Participation requires submission of a report made on A4 size sheets of max. 4 pages and duly typed along with a presentation to be produced in front of the panel of the judges.",
            "4. Hard Copy of the Report will be prepared as per the attached template.",
            "5. Plan to be prepared for implementation, keeping in view the following parameters:",
            "   • Macro and Micro environment analysis of the business selected",
            "   • Market feasibility study – market potential, demand-supply analysis.",
            "   • Developing marketing strategy",
            "   • Competitor analysis",
            "   • Estimated cost of the project and its financing",
            "   • Technical and financial viability of the project",
            "6. There will a query round of max.10 Minutes after the presentation.",
            "",
            "Evaluation Parameters:",
            "Evaluation Basis: Marking Scheme (Marks)",
            "• Concept/Premise 10",
            "• Presentation 10",
            "• Commercial Potential 10",
            "• Social Impact 10",
            "• Challenge Evaluation 10",
            "Total of 50 Marks",
            "",
            "Tie Rule: If there is a tie between two teams then a question of any current business condition raised by judges, can be evaluated for winner.",
            "",
            "Benefits:",
            "• Helps in thinking realistically, objectively and unemotionally about your business",
            "• A well-executed business plan maps out the precise future of any business in detail.",
            "• It is a strategy that takes into account the resources and goals and explains what needs to be done to get an organization to a position of greater profitability and heightened competence as the future unfolds.",
            "",
            "The following Table of Contents reflects the comprehensive structure of the business plan template:",
            "• Executive Summary",
            "• Company Description",
            "• Organization",
            "• Location",
            "• Capitalization",
            "• Business Concept",
            "• Concept Statement",
            "• Sample Menu",
            "• Design/Layouts",
            "• Management Team",
            "• Managing Partner/Owner",
            "• General Manager",
            "• Kitchen Manager/Chef",
            "• Management Agreements",
            "• Confidentiality Agreements",
            "• Market Analysis",
            "• Industry Assessment",
            "• Target Market",
            "• Location Analysis",
            "• Competitive Analysis",
            "• Marketing Strategy",
            "• Overview",
            "• Customer Database",
            "• Frequent Diner",
            "• mail Campaign",
            "• Mailer campaign",
            "• Community/Charity Involvement",
            "• Business Relationships",
            "• 4 Walls Marketing",
            "• Public Relations",
            "• Advertising",
            "• Operations",
            "• Overview",
            "• Staffing",
            "• Training",
            "• Daily Operations & Production",
            "• Customer Service",
            "• Suppliers",
            "• Management Controls",
            "• Administrative Systems",
            "• Investment Analysis",
            "• Source of Funds",
            "• Capital Contributions",
            "• Growth Plan/Exit Strategy",
            "• Expansion Plans",
            "• Investor Exit Options",
            "• Investor Expansion Options",
            "• Financial Projections",
            "• Project Sources & Uses of Cash",
            "• Capital Budget",
            "• Sales Projection",
            "• Hourly Labor Projection",
            "• Detailed Statement of Income & Cash Flow Year 1",
            "• Summary Statement of Income & Cash Flow Year 1",
            "• Summary Statements of Income & Cash Flow Years 1-5",
            "• Break-Even Cash Flow projection."
        ]
    },
    {
        ques: "AD MAD SHOW",
        ans: [
            "Objective:",
            "Providing an opportunity to the students to present their creativity and communication skills. Advertising is the best way to communicate to the customers. Advertising helps to inform the customers about the brands available in the market and the variety of products useful to them.",
            "",
            "ans:",
            "1. No of students per team: Individual to max 3 participants",
            "2. Max. Time limit : 3 mins for presentation",
            "3. Competition will have 2 rounds:",
            "   • Round 1: Each team will have to prepare their own advertisement based on their own creativity. (Maximum of 4 teams will be shortlisted for round 2)",
            "   • Round2: The shortlisted teams will be given a product for preparing an advertisement within 30 min. Any material if required to be brought by the participants themselves.",
            "4. The caution should be taken to refrain from displaying obscenity, violence, prejudice, defamation, ethical practices etc.",
            "5. Decision of the judge's will be final and binding.",
            "",
            "Evaluation basis: Marking Scheme (marks)",
            "• Creativity 10",
            "• Adherence to the topic 10",
            "• Message Conveyed 10",
            "• On-stage presentation 10",
            "• Coordination and Over all appeal 10",
            "",
            "Tie Rule: If there is tie between two teams then judge will give a product and only one participant from each team perform the given task.",
            "",
            "Benefits:",
            "• Improving public facing skills of students",
            "• Giving a platform for creativity",
            "• Enhancing speaking skills",
            "",
            "Note:",
            "• The presentation may be audio-visual and may be in English, Hindi or mix",
            "• LCD projector will be provided as per requirement",
            "• The act should not contain any social or vulgar language."
        ]
    },
    {
        ques: "SPELL BEE",
        ans: [
            "• Preliminary / Elimination round is a qualifying for the ques. Those participants who fail to appear for the preliminary round shall not be considered for the finals.",
            "• Every entry should contain the following details: Name, Class, College roll no., Address, Phone and Email.",
            "• The registrations are to be done on-line.",
            "• The maximum time for SPELL A WORD is 30 seconds.",
            "• The ans and regulations for the preliminary and final round shall remain the same.",
            "• The organizing Committee reserves the right to change the venue, time and ans, if desired."
        ]
    },
    {
        ques: "DUMB CHARADES IN LITERARY",
        ans: [
            "• Team can comprise of 4 students.",
            "• One from the team will be given a title of a book to enact.",
            "• The other Participant will guess the name within the stipulated 1 minute.",
            "• There can be 4 rounds.",
            "• All the participants will be given a turn to enact.",
            "• Participants cannot use sign language depicting alphabets.",
            "• There will be scoring of 10 marks for every round.",
            "• If there is a tie, then another round will be done to decide the winner."
        ]
    },
    {
        ques: "YUVA SANSAD",
        ans: [
            "• English should be the language for communication.",
            "• Use of vulgar language/words is not permissible.",
            "• Topic of debate as well as speakers in favour and against to be decided on the basis of lottery.",
            "• Time for Total activity is 55 mins.",
            "• Topic to be given on the spot.",
            "• The participants should scrupulously avoid mention of the existing political parties and political personalities in the country. They should give imaginary or fictitious names to their parties and personalities. They should not give any impression that they have any leanings or bias for or against any political party or philosophy.",
            "• The members should not say or do anything on the floor of the House that is not warranted by ans of procedures or by the ruling or precedence or by the accepted and established customs and conventions of the House.",
            "• Members should not sit with their backs to the Chair. When a member wants to speak he should raise hands to attract the attention of the Chair. No member should speak unless he or she has 'Caught' the eye of the Speaker and has been permitted by the Chair by name or by a sign, to speak.",
            "• Every member should resume his seat as the Speaker rises to speak or calls out 'order-order' and also when any other member is in possession of the floor. Two or more members should not keep standing at the same time.",
            "• No member should rise or leave the House when the Speaker is addressing the House. 'The Speaker is always to be heard in silence'.",
            "• The duration of sitting of NYP should not exceed 55 minutes. Out of this, nearly 20 minutes may be devoted to Questions and the remaining time be utilized for discussion on topic."
        ]
    },
    {
        ques: "DASTAN SUNAO",
        ans: [
            "• Stories presented should be authentic, adapted or originally written",
            "• Stories presented must not touch on sensitive issues such as race, religion, stereotyping, politics, etc.",
            "• Stories must be thematically educational.",
            "• Props, backdrops and sound effects are not allowed. Any use of these will allow for disqualification by the judges.",
            "• Time allocated to present the story is 5-7 minutes.",
            "• The language for the competition can be English or Hindi."
        ]
    }
 
]

export default function LiterarySchedule() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-11/12 mx-auto py-12 my-6">
            <div>
                <Heading>Literary Events</Heading>
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

                        <p className="mt-4 px-4 leading-relaxed text-gray-300 whitespace-pre-line">
                            {item.ans.join('\n')}
                        </p>
                    </details>
                ))}
            </div>
        </motion.div>
    )
}