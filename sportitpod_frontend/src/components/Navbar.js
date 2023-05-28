import React from "react";
import Timer from "./Timer";
import logo from "../logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} className="nav--logo" />
      <Timer />
    </nav>
  );
}
