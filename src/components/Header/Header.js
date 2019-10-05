import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <div className="header">
      <div className="header-flex-container">
        <div className="header-img-logo-wrapper">
          <img
            className="header-img-logo"
            draggable="false"
            alt="EnePro Oy"
            src={process.env.PUBLIC_URL + "/logo.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
