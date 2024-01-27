import React from "react";
import { useFavoriteContext } from "../Context/ImageSaveContext.jsx";
import SideMenu from "./SideMenu.jsx";
import { Link } from "react-router-dom";

function ImageSaver() {
  const { FavImage, downloadOnClick, removeFromFav } = useFavoriteContext();

  return (
    <div className="image-saver-wrapper">
      {/* <SideMenu /> */}
      <div className="fav-head">
        <h2 className="favorites-heading">Your Favorite Images Collection </h2>
      </div>

      <section className="images-container all-images">
        {FavImage.length === 0 ? (
          <div className="no-images-msg">
          <p>No favorites yet.</p>
          </div>
        ) : (
          <div className="img-container">
            {FavImage.map((fav, index) => (
              <div key={index} className="image">
                <img
                  src={fav}
                  alt={`Favorite ${index + 1}`}
                  className="image-here"
                />

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
                    &nbsp;
                    &nbsp;
                    &nbsp;
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
