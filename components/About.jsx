import {
  FaUserTie,
  FaClock,
  FaGlobe
} from "react-icons/fa";
import FadeIn from "./FadeIn";
export default function About() {
  return (
    <FadeIn>
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <p className="text-yellow-600 font-semibold uppercase tracking-widest">

              About Us

            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-green-900 leading-tight">

              Providing Quality Quran Education Worldwide

            </h2>

            <p className="mt-8 text-gray-700 leading-9 text-lg">

              Madrassah Umm-ul-Momineen Syyedah Ayesha
              Siddiqa (R.A) is dedicated to teaching the
              Holy Quran with proper Tajweed, understanding
              and Islamic values.

            </p>

            <p className="mt-6 text-gray-700 leading-9 text-lg">

              We provide one-on-one online Quran classes
              for children, teenagers and adults through
              qualified male and female teachers.

            </p>

          </div>

          {/* Right Side */}

          <div className="grid gap-6">

            <div className="bg-green-50 p-8 rounded-2xl shadow-lg hover:-translate-y-2 duration-300">

              <FaUserTie
                size={40}
                className="text-yellow-600"
              />

              <h3 className="text-2xl font-bold text-green-900 mt-4">

                Qualified Teachers

              </h3>

              <p className="text-gray-600 mt-3">

                Experienced male and female Quran teachers.

              </p>

            </div>

            <div className="bg-green-50 p-8 rounded-2xl shadow-lg hover:-translate-y-2 duration-300">

              <FaClock
                size={40}
                className="text-yellow-600"
              />

              <h3 className="text-2xl font-bold text-green-900 mt-4">

                Flexible Timings

              </h3>

              <p className="text-gray-600 mt-3">

                Classes available according to your schedule.

              </p>

            </div>

            <div className="bg-green-50 p-8 rounded-2xl shadow-lg hover:-translate-y-2 duration-300">

              <FaGlobe
                size={40}
                className="text-yellow-600"
              />

              <h3 className="text-2xl font-bold text-green-900 mt-4">

                Worldwide Access

              </h3>

              <p className="text-gray-600 mt-3">

                Online Quran learning from anywhere in the world.

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
    </FadeIn>
  );
}