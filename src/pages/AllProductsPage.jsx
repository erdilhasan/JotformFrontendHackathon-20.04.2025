import { useEffect, useState } from "react";
import ProductTile from "../components/ProductTile";

export default function AllProductsPage(params) {
  const apiKey = import.meta.env.VITE_JOTFORM_API_KEY;
  const [products, setProducts] = useState([
    { id: 1, title: "Product 1", price: 100 },
    { id: 2, title: "Product 2", price: 200 },
    { id: 3, title: "Product 3", price: 300 },
  ]);

  useEffect(() => {
    fetch(
      "https://api.jotform.com/form/251074120478957/payment-info?apiKey=" +
        apiKey
    ).then((response) =>
      response.json().then((data) => setProducts(data.content.products))
    );
    console.log(products);
  }, []);

  return (
    <div>
      <h1>All Products Page</h1>
      <p>Here you can find all the products available in our store.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductTile key={index} product={product}></ProductTile>
        ))}
      </div>
    </div>
  );
}
