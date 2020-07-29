import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import data from "../../data/data.json";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import SingleService from "../SingleService/SingleService";
import SingleServiceDetails from "../SingleServiceDetails/SingleServiceDetails";
import NoMatch from "../NoMatch/NoMatch";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

// Initialize FontAwesome library
library.add(faArrowRight);

const App = () => {
  const routes = data.services.map((service, index) => (
    <Route
      key={index}
      path={`/${service.path}`}
      render={({ match: { url } }) => (
        <>
          <Switch>
            <Route path={`${url}/`} exact>
              <SingleService service={service} />
            </Route>
            {service.details.additionalDetails && (
              <Route path={`${url}/ratkaisuvaihtoehdot`} exact>
                <SingleServiceDetails
                  details={service.details.additionalDetails}
                  path={service.path}
                  title={service.title}
                  metaDesc={service.metaDesc}
                />
              </Route>
            )}
            <Route path="*">
              <NoMatch noMatch={data.noMatch} />
            </Route>
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
          <Route path="*">
            <NoMatch noMatch={data.noMatch} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
