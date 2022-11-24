import React from "react";
import "./main.css";
import Nav from "../components/navigation";
import Home from "../components/home";
import Acc from "../components/accounts";

export default function main() {
  return (
    <div className="all">
      <Home />
      <Acc />
      <Nav />
    </div>
  );
}
