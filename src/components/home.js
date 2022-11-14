import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";

export default function home() {
  return (
    <div className="all">
      <p className="handle">Hi! Umesh HERE</p>
      <div className="about">
        <span className="about_initial">I'm a </span>
        <span className="about_latter">
          <Typewriter
            options={{
              strings: [
                "Student",
                "Coder (PRO ;)",
                "Front-End Dev",
                "Linux Enthusiast",
                "FOSS Contributor",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
    </div>
  );
}
