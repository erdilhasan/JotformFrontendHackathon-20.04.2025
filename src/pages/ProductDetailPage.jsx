import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router";

export default function ProductDetailPage(params) {
  let { pid } = useParams();

  const apiKey = import.meta.env.VITE_JOTFORM_API_KEY;
  const form_id = import.meta.env.VITE_FORM_ID;

  const { cart, setCart } = useOutletContext();
  const { favourites, setFavourites } = useOutletContext();

  const [product, setProduct] = useState(null);

  //  filter and find the product by pid from all products list
  function filterByPid(jsonObject, pid) {
    return jsonObject.filter(function (jsonObject) {
      return jsonObject["pid"] == pid;
    })[0];
  }

  const toggleFavourite = () => {
    setFavourites((prev) => {
      const exists = prev.find((item) => item.pid === product.pid);
      if (exists) {
        // Remove from favourites
        return prev.filter((item) => item.pid !== product.pid);
      } else {
        // Add to favourites
        return [...prev, product];
      }
    });
  };

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
  useEffect(() => {
    fetch(
      "https://api.jotform.com/form/" +
        form_id +
        "/payment-info?apiKey=" +
        apiKey
    ).then((response) =>
      response.json().then((data) => {
        setProduct(filterByPid(data.content.products, pid));
      })
    );
    console.log(product);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      {product && (
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
          <p className="">{product.description}</p>
          <button
            onClick={AddToCart}
            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
          >
            Add to Cart
          </button>
          <button
            onClick={toggleFavourite}
            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
          >
            {favourites.find((fav) => fav.id === product.id) ? "💔" : "❤️"}
          </button>
        </div>
      )}
    </div>
  );
}
