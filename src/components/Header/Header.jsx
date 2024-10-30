import React, { useState, useEffect } from "react";
import headerImg from "../../assets/images/HeaderLogotype.png";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

function Header(props) {
  const [toggle, setToggle] = useState(false);
  const [shrink, setShrink] = useState(false);

  const data = [
    { id: 4, link: "/", title: props.t("header__link4") },
    { id: 1, link: "/services", title: props.t("header__link1") },
    { id: 2, link: "/work", title: props.t("header__link2") },
    { id: 3, link: "/prices", title: props.t("header__link3") },
  ];

  const headerList = data.map((e) => (
    <li
      key={e.id}
      className="header__list-item"
    >
      <NavLink to={e.link} className="header__list-link" onClick={() => setToggle(false)}>
        {e.title}
      </NavLink>
    </li>
  ));

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
  }, []);

  return (
    <header
      className={`header ${toggle ? "open" : ""} ${shrink ? "shrink" : ""}`}
      aria-label="Main Navigation"
    >
      <div className="container">
        <div
          className="header__active dark_div"
          onClick={() => setToggle(!toggle)}
          aria-hidden="true" // This div is not interactive for screen readers
        ></div>
        <div className="header__start">
          <Link className="header__logo" to={"/"}>
            <img
              className="header__icon"
              src={headerImg}
              alt="Company logo"
              width={150}
              loading="lazy" // Lazy loading for performance
            />
          </Link>
          <div className="header__left">
            <Link className="header__logo2" to={"/"}>
              <img
                className="header__icon"
                src={headerImg}
                alt="Company logo"
                width={120}
                loading="lazy" // Lazy loading for performance
              />
            </Link>
            <div className="header__card">
              <ul className="header__list">{headerList}</ul>
              <select
                className="header__select header__select1"
                name="Lng"
                id="lng"
                onChange={props.handleChange}
                value={props.language}
                aria-label="Select Language"
              >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="eng">ENG</option>
              </select>
            </div>
          </div>
          <div className="header__menu-burgers">
            <button
              className="header__menu"
              id="menu-burger"
              onClick={() => setToggle(!toggle)}
              aria-label={toggle ? "Close menu" : "Open menu"} // Accessibility for the button
            >
              <span className="header__menu-span"></span>
              <span className="header__menu-span"></span>
              <span className="header__menu-span"></span>
            </button>
          </div>
          <a className="header__link" href="tel:+998935138833" aria-label="Call Us">
            +998 (93) 513-88-33
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
