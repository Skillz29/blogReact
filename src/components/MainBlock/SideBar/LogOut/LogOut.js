import React from "react";

import exitIcon from "../../../../assets/images/exit.svg";

import "./LogOut_module.css";

export default function LogOut({setIsLoggetIn}) {

  const logOut = () => {

    localStorage.removeItem("IsLoggetIn")

    setIsLoggetIn(false)
  }

  return(
    <section className="sidebarButton">
    <button onClick={logOut}>
      <img src={exitIcon} alt="exit" />
      <span>Exit</span>
    </button>
  </section>
  )
}
