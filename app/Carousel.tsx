"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/img/foto1.jpg", text: "Corte de calidad para caballeros" },
  { src: "/img/foto2.jpg", text: "Estilo que habla por ti" },
  { src: "/img/foto3.jpg", text: "Transforma tu imagen, resalta tu esencia" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={images[index].src}
          src={images[index].src}
          alt="Imagen del carrusel"
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Texto sobre la imagen */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <motion.h2
          key={images[index].text}
          className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
        >
          {images[index].text}
        </motion.h2>
      </div>
    </div>
  );
}
