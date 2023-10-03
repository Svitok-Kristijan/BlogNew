import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./nav.scss";
import menuSvg from "./menu.svg";
import {useDispatch, useSelector} from "react-redux";
import {toggleNavbarVisibility} from "../store/navBarAction";

const Nav = () => {
  const isVisble = useSelector((state) => state.navbarVisibility.isVisible);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const visibilityHandler = () => {
    dispatch(toggleNavbarVisibility());
  };

  const havigatehome = () => {
    navigate("/");
    visibilityHandler();
  };
  const havigateabout = () => {
    navigate("/movies");
    visibilityHandler();
  };
  const havigatecontact = () => {
    navigate("/shows");
    visibilityHandler();
  };

  return (
    <div className="nav-bar">
      <img src={menuSvg} alt="menu" onClick={visibilityHandler} />
      {isVisble && (
        <nav>
          <ul>
            <li onClick={havigatehome}>
              <Link to="/">News</Link>
            </li>
            <li onClick={havigateabout}>
              <Link to="/movies">Movies</Link>
            </li>
            <li onClick={havigatecontact}>
              <Link to="/shows">TV Shows</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Nav;
