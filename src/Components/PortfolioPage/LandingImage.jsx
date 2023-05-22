import React from "react";
import Navbar from "../Navbar";
import { HashLink } from "react-router-hash-link";

function LandingImage() {
  return (
    <React.Fragment>
      <div className="landing-image-bg">
        <Navbar />
        <div className="linear-gradient">
          <h2 className="main-white-head">
            MERN Stack <span className="special-text">WEB & Application</span>{" "}
            Developer
          </h2>
          <HashLink
            smooth
            to="#portfolio"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <button className="know-btn">Know Me</button>
          </HashLink>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LandingImage;
