import React from "react";
import "./Pagination.css";

const Pagination = ({ page, totalPages, onLeftClick, onRightClick }) => {
  return (
    <div className="pagination-container">
      <button onClick={onLeftClick}><div>◀️</div></button>
      <div>{page} de {totalPages}</div>
      <button onClick={onRightClick}><div>▶️</div></button>
    </div>
  );
};

export default Pagination;
