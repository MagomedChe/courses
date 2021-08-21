import "../style.css";
import Header from "./Header/Header";
import React, { useState } from "react";
import Footer from "./Footer/Footer";
import Favorites from "./Favorites/Favorites";
import { Redirect, Route, Switch } from "react-router-dom";
import Comments from "./Comments/Comments";
import SelectCity from "./SelectCity/SelectCity";
import Authorization from "./Authorization";
import AddCoursePage from "./AddCourses/AddCoursePage";
import { useSelector } from "react-redux";
import EditCourse from "./EditCourse";
import HomePage from "./HomePage";
import Compare from "./Compare/Compare";

function App() {
  const [youCity, setYouCity] = useState("Грозный");
  const token = useSelector((state) => state.auth.user.token);

  let addCourse;

  if (token) {
    addCourse = (
      <Switch>
        <Route path="/addCourse">
          <AddCoursePage />
        </Route>
        <Route path="/editCourse/:id">
          <EditCourse />
        </Route>
      </Switch>
    );
  } else {
    addCourse = <Redirect to="/" />;
  }

  return (
    <div>
      <Header youCity={youCity} />
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route path={"/Comments"}>
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
        <Route path="/compare">
          <Compare />
        </Route>
        {addCourse}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
