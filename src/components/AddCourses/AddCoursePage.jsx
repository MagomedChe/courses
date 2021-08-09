import React, { useState } from 'react'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { AddCourse } from '../../redux/coursesReducer'
import { useHistory } from 'react-router-dom'




function AddCoursePage (props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');


  const handleAdd = () => {
    dispatch(AddCourse(title, address, phone, price, categoryId, history))
    history.push('/')
  }


  return (
    <div className={styles.blockAuth}>
      <div className={styles.authForm}>
        Название курса
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.authForm}>
        Адрес
        <input
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>
      <div className={styles.authForm}>
        Телефон
        <input
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>
      <div className={styles.authForm}>
        Цена
        <input
          type="text"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
      </div>
      <div className={styles.authForm}>
        Категория
        <select className={styles.authForm} name="categoryId" onChange={e => setCategoryId(e.target.value)}>
          <option defaultValue>Выберите категорию</option>
          <option value={1}>Программирование</option>
          <option value={2}>Языковые курсы</option>
          <option value={3}>Веб-дизайнер</option>
          <option value={4}>Маркетинг</option>
        </select>
      </div>
      <div>
        <button onClick={handleAdd}>
          Добавить
        </button>
      </div>
    </div>
  )
}

export default AddCoursePage
