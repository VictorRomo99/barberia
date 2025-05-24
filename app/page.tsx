import FloatingSocials from "./FloatingSocials";
import Carousel from "./Carousel";
import ProductCarousel from "./ProductCarousel";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      <FloatingSocials />
      <Carousel />
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-900 py-10">
        <h2 className="text-white text-3xl font-bold mb-6"></h2>
        <div className="w-full max-w-6xl">
          <ProductCarousel />
        </div>
      </main>
    </div>
  );
}
