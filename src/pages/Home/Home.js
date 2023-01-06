import React, { Component } from "react";
import Footer from "../../components/footer";
import Nav from "./components/navigation/navigation";
import Home from "./components/top/top";
import Acc from "./components/accounts_bar/accounts_bar";
import "./Home.css";
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
