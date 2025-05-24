"use client";

import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function FloatingSocials() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
      <a
        href="https://www.facebook.com/INDIG0BarberShop"
        target="_blank"
        rel="noopener"
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:opacity-75"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="https://www.instagram.com/indigo.b.s/"
        target="_blank"
        rel="noopener"
        className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:opacity-75"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://wa.me/997534721"
        target="_blank"
        rel="noopener"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:opacity-75"
      >
        <FaWhatsapp size={24} />
      </a>
      <a
        href="https://www.tiktok.com/@barberindigo"
        target="_blank"
        rel="noopener"
        className="bg-black text-white p-3 rounded-full shadow-lg hover:opacity-75"
      >
        <FaTiktok size={24} />
      </a>
    </div>
  );
}
