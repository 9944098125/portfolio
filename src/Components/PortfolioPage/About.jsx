import React from "react";

function About() {
  return (
    <React.Fragment>
      <div id="about" className="about-container">
        <h1 className="about-text">About Me</h1>
        <img
          src="https://res.cloudinary.com/dakda5ni3/image/upload/v1671098857/xgtpvwlvaaggjzlpmppf.png"
          alt=""
        />
        <h2 className="name">Srinivas Prasad Akella</h2>
        <h4 className="skills">
          ReactJs | NodeJs | MongoDB | ExpressJs | Angular | mySql2 |JavaScript
          | HTML & CSS
        </h4>
      </div>
    </React.Fragment>
  );
}

export default About;
