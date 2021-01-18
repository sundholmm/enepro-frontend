import { useEffect } from "react";
import HeaderLogo from "../Header/HeaderLogo";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./NoMatch.css";

const NoMatch = (props) => {
  const {
    noMatch: { title, text },
  } = props;

  useEffect(() => {
    document.title = "EnePro Oy - Sivua ei löytynyt";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", title);
  });

  return (
    <div className="no-match">
      <HeaderLogo includeTitleAndButton={false} />
      <div className="no-match-body">
        <div className="no-match-inner-body">
          <h2>{title}</h2>
          {text}
          <Link className="no-match-home-link" to={"/"}>
            <p>Palaa takaisin etusivulle</p>
          </Link>
        </div>
      </div>
      <div className="no-match-footer">
        <Footer />
      </div>
    </div>
  );
};

export default NoMatch;
