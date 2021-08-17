import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { useHistory } from "react-router-dom";
import { authAdmin } from "./authReducer";

function Authorization(props) {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const history = useHistory();
  const error = useSelector((state) => state.auth.error);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(authAdmin(login, pass, history));
  };

  return (
    <div className={styles.auth_page}>
      <div className={styles.blockAuth}>
        <div className={styles.auth_page_title}>Авторизация</div>
        <div className={styles.authForm}>
          <div>
            <input
              type="text"
              placeholder="Введите логин"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Введите пароль"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
        </div>
        {error && (
          <div className={styles.auth_error}>Неправильный логин или пароль</div>
        )}
        <div className={styles.button_auth} onClick={handleLogin}>
          Войти
        </div>
      </div>
    </div>
  );
}
export default Authorization;
