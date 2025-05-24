"use client";
import Image from "next/image";
import Link from "next/link";

export default function Nosotros() {
  return (
    <div className="text-white">
      {/* Sección 1: Encabezado con fondo */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-center">
        <h1 className="text-5xl font-extrabold uppercase tracking-wide drop-shadow-lg">
          Nosotros
        </h1>
      </section>

      {/* Sección 2: Imagen + Presentación */}
      <section className="container mx-auto py-12 px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Imagen */}
        <div className="w-full md:w-1/2">
          <Image
            src="/img/fondo.jpg" // Imagen de referencia (cambiar por la real)
            alt="Indigo Barber Studio"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Texto de presentación */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Indigo Barber Studio</h2>
          <p className="text-lg mb-4">
            Más que una barbería, somos un espacio donde el estilo cobra vida.
            En Indigo Barber Studio, fusionamos tradición y modernidad para que
            cada cliente salga con confianza y elegancia.
          </p>
          <p className="text-lg">
            Estamos en <strong>Huancayo</strong>, ofreciendo cortes de calidad,
            cuidado de la barba y una experiencia personalizada. ¡Déjanos
            transformar tu estilo!
          </p>
        </div>
      </section>

      {/* Sección 3: Frase motivadora + Botón */}
      <section
        className="relative h-[50vh] flex flex-col items-center justify-center bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/img/barber-fondo.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 p-6 rounded-lg">
          <h3 className="text-4xl font-extrabold mb-4">
            {"Un buen corte no solo cambia tu look, cambia tu actitud."}
          </h3>

          <Link
            href="https://wa.me/997534721" // Reemplazar con el número real
            target="_blank"
            className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-600 transition duration-300"
          >
            Quiero una cita
          </Link>
        </div>
      </section>
    </div>
  );
}
