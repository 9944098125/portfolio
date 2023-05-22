import React from "react";
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

function Contact() {
  return (
    <React.Fragment>
      <div id="contact" className="contact-container">
        <div className="communication-row">
          <FaGithubSquare fontSize="50px" />
          <FaLinkedin fontSize="50px" />
          <FaFacebookSquare fontSize="50px" />
        </div>
        <div className="contact-text">
          <p className="lines">
            My Passion is to create new, upgraded and innovative applications
            and websites with updated and beautiful animations and styles.
          </p>
          <p className="lines">
            Through my 2 years 1 month experience I have worked on various
            portfolio projects and some projects related to company. From this
            experience I have learnt so many new things and simultaneously
            implemented on some projects.
          </p>
          <p className="lines">
            I consider myself creative & smart working as my stats show. If you
            liked my profile so far, please drop me a message and we will
            discuss how I can be useful for your project or organization.
          </p>
          <p className="lines">DESIGNED & CODED BY Srinivas Akella</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
