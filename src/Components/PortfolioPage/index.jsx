import React from "react";

import "./styles.css";
import LandingImage from "./LandingImage";
import WhatDoIDo from "./WhatDoIDo";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

export default function PortfolioPage() {
  return (
    <React.Fragment>
      <div className="portfolio-page-container">
        <LandingImage />
        <WhatDoIDo />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </React.Fragment>
  );
}
