import { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
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

// Initialize Google Analytics
ReactGA.initialize("UA-156893073-1", {
  testMode: process.env.NODE_ENV === "development" ? true : false,
});

// Use custom history for recording
const browserHistory = createBrowserHistory();

// Listen on page changes and record them
browserHistory.listen((location) => {
  ReactGA.pageview(location.pathname);
});

const App = () => {
  // Record the first page load
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
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
      <Router history={browserHistory}>
        <ScrollToTop />
        <Switch>
          <Route exact path={"/"}>
            <BurgerMenu
              links={links}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
            <Header />
            <Body ReactGA={ReactGA} />
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
