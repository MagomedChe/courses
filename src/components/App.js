import HomePage from "./HomePage";
import "../style.css";
import Header from "./header/Header";
import React from "react";
import Footer from "./footer/Footer";
import { Route } from "react-router-dom";
import Comments from "./comments/Comments";
import Authorization from './Authorization/authorization'

function App() {
  return (
    <div>
      <Header />
      <Route exact path={"/"}>
        <HomePage />
      </Route>
      <Route path={"/comments"}>
        <Comments/>
      </Route>
      <Route path={"/auth"}>
        <Authorization/>
      </Route>
      <Footer />
    </div>
  );
}

export default App;
