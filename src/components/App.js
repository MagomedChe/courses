import HomePage from "./HomePage";
import "../style.css";
import Header from "./header/Header";
import React from "react";
import Footer from "./footer/Footer";
import Favorites from './favorites/Favorites'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route path="/favorites">
        <Favorites/>
      </Route>
      <Footer />
    </div>
  );
}

export default App;
