import React from "react";
import "./styles.less";

const EmptyBox = ({ messenge, SetRamdonCategory }) => {
  return (
    <div className="emptybox">
      <p className="emptybox__messenge">
        {messenge}
        <br />
        <button
          className="emptybox__button"
          onClick={() => SetRamdonCategory(true)}
        >
          Random category
        </button>
      </p>
    </div>
  );
};
export default EmptyBox;
