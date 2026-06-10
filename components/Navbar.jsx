"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-yellow-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <Image
            src="/mad-logoo.png"
            alt="SAS Logo"
            width={55}
            height={55}
          />

          <div>

            <h2 className="font-bold text-green-950 text-lg">
              SAS Academy
            </h2>

            <p className="text-xs text-yellow-700">
              Quran & Islamic Education
            </p>

          </div>

        </div>

        {/* Center Ayat */}

        <div className="hidden lg:block">

          <p className="text-green-900 font-semibold text-lg">
  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيم
</p>

        </div>

        {/* Desktop Links */}

        <div className="hidden md:flex items-center gap-7 text-green-950 font-medium">

          <a href="#home" className="hover:text-yellow-600 transition">
            Home
          </a>

          <a href="#about" className="hover:text-yellow-600 transition">
            About
          </a>

          <a href="#courses" className="hover:text-yellow-600 transition">
            Courses
          </a>

          <a href="#admission" className="hover:text-yellow-600 transition">
            Admission
          </a>

          <a href="#contact" className="hover:text-yellow-600 transition">
            Contact
          </a>

          <a
            href="https://wa.me/923004446712"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black px-5 py-2 rounded-xl font-semibold hover:bg-yellow-400 transition"
          >
            WhatsApp
          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-green-900"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-white border-t border-yellow-200 px-6 py-5 flex flex-col gap-4 text-green-950">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#courses">Courses</a>

          <a href="#admission">Admission</a>

          <a href="#contact">Contact</a>

          <a
            href="https://wa.me/923004446712"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-center text-black py-3 rounded-xl font-semibold"
          >
            WhatsApp
          </a>

        </div>

      )}

    </nav>
  );
}