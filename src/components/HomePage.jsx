import React from "react";
import Intro from "./intro/Intro";
import Courses from "./courses/Courses";
import Categories from "./categories/Categories";

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
