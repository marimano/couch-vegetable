import React from "react";
import './catalog.css'
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../redux/catalogReducer";

export default () => {
  const selectedCategoryId = useSelector(state => state.catalog.selectedCategoryId)
  const categories = useSelector(state => state.catalog.categories)
  const filteredList = useSelector(state => state.catalog.filteredList)

  const dispatch = useDispatch()

  return <div className="catalog">
    <div className="toggler">
      {categories.map(category => {
        return <div
          key={category.id}
          className={'category-btn' + (selectedCategoryId === category.id ? ' active' : '')}
          onClick={() => dispatch(changeCategory(category.id))}
        >
          {category.title}
        </div>
      })}
    </div>
    <div className="category-list">
      {filteredList.map(item => {
        return <div className="category-list-item" key={item.id}>
          <div>Назва: <span>{item.title}</span></div>
          <div>Ціна: <span>{item.price} грн</span></div>
          <button>Купити</button>
        </div>
      })}
    </div>
  </div>
}