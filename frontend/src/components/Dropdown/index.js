import React from "react";
import "./styles.less";

const Dropdown = ({ options, title, setFilterBy, filterBy }) => {
  const toggleDropdown = () => {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("icon").classList.toggle("rotateIcon");
  };

  const itemSelected = (e, item) => {
    setFilterBy(item);
  };

  window.onclick = function (event) {
    if (!event.target.matches(".dropdown__button")) {
      var dropdowns = document.getElementsByClassName("dropdown__content");

      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
          document.getElementById("icon").classList.toggle("rotateIcon");
        }
      }
    }
  };

  return (
    <div className="dropdown">
      <div className="dropdown__wrapper">
        <span>{filterBy === undefined ? title : filterBy.option}</span>

        <div
          className="dropdown__button__container"
          onClick={() => toggleDropdown()}
        >
          <img
            className="dropdown__button"
            id="icon"
            src="icons/down-arrow.png"
            alt="arrow down"
          />
        </div>
      </div>

      <div id="myDropdown" className="dropdown__content">
        {options.map((item) => {
          return (
            <p
              onClick={(e) => itemSelected(e, item)}
              name={item.sortBy}
              key={item.option}
            >
              {item.option}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default Dropdown;
