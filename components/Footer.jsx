import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 opacity-5">

        <div className="w-full h-full bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h3 className="text-2xl font-bold text-yellow-400">
              SAS Quran Academy
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              Providing quality Quran education for children and adults worldwide through online learning.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-bold text-yellow-400">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 mt-5">

              <a href="#home" className="hover:text-yellow-400">
                Home
              </a>

              <a href="#about" className="hover:text-yellow-400">
                About
              </a>

              <a href="#courses" className="hover:text-yellow-400">
                Courses
              </a>

              <a href="#admission" className="hover:text-yellow-400">
                Admission
              </a>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-bold text-yellow-400">
              Courses
            </h3>

            <div className="flex flex-col gap-3 mt-5 text-gray-300">

              <p>Noorani Qaida</p>

              <p>Nazra Quran</p>

              <p>Tajweed Quran</p>

              <p>Hifz Quran</p>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-bold text-yellow-400">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              <p className="flex items-center gap-3 hover:text-yellow-400">

                <FaPhone />

                0300-4446712

              </p>

              <p className="flex items-center gap-3 hover:text-yellow-400">

                <FaWhatsapp />

                WhatsApp Available

              </p>

              <p className="flex items-center gap-3 hover:text-yellow-400 break-all">

                <FaEnvelope />

                farooqeazam81@gmail.com

              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-green-800 mt-12 pt-8 text-center">

          <p className="text-gray-400">
            © 2026 Madrassah Umm-ul-Momineen Syyedah Ayesha Siddiqa (R.A)
          </p>

          <p className="mt-3 text-yellow-400 text-lg">
            وَقُل رَّبِّ زِدْنِي عِلْمًا
          </p>

        </div>

      </div>

    </footer>
  );
}