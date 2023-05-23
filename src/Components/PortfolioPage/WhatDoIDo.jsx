import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function WhatDoIDo() {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const developmentArray = [
    {
      image:
        "https://www.transparentpng.com/thumb/web-development/web-development-high-quality-png-15.png",
      head: "Website Development",
      explanation:
        "You can own Fast, responsive and engaging websites, that attracts the users.",
    },
    {
      image:
        "https://www.infomazeelite.com/wp-content/uploads/2022/02/FAQs.png",
      head: "API Development",
      explanation:
        "REST APIs that are made for your needs and follow the best practices in performance and security.",
    },
    {
      image: "https://www.bitscape.com/media/bcjaj34f/web-api-framework.png",
      head: "API Integration with Redux",
      explanation: "Authentic and Best Practice with Redux for integration",
    },
    {
      image:
        "https://png.pngitem.com/pimgs/s/197-1972844_database-clipart-database-management-test-data-management-icon.png",
      head: "Database Design with MongoDB",
      explanation:
        "Neat & Clean designing of databases with efficient models and less coding",
    },
    {
      image:
        "https://blog.adpushup.com/blog/wp-content/uploads/2022/01/undraw_Accept_terms_re_lj38-770x515.png",
      head: "Application Development",
      explanation:
        "Not only Websites, applications are also built with clean databases and smart approach",
    },
  ];
  return (
    <React.Fragment>
      <div id="what" className="what-do-i-do-container">
        <h1 className="wdid">WHAT DO I DO ?</h1>
        <h5>See my Skills and things that make me satisfied on completion</h5>
        <div className="grid-container">
          {developmentArray.map((item, idx) => (
            <div
              data-aos={`${idx / 2 === 0 ? "fade-up" : "fade-down"}`}
              className="item-container"
            >
              <div className="img-container">
                <img src={item.image} alt="" />
              </div>
              <div className="text-container">
                <h2 className="head">{item.head}</h2>
                <h6 className="exp">{item.explanation}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default WhatDoIDo;
