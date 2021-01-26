import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import data from "../../data/data.json";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import Loader from "../Loader/Loader";
import "./App.css";

// Lazy load subroutes
const NoMatch = lazy(() => import("../NoMatch/NoMatch"));
const SingleService = lazy(() => import("../SingleService/SingleService"));
const SingleServiceDetails = lazy(() =>
  import("../SingleServiceDetails/SingleServiceDetails")
);

// Initialize FontAwesome library
library.add(faArrowRight, faBars, faTimes);

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const noMatch = (
    <Route path="*">
      <Suspense fallback={<Loader />}>
        <NoMatch noMatch={data.noMatch} />
      </Suspense>
    </Route>
  );

  const links = data.services.map((service) => ({
    path: service.path,
    title: service.title,
  }));

  const routes = data.services.map((service, index) => (
    <Route
      key={index}
      path={`/${service.path}`}
      render={({ match: { url } }) => (
        <>
          <Switch>
            <Route path={`${url}/`} exact>
              <Suspense fallback={<Loader />}>
                <BurgerMenu
                  links={links}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                />
                <SingleService service={service} />
              </Suspense>
            </Route>
            {service.details.additionalDetails && (
              <Route path={`${url}/ratkaisuvaihtoehdot`} exact>
                <Suspense fallback={<Loader />}>
                  <BurgerMenu
                    links={links}
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                  />
                  <SingleServiceDetails
                    details={service.details.additionalDetails}
                    path={service.path}
                    title={service.title}
                    metaDesc={service.metaDesc}
                  />
                </Suspense>
              </Route>
            )}
            {noMatch}
          </Switch>
        </>
      )}
    />
  ));

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path={"/"}>
            <BurgerMenu
              links={links}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
            <Header />
            <Body />
            <Footer />
          </Route>
          {routes}
          {noMatch}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
