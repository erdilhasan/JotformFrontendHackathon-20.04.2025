import { useEffect } from "react";
import { useOutletContext } from "react-router";
import CartItem from "../components/CartItem";

export default function CartPage(params) {
  const { cart, setCart } = useOutletContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cart.length != 0 ? (
        cart.map((product, index) => (
          <CartItem key={index} product={product}></CartItem>
        ))
      ) : (
        <h1>Your Cart Is Empty</h1>
      )}
    </div>
  );
}
