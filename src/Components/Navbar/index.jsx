import React from "react";
import { BsPersonWorkspace, BsTelephoneForward } from "react-icons/bs";
import { RiPassportFill } from "react-icons/ri";
import { TbBiohazard } from "react-icons/tb";
import { HashLink } from "react-router-hash-link";

import bigLogo from "../../Assets/bigLogo.png";
import "./styles.css";

export default function Navbar() {
  const [colorChange, setColorChange] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  const changeBgColor = () => {
    // console.log(colorChange);
    if (window.scrollY === 0) {
      setColorChange(false);
    } else {
      setColorChange(true);
    }
  };

  window.addEventListener("scroll", changeBgColor);

  return (
    <React.Fragment>
      <div
        className={
          colorChange
            ? "scrolled navbar-container"
            : "navbar-container not-scrolled"
        }
      >
        <div
          style={{
            marginLeft: colorChange ? "-120px" : "-70px",
            transition: "0.3s",
          }}
          className="logo-container"
        >
          <img src={bigLogo} alt="" />
        </div>
        <div className="nav-list-items">
          <HashLink
            onScroll={() => setActiveSection("#what")}
            className={activeSection === "#what" ? "active" : ""}
            smooth
            to="#what"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <h3 className="item-text">What Do I Do ?</h3>
              <BsPersonWorkspace style={{ color: "white", fontSize: "25px" }} />
            </div>
          </HashLink>

          <HashLink
            onScroll={() => setActiveSection("#portfolio")}
            className={activeSection === "#portfolio" ? "active" : ""}
            smooth
            to="#portfolio"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <h3 className="item-text">Portfolio</h3>
              <RiPassportFill style={{ color: "white", fontSize: "25px" }} />
            </div>
          </HashLink>

          <HashLink
            onScroll={() => setActiveSection("#about")}
            className={activeSection === "#about" ? "active" : ""}
            smooth
            to="#about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <h3 className="item-text">About</h3>
              <TbBiohazard style={{ color: "white", fontSize: "25px" }} />
            </div>
          </HashLink>

          <HashLink
            onScroll={() => setActiveSection("#contact")}
            className={activeSection === "#contact" ? "active" : ""}
            smooth
            to="#contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <h3 className="item-text">Contact</h3>
              <BsTelephoneForward
                style={{ color: "white", fontSize: "25px" }}
              />
            </div>
          </HashLink>
        </div>
      </div>
    </React.Fragment>
  );
}
