import { FaWhatsapp } from "react-icons/fa";
import FadeIn from "./FadeIn";
export default function TrialSection() {
  return (
    <FadeIn>
    <section className="relative py-28 bg-gradient-to-r from-green-950 via-green-900 to-green-950 overflow-hidden">

      <div className="absolute inset-0 opacity-10">

        <div className="w-full h-full bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:25px_25px]"></div>

      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

        <h2 className="text-4xl md:text-6xl font-bold">

          Start Your Quran Journey Today

        </h2>

        <p className="mt-8 text-xl text-gray-200 max-w-3xl mx-auto leading-9">

          Get Free Trial Classes and experience professional Quran education
          with qualified teachers from the comfort of your home.

        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-5">

          <a
            href="#admission"
            className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:scale-105 duration-300"
          >
            Apply Admission
          </a>

          <a
            href="https://wa.me/923004446712"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-green-950 duration-300 flex items-center justify-center gap-2"
          >
            <FaWhatsapp />
            WhatsApp Now
          </a>

        </div>

      </div>

    </section>
    </FadeIn>
  );
}