import React from "react";
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <div id="contact" className="contact-container">
        <div className="communication-row">
          <a
            href="https://github.com/9944098125"
            target="_blank"
            data-aos="fade-up"
          >
            <FaGithubSquare fontSize="50px" color="black" />
          </a>
          <a
            href="https://www.linkedin.com/in/srinivas-prasad-akella-6abb28195"
            target="_blank"
            data-aos="fade-down"
          >
            <FaLinkedin fontSize="50px" color="#0072b1" />
          </a>
          <a
            href="https://www.facebook.com/srinivas.prasad.7505"
            target="_blank"
            data-aos="fade-up"
          >
            <FaFacebookSquare fontSize="50px" color="#17A9FD" />
          </a>
        </div>
        <div className="contact-text">
          <p className="lines">
            My Passion is to create new, upgraded and innovative applications
            and websites with updated, beautiful animations, styles and smart
            logics & implementation.
          </p>
          <p className="lines">
            Through my 2 years experience I have worked on various projects.
            From this experience I have learnt so many new things and
            simultaneously implemented them successfully.
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
