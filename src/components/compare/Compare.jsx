import React from "react";
import {useDispatch, useSelector} from "react-redux";
import style from "./style.module.css";

function Compare(props) {
  const dispatch = useDispatch();
  const compare = useSelector((state) => state.compare.compare);
  const handleClick = (id)=>{
    dispatch({type: 'compare/delete', payload: id})
  }

  return <div className={style.compare_page}>
    <div className={style.compare_page_box}>
      {compare.map((item) => {
        return (<div className={style.compare_page_item} key={item.id}>
          <div><span>Название курса:</span>{item.title}</div>
          <div><span>Адресс:</span>{item.address}</div>
          <div><span>Номер телефона:</span>{item.phone}</div>
          <div><span>Цена: </span>{item.price}</div>
          <button onClick={()=>handleClick(item.id)}>Удалить</button>
        </div>)
      })}
    </div>
  </div>;
}

export default Compare;
