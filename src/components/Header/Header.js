import React from "react";
import "./Header.css";

const Header = props => {
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
              <h1>EnePro Oy</h1>
              <h2>Nykyaikaiset energiaratkaisut ammattitaidolla</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
