import "../style.css";
import Header from "./header/Header";
import React from "react";
import Footer from "./footer/Footer";
import Favorites from './favorites/Favorites'
import { Route, Switch } from 'react-router-dom'
import Comments from "./comments/Comments";
import Authorization from './Authorization/authorization'
import HomePage from './HomePage'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/comments">
          <Comments/>
        </Route>
        <Route path="/auth">
          <Authorization/>
        </Route>
        <Route path="/favorites">
          <Favorites/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
