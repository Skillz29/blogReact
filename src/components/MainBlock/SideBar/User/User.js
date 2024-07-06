import React from "react";

import avatar from "../../../../assets/images/avatar.jpg";

import "./User_module.css";

export default function User() {
  return (
    <div className="user">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <h3>Alexey</h3>
    </div>
  );
}
