import React, { useEffect, useState } from "react";
import HeroBanner1 from "../../components/HeroBanner1";
import HeroBanner2 from "../../components/HeroBanner2";
import HeroBanner3 from "../../components/HeroBanner3";
import NavigationBar from "../../components/NavigationBar";
import { NavigationBarAuthLanding } from "../../components/NavigationBarAuth";
import Testimony from "../../components/Testimony";
import GetStarted from "../../components/GetStarted";
import Footer from "../../components/Footer";

const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const checkAuth = () => {
    if (isLogin) {
      return <NavigationBarAuthLanding />;
    } else {
      return <NavigationBar />;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <>
      {checkAuth()}
      <HeroBanner1 />
      <HeroBanner2 />
      <HeroBanner3 />
      <Testimony />
      <GetStarted />
      <Footer />
    </>
  );
};

export default LandingPage;
