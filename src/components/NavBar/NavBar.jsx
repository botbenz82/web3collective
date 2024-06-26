import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Logo from "../../assets/images/logo-32.png";
import {CgMenuRightAlt, CgClose} from "react-icons/cg";
import "./NavBar.css";

const NavBar = ({toggleTheme}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setScrollProgress(
          Number((scrollProgress / scrollHeight).toFixed(2)) * 100,
        );
      } 
    };

    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <nav className={`nav ${showNav && "nav-height"}`}>
      <Link to="/">
        <div className="logo">
          <span className="logo-name">
            <img className="logo-image" src={Logo} alt="web3collectives logo" />
            Web3Collectives
          </span>
        </div>
      </Link>

      <div className="hamburger-icon" onClick={handleMenu}>
        {showMenu ? <CgClose /> : <CgMenuRightAlt />}
      </div>

      <ul className={`${showMenu ? "nav-links mobile-nav" : "nav-links"}`}>
        <li onClick={handleMenu}>
          <Link to="about">About </Link>
        </li>
        <li onClick={handleMenu}>
          <Link to="contact">Contact</Link>
        </li>
        <li onClick={handleMenu}>
          <Link to="submit">Contribute</Link>
        </li>
        <div className="theme-switch-wrapper">
          <label className="theme-switch" htmlFor="checkbox">
            <input onChange={toggleTheme} type="checkbox" id="checkbox" />

            <div className="slider circle"></div>
          </label>
        </div>
        <a
          id="tweet-btn"
          href="https://twitter.com/intent/tweet?text=Hey!%20Check%20out%20this%20amazing%20free%20web3%20resource%20library-%20web3collectives.vercel.app%20by%20@frankiefab100.%20Access%20a%20wealth%20of%20blockchain%20development%20materials:%20Websites,%20Youtube%20Videos,%20Online%20Courses,%20Interactive%20Games,%20Project%20Templates%20and%20more.%20Level%20up%20your%20blockchain%20skills%20today!"
          data-size="small"
          data-show-count="false"
        >
          Share on Twitter
        </a>
      </ul>

      <span
        style={{transform: `translateX(${scrollProgress - 102}%)`}}
        className="scroll-indicator"
      ></span>
    </nav>
  );
};

export default NavBar;
