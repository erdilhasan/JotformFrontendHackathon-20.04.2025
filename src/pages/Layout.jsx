import { useEffect, useState } from "react";
import { FaHome, FaProductHunt, FaStar } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { Link, Outlet } from "react-router";
import NavBar from "../components/NavBar";

export default function Layout() {
  //global cart
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div className="">
      <NavBar />
      <Outlet context={{ cart, setCart, favourites, setFavourites }}></Outlet>
    </div>
  );
}
