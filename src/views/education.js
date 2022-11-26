import React, { Component } from "react";
import EducationCard from "../components/education_card";
import Header from "../components/header";
import Footer from "../components/footer";
import "./education.css";

export default class education extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Header title="EDUCATION" bgclr="#ac00fc" color="#ffffff" />
        <div className="edu-outer">
          <EducationCard
            head="Till 10th"
            content="Nashik Cambridge School"
            date="till 2018"
          />
          <EducationCard
            head="Till 12th"
            content="M.S.Gosavi College of Engineering"
            date="till 2020"
          />
          <EducationCard
            head="Till Grad"
            content="Collge of Engineering Pune"
            date="till 2024"
          />
        </div>
        <Footer />
      </div>
    );
  }
}
