import React, { useEffect, useState } from "react";
import HeroBanner1 from "../../components/HeroBanner1";
import NavigationBar from "../../components/NavigationBar";
import { NavigationBarAuthLanding } from "../../components/NavigationBarAuth";
import Testimony from "../../components/Testimony";

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
      <Testimony />
    </>
  );
};

export default LandingPage;
