export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <img src={product.img} alt={product.name} className="rounded-t-xl h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded w-full">View</button>
      </div>
    </div>
  );
}