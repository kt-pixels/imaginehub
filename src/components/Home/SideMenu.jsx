import React from "react";
import { Link, NavLink } from "react-router-dom";

function SideMenu() {
  return (
    <div className="side-menu">
      <div className="icons-list">
      <NavLink
          to="/animals"
          className={({ isActive }) =>
            `${isActive ? "blue-text" : "white-text"}`
          }
        >
        <div className="icons">
          <div className="icon-btn">
            <i className="fab fa-windows"></i>
          </div>
        </div>
        </NavLink>
        <NavLink
          to="/boys-images"
          className={({ isActive }) =>
            `${isActive ? "blue-text" : "white-text"}`
          }
        >
        <div className="icons">
          <div className="icon-btn">
            <i className="fas fa-crown"></i>
          </div>
        </div>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "blue-text" : "white-text"}`
          }
        >
        <div className="icons">
          <div className="icon-btn">
            <i className="fas fa-camera-retro"></i>
          </div>
        </div>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "blue-text" : "white-text"}`
          }
        >
        <div className="icons">
          <div className="icon-btn">
            <i className="far fa-gem"></i>
          </div>
        </div>
        </NavLink>
        <NavLink
          to="/favorate"
          className={({ isActive }) =>
            `${isActive ? "blue-text" : "white-text"}`
          }
        >
          <div className="icons">
            <div className="icon-btn">
              <i className="fas fa-images"></i>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default SideMenu;
