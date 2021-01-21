import { Fragment } from "react";
import data from "../../data/data.json";
import HeaderLogo from "./HeaderLogo";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import useWebP from "./SupportWebP";
import "./Header.css";

const Header = () => {
  const title = data.company.map((info, index) => (
    <Fragment key={index}>
      <h1>{info.name}</h1>
      <h2>{info.slogan}</h2>
    </Fragment>
  ));

  const scrollToElement = () => {
    const element = document.getElementById("body-services");
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    // Use inline style meanwhile sass-loader is fixed
    <div
      className="header"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0), rgba(9, 9, 76, 0.1), rgb(9, 9, 76)) no-repeat, url(${
          useWebP ? "/paneelikuva-high-res.webp" : "/paneelikuva-high-res.jpg"
        })`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      <div className="header-flex-container">
        <div className="header-img-logo-wrapper">
          <HeaderLogo
            includeTitleAndButton={true}
            title={title}
            scrollToElement={scrollToElement}
          />
        </div>
        <div className="scroll-arrow-container">
          <ScrollArrow />
        </div>
      </div>
    </div>
  );
};

export default Header;
