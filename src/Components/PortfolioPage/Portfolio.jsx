import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import souvenir from "../../Assets/souvenir.png";
import hotelAdmin from "../../Assets/hotel-admin.png";
import hotelClient from "../../Assets/hotel-client.png";
import todos from "../../Assets/todos.png";
import meraki from "../../Assets/meraki.png";

function Portfolio() {
	React.useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<React.Fragment>
			<div id="portfolio" className="portfolio-container">
				<h1 className="portfolio">PORTFOLIO</h1>
				<h5 className="portfolio">Some of the latest work I did</h5>
				<div className="projects-grid-container">
					<div data-aos="fade-up" className="each-grid">
						<div className="img-container">
							<img src={hotelClient} alt="" />
						</div>
						<div className="text-container">
							<a
								href="https://hotel-booking-frontend-bycm.onrender.com/"
								target="_blank"
							>
								<button className="see-project-btn">Take a Look</button>
							</a>
							<h3 className="project-name">
								Hotel Booking Application (Client)
							</h3>
							<h6 className="project-desc">
								In this Project we can search for hotels in different cities and
								book them, once booked for particular dates are not available
								again.
							</h6>
						</div>
					</div>
					<div data-aos="fade-down" className="each-grid">
						<div className="img-container">
							<img src={hotelAdmin} alt="" />
						</div>
						<div className="text-container">
							<a
								href="https://hotel-booking-admin.onrender.com/"
								target="_blank"
							>
								<button className="see-project-btn">Take a Look</button>
							</a>
							<h3 className="project-name">
								Hotel Booking Application (Admin)
							</h3>
							<h6 className="project-desc">
								In this Project we can create users, hotels, rooms and I would
								have dug deeper but due to time scarcity I have implemented only
								the basic functionalities.
							</h6>
						</div>
					</div>
					<div data-aos="fade-up" className="each-grid">
						<div className="img-container">
							<img src={souvenir} alt="" />
						</div>
						<div className="text-container">
							<a href="https://souvenir-frontend.onrender.com/" target="_blank">
								<button className="see-project-btn">Take a Look</button>
							</a>
							<h3 className="project-name">
								Souvenir (Question & Answers wallet)
							</h3>
							<h6 className="project-desc">
								In the initial days I was clueless how to prepare for an
								interview and I wanted to save all my question and answers in
								one place for future references. So I created this app.
							</h6>
						</div>
					</div>
					<div data-aos="fade-down" className="each-grid">
						<div className="img-container">
							<img src={todos} alt="" />
						</div>
						<div className="text-container">
							<a href="https://todos-ujex.onrender.com/" target="_blank">
								<button className="see-project-btn">Take a Look</button>
							</a>
							<h3 className="project-name">TODO List</h3>
							<h6 className="project-desc">
								In this Project we can add todo's and save them in local
								storage. I did this project in the initial days while learning
								javascript and all. So just gave it a try...
							</h6>
						</div>
					</div>
					<div data-aos="fade-up" className="each-grid">
						<div className="img-container">
							<img src={meraki} alt="" />
						</div>
						<div className="text-container">
							<a href="https://merakitrainings.in/" target="_blank">
								<button className="see-project-btn">Take a Look</button>
							</a>
							<h3 className="project-name">Meraki Trainings</h3>
							<h6 className="project-desc">
								I have built this website with many animation and aos effects.
								You can check this site if you want to see my styling skills.
							</h6>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "flex-end",
							justifyContent: "center",
						}}
					>
						<h3>* Remaining Projects in the local *</h3>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Portfolio;
