// src/components/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">Printify 3D</Link>
        <div className="space-x-6 hidden md:flex">
          <Link href="/products" className="hover:text-blue-500">Products</Link>
          <Link href="/services" className="hover:text-blue-500">Services</Link>
          <Link href="/materials" className="hover:text-blue-500">Materials</Link>
          <Link href="/upload" className="hover:text-blue-500">Upload</Link>
          <Link href="/pricing" className="hover:text-blue-500">Pricing</Link>
        </div>
        <div className="space-x-4 flex items-center">
          <Link href="/cart" className="hover:text-blue-500">🛒</Link>
          <Link href="/account" className="hover:text-blue-500">👤</Link>
        </div>
      </div>
    </nav>
  );
}
