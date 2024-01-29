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
  const [none, setNone] = useState('none');

  const clickToChange = () => {
    if(translateY === '-350px' || none === 'none'){
      setTranslateY('70px');
      setNone('flex');
    }else{
      setTranslateY('-350px');
      setNone('none');
    }
  }

  return (
    <section className="head">
      <header className="main-header nav-header">
        {/* <!-- NAVBAR --> */}
        <nav className="navbar mb-header-container">
          {/* <div className="mb-header-container"> */}
          <div className="bars" onClick={clickToChange} aria-label="Toggle Menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="mb-logo">ImagineHub</div>


          {/* IN MOBILE VIE HEADER CODE  */}

          <div className="mobile-view-header" style={{display: `${none}`, transform: `translateY(${translateY})`}}  aria-hidden={none === 'none'}>
          <ul className="lists">
              <li>
                <div className="nav-list">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `links ${isActive ? "isactive" : ""}`
                    }
                    aria-current={({ isActive }) => isActive ? "Home page" : undefined}
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
                    aria-current={({ isActive }) => isActive ? "Animals page" : undefined}
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
                    aria-current={({ isActive }) => isActive ? "Boys page" : undefined}
                  >
                    Boys
                  </NavLink>
                </div>
              </li>

              <li>
                <div className="nav-list">
                  <NavLink
                    to="/favourite"
                    className={({ isActive }) =>
                      `links ${isActive ? "isactive" : ""}`
                    }
                    aria-current={({ isActive }) => isActive ? "Favourite page" : undefined}
                  >
                    Favourite
                  </NavLink>
                </div>
              </li>
            </ul>
            <div className="search-bar">
              <button className="search" aria-label="Search">
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
                  aria-label="Search for images"
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
