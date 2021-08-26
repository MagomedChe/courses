import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.css";
import AddComment from "./AddComment";
import Comment from "./Comment";

function Comments(props) {
  const coursesSelected = useSelector((state) => state.courses.coursesSelected);
  const commentsLoad = useSelector((state) => state.courses.commentsLoad);
  const comments = useSelector((state) => state.courses.comments);

  return (
    <div className={style.comments_page}>
      <div className={style.comments_page_courses}>
        <div>
          <span>Название курса: </span>
          {coursesSelected.title}
        </div>
        <div>
          <span>Адресс: </span>
          {coursesSelected.address}
        </div>
        <div>
          <span>Телефон: </span>
          {coursesSelected.phone}
        </div>
        <div>
          <span>Цена: </span>
          {coursesSelected.price}
        </div>

        <AddComment id={coursesSelected.id} />
      </div>
      {commentsLoad ? (
        <div>Загрузка...</div>
      ) : (
        <div>
          {comments.map((item) => {
            return <Comment comment={item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Comments;
