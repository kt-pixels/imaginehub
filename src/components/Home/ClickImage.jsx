import React, { useCallback, useEffect, useRef, useState } from "react";
import { useOpenedImage } from "../Context/ClickImageContext";
import { NavLink, Link, useParams } from "react-router-dom";
import { useFavoriteContext } from "../Context/ImageSaveContext.jsx";
import "./css/ClickImage.css";

function ClickImage() {
  // lets create a share link
  const { openedImage, removeImage, downloadImage } = useOpenedImage();
  const { addToFavorite } = useFavoriteContext();

  const shareLink = "https://imaginehub.netlify.app/";

  const shareLinkCopy = useRef(null);

  const copyToClipBoard = useCallback(() => {
    shareLinkCopy.current?.select();
    if(window.navigator.clipboard.writeText(shareLink)){
      alert('Url Copied')
    };
  }, [shareLink]);

  return (
    <div>
      <div className="circles1"></div>
      <div className="circles2"></div>
      {openedImage ? (
        <div className="selectedImage">
          <img src={openedImage} alt="Selected Image" />
          <div className="buttons">
            <h2>Imagine Hub</h2>
            <div className="downloaders">
              <button
                onClick={() => {
                  if (openedImage) {
                    downloadImage(openedImage);
                    window.alert("Image Downloaded");
                  }
                }}
              >
                <i className="fas fa-download"></i>&nbsp;&nbsp;Download
              </button>
              <button onClick={() => addToFavorite(openedImage)}>
                <i className="far fa-bookmark"></i>&nbsp;&nbsp;Collection
              </button>
            </div>
            <input type="text" value={shareLink} readOnly ref={shareLinkCopy} />
            <button className="cancle-btn" onClick={copyToClipBoard}>
              Copy & share
            </button>
            <NavLink to="/" className="cancle-btn">
              <button onClick={removeImage}>Cancel</button>
            </NavLink>
          </div>
        </div>
      ) : (
        <p>Image is not Selected</p>
      )}

      <div className="more-like-this-container">
        <div className="heading">
        </div>
      </div>
    </div>
  );
}

export default ClickImage;
