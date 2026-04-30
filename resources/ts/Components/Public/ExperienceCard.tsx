import { Experience } from "@/types";
import {
    BriefcaseIcon,
    MapPinIcon,
    CalendarIcon,
    ClockIcon,
    ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

interface ExperienceCardProps {
    experience: Experience;
    index: number;
}

export default function ExperienceCard({
    experience,
    index,
}: ExperienceCardProps) {
    const employmentTypeColors = {
        "full-time":
            "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400",
        "part-time":
            "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400",
        contract:
            "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400",
        freelance:
            "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400",
        internship:
            "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-400",
    };

    return (
        <div
            className="group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark: border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Header - Compact */}
                <div className="flex items-start gap-4 mb-4">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                        {experience.company_logo ? (
                            <img
                                src={`/storage/${experience.company_logo}`}
                                alt={experience.company}
                                className="w-14 h-14 rounded-xl object-cover border-2 border-gray-200 dark:border-gray-700"
                            />
                        ) : (
                            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-600 dark:from-primary-600 dark:to-purple-700 rounded-xl flex items-center justify-center shadow-md">
                                <BriefcaseIcon className="w-7 h-7 text-white" />
                            </div>
                        )}
                    </div>

                    {/* Title & Company Info */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                                {experience.position}
                            </h3>
                            {/* Current Badge - Inline */}
                            {experience.is_current && (
                                <span className="inline-flex items-center px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-semibold whitespace-nowrap border border-green-200 dark:border-green-800">
                                    <span className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                                    Current
                                </span>
                            )}
                        </div>

                        {/* Company & Type */}
                        <div className="flex items-center flex-wrap gap-2 mb-3">
                            {experience.company_url ? (
                                <a
                                    href={experience.company_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm group/link"
                                >
                                    {experience.company}
                                    <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                </a>
                            ) : (
                                <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                                    {experience.company}
                                </span>
                            )}
                            <span className="text-gray-400 dark:text-gray-600">
                                •
                            </span>
                            <span
                                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                                    employmentTypeColors[
                                        experience.employment_type
                                    ]
                                }`}
                            >
                                {experience.employment_type
                                    .charAt(0)
                                    .toUpperCase() +
                                    experience.employment_type
                                        .slice(1)
                                        .replace("-", " ")}
                            </span>
                        </div>

                        {/* Meta Info - Compact */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600 dark:text-gray-400">
                            <div className="flex items-center">
                                <CalendarIcon className="w-3.5 h-3.5 mr-1" />
                                <span>{experience.date_range}</span>
                            </div>
                            <div className="flex items-center">
                                <ClockIcon className="w-3.5 h-3.5 mr-1" />
                                <span>{experience.duration}</span>
                            </div>
                            {experience.location && (
                                <div className="flex items-center">
                                    <MapPinIcon className="w-3.5 h-3.5 mr-1" />
                                    <span>{experience.location}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Meta Info */}
                {/* <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1.5" />
                        <span>{experience.date_range}</span>
                    </div>
                    <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1.5" />
                        <span>{experience.duration}</span>
                    </div>
                    {experience.location && (
                        <div className="flex items-center">
                            <MapPinIcon className="w-4 h-4 mr-1.5" />
                            <span>{experience.location}</span>
                        </div>
                    )}
                </div> */}

                <div className="grid grid-cols-1 lg:grid-cols-1 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {/* Description */}
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        {experience.description}
                    </p>

                    {/* Responsibilities */}
                    {experience.responsibilities &&
                        experience.responsibilities.length > 0 && (
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                                    Key Responsibilities:
                                </h4>
                                <ul className="space-y-2">
                                    {experience.responsibilities.map(
                                        (responsibility, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start text-gray-700 dark:text-gray-300 text-sm"
                                            >
                                                <span className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                <span>{responsibility}</span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}

                    {/* Technologies */}
                    {experience.technologies &&
                        experience.technologies.length > 0 && (
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                                    Technologies Used:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {experience.technologies.map(
                                        (tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-800 dark:text-primary-400 rounded-lg text-sm font-medium border border-primary-200 dark: border-primary-800"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}


// interface ExperienceCardProps {
//     experience: Experience;
//     index: number;
// }








