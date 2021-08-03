import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../redux/actions";
import style from './style.module.css'

function Categories(props) {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories.item)

    useEffect(()=>{
        dispatch(getCategories())
    },[dispatch])

    return (
        <div className={style.categories}>
            <div className={style.categories_title}>Категории</div>
            <div className={style.categories_box}>
                {categories.map((category)=>{
                    return(
                        <div className={style.category}>
                            <div><img className={style.category_image} src={category.image} alt=""/></div>
                            <div className={style.category_title}>{category.title}</div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
}

export default Categories;