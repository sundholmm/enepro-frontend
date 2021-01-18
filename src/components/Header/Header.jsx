import { Fragment, useState } from "react";
import data from "../../data/data.json";
import HeaderLogo from "./HeaderLogo";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import supportsWebP from "supports-webp";
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

  const [support, setSupport] = useState(true);

  supportsWebP.then((supported) => {
    if (supported) {
      setSupport(true);
    } else {
      setSupport(false);
    }
  });

  return (
    // Use inline style meanwhile sass-loader is fixed
    <div
      className="header"
      style={{
        backgroundImage: `url(${
          support ? "/paneelikuva-high-res.webp" : "/paneelikuva-high-res.jpg"
        })`,
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
