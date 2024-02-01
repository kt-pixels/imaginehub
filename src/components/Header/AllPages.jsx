import React, { useState } from "react";
import "./Allpages.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { NavLink } from "react-router-dom";

function AllPages() {
    const [border, setBorder] = useState('0px')

    const isActive = ()=> {
        if(border === '0px'){
            setBorder('2px solid white')
        }else{
            setBorder('0px')
        }
    }

  return (
    <div className="all-categories">
      <Swiper
        className="all-display-ctg"
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
            slidesPerView: 7,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
      >
        <SwiperSlide>
          <NavLink
          to='/'
          style={({ isActive }) => ({
            border: isActive ? '2px solid white' : 'none',
          })}
          className="ctg-btn"
          >
            <button>All</button>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink
          to='/boys'
          style={({ isActive }) => ({
            border: isActive ? '2px solid white' : 'none',
          })}
          className="ctg-btn"
          >
            <button>Boys</button>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink
          to='/girls'
          style={({ isActive }) => ({
            border: isActive ? '2px solid white' : 'none',
          })}
          className="ctg-btn"
          >
            <button>Girls</button>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink
          to='/flowers'
          style={({ isActive }) => ({
            border: isActive ? '2px solid white' : 'none',
          })}
          className="ctg-btn"
          >
            <button>Flowers</button>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink
          to='/birds'
          style={({ isActive }) => ({
            border: isActive ? '2px solid white' : 'none',
          })}
          className="ctg-btn"
          >
            <button>Birds</button>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink
          to='/insects'
          style={({ isActive }) => ({
            border: isActive ? '2px solid white' : 'none',
          })}
          className="ctg-btn"
          >
            <button>Insects</button>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink
          to='/animals'
          style={({ isActive }) => ({
            border: isActive ? '2px solid white' : 'none',
          })}
          className="ctg-btn"
          >
            <button>Animals</button>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink
          to='/cars'
          style={({ isActive }) => ({
            border: isActive ? '2px solid white' : 'none',
          })}
          className="ctg-btn"
          >
            <button>Cars</button>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
        <NavLink
          to='/food'
          style={({ isActive }) => ({
            border: isActive ? '2px solid white' : 'none',
          })}
          className="ctg-btn"
          >
            <button>Food</button>
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default AllPages;
