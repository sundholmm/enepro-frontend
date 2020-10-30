import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import data from "../../data/data.json";
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
library.add(faArrowRight);

const App = () => {
  const noMatch = (
    <Route path="*">
      <Suspense fallback={<Loader />}>
        <NoMatch noMatch={data.noMatch} />
      </Suspense>
    </Route>
  );

  const routes = data.services.map((service, index) => (
    <Route
      key={index}
      path={`/${service.path}`}
      render={({ match: { url } }) => (
        <>
          <Switch>
            <Route path={`${url}/`} exact>
              <Suspense fallback={<Loader />}>
                <SingleService service={service} />
              </Suspense>
            </Route>
            {service.details.additionalDetails && (
              <Route path={`${url}/ratkaisuvaihtoehdot`} exact>
                <Suspense fallback={<Loader />}>
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
