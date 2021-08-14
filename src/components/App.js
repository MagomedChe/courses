import HomePage from "./HomePage";
import "../style.css";
import Header from "./header/Header";
import React, { useState } from "react";
import Footer from "./footer/Footer";
import Favorites from "./favorites/Favorites";
import { Redirect, Route, Switch } from "react-router-dom";
import Comments from "./comments/Comments";
import Authorization from "./Authorization";
import AddCoursePage from "./AddCourses/AddCoursePage";
import { useSelector } from "react-redux";
import SelectCity from "./selectCity/SelectCity";

function App() {
  const token = useSelector((state) => state.auth.user.token);
  const [youCity, setYouCity] = useState("Москва");
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/addCourse">
          <AddCoursePage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div>
      <Header youCity={youCity} />
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route path={"/comments"}>
          <Comments />
        </Route>
        <Route path={"/auth"}>
          <Authorization />
        </Route>
        <Route path={"/city"}>
          <SelectCity setYouCity={setYouCity} />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        {routes}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
