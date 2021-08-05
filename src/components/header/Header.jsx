import React from "react";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Authorization/authReducer'

function Header(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logout())
  }



  return (
    <div className={style.header}>
      <div className={style.header_line}>
        <NavLink to={"/"} className={style.logo}>
          Finde
        </NavLink>
        <div className={style.search}>
          <input type="text" placeholder="Поиск" />
          <button>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className={style.nav}>
        <NavLink
          className={style.nav_item}
          to={"/city"}
          activeClassName={style.active}
        >
          Ваш город?
        </NavLink>
        <NavLink
          className={style.nav_item}
          to={"/favorites"}
          activeClassName={style.active}
        >
          Избранное
        </NavLink>
        {!user.token ? ( <NavLink
          className={style.nav_item}
          to={"/auth"}
          activeClassName={style.active}
        >
          Войти
        </NavLink>) : (
          <div
            className={style.nav_item}
            onClick={handleLogout}
          >
            Выйти
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
