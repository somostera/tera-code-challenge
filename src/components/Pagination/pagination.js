import React from "react";
import "./pagination.style.css";

const Pagination = ({ pages, setCurrentPage }) => {
  return (
    <div>
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
            className="pagination-button"
            value={index}
            onClick={(event) => setCurrentPage(Number(event.target.value))}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
