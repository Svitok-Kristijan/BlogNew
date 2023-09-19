import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./nav.scss";
import menuSvg from "./menu.svg";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  // Define a function to toggle the visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const havigatehome = () => {
    navigate("/");
  };
  const havigateabout = () => {
    navigate("/about");
  };
  const havigatecontact = () => {
    navigate("/contact");
  };

  return (
    <div className="nav-bar">
      <img src={menuSvg} alt="menu" onClick={toggleVisibility} />
      {isVisible && (
        <nav>
          <ul>
            <li onClick={havigatehome}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={havigateabout}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={havigatecontact}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Nav;
