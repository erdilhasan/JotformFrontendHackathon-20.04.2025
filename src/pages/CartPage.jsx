import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router";
import CartItem from "../components/CartItem";

export default function CartPage(params) {
  const { cart, setCart } = useOutletContext();
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    console.log(cart);
    setTotalCost(getTotalCost());
  }, []);

  const getTotalCost = () => {
    return cart.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cart.length != 0 ? (
        cart.map((product, index) => (
          <CartItem key={index} product={product}></CartItem>
        ))
      ) : (
        <h1 className="">Your Cart Is Empty</h1>
      )}

      {cart.length != 0 ? (
        <Link to={"/checkout"}>
          <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
            Checkout
          </button>
        </Link>
      ) : (
        <h2 className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
          Add items to proceed to checkout
        </h2>
      )}
      <h2>Total:{totalCost}</h2>
    </div>
  );
}
