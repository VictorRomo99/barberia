"use client";

import Image from "next/image";

const servicios = [
  {
    nombre: "Corte de Cabello",
    img: "/img/corte.jpg",
    mensaje: "Hola, quiero agendar un corte de cabello.",
  },
  {
    nombre: "Tinte",
    img: "/img/tinte.jpg",
    mensaje: "Hola, estoy interesado en un tinte.",
  },
  {
    nombre: "Ondulación",
    img: "/img/ondulacion.jpg",
    mensaje: "Hola, quiero una ondulación.",
  },
  {
    nombre: "Tratamiento Capilar",
    img: "/img/tratamiento.jpg",
    mensaje: "Hola, quiero un tratamiento capilar.",
  },
];

export default function ServiciosPage() {
  return (
    <main className="px-6 py-12 bg-slate-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        Servicios Profesionales
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col transition transform hover:scale-105 duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={servicio.img}
                alt={servicio.nombre}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col flex-grow justify-between">
              <h2 className="text-xl font-semibold text-white mb-4">
                {servicio.nombre}
              </h2>
              <a
                href={`https://wa.me/997534721?text=${encodeURIComponent(
                  servicio.mensaje
                )}`}
                target="_blank"
                rel="noopener"
                className="mt-auto bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-full text-center transition"
              >
                Agendar por WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
