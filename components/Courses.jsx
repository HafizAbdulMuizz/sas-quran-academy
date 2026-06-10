import {
    FaBookOpen,
    FaMosque,
    FaGraduationCap,
    FaQuran
} from "react-icons/fa";
import FadeIn from "./FadeIn";
export default function Courses() {
    const courses = [
        {
            icon: <FaQuran size={40} />,
            title: "Basic Noorani Qaida",
            description:
                "Learn Arabic letters, pronunciation and Quran reading basics.",
            features: [
                "Arabic Letters",
                "Makharij Practice",
                "Reading Foundation"
            ]
        },

        {
            icon: <FaBookOpen size={40} />,
            title: "Nazra Quran",
            description:
                "Learn correct Quran recitation with proper pronunciation.",
            features: [
                "Quran Reading",
                "Daily Practice",
                "One-on-One Classes"
            ]
        },

        {
            icon: <FaMosque size={40} />,
            title: "Tajweed Quran",
            description:
                "Master Tajweed rules and beautify your recitation.",
            features: [
                "Tajweed Rules",
                "Correct Pronunciation",
                "Beautiful Recitation"
            ]
        },

        {
            icon: <FaGraduationCap size={40} />,
            title: "Hifz Quran",
            description:
                "Memorize the Holy Quran with experienced teachers.",
            features: [
                "Memorization Plan",
                "Daily Revision",
                "Progress Tracking"
            ]
        }
    ];
    return (
        <FadeIn>
        <section
            id="courses"
            className="bg-green-50 py-24"
        >

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center text-green-900">
                    Our Courses
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                    {courses.map((course, index) => (

                        <div
                            key={index}
                            className="
  bg-white
  rounded-3xl
  shadow-lg
  border-t-4
  border-yellow-500
  p-8
  hover:-translate-y-3
  hover:shadow-2xl
  duration-300
  flex
  flex-col
  "
                        >

                            <div className="text-yellow-500 mb-5">
                                {course.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-green-900">
                                {course.title}
                            </h3>

                            <p className="mt-4 text-gray-600 leading-7">
                                {course.description}
                            </p>

                            <div className="mt-6 space-y-2">

                                {course.features.map((feature, i) => (

                                    <div
                                        key={i}
                                        className="flex items-center gap-2 text-green-800"
                                    >
                                        ✓ {feature}
                                    </div>

                                ))}

                            </div>

                            <button
                                className="
    mt-auto
    w-full
    bg-green-900
    text-white
    py-3
    rounded-xl
    font-semibold
    hover:bg-yellow-500
    hover:text-black
    duration-300
    "
                            >
                                Learn More
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </section>
        </FadeIn>
    );
}