import React from "react";
import { useFavoriteContext } from "../Context/ImageSaveContext.jsx";
import { Link, NavLink } from "react-router-dom";
import { useOpenedImage } from "../Context/ClickImageContext";

function ImageSaver() {
  const { FavImage, downloadOnClick, removeFromFav } = useFavoriteContext();
  const { handleClick } = useOpenedImage();

  return (
    <div className="image-saver-wrapper">
      {/* <SideMenu /> */}
      <div className="fav-head">
        <h2 className="favorites-heading">Your Favourite Image Collection </h2>
      </div>

      <section className="images-container all-images">
        {FavImage.length === 0 ? (
          <div className="no-images-msg">
            <p>No favourites yet.</p>
          </div>
        ) : (
          <div className="img-container">
            {FavImage.map((fav, index) => (
              <div key={index} className="image">
                <NavLink to={`/${index + 1}`}>
                  <img
                    src={fav}
                    alt={`Favorite ${index + 1}`}
                    className="image-here"
                    onClick={() => handleClick(fav)}
                  />
                </NavLink>

                <div className="text">
                  <div className="img-text">
                    <p>{`Your Fav. ${index + 1}`}</p>
                  </div>

                  <div className="download-btn">
                    <Link className="download">
                      <button onClick={() => downloadOnClick(fav)}>
                        <i className="fas fa-download"></i>
                      </button>
                    </Link>
                    &nbsp; &nbsp; &nbsp;
                    <Link className="download">
                      <button onClick={() => removeFromFav(fav)}>
                        <i className="fas fa-bookmark"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default ImageSaver;
