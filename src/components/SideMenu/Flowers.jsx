import CountUp from "react-countup";
import "./SideMenu.css";
import React, { useState } from "react";
import ImagesData from "../../JSON/flower.json";
import {Link, NavLink} from 'react-router-dom'
import { useFavoriteContext } from "../Context/ImageSaveContext.jsx";
import { useOpenedImage } from '../Context/ClickImageContext';

const counting = 100;

function Flowers() {

const { addToFavorite, downloadOnClick } = useFavoriteContext();
const {handleClick} = useOpenedImage();


  const [images, setImages] = useState(ImagesData);

  const FilterImages = (currentValue) => {
    const value = ImagesData.filter((images) => {
      return images.Ctg === currentValue;
    });
    setImages(value);
  };

  return (
    <div className="animal-wrapper">
      <div className="circle1"></div>
      {/* <SideMenu /> */}
      <div className="main-content">
        <div className="animal-heading">
          <h2 className="heading">
            Beautifull flowers Images{" "}
            <CountUp start={counting} end={1000} duration={10} /> +
          </h2>
        </div>

        <div className="animals-images">
        <section className="images-container all-images">
        <div className="img-container">
          {images.map((value) => (
            <div key={value.id} className="image">
              <NavLink to={`/${value.id}`}>
              <img
                src={value.img}
                alt=""
                className="image-here"
                onClick={()=> handleClick(value.img)}
              />
              </NavLink>

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
                  &nbsp;
                  &nbsp;
                  &nbsp;
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

export default Flowers;
