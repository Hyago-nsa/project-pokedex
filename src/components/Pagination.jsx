import React from "react";
import "./Pagination.css";

const Pagination = ({ page, totalPages, onLeftClick, onRightClick }) => {
  return (
    <div className="pagination-container">
      <div className="pagination-box"></div>
      <div className="pagination-subbox">
        <button className="pagination-btn" onClick={onLeftClick}>
          <div>◀️</div>
        </button>
        <div>
          <h1>
            {page} de {totalPages}
          </h1>
        </div>
        <button className="pagination-btn" onClick={onRightClick}>
          <div>▶️</div>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
