import React from "react";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route exact path="/checkout" component={Checkout} />
      </Router>
    </React.StrictMode>
  );
}

export default App;
