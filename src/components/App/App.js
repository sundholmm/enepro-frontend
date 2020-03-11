import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import data from "../../data/data.json";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import SingleService from "../SingleService/SingleService";
import NoMatch from "../NoMatch/NoMatch"
import ScrollToTop from "./ScrollToTop";
import "./App.css";

const App = () => {
  const routes = data.services.map((service, index) => (
    <Route exact key={index} path={`/${service.path}`}>
      <SingleService service={service} />
    </Route>
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
