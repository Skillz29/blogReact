import React from "react";

import blogIcon from "../../../../assets/images/blog.svg";
import starIcon from "../../../../assets/images/star.svg";
import settingIcon from "../../../../assets/images/setting.svg";

import "./Navigation_module.css";

export default function Navigation() {
  return (
    <nav className="nav">
      <a className="active" href="/">
        <img src={blogIcon} alt="blog" />
        <span>Blog</span>
      </a>
      <a href="/">
        <img src={starIcon} alt="star" />
        <span>Favorite</span>
      </a>
      <a href="/">
        <img src={settingIcon} alt="settings" />
        <span>Settings</span>
      </a>
    </nav>
  );
}
