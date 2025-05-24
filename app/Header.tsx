"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white py-4 px-8 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <Image
          src="/img/indigo.png"
          alt="Logo"
          width={300}
          height={300}
          className="object-contain drop-shadow-lg"
          priority
        />
      </div>
      <nav className="hidden md:flex space-x-4">
        <Link
          href="/"
          className="bg-black text-white px-6 py-3 rounded-lg shadow-lg font-semibold tracking-wide uppercase transition duration-300 hover:bg-gray-800"
        >
          Inicio
        </Link>
        <Link
          href="/nosotros"
          className="bg-black text-white px-6 py-3 rounded-lg shadow-lg font-semibold tracking-wide uppercase transition duration-300 hover:bg-gray-800"
        >
          Nosotros
        </Link>
        <Link
          href="/servicios"
          className="bg-black text-white px-6 py-3 rounded-lg shadow-lg font-semibold tracking-wide uppercase transition duration-300 hover:bg-gray-800"
        >
          Servicios
        </Link>
        <Link
          href="/productos"
          className="bg-black text-white px-6 py-3 rounded-lg shadow-lg font-semibold tracking-wide uppercase transition duration-300 hover:bg-gray-800"
        >
          Productos
        </Link>
        <Link
          href="/blog"
          className="bg-black text-white px-6 py-3 rounded-lg shadow-lg font-semibold tracking-wide uppercase transition duration-300 hover:bg-gray-800"
        >
          Blog
        </Link>
        <Link
          href="/faq"
          className="bg-black text-white px-6 py-3 rounded-lg shadow-lg font-semibold tracking-wide uppercase transition duration-300 hover:bg-gray-800"
        >
          FAQ
        </Link>
      </nav>
    </header>
  );
}
