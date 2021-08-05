import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authAdmin } from './authReducer'
import styles from './styles.module.css'

function Authorization (props) {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const error = useSelector(state => state.auth.error)

  const handleLogin = () => {
    dispatch(authAdmin(login,pass))
  }

  return (
    <div>
      <div className={styles.blockAuth}>
        <div className={styles.authTitle}>
          Авторизация
        </div>
        <div className={styles.authForm}>
          <div>
            <input
              type="text"
              placeholder="Введите логин"
              value={login}
              onChange={e => setLogin(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Введите пароль"
              value={pass}
              onChange={e => setPass(e.target.value)}
            />
          </div>
        </div>
          {error && (
            <div style={{fontSize:"30px"}}>
              Неверный логин или пароль
            </div>
          )}
        <button onClick={handleLogin}>
          <div className={styles.btn}>
            Войти
          </div>
        </button>
      </div>
    </div>
  )
}

export default Authorization