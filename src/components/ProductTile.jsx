import { Link, useOutletContext } from "react-router";

export default function ProductTile({ product }) {
  const { cart, setCart } = useOutletContext();

  const AddToCart = () => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.pid === product.pid);

      if (existing) {
        return prevCart.map((item) =>
          item.pid === product.pid
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <Link to={"/product/" + product.pid}>
      <div
        key={product.id}
        className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 content-center"
      >
        <h2 className="text-xl font-bold">{product.name}</h2>
        {product.images && (
          <div className="flex justify-center items-center m-auto w-1/2 h-1/2">
            <img
              className="object-fill"
              src={JSON.parse(product.images)[0]}
            ></img>
          </div>
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
