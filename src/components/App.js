import HomePage from "./HomePage";
import "../style.css";
import Header from "./header/Header";
import React from "react";
import Footer from "./footer/Footer";
import Favorites from './favorites/Favorites'
import { Redirect, Route, Switch } from 'react-router-dom'
import Comments from "./comments/Comments";
import Authorization from './Authorization'
import AddCoursePage from './AddCourses/AddCoursePage'
import { useSelector } from 'react-redux'

function App() {
  const token = useSelector(state => state.auth.user.token)
  let routes;

  if (token){
    routes = (
      <Switch>
        <Route path="/addCourse">
          <AddCoursePage/>
        </Route>
        <Redirect to="/"/>
      </Switch>
      )
  }

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
        <Route path={"/auth"}>
          <Authorization/>
        </Route>
        <Route path="/favorites">
          <Favorites/>
        </Route>
        {routes}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
