import React from 'react'
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Authorization/authReducer'
import { loadCourses} from './actionsHeader'
import {setFilterText} from './actionsHeader'

function Header(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const filter =useSelector(state => state.courses.filter)

  const handleLogout = () => {
    dispatch(logout())
  }
  const handleCourses =()=>{
    dispatch(loadCourses())
  }
  const handleChangeFilter=(e)=>{
    dispatch(setFilterText(e.target.value))
  }
  return (
    <div className={style.header}>
      <div className={style.header_line}>
        <NavLink to={"/"} className={style.logo}>
          <div onClick={handleCourses}>
            Finde
          </div>
        </NavLink>
        <div className={style.search}>
          <input type="text" placeholder="Поиск"
                 value={filter} onChange={handleChangeFilter}/>
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
