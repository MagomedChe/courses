import React from "react";
import style from "./style.module.css";

function Header(props) {
  return (
    <div className={style.header}>
      <div className={style.header_line}>
        <div className={style.logo}>Finde</div>
        <div className={style.search}>
          <input type="text" placeholder="Поиск" />
          <button>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div>
        <ul>
          <li>Ваш город?</li>
          <li>Избранное</li>
          <li>Войти</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
