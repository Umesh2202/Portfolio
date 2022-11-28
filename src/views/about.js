import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./about.css";

export default class about extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
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
          <p className="about-para">Location: Pune, Maharashtra, India</p>
        </div>
        <Footer />
      </div>
    );
  }
}
