import { useEffect, useState } from "react";
import PhonesCard from "../Phone/PhonesCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noFound, setNoFound] = useState("");
  const [isShow, setIsShow] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favoriteItem = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteItem) {
      setFavorites(favoriteItem);
      const total = favoriteItem.reduce(
        (reValue, currentItem) => reValue + currentItem.price,
        0
      );
      setTotalPrice(total);
    } else {
      setNoFound("No Data Found");
    }
  }, []);

  const handleRemove = () => {
    localStorage.clear();
    setFavorites([]);
    setNoFound("No Data Found");
  };

  return (
    <div>
      {favorites.length > 0 && (
        <div>
          <button onClick={handleRemove} className="btn btn-primary">
            Delete ALL
          </button>
          <h1>Total Price: {totalPrice}</h1>
        </div>
      )}
      <div>
        {noFound ? (
          <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
        ) : (
          <div>
            <div className="grid grid-cols-2 gap-5">
              {isShow
                ? favorites.map((phone) => (
                    <PhonesCard key={phone.id} phone={phone}></PhonesCard>
                  ))
                : favorites
                    .slice(0, 2)
                    .map((phone) => (
                      <PhonesCard key={phone.id} phone={phone}></PhonesCard>
                    ))}
            </div>
            {favorites.length > 2 && (
              <button
                onClick={() => setIsShow(!isShow)}
                className="btn btn-primary"
              >
                {isShow ? "See less" : "See More"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
