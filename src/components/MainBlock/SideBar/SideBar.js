import React from "react";

import Navigation from "./Navigaion/Navigation";
import User from "./User/User";


import "./SideBar_module.css";
import LogOut from "./LogOut/LogOut";

export default function SideBar({setIsLoggetIn}) {
  return (
    <aside className="sidebar">
      <section className="sidebarTop">
        <User />
        <Navigation />
      </section>
      <LogOut setIsLoggetIn= {setIsLoggetIn} />
    </aside>
  );
}
