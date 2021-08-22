import React from 'react'
import style from './style.module.css'
import { useDispatch } from 'react-redux'

function Compare ({ item }) {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch({ type: "Compare/delete", payload: id });
  };
  return (
    <div className={style.compare_page_item} key={item.id}>
      <div>
        <span>Название курса:</span>
        {item.title}
      </div>
      <div>
        <span>Адресс:</span>
        {item.address}
      </div>
      <div>
        <span>Номер телефона:</span>
        {item.phone}
      </div>
      <div>
        <span>Цена: </span>
        {item.price}
      </div>
      <button onClick={() => handleClick(item.id)}>Удалить</button>
    </div>
  )
}

export default Compare