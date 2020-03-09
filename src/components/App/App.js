import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import data from "../../data/data.json";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import SingleService from "../SingleService/SingleService";
import "./App.css";

const App = () => {
  const routes = data.services.map((service, index) => (
    <Route key={index} path={`/${service.path}`}>
      <SingleService service={service} />
    </Route>
  ));
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"}>
          <Header />
          <Body />
          <Footer />
        </Route>
        {routes}
      </Router>
    </div>
  );
};

export default App;
