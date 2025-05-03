// src/components/Hero.jsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-50 min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Bring Your Ideas to Life with Professional 3D Printing</h1>
      <p className="text-lg md:text-xl mb-8 text-gray-600">Upload, Customize, Print. It’s That Simple.</p>
      <div className="flex space-x-4">
        <Link href="/upload" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
          Get Started
        </Link>
        <Link href="/materials" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-100">
          Explore Materials
        </Link>
      </div>
    </section>
  );
}