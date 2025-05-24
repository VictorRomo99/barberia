"use client";

import { useState } from "react";

interface Post {
  id: number;
  title: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  image: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Tendencias de cortes de cabello para 2025",
    summary:
      "Explora los estilos más modernos y cómo adaptarlos a tu personalidad y tipo de cabello.",
    content: `El 2025 trae consigo una variedad de estilos que combinan lo clásico con lo moderno. Desde degradados sutiles hasta cortes texturizados, cada estilo refleja una actitud única.

Algunos consejos para elegir tu próximo corte:
- Considera la forma de tu rostro.
- Piensa en tu estilo de vida y mantenimiento.
- Consulta con tu barbero para personalizar el corte.

Recuerda que un buen corte realza tu confianza y presencia.`,
    date: "2025-05-23",
    author: "Juan Pérez",
    image: "/img/tendencia.jpg",
  },
  {
    id: 2,
    title: "Guía completa para el cuidado de la barba",
    summary:
      "Mantén tu barba saludable y estilizada con estos consejos profesionales y productos recomendados.",
    content: `Cuidar la barba va más allá de simplemente recortarla. Aquí te damos una guía paso a paso para que luzcas una barba impecable:

1. Lava tu barba con un shampoo especial para barba.
2. Aplica aceite para barba para hidratar la piel y el vello.
3. Cepilla y peina diariamente para evitar enredos.
4. Recorta regularmente para mantener la forma deseada.

Además, evita tocarla demasiado para prevenir irritaciones.`,
    date: "2025-05-20",
    author: "María Gómez",
    image: "/img/barba.jpg",
  },
  {
    id: 3,
    title: "Cómo elegir el corte ideal según tu rostro",
    summary:
      "Aprende a identificar la forma de tu cara y qué estilos resaltan tus mejores características.",
    content: `Cada forma de rostro tiene cortes que favorecen su apariencia natural.

- Rostro ovalado: casi todos los cortes funcionan bien.
- Rostro cuadrado: opta por estilos que suavicen las líneas, como cortes texturizados.
- Rostro redondo: cortes con volumen en la parte superior y laterales más cortos.
- Rostro alargado: evita cortes muy largos que acentúan la longitud.

Consulta con tu barbero para un asesoramiento personalizado.`,
    date: "2025-05-18",
    author: "Carlos Díaz",
    image: "/img/rostro.jpg",
  },
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12 px-6 max-w-6xl mx-auto text-gray-900 dark:text-gray-100">
      <h1 className="text-5xl font-extrabold mb-12 text-center tracking-tight">
        Nuestro Blog
      </h1>

      <section className="grid gap-12 sm:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg cursor-pointer overflow-hidden transition-shadow duration-300"
            onClick={() => setSelectedPost(post)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelectedPost(post)}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {post.summary}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>Por {post.author}</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Modal para post */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start overflow-auto p-6 z-50"
          onClick={() => setSelectedPost(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <article
            className="bg-white dark:bg-slate-800 max-w-3xl w-full rounded-xl shadow-xl relative p-8 text-gray-900 dark:text-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              aria-label="Cerrar modal"
              className="absolute top-5 right-5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-3xl font-bold transition"
            >
              &times;
            </button>

            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-md mb-6"
              loading="lazy"
            />
            <h2 id="modal-title" className="text-3xl font-bold mb-2">
              {selectedPost.title}
            </h2>
            <div className="flex justify-between items-center mb-6 text-sm text-gray-500 dark:text-gray-400">
              <time dateTime={selectedPost.date}>
                {new Date(selectedPost.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>Por {selectedPost.author}</span>
            </div>
            <p className="whitespace-pre-line leading-relaxed">
              {selectedPost.content}
            </p>

            <a
              href={`https://wa.me/997534721?text=${encodeURIComponent(
                `Hola, estoy interesado en el artículo del blog: ${selectedPost.title}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Consultar por WhatsApp
            </a>
          </article>
        </div>
      )}
    </main>
  );
}
