// import { useDispatch } from "react-redux";
// import { setMeetups } from "../store";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

export default function Card({ title, image, address, description, id }) {
  // 연결하고자하는 Context객체를 Parameter로 useContext에 집어넣는다
  const favoritesCtx = useContext(FavoritesContext);
  console.log("favoritesContext", favoritesCtx);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);
  // const addFavorite = favoritesCtx.addFavorite({title, image, address, description, id})
  // const removeFavorite = favoritesCtx.removeFavorite(id)
  // console.log(itemIsFavorite);
  // const dispatch = useDispatch();

  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <div className="-ml-4 -mt-4 grid grid-cols-2 items-center gap-6">
        <div className="ml-4 mt-4 col-span-2 sm:col-span-1">
          <img
            className="rounded-md"
            src={image ? image : "https://picsum.photos/1000/500"}
            alt="place"
          />
        </div>
        <div className="ml-4 mt-4 col-span-2 sm:col-span-1">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{address}</p>
          <p className="text-md text-gray-900">{description}</p>
          {itemIsFavorite ? (
            <button
              // onClick={() => dispatch(setMeetups(id))}
              onClick={() => favoritesCtx.removeFavorite(id)}
              type="button"
              className="mt-3 inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Remove Favorite
            </button>
          ) : (
            <button
              // onClick={() => dispatch(setMeetups(id))}
              onClick={() =>
                favoritesCtx.addFavorite({
                  title,
                  image,
                  address,
                  description,
                  id,
                })
              }
              type="button"
              className="mt-3 inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              To Favorites
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
