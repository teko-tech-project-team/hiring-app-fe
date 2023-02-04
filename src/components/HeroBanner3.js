import React from "react";
import AssetHeroBannerThree from "../assets/images/HeroBannerThree.png";
import checklist from "../assets/icons/tick1.svg";

const HeroBanner3 = () => {
  return (
    <>
      <div className="container mb-24">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col justify-between lg:flex-row-reverse my-12">
            <img src={AssetHeroBannerThree} className="section-img" data-aos="fade-zoom-in" data-aos-offset="300" data-aos-duration="1200" data-aos-easing="ease-in-sine" />
            <div className="sm:mr-0 md:mr-32">
              <h1 className="text-5xl font-semibold" data-aos="fade-zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1300">
                Skill Talent
              </h1>
              <p className="py-6" data-aos="fade-zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <div className="grid grid-cols-2 leading-10">
                <div data-aos="fade-zoom-in" data-aos-duration="1400" data-aos-easing="ease-in-sine">
                  <ul className="flex">
                    <img src={checklist} className="mr-3" alt="checklist" />
                    <li>Java</li>
                  </ul>
                  <ul className="flex">
                    <img src={checklist} className="mr-3" alt="checklist" />
                    <li>Kotlin</li>
                  </ul>
                  <ul className="flex">
                    <img src={checklist} className="mr-3" alt="checklist" />
                    <li>PHP</li>
                  </ul>
                  <ul className="flex">
                    <img src={checklist} className="mr-3" alt="checklist" />
                    <li>JavaScript</li>
                  </ul>
                  {/* <p>Kotlin</p>
                  <p>PHP</p>
                  <p>JavaScript</p> */}
                </div>
                <div data-aos="fade-zoom-in" data-aos-duration="1800" data-aos-easing="ease-in-sine">
                  <ul className="flex">
                    <img src={checklist} className="mr-3" alt="checklist" />
                    <li>Golang</li>
                  </ul>
                  <ul className="flex">
                    <img src={checklist} className="mr-3" alt="checklist" />
                    <li>C++</li>
                  </ul>
                  <ul className="flex">
                    <img src={checklist} className="mr-3" alt="checklist" />
                    <li>Ruby</li>
                  </ul>
                  <ul className="flex">
                    <img src={checklist} className="mr-3" alt="checklist" />
                    <li>10+ Bahasa Lainnya</li>
                  </ul>
                  {/* <p>Golang</p>
                  <p>C++</p>
                  <p>Ruby</p>
                  <p>10+ Bahasa Lainnya</p> */}
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
