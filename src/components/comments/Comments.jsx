import React from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import AddComment from "./AddComment";

function Comments(props) {
  const coursesSelected = useSelector((state) => state.courses.coursesSelected);

  return (
    <div className={style.comments_page}>
      {coursesSelected.map((item) => {
        return (
          <div>
            <div className={style.comments_page_main}>
              <div>
                <span>Название курса: </span>
                {item.title}
              </div>
              <div>
                <span>Адресс: </span>
                {item.address}
              </div>
              <div>
                <span>Телефон: </span>
                {item.phone}
              </div>
              <div>
                <span>Цена: </span>
                {item.price}
              </div>

              <AddComment/>

            </div>
              {item.callback.map((item)=>{
                return <Comment coment={item}/>
              })}
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
