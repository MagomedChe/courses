import React, { useState } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AddCourse } from "../courses/coursesReducer";
import { useHistory } from "react-router-dom";

function AddCoursePage(props) {
  const loading = useSelector((state) => state.courses.loading);

  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleAdd = () => {
    dispatch(AddCourse(title, address, phone, price, categoryId, history));
    history.push("/");
  };

  return (
    <div className={styles.add_course_page}>
      {loading ? (
        <div>wait</div>
      ) : (
        <div className={styles.add_course_page_box}>
          <div className={styles.add_course_page_block}>
            <span>Название курса</span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.add_course_page_block}>
            <span>Адрес</span>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={styles.add_course_page_block}>
            <span>Телефон</span>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.add_course_page_block}>
            <span>Цена</span>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className={styles.add_course_page_block}>
            <span>Категория</span>
            <select
              name="categoryId"
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option defaultValue>Выберите категорию</option>
              <option value={1}>Программирование</option>
              <option value={2}>Языковые курсы</option>
              <option value={3}>Веб-дизайнер</option>
              <option value={4}>Маркетинг</option>
            </select>
          </div>
          <div>
            <button onClick={handleAdd}>Добавить</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddCoursePage;
