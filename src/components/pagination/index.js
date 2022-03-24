import React from "react";
import './style.css'

const Pagination = (props) => {
  const {page, totalPages, onLeftClick, onRightClick} = props
  return (
    <div className="pagination__container">
        <button onClick={onLeftClick}><div>👈</div></button>
              <div className="Qtn__pagination">{page} de {totalPages}</div>
        <button onClick={onRightClick}><div>👉</div></button>
    </div>
  )
};

export default Pagination;
