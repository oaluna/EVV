import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const SideBarItem = ({ item, active }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={item.path}
      className={active ? "sidebar-item-active" : "sidebar-item"}
      onMouseOver={() => setHover(true)}
    >
      <img
        src={item.icon}
        alt={`icon-${item.icon}`}
        className="sidebar-item-icon"
      />
      <p className="sidebar-item-label">{item.title}</p>
    </Link>
  );
};
export default SideBarItem;
