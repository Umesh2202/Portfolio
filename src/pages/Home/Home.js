import React, { useEffect } from "react";
import Footer from "../../components/footer/footer";
import Nav from "./components/navigation/navigation";
import Top from "./components/top/top";
import Acc from "./components/accounts_bar/accounts_bar";
import style from "./Home.module.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.all}>
      <Top />
      <Acc />
      <Nav />
      <Footer />
    </div>
  );
};

export default Home;
