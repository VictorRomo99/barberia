"use client";

import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
}

const categories: Record<string, Product[]> = {
  "Ceras y Pomadas": [
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
  ],
  "Geles y Fijadores": [
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
  ],
  "Shampoo y Cuidado Capilar": [
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
  ],
  "After Shave y Fragancias": [
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
      description:
        "Toque clásico y elegante para tu rutina de cuidado personal.",
      price: 55.0,
      image: "/img/cream.jpg",
    },
  ],
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Ceras y Pomadas");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-slate-900 text-white py-10 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-8">
        Productos Nishman
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              selectedCategory === category
                ? "bg-yellow-500 text-black"
                : "bg-slate-700 text-white hover:bg-yellow-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories[selectedCategory].map((product) => (
          <div
            key={product.id}
            className="bg-slate-800 p-5 rounded-xl shadow-xl hover:shadow-yellow-500/30 transition cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-slate-800 p-6 rounded-xl max-w-lg w-full relative text-white">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-72 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
            <p className="text-gray-300 mb-2">{selectedProduct.description}</p>
            <div className="mb-4">
              {selectedProduct.oldPrice && (
                <span className="text-red-400 line-through mr-2">
                  S/ {selectedProduct.oldPrice.toFixed(2)}
                </span>
              )}
              <span className="text-yellow-400 font-bold text-xl">
                S/ {selectedProduct.price.toFixed(2)}
              </span>
            </div>
            <a
              href={`https://wa.me/1234567890?text=${encodeURIComponent(
                `Hola, estoy interesado en el producto: ${selectedProduct.name}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-full transition"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
