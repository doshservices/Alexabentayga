import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "/images/logo.png";
import { nav } from "../../Data/Data";
import {
  FaLocationDot,
  FaEnvelopeCircleCheck,
  FaSquarePhone,
  FaBarsStaggered,
} from "react-icons/fa6";
import { TiTimes } from "react-icons/ti";

const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <div className="container top_header flex">
        <div className="box flex1">
          <FaLocationDot className="Fa" />
          <span>
            33, CliNand Estate, Plot 614, GUdu-Apo Road, Dutse Apo District,
            Abuja
          </span>
        </div>

        <div className="box flex1">
          <FaEnvelopeCircleCheck className="Fa" />
          <span>
            <a href="mailto:info@alexabentayga.com">info@alexabentayga.com</a>
          </span>
        </div>

        <div className="box flex1">
          <FaSquarePhone className="Fa" />
          <span>
            <a href="tel:+2348031942406">+ (234) 803 194 2406</a>
          </span>
        </div>
      </div>
      <header>
        <div className="container flex">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "large"}>
        
              {navList ? (
                <span>
                  {nav.map((list, index) => (
                    <li key={index} onClick={() => setNavList(!navList)}>
                      <Link to={list.path}>{list.text}</Link>
                    </li>
                  ))}
                </span>
              ) : (
                <div className="flex">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">about</Link>
                  </li>
                  <li>
                    <Link to="/services">services</Link>
                  </li>
                  <li>
                    <Link to="/contact">contact</Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
          {/* <div className="button flex">
            <h4>
              <span>2</span>My List
            </h4>
            <button className="btn1">
              <i className="fa fa-sing-out"></i>Sign in
            </button>
          </div> */}
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                // <i className="fa fa-times"></i>
                <TiTimes />
              ) : (
                // <i className="fa fa-bars"></i>
                <FaBarsStaggered />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
