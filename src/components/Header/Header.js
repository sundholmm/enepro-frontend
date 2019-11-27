import React from "react";
import data from "../../data/data.json";
import "./Header.css";

const Header = props => {
  const title = data.company.map((info, index) => (
    <>
      <h1 key={index}>{info.name}</h1>
      <h2 key={index++}>{info.slogan}</h2>
    </>
  ));

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
            <div className="header-title-centered">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
