import React, { useState } from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/actions";

function AddComment(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    dispatch(addComment(email, text, props.id));
    setText("");
    setEmail("");
  };
  return (
    <div className={style.comment_add_panel}>
      <input
        type="text"
        placeholder={"Email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder={"Text"}
        value={text}
        onChange={(e) => {
          onChange(e);
        }}
      />
      <button onClick={handleClick}>Добавить</button>
    </div>
  );
}

export default AddComment;
