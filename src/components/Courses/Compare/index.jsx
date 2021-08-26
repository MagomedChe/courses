import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import Compare from './Compare'

function Compares(props) {
  const compare = useSelector((state) => state.compare.compare);
  return (
    <div className={style.compare_page}>
      <div className={style.compare_page_box}>
        {compare.map((item) => {
          return (
            <Compare item={item}/>
          );
        })}
      </div>
    </div>
  );
}

export default Compares;
