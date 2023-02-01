import React from "react";
import AssetsHeroBannerTwo from "../assets/images/HeroBannerTwo.png";
// import checklist from "../../assets/svg/tick.svg";

const HeroBanner2 = () => {
  return (
    <>
      <div className="container">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img src={AssetsHeroBannerTwo} className="max-w-sm" />
            <div>
              <h1 className="text-5xl capitalize font-semibold leading-snug">kenapa harus mencari talent di pword?</h1>
              <div className="flex-column leading-10">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner2;
