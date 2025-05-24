"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Aqua Wax 02 Sport 150ml",
    description:
      "Cera para cabello con fragancia tropical, fijación media y acabado brillante.",
    price: 57.0,
    image: "/img/aqua.jpg",
  },
  {
    id: 2,
    name: "Styling Wax M5 Matte Finish 150ml",
    description: "Cera mate de alta fijación, sin residuos.",
    price: 60.0,
    oldPrice: 65.0,
    image: "/img/wax.jpg",
  },
  {
    id: 3,
    name: "Gel Nishman G1 Fijación Extrema 300ml",
    description: "Fijación ultra fuerte para peinados duraderos.",
    price: 38.0,
    image: "/img/gel.png",
  },
  {
    id: 4,
    name: "Nishman Hair Spray Ultra Strong 400ml",
    description: "Spray fijador sin residuos para todo tipo de cabello.",
    price: 45.0,
    image: "/img/laca.jpg",
  },
  {
    id: 5,
    name: "Shampoo Pro-Hair Keratin Complex 1250ml",
    description: "Revitaliza y fortalece el cabello dañado con keratina.",
    price: 98.0,
    image: "/img/shampoo.jpg",
  },
  {
    id: 6,
    name: "Shampoo Silver Anti-Amarillo 500ml",
    description:
      "Ideal para cabello gris o con decoloraciones, elimina tonos amarillos.",
    price: 52.0,
    image: "/img/yellow.jpg",
  },
  {
    id: 7,
    name: "After Shave Nishman #7 Gold One 400ml",
    description:
      "Fragancia intensa y duradera, ideal para después del afeitado.",
    price: 55.0,
    image: "/img/after.jpg",
  },
  {
    id: 8,
    name: "After Shave Cologne Nishman #4 Empire 400ml",
    description: "Toque clásico y elegante para tu rutina de cuidado personal.",
    price: 55.0,
    image: "/img/cream.jpg",
  },
];

const ITEMS_PER_VIEW = 3;

export default function ProductCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const visibleProducts = [
    ...products.slice(index, index + ITEMS_PER_VIEW),
    ...products.slice(0, Math.max(0, index + ITEMS_PER_VIEW - products.length)),
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-gray-900 py-6 px-4 rounded-lg">
      <h2 className="text-white text-3xl font-bold text-center mb-6">
        🛒 Productos en Oferta 🛒
      </h2>
      <div className="overflow-hidden">
        <motion.div className="flex gap-6">
          {visibleProducts.map((product) => (
            <motion.div
              key={product.id}
              className="w-1/3 bg-gray-800 rounded-lg shadow-lg p-4 text-white flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-sm text-gray-300 text-center">
                {product.description}
              </p>
              <div className="mt-2">
                {product.oldPrice && (
                  <span className="text-red-500 line-through text-sm mr-2">
                    S/ {product.oldPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-yellow-400 text-lg font-bold">
                  S/ {product.price.toFixed(2)}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="text-center mt-6">
        <Link href="/productos">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg transition-all">
            Más Productos
          </button>
        </Link>
      </div>
    </div>
  );
}
