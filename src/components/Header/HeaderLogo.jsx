import { Link } from "react-router-dom";
import Picture from "../Picture/Picture";
import "./HeaderLogo.css";

const HeaderLogo = (props) => {
  const { includeTitleAndButton, title, scrollToElement } = props;
  return (
    <div className="header-img-logo-wrapper">
      <div className="header-img-wrapper">
        <Link to={"/"}>
          <Picture
            img={{ name: "logo", format: ".png" }}
            className="header-img-logo"
            alt="EnePro Oy"
            height="120px"
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
