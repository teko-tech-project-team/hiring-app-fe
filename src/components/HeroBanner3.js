import React from "react";
import AssetHeroBannerThree from "../assets/images/HeroBannerThree.png";

const HeroBanner3 = () => {
  return (
    <>
      <div className="container">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col justify-between lg:flex-row-reverse">
            <img src={AssetHeroBannerThree} className="max-w-sm" />
            <div className="sm:mr-0 md:mr-32">
              <h1 className="text-5xl font-semibold">Skill Talent</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <div className="grid grid-cols-2 leading-10">
                <div>
                  <p>Java</p>
                  <p>Kotlin</p>
                  <p>PHP</p>
                  <p>JavaScript</p>
                </div>
                <div>
                  <p>Golang</p>
                  <p>C++</p>
                  <p>Ruby</p>
                  <p>10+ Bahasa Lainnya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner3;
