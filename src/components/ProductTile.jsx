import { Link, useOutletContext } from "react-router";

export default function ProductTile({ product }) {
  const { cart, setCart } = useOutletContext();

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
      </div>
    </Link>
  );
}
