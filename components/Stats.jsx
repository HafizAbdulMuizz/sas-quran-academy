"use client";
import {
  FaUserGraduate,
  FaGlobeAsia,
  FaBookOpen,
  FaChalkboardTeacher
} from "react-icons/fa";
import CountUp from "react-countup";
export default function Stats() {
  return (
    <section className="bg-white py-32">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-yellow-600 font-semibold uppercase tracking-widest">
            Academy Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-4">
            Trusted By Students Worldwide
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-green-50 rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 duration-300">

            <FaUserGraduate
              size={40}
              className="mx-auto text-yellow-600"
            />
<h3 className="text-5xl font-bold text-green-900 mt-4">
  <CountUp end={500} duration={3} />+
</h3>

            <p className="mt-3 text-gray-600">
              Students
            </p>

          </div>

          <div className="bg-green-50 rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 duration-300">

            <FaGlobeAsia
              size={40}
              className="mx-auto text-yellow-600"
            />
<h3 className="text-5xl font-bold text-green-900 mt-4">
  <CountUp end={25} duration={3} />+
</h3>

            <p className="mt-3 text-gray-600">
              Countries
            </p>

          </div>

          <div className="bg-green-50 rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 duration-300">

            <FaBookOpen
              size={40}
              className="mx-auto text-yellow-600"
            />

           <h3 className="text-5xl font-bold text-green-900 mt-4">
  <CountUp end={4} duration={3} />
</h3>

            <p className="mt-3 text-gray-600">
              Quran Courses
            </p>

          </div>

          <div className="bg-green-50 rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 duration-300">

            <FaChalkboardTeacher
              size={40}
              className="mx-auto text-yellow-600"
            />

          <h3 className="text-5xl font-bold text-green-900 mt-4">
  <CountUp end={10} duration={3} />+
</h3>

            <p className="mt-3 text-gray-600">
              Qualified Teachers
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}