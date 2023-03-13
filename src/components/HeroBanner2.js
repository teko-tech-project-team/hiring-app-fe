import React from "react";
import AssetsHeroBannerTwo from "../assets/images/HeroBannerTwo.png";
import checklist from ".././assets/icons/tick2.svg";

const HeroBanner2 = () => {
  return (
    <>
      <div className="container my-24" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="-100" data-aos-anchor-placement="center-center">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row my-20">
            <img src={AssetsHeroBannerTwo} className="heroBanner" />
            <div>
              <h1 className="text-5xl capitalize font-semibold leading-snug">kenapa harus mencari talent di pword?</h1>
              <div className="flex-column leading-10">
                <ul>
                  <li className="flex">
                    <img src={checklist} className="mr-3"></img>Lorem ipsum dolor sit amet.
                  </li>
                  <li className="flex">
                    <img src={checklist} className="mr-3"></img>Lorem ipsum dolor sit amet.
                  </li>
                  <li className="flex">
                    <img src={checklist} className="mr-3"></img>Lorem ipsum dolor sit amet.
                  </li>
                  <li className="flex">
                    <img src={checklist} className="mr-3"></img>Lorem ipsum dolor sit amet.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner2;
