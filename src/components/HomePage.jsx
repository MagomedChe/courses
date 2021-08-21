import React from "react";
import Intro from "./Intro/Intro";
import Courses from "./Courses/Courses";
import Categories from "./Categories/Categories";

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
