import React from "react";

function Rating(value, text, color) {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fas fa-star"
              : value >= 0.6
              ? "fas fa-star-half-alt"
              : "fas fa-star"
          }
        >
          {" "}
        </i>
      </span>
      {color}dsds
    </div>
  );
}

export default Rating;
