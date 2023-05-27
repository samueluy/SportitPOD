import React from "react";
import Timer from "./Timer";

export default function Navbar() {
  return (
    <nav>
      <img src="./logo.png" className="nav--logo" />
      <Timer />
    </nav>
  );
}
