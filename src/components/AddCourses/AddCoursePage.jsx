import React from 'react'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { AddCourse } from '../../redux/coursesReducer'




function AddCoursePage (props) {
  const dispatch = useDispatch();


  const handleAdd = () => {
    dispatch(AddCourse(props.title, props.address, props.phone, props.price, props.categoryId, props.history))
    props.history.push('/')
  }


  return (
    <div className={styles.blockAuth}>
      <div className={styles.authForm}>
        Название курса
        <input
          type="text"
          value={props.title}
          onChange={e => props.setTitle(e.target.value)}
        />
      </div>
      <div className={styles.authForm}>
        Адрес
        <input
          type="text"
          value={props.address}
          onChange={e => props.setAddress(e.target.value)}
        />
      </div>
      <div className={styles.authForm}>
        Телефон
        <input
          type="text"
          value={props.phone}
          onChange={e => props.setPhone(e.target.value)}
        />
      </div>
      <div className={styles.authForm}>
        Цена
        <input
          type="text"
          value={props.price}
          onChange={e => props.setPrice(e.target.value)}
        />
      </div>
      <div className={styles.authForm}>
        Категория
        <select className={styles.authForm} name="categoryId" onChange={e => props.setCategoryId(e.target.value)}>
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
