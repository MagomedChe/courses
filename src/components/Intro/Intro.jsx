import React from "react";
import style from "./style.module.css";

function Intro(props) {
  return (
    <div className={style.intro}>
      <h1 className={style.intro_title}>Обучающие курсы</h1>
      <h2 className={style.intro_subtitle}>Начни свое развитие</h2>
    </div>
  );
}

export default Intro;
