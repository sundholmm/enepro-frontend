import React from "react";
import { Link } from "react-router-dom";
import "./HeaderLogo.css";

const HeaderLogo = props => {
  const { includeTitleAndButton, title, scrollToElement } = props;
  return (
    <div className="header-img-logo-wrapper">
      <div className="header-img-wrapper">
        <Link to={"/"}>
          <img
            className="header-img-logo"
            draggable="false"
            alt="EnePro Oy"
            src={process.env.PUBLIC_URL + "/logo.png"}
          />
        </Link>
        {includeTitleAndButton && (
          <div className="header-title-centered">
            {title}
            <button className="header-scroll-button" onClick={scrollToElement}>
              Palveluihin
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderLogo;
