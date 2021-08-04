import Courses from "./courses/Courses";
import HomePage from "./HomePage";
import "../style.css";
import Header from "./header/Header";
import React from "react";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
