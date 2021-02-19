import React, { useState } from "react";
import { NavDiv } from "../../styled/Styled";
import { NavLink } from "react-router-dom";
import flying from "../../images/globe.gif";

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <NavDiv>
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={closeMenu}>
              Welcome
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Guides" className="nav-links" onClick={closeMenu}>
              Guides
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" className="nav-links" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Home" className="nav-links" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <img src={flying} alt="Fly" className="mobile" />
        </ul>
      </nav>
    </NavDiv>
  );
}

export default Nav;
