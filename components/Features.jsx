import {
  FaUserGraduate,
  FaClock,
  FaGlobe,
  FaChalkboardTeacher,
  FaChartLine,
  FaBookOpen,
} from "react-icons/fa";
import FadeIn from "./FadeIn";
export default function Features() {

  const features = [
    {
      icon: <FaChalkboardTeacher size={45} />,
      title: "Qualified Teachers",
      description:
        "Experienced male and female Quran teachers dedicated to student success.",
    },
    {
      icon: <FaUserGraduate size={45} />,
      title: "One-to-One Classes",
      description:
        "Personalized learning sessions for better understanding and progress.",
    },
    {
      icon: <FaClock size={45} />,
      title: "Flexible Timings",
      description:
        "Choose class timings according to your daily routine and availability.",
    },
    {
      icon: <FaGlobe size={45} />,
      title: "Worldwide Access",
      description:
        "Join classes from anywhere in the world through online learning.",
    },
    {
      icon: <FaChartLine size={45} />,
      title: "Progress Tracking",
      description:
        "Regular feedback and progress reports for students and parents.",
    },
    {
      icon: <FaBookOpen size={45} />,
      title: "Islamic Learning",
      description:
        "Strong foundation in Quran recitation, Tajweed and Islamic values.",
    },
  ];

  return (
    <FadeIn>
    <section className="bg-white py-28">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-950">
          Why Choose Our Academy
        </h2>

        <div className="w-32 h-1 bg-yellow-500 mx-auto mt-5 rounded-full"></div>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-6">
          We provide a professional, flexible and student-focused Quran learning experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white border border-green-100 rounded-3xl p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl duration-300"
            >

              <div className="text-yellow-600 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-green-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
    </FadeIn>
  );
}