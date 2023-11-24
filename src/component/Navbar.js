import React, { useEffect, useState } from "react";
import svgIcon from "../icon/Icon9.svg";
import "../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [mobileNavBar, setMobileNavBar] = useState(false);
  const location = useLocation();
  const [show, setshow] = useState("/");
  useEffect(() => {
    setshow(location.pathname);
  }, [location]);

  const hamburger = (value) => {
    setMobileNavBar(value);
  };
  const hideHamburger = () => {
    setMobileNavBar(false);
  };

  const navcom = () => {
    setMobileNavBar(false);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="desktop-nav">
          <ul>
            {show === "/home" ? (
              " "
            ) : (
              <li className="desktop">
                <Link to="/home">
                
                  Home
                </Link>
              </li>
            )}
            {show === "/about" ? (
              " "
            ) : (
              <li className="desktop">
                <Link to="/about">About</Link>
              </li>
            )}
            {show === "/contact" ? (
              " "
            ) : (
              <li className="desktop">
                <Link to="/contact">Contact</Link>
              </li>
            )}
            {show === "/skills" ? (
              " "
            ) : (
              <li className="desktop">
                <Link to="/skills">Skills</Link>
              </li>
            )}
            {show === "/resume" ? (
              " "
            ) : (
              <li className="desktop">
                <Link to="/resume">Resume</Link>
              </li>
            )}
          </ul>
        </div>

        <div className="hamburger">
          <img src={svgIcon} onClick={() => hamburger(true)} alt="gg" className="clot" />
        </div>

        {mobileNavBar ? (
          <div className="mobile-nav">
            <span className="closebtn" onClick={hideHamburger}>
              &times;
            </span>
            <ul onClick={navcom}>
              {show === "/home" ? (
                " "
              ) : (
                <li>
                  <Link to="/home">Home</Link>
                </li>
              )}
              {show === "/about" ? (
                " "
              ) : (
                <li>
                  <Link to="/about">About</Link>
                </li>
              )}
              {show === "/skills" ? (
                " "
              ) : (
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
              )}
              {show === "/contact" ? (
                " "
              ) : (
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              )}
               {show === "/resume" ? (
                " "
              ) : (
                <li>
                  <Link to="/resume">Resume</Link>
                </li>
              )}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
export default Navbar;
