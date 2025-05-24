"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "¿Cuáles son los horarios de atención?",
    answer:
      "Atendemos de lunes a sábado de 9:00 a.m. a 8:00 p.m. y los domingos de 10:00 a.m. a 4:00 p.m.",
  },
  {
    id: 2,
    question: "¿Es necesario agendar una cita?",
    answer:
      "No es obligatorio, pero recomendamos agendar tu cita para evitar tiempos de espera. Puedes hacerlo a través de nuestro WhatsApp.",
  },
  {
    id: 3,
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos efectivo, tarjetas de crédito y débito, Yape y Plin.",
  },
  {
    id: 4,
    question: "¿Ofrecen servicios para mujeres?",
    answer:
      "Sí, ofrecemos cortes, tintes y tratamientos capilares tanto para hombres como para mujeres.",
  },
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white py-12 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Preguntas Frecuentes
      </h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map(({ id, question, answer }) => (
          <div
            key={id}
            className="border border-gray-300 dark:border-slate-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggle(id)}
              aria-expanded={openId === id}
              aria-controls={`faq-${id}`}
              id={`faq-button-${id}`}
              className="w-full text-left px-6 py-4 bg-white dark:bg-slate-800 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <span className="text-lg font-medium text-gray-900 dark:text-white">
                {question}
              </span>
              <svg
                className={`w-6 h-6 text-gray-600 dark:text-gray-300 transition-transform duration-300 ${
                  openId === id ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id={`faq-${id}`}
              role="region"
              aria-labelledby={`faq-button-${id}`}
              className={`px-6 pb-6 bg-gray-50 dark:bg-slate-900 text-gray-700 dark:text-gray-300 overflow-hidden transition-all duration-300 ease-in-out ${
                openId === id ? "max-h-96 pt-4" : "max-h-0"
              }`}
              style={{ transitionProperty: "max-height, padding-top" }}
            >
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
