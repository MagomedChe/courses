import React, { useEffect, useState } from 'react'
import styles from "../AddCourses/styles.module.css";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { editCourse, loadCourseChange } from '../../redux/coursesReducer'

function EditCourse(props) {
  const dispatch = useDispatch();
  const id = parseInt(useParams().id);

  const selectedEditCourse = useSelector((state) => state.courses.selectedEditCourse);

  const history = useHistory();
  const [title, setTitle] = useState(`${selectedEditCourse.title}`);
  const [address, setAddress] = useState(`${selectedEditCourse.address}`);
  const [phone, setPhone] = useState(`${selectedEditCourse.phone}`);
  const [price, setPrice] = useState(`${selectedEditCourse.price}`);
  const [categoryId, setCategoryId] = useState(`${selectedEditCourse.categoryId}`);


  useEffect(() => {
    dispatch(loadCourseChange(id))
  },[])


  const handleEdit = () => {
    dispatch(editCourse(title, address, phone, price, categoryId, id));
    history.push('/')
    setTitle('');
    setAddress('');
    setPhone('');
    setPrice('');
    setCategoryId('');
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
        <select
          className={styles.authForm}
          name="categoryId"
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value>Выберите категорию</option>
          <option value={1}>Программирование</option>
          <option value={2}>Языковые курсы</option>
          <option value={3}>Веб-дизайнер</option>
          <option value={4}>Маркетинг</option>
        </select>
      </div>
      <div>
        <button onClick={handleEdit}>
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default EditCourse;
