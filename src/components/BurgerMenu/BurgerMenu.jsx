import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BurgerMenu.css";

const BurgerMenu = ({ links, menuOpen, setMenuOpen }) => {
  const routes = links.map((link, index) => {
    return (
      <Link
        key={index + 1}
        className={
          window.location.pathname.substring(1) === link.path &&
          "currently-open-tab"
        }
        to={link.path}
      >
        {link.title}
      </Link>
    );
  });
  return (
    <Menu
      right
      isOpen={menuOpen}
      onOpen={() => setMenuOpen(true)}
      onClose={() => setMenuOpen(false)}
      customBurgerIcon={<FontAwesomeIcon icon="bars" />}
      customCrossIcon={<FontAwesomeIcon icon="times" />}
    >
      <Link
        key={0}
        className={window.location.pathname === "/" && "currently-open-tab"}
        to={"/"}
      >
        Etusivu
      </Link>
      {routes}
    </Menu>
  );
};

export default BurgerMenu;
