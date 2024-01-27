import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Images from "../../images.json";
import "../MainStyle.css";

function Header() {

  // SEARCH FUNCTIONALITY
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(Images);

  const filterSearchValue = (e) => {
    const searchInput = e.target.value;
    setSearch(searchInput);

    const filterInput = Images.filter((images) =>
      images.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    );
    setFilter(filterInput);
  };

  const [translateY, setTranslateY] = useState('-350px');

  const clickToChange = () => {
    if(translateY === '-350px'){
      setTranslateY('70px')
    }else{
      setTranslateY('-350px')
    }
  }

  return (
    <section className="head">
      {/* <div className="header">
        <div className="logo">
          <h1 className="logo-heading">ImagineHub</h1>
        </div>
        <div className="menus">
          <li className="menu-lists">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="menu-lists">
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="menu-lists">
            <NavLink to="pictures">Pictures</NavLink>
          </li>
          <li className="menu-lists">
            <NavLink to="/feedback">Feedback</NavLink>
          </li>
        </div>

        <div className="search">
          <form>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search image..."
              value={search}
              onChange={filterSearchValue}
            />
          </form>
          <div className="searchValue">
            {search &&
              filter.map((img) => (
                <div key={img.id}>
                  <p>{img.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div> */}

      <header className="main-header nav-header">
        {/* <!-- NAVBAR --> */}
        <nav className="navbar mb-header-container">
          {/* <div className="mb-header-container"> */}
          <div className="bars" onClick={clickToChange}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="mb-logo">ImagineHub</div>


          {/* IN MOBILE VIE HEADER CODE  */}

          <div className="mobile-view-header" style={{transform: `translateY(${translateY})`}}>
          <ul className="lists">
              <li>
                <div className="nav-list">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `links ${isActive ? "isactive" : ""}`
                    }
                  >
                    Home
                  </NavLink>
                </div>
              </li>

              <li>
                <div className="nav-list">
                  <NavLink
                    to="/animals"
                    className={({ isActive }) =>
                      `links ${isActive ? "isactive" : ""}`
                    }
                  >
                    Animals
                  </NavLink>
                </div>
              </li>

              <li>
                <div className="nav-list">
                  <NavLink
                    to="/boys"
                    className={({ isActive }) =>
                      `links ${isActive ? "isactive" : ""}`
                    }
                  >
                    Boys
                  </NavLink>
                </div>
              </li>

              <li>
                <div className="nav-list">
                  <NavLink
                    to="/favorate"
                    className={({ isActive }) =>
                      `links ${isActive ? "isactive" : ""}`
                    }
                  >
                    Favorate
                  </NavLink>
                </div>
              </li>
            </ul>
            <div className="search-bar">
              <button className="search">
                <i className="fas fa-search"></i>
              </button>
              <form>
                <input
                  type="text"
                  name="search"
                  className="input-field"
                  id="search"
                  placeholder="search image..."
                  value={search}
                  onChange={filterSearchValue}
                />
              </form>
            </div>
          </div>


          {/* </div> */}
          <div className="header-container">
            <div className="logo">
              <h1 className="logo-heading">ImagineHub</h1>
            </div>
            <ul className="lists">
              <li>
                <div className="nav-list">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `links ${isActive ? "isactive" : ""}`
                    }
                  >
                    Home
                  </NavLink>
                </div>
              </li>

              <li>
                <div className="nav-list">
                  <NavLink
                    to="/animals"
                    className={({ isActive }) =>
                      `links ${isActive ? "isactive" : ""}`
                    }
                  >
                    Animals
                  </NavLink>
                </div>
              </li>

              <li>
                <div className="nav-list">
                  <NavLink
                    to="/boys"
                    className={({ isActive }) =>
                      `links ${isActive ? "isactive" : ""}`
                    }
                  >
                    Boys
                  </NavLink>
                </div>
              </li>

              <li>
                <div className="nav-list">
                  <NavLink
                    to="/favorate"
                    className={({ isActive }) =>
                      `links ${isActive ? "isactive" : ""}`
                    }
                  >
                    Favorate
                  </NavLink>
                </div>
              </li>
            </ul>
            <div className="search-bar">
              <button className="search">
                <i className="fas fa-search"></i>
              </button>
              <form>
                <input
                  type="text"
                  name="search"
                  className="input-field"
                  id="search"
                  placeholder="search image..."
                  value={search}
                  onChange={filterSearchValue}
                />
              </form>
            </div>

            {/* Admins details */}
            <div className="admin-details">
              <div className="profile">
                <button className="btn">
                  <i className="fas fa-user-edit"></i>
                </button>
              </div>
              <div className="settings">
                <button className="btn">
                  <i className="fas fa-cogs"></i>
                </button>
              </div>
            </div>
          </div>

          {/* */}
        </nav>
      </header>

      <div className="searchResults">
        {search &&
          filter.map((img) => (
            <div key={img.id}>
              <p>{img.name}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Header;
