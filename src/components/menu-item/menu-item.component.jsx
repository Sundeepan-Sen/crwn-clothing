import React from "react";
import "./menu-item.styles.scss";

// Functional component because no state or lifecycle methods are needed
const MenuItem = ({ title, imageUrl, size }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`, // CSS requires the string interpolated value of image URL
    }}
    className={`${size} menu-item`}
  >
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
