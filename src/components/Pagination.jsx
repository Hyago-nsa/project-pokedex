import React from "react";
import "./Pagination.css";

const Pagination = ({ page, totalPages, onLeftClick, onRightClick }) => {
  return (
    <div className="pagination-container">
      <button className="pagination-btn" onClick={onLeftClick}><div>◀️</div></button>
      <div>{page} de {totalPages}</div>
      <button className="pagination-btn" onClick={onRightClick}><div>▶️</div></button>
    </div>
  );
};

export default Pagination;
