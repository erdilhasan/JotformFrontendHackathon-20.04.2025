import { useOutletContext } from "react-router";
import ProductTile from "../components/ProductTile";

export default function FavouritesPage(params) {
  const { favourites, setFavourites } = useOutletContext();

  return (
    <div>
      <h1>Favourites Page</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favourites.map((product, index) => (
          <ProductTile key={index} product={product}></ProductTile>
        ))}
      </div>
    </div>
  );
}
