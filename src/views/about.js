import React from "react";
import "./about.css";
import Header from "../components/header";

export default function about() {
  return (
    <div>
      <Header title="ABOUT" bgclr="#ff0862" />

      <div className="about-outer">
        <h1 className="about-name">Umesh Shirsat</h1>
        <p className="about-para">Hi I am Umesh nice to have you here</p>
        <p className="about-para">
          I am an aspiring web developer looking for opportunities
        </p>
        <p className="about-para">
          Currently looking for interships in various companies
        </p>
        <p className="about-para">Location: Pune, Maharatra, India</p>
      </div>
    </div>
  );
}
