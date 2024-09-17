// components/Guidelines.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Guidelines() {
    const guidelines = [
        "Treat all attendees, performers, and staff with respect and courtesy. Discriminatory, abusive, or offensive behaviour will not be tolerated.",
        "Follow all fest rules and guidelines provided by event organizers and staff.",
        "Alcohol and illegal substances are strictly prohibited in the premises. Anyone found violating this rule will be removed from the event and strict action can be taken.",
        "Respect the personal property of others. Any theft or vandalism will be addressed promptly and may result in removal from the event.",
        "Student core committee members and student coordinators are not allowed to participate.",
        "A student can participate in a maximum of 4 events in each category (Cultural, Technical, Fine Arts & Photography, Literary).",
        "Volunteers (Event Managers) are permitted to participate in events other than their own event.",
    ];

    return (
        <div className="bg-black text-white p-6 md:p-8 rounded-lg mt-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Event Guidelines</h2>
            <ul className="list-disc pl-6 space-y-4">
                {guidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start space-x-3 font-semibold text-lg">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-400" />
                        <span>{guideline}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
