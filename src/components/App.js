import HomePage from "./HomePage";
import "../style.css";
import Header from "./header/Header";
import React from "react";
import Footer from "./footer/Footer";
import { Route, Switch } from "react-router-dom";
import Comments from "./comments/Comments";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route path={"/comments"}>
          <Comments />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
