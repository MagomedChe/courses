import React from 'react'
import styles from "../AddCourses/styles.module.css";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editCourse } from '../../redux/coursesReducer'

function EditCourse(props) {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  const id = parseInt(useParams().id);
  // const [title, setTitle] = useState();
  // const [address, setAddress] = useState();
  // const [phone, setPhone] = useState();
  // const [price, setPrice] = useState();
  // const [categoryId, setCategoryId] = useState();



  const handleEdit = () => {
    dispatch(editCourse(props.title, props.address, props.phone, props.price, props.categoryId, id));
    props.history.push('/')
    props.setTitle('');
    props.setAddress('');
    props.setPhone('');
    props.setPrice('');
    props.setCategoryId('');
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
        <select
          className={styles.authForm}
          name="categoryId"
          onChange={(e) => props.setCategoryId(e.target.value)}
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
