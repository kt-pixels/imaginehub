import SideMenu from "../Home/SideMenu";
import CountUp from "react-countup";
import "./SideMenu.css";
import React, { useState } from "react";
import ImagesData from "../../JSON/bois.json";
import {Link} from 'react-router-dom'
import { useFavoriteContext } from "../Context/ImageSaveContext.jsx";

const counting = 5000;

function Boys() {

const { addToFavorite, downloadOnClick } = useFavoriteContext();


  const [images, setImages] = useState(ImagesData);

  const FilterImages = (currentValue) => {
    const value = ImagesData.filter((images) => {
      return images.Ctg === currentValue;
    });
    setImages(value);
  };

  return (
    <div className="animal-wrapper">
      <SideMenu />
      <div className="main-content">
        <div className="animal-heading">
          <h2 className="heading">
            Boys Images{" "}
            <CountUp start={counting} end={14000} duration={10} /> +
          </h2>
        </div>
        <div className="categories">
          <div className="display-ctg">
            <button className="ctg-btn" onClick={() => setImages(ImagesData)}>All</button>
            <button className="ctg-btn" onClick={() => FilterImages("Lion")}>Lion</button>
            <button className="ctg-btn" onClick={() => FilterImages("Horse")}>Horse</button>
            <button className="ctg-btn" onClick={() => FilterImages("BuLL")}>BuLL</button>
            <button className="ctg-btn" onClick={() => FilterImages("Panda")}>Panda</button>
            <button className="ctg-btn" onClick={() => FilterImages("Dogs")}>Dog</button>
            <button className="ctg-btn" onClick={() => FilterImages("Elephent")}>Elephent</button>
          </div>
        </div>

        <div className="animals-images">
        <section className="images-container all-images">
        <div className="img-container">
          {images.map((value) => (
            <div key={value.id} className="image">
              <img
                src={value.img}
                alt=""
                className="image-here"
              />

              <div className="text">
                <div className="img-text">
                  <p>{value.name}</p>
                </div>

                <div className="download-btn">
                  <Link className="download">
                    <button onClick={() => downloadOnClick(value.img)}>
                      <i className="fas fa-download"></i>
                    </button>
                  </Link>
                  <Link className="download">
                    <button onClick={() => addToFavorite(value.img)}>
                      <i className="far fa-bookmark"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
        </div>
      </div>
    </div>
  );
}

export default Boys;
