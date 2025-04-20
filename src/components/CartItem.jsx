import { Link, useOutletContext } from "react-router";

export default function CartItem({ product }) {
  const { cart, setCart } = useOutletContext();

  const decrementQuantity = () => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.pid === product.pid
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // remove item if quantity drops to 0
    );
  };

  const incrementQuantity = () => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.pid === product.pid
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

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
        <p className="text-gray-700">Quantity:{product.quantity}</p>
        <button
          onClick={decrementQuantity}
          className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
        >
          -
        </button>
        <button
          onClick={incrementQuantity}
          className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
        >
          +
        </button>
      </div>
    </Link>
  );
}
