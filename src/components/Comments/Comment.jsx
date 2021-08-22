import React from "react";
import style from "./style.module.css";

function Comment(props) {
  return (
    <div className={style.comment}>
      <div className={style.comment_email}>{props.comment.email}</div>
      <div>{props.comment.text}</div>
    </div>
  );
}

export default Comment;
