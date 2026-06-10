"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923004446712"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      bg-green-500
      text-white
      p-4
      rounded-full
      shadow-2xl
      hover:scale-110
      duration-300
      animate-bounce
      "
    >
      <FaWhatsapp size={35} />
    </a>
  );
}