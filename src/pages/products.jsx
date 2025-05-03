import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Custom Ring", price: "$40", img: "/images/ring.jpg" },
  { id: 2, name: "Miniature", price: "$15", img: "/images/miniature.jpg" },
  //...add more
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold mb-8">Popular Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
    </>
  );
}