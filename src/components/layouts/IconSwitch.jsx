import React from "react";
import "./css/Store.css";

export default function IconSwitch(props) {
  const { icon, onSwitch } = props;
  return (
    <div className="iconSwitchCt">
      <span className="material-icons" onClick={onSwitch}>
        {icon}
      </span>
    </div>
  );
}
