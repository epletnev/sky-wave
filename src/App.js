import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/navbar/Navbar";

const HomePage = lazy(() => import("./page/homePage/HomePage"));
const Contact = lazy(() => import("./page/contact/Contact"));
const MenuDetail = lazy(() => import("./page/menuDetails/MenuDetail"));
const AboutUs = lazy(() => import("./page/aboutPage/AboutUs"));
const Menu = lazy(() => import("./page/menuPage/Menu"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading</div>}>
        <Route path="/menu/:id" component={MenuDetail} exact />
        <Route path="/menu" component={Menu} exact />
        <Route path="/about-us" component={AboutUs} exact />
        <Route path="/" component={HomePage} exact />
        <Route path="/contact-us" component={Contact} exact />
      </Suspense>
    </Router>
  );
}

export default App;
