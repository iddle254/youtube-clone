import React from "react";
import "./sidebarrow.styles.css";

function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarrow ${selected && "selected"}`}>
      <Icon className="sidebarrow__icon" />
      <h2 className="sidebarrow__title">{title}</h2>
    </div>
  );
}

export default SidebarRow;
