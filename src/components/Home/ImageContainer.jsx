import React, { useState, useEffect } from "react";
import Images from "../../images.json";
import { Link, NavLink, useParams } from "react-router-dom";
import { useFavoriteContext } from "../Context/ImageSaveContext.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import { useOpenedImage } from '../Context/ClickImageContext';


function ImageContainer() {

  // const {handleClick} = useOpenedImage();

  // FOR IMAGE RENDARING AND FILTERING
  const [category, setCategory] = useState(Images);

  const filterCtg = (currentCtg) => {
    const updateCtg = Images.filter((filter) => {
      return filter.Ctg === currentCtg;
    });
    setCategory(updateCtg);
  };

  const { addToFavorite, downloadOnClick } = useFavoriteContext();


  return (
    <div className="image-section">

      <Swiper 
      className="myCtgList"
      spaceBetween={5}
      slidesPerView={7}
      breakpoints={{
        260: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 6,
        },
        1024: {
          slidesPerView: 7,
        },
      }}
      >
        <SwiperSlide className="ul" onClick={() => setCategory(Images)}>
          <img 
          src="image/buety.jpg" 
          alt="" 
          width={65}
          />
          <p>All</p>
        </SwiperSlide>
        <SwiperSlide className="ul" onClick={() => filterCtg("Fruits")}>
          <img src="image/fruits.jpg" alt="" width={65} />
          <p>Fruit</p>
        </SwiperSlide>
        <SwiperSlide className="ul" onClick={() => filterCtg("Alligator")}>
          <img src="image/croco.jpg" alt="" width={65} />
          <p>Alligator</p>
        </SwiperSlide>
        <SwiperSlide className="ul" onClick={() => filterCtg("Elephant")}>
          <img src="image/elepant.jpg" alt="" width={65} />
          <p>Elephant</p>
        </SwiperSlide>
        <SwiperSlide className="ul" onClick={() => filterCtg("Dog")}>
          <img src="image/doggy.jpg" alt="" width={65} />
          <p>Dog</p>
        </SwiperSlide>
        <SwiperSlide className="ul" onClick={() => filterCtg("Cat")}>
          <img src="image/cats.jpg" alt="" width={65} />
          <p>Cat</p>
        </SwiperSlide>
        <SwiperSlide className="ul" onClick={() => filterCtg("Car")}>
          <img src="image/car.jpg" alt="" width={65} />
          <p>Car</p>
        </SwiperSlide>
        <SwiperSlide className="ul" onClick={() => filterCtg("Boy")}>
          <img src="image/happyboy.jpg" alt="" width={65} />
          <p>Boy</p>
        </SwiperSlide>
        <SwiperSlide className="ul" onClick={() => filterCtg("Panda")}>
          <img src="image/panda.jpg" alt="" width={65} />
          <p>Panda</p>
        </SwiperSlide>
        <SwiperSlide className="ul" onClick={() => filterCtg("Girl")}>
          <img src="image/girlcoding.jpg" alt="" width={65} />
          <p>Girl</p>
        </SwiperSlide>
      </Swiper>

      <section className="images-container all-images">
        <div className="img-container">
          {category.map((value) => (
            <div key={value.id} className="image">
              {/* <NavLink to={`/${value.id}`}> */}
              <img
                src={value.img}
                alt=""
                className="image-here"
                // onClick={()=> handleClick(value.img)}
              />
              {/* </NavLink> */}

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
  );
}

export default ImageContainer;
