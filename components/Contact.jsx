import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import FadeIn from "./FadeIn";
export default function Contact() {
  return (
    <FadeIn>
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-green-50 py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-950">
          Contact Us
        </h2>

        <div className="w-32 h-1 bg-yellow-500 mx-auto mt-5 rounded-full"></div>

        <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto">
          We are always ready to help you begin your Quran learning journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl duration-300 text-center">

            <div className="text-yellow-600 flex justify-center mb-5">
              <FaPhone size={45} />
            </div>

            <h3 className="text-2xl font-bold text-green-900">
              Phone / WhatsApp
            </h3>

            <p className="mt-4 text-gray-600">
              0300-4446712
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl duration-300 text-center">

            <div className="text-yellow-600 flex justify-center mb-5">
              <FaEnvelope size={45} />
            </div>

            <h3 className="text-2xl font-bold text-green-900">
              Email
            </h3>

            <p className="mt-4 text-gray-600 break-all">
              farooqeazam81@gmail.com
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl duration-300 text-center">

            <div className="text-yellow-600 flex justify-center mb-5">
              <FaMapMarkerAlt size={45} />
            </div>

            <h3 className="text-2xl font-bold text-green-900">
              Address
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Gali No. 3 Faisal Park,
              Near Allied School,
              Barkat Town Stop,
              Shahdara Lahore
            </p>

          </div>

        </div>

      </div>
    </section>
    </FadeIn>
  );
}