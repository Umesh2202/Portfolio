import React, { Component } from "react";
import "./main.css";
import Nav from "../components/navigation";
import Home from "../components/home";
import Acc from "../components/accounts_bar";
import Footer from "../components/footer";
export default class main extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="all">
        <Home />
        <Acc />
        <Nav />
        <Footer />
      </div>
    );
  }
}
