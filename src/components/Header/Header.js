import React from "react";
import data from "../../data/data.json";
import "./Header.css";

const Header = props => {
  const title = data.company.map((info, index) => (
    <React.Fragment key={index}>
      <h1>{info.name}</h1>
      <h2>{info.slogan}</h2>
    </React.Fragment>
  ));

  const scrollToElement = () => {
    const element = document.getElementById("body-services");
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });
  };

  return (
    <div className="header">
      <div className="header-flex-container">
        <div className="header-img-logo-wrapper">
          <div className="header-img-wrapper">
            <img
              className="header-img-logo"
              draggable="false"
              alt="EnePro Oy"
              src={process.env.PUBLIC_URL + "/logo.png"}
            />
            <div className="header-title-centered">
              {title}
              <button
                className="header-scroll-button"
                onClick={scrollToElement}
              >
                Palveluihin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
