import { Link, useOutletContext } from "react-router";

export default function ProductTile({ product }) {
  const { cart, setCart } = useOutletContext();

  function AddToCart(params) {
    setCart([...cart, product]);
  }

  return (
    <Link to={"/product/" + product.pid}>
      <div
        key={product.id}
        className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <h2 className="text-xl font-bold">{product.name}</h2>
        {product.images && (
          <img
            className="object-fill w-1/2 h-1/2"
            src={JSON.parse(product.images)[0]}
          ></img>
        )}
        <p className="text-gray-700">${product.price}</p>
        <button
          onClick={AddToCart}
          className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
