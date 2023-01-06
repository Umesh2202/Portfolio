import React, { Component } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./About.css";

export default class about extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="about-all">
        <Header title="ABOUT" bgclr="#ff0862" />
        <div className="about-name-outer">
          <h1 className="about-name">Umesh </h1>
          <h1 className="about-name">Shirsat</h1>
        </div>
        <div className="about-outer">
          <div className="about-inner">
            <p className="about-para">Hi 👋 I am Umesh nice to have you here</p>
            <p className="about-para">
              I am an aspiring web developer looking for opportunities
            </p>
            <p className="about-para">
              My hobbies include coding, watching anime, playing games
            </p>
            <p className="about-para">Location: Pune, Maharashtra, India</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
