import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HyperLink.css";

const HyperLink = (props) => (
  <div className="hyper-link">
    <FontAwesomeIcon icon="arrow-right" />
    <Link className="hyper-link" to={props.path}>
      {props.text}
    </Link>
  </div>
);

export default HyperLink;
