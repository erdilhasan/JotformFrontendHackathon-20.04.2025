import { FaHome, FaProductHunt, FaStar } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

export default function NavBar() {
  return (
    <nav className="flex shadow-md rounded-md bg-white  m-0 content-between justify-between p-2">
      <ul className="flex   justify-between content-between  ">
        <li className="m-auto px-0">
          <Link className="flex" to="/">
            <FaHome className="m-auto"></FaHome> Home
          </Link>
        </li>

        <li className="px-4">
          <Link className="flex" to="/allproducts">
            <FaProductHunt className="m-auto"></FaProductHunt> All Products
          </Link>
        </li>
        <li className="px-4">
          <Link className="flex" to="/cart">
            <FaBasketShopping className="m-auto"></FaBasketShopping> Cart
          </Link>
        </li>
        <li className="px-4">
          <Link className="flex" to="/favourites">
            <FaStar className="m-auto"></FaStar> Favourites
          </Link>
        </li>
      </ul>{" "}
    </nav>
  );
}
