import React from "react";

import searchIcon from "../../../../assets/images/search.svg";
import "./SearchForm_module.css";

export default function SearchForm() {
  return (
    <form className="searchForm">
      <input type="text" placeholder="search" />
      <img src={searchIcon} alt="search Icon" />
    </form>
  );
}
