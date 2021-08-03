import React from "react";
import Intro from "./intro/Intro";
import Courses from "./courses/Courses";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Categories from "./categories/Categories";

function HomePage(props) {
  return (
    <div>
      <Header />
      <Intro />
      <Categories />
      <Courses />
      <Footer />
    </div>
  );
}

export default HomePage;
