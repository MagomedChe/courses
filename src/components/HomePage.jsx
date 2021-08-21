import React from "react";
import Intro from "./Intro";
import Courses from "./Courses";
import Categories from "./Categories";

function HomePage(props) {
  return (
    <div>
      <Intro />
      <Categories />
      <Courses />
    </div>
  );
}

export default HomePage;
