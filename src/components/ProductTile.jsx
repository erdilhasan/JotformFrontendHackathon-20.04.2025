export default function ProductTile({ product }) {
  return (
    <div
      key={product.id}
      className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
}
