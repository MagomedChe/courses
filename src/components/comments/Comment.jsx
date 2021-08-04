import React from 'react';
import style from "./style.module.css";

function Comment(props) {
    return (
        <div className={style.comments_page_comment}>
            <div className={style.comment_autor}><span>Email:</span> {props.coment.email}</div>
            <div>{props.coment.text}</div>
        </div>
    );
}

export default Comment;