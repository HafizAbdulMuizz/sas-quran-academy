
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import {
  FaUserGraduate,
  FaGlobe,
  FaBookOpen,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#F8F5EE] via-white to-green-50 min-h-screen flex items-center justify-center"
    >
      {/* Islamic Arch Background */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-10">

        <svg
          width="700"
          height="500"
          viewBox="0 0 700 500"
          fill="none"
        >
          <path
            d="M350 20
      C500 20 620 140 620 300
      V500
      H80
      V300
      C80 140 200 20 350 20Z"
            stroke="#B8860B"
            strokeWidth="8"
            fill="none"
          />
        </svg>

      </div>
      <ParticlesBackground />
      <div
        className="
  absolute inset-0
  opacity-[0.03]
  bg-[url('/pattern.png')]
  bg-repeat
  "
      ></div>

      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-300/20 rounded-full blur-3xl"></div>
      {/* Floating Noor Particles */}

<div className="absolute inset-0 overflow-hidden pointer-events-none">

  <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>

  <div className="absolute top-40 right-32 w-3 h-3 bg-yellow-500 rounded-full animate-ping"></div>

  <div className="absolute top-72 left-1/3 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>

  <div className="absolute bottom-52 right-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>

  <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-ping"></div>

  <div className="absolute top-1/2 right-16 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>

</div>
      {/* Mosque Silhouette */}

      <div className="absolute bottom-10 left-0 w-full opacity-[0.14] scale-150 pointer-events-none">

        <svg
viewBox="0 0 1440 700"
          className="w-full"
          fill="#14532d"
        >

          <path d="
M0,320
L0,220
L120,220
L160,180
L200,220
L260,220
L300,120
L340,220
L420,220
L470,170
L520,220
L620,220
L700,80
L780,220
L920,220
L980,160
L1040,220
L1180,220
L1240,130
L1300,220
L1440,220
L1440,320
Z
"/>

        </svg>

      </div>
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        {/* Ayat */}

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-yellow-700
text-2xl
md:text-5xl
font-bold
mb-10
mt-20
tracking-wider
drop-shadow-sm"        >
          وَقُل رَّبِّ زِدْنِي عِلْمًا
        </motion.p>

        {/* Logo */}

        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 1, 0, -1, 0]
          }}

          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex justify-center"
        >
          <Image
            src="/mad-logoo.png"
            alt="SAS Logo"
            width={220}
            height={220}
            priority
          />
        </motion.div>

        {/* Arabic Name */}

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8
text-2xl
md:text-4xl
text-green-900
font-bold
bg-white/70
backdrop-blur-md
inline-block
px-8
py-4
rounded-full
shadow-lg"
        >
          أم المؤمنين السيدة عائشة الصديقة رضي الله عنها
        </motion.h2>
        <div className="flex justify-center mt-6">

          <div className="w-40 h-[3px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

        </div>
        {/* English Name */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-4xl md:text-6xl font-extrabold text-green-950"
        >
          Madrassah Umm-ul-Momineen
        </motion.h1>

        <p className="mt-2 text-green-700 font-semibold text-lg">
          Syyedah Ayesha Siddiqa (R.A)
        </p>

        {/* Subtitle */}

        <p className="mt-6 text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-9">
Learn Quran With Qualified Male & Female Teachers
          <br />
Nazra Quran • Noorani Qaida • Tajweed • Hifz

For Children, Adults & Families Worldwide        </p>
        <p className="mt-6 text-yellow-700 font-semibold italic">

          "The Best Among You Are Those Who Learn The Quran And Teach It."

        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="#admission"
            className="bg-yellow-500
text-black
px-8
py-4
rounded-xl
font-bold
hover:bg-yellow-400
hover:scale-105
duration-300
shadow-lg
shadow-yellow-500/30"
          >
            Apply Admission
          </a>

          <a
            href="https://wa.me/923004446712"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2
border-green-900
text-green-900
px-8
py-4
rounded-xl
font-bold
hover:bg-green-900
hover:text-white
hover:scale-105
duration-300"
          >
            Free Trial Class
          </a>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-3
hover:shadow-2xl
duration-300">

            <FaUserGraduate
              size={40}
              className="mx-auto text-yellow-600"
            />

            <h3 className="text-3xl font-bold text-green-900 mt-4">
              500+
            </h3>

            <p className="text-gray-600">
              Students
            </p>

          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-3
hover:shadow-2xl
duration-300">

            <FaBookOpen
              size={40}
              className="mx-auto text-yellow-600"
            />

            <h3 className="text-3xl font-bold text-green-900 mt-4">
              10+
            </h3>

            <p className="text-gray-600">
              Years Experience
            </p>

          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-3
hover:shadow-2xl
duration-300">

            <FaGlobe
              size={40}
              className="mx-auto text-yellow-600"
            />

            <h3 className="text-3xl font-bold text-green-900 mt-4">
              Worldwide
            </h3>

            <p className="text-gray-600">
              Online Classes
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}