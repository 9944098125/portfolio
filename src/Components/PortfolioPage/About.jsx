import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
	React.useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<React.Fragment>
			<div id="about" className="about-container">
				<h1 className="about-text">About Me</h1>
				<img
					data-aos="fade-up"
					src="https://res.cloudinary.com/dakda5ni3/image/upload/v1690361974/pgn4truxyxtnciraxhfy.jpg"
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
