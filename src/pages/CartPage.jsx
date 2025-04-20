import { useEffect } from "react";
import { useOutletContext } from "react-router";

export default function CartPage(params) {
  const { cart, setCart } = useOutletContext();

  return (
    <div>
      {cart.length != 0 ? (
        cart.map((product, index) => (
          <div key={index}>
            <h1>product</h1>
          </div>
        ))
      ) : (
        <h1> Your Cart Is Empty</h1>
      )}
    </div>
  );
}
