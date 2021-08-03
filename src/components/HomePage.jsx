import React from "react";
import Intro from "./intro/Intro";
import Courses from "./courses/Courses";
import Footer from "./footer/Footer";

function HomePage(props) {
  return (
    <div>
      <Intro />
      <Courses />
      <Footer />
    </div>
  );
}

export default HomePage;
