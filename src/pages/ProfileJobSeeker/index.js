// Imports
import { Link } from "react-router-dom";
import mapPinIcon from "../../assets/icons/map-pin.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import mailIcon from "../../assets/icons/mail-icon.svg";
import instagramLogo from "../../assets/icons/instagram.svg";
import githubLogo from "../../assets/icons/github.svg";
import gitlabLogo from "../../assets/icons/gitlab.svg";
import { useEffect, useState } from "react";
import { NavigationBarAuth } from "../../components/NavigationBarAuth";
import NavigationBar from "../../components/NavigationBar";
import ProfilePortofolio from "./ProfilePortofolio";
import ProfileExperience from "./ProfileExperience";

const ProfileJobSeeker = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [activeTab, setactiveTab] = useState("portofolio");

  const checkRole = () => {
    if (localStorage.getItem("@userLogin")) {
      if (JSON.parse(localStorage.getItem("@userLogin")).role === "perekrut") {
        return (
          <Link to="/edit-profile">
            <button className="btn-primary w-full my-6">Hire</button>
          </Link>
        );
      }
    }
  };

  const checkAuth = () => {
    if (isLogin) {
      return <NavigationBarAuth />;
    } else {
      return <NavigationBar />;
    }
  };

  useEffect(() => {
    setactiveTab("portofolio");
    if (localStorage.getItem("@userLogin")) {
      if (localStorage.getItem("@userLogin")) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    }
  }, []);

  return (
    <>
      {checkAuth()}
      <div className="w-full h-[50vh] bg-primary">
        <div className="container grid grid-cols-12 gap-x-20 py-20">
          <div className="col-span-4 bg-white border-2 rounded-xl p-8 font-open">
            <div className="w-60 h-60 mx-auto rounded-full bg-primary bg-cover bg-center bg-no-repeat bg-[url(./assets/images/avatar.webp)]"></div>
            <h1 className="mt-8 text-2xl font-semibold text-[#1F2A36]">
              Louis Tomlinson
            </h1>
            <h3 className="text-base my-1">Web Developer</h3>
            <h3 className="text-base text-[#9EA0A5] mb-4">Freelancer</h3>
            <p className="flex text-base text-[#9EA0A5] mb-2">
              <img src={mapPinIcon} alt="map-pin-icon" className="mr-2" />{" "}
              Purwokerto, Jawa Tengah
            </p>
            <p className="flex text-base text-[#9EA0A5] mb-2">
              <img src={phoneIcon} alt="phone-icon" className="mr-2" />
              0812 - 3456 - 789
            </p>
            <p className="flex text-base text-[#9EA0A5] mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
              Curabitur eu lacus fringilla, vestibulum risus at.
            </p>
            {checkRole()}
            <h1 className="text-2xl font-semibold text-[#1F2A36]">Skills</h1>
            <div className="w-full flex flex-wrap pt-4 gap-3">
              <p className="p-3 bg-secondary/60 hover:bg-secondary text-white font-semibold rounded-lg text-sm">
                Phyton
              </p>
              <p className="p-3 bg-secondary/60 hover:bg-secondary text-white font-semibold rounded-lg text-sm">
                Laravel
              </p>
              <p className="p-3 bg-secondary/60 hover:bg-secondary text-white font-semibold rounded-lg text-sm">
                Golang
              </p>
              <p className="p-3 bg-secondary/60 hover:bg-secondary text-white font-semibold rounded-lg text-sm">
                Javascript
              </p>
              <p className="p-3 bg-secondary/60 hover:bg-secondary text-white font-semibold rounded-lg text-sm">
                PHP
              </p>
              <p className="p-3 bg-secondary/60 hover:bg-secondary text-white font-semibold rounded-lg text-sm">
                HTML
              </p>
            </div>
            <p className="flex text-base text-[#9EA0A5] mt-20 mb-5">
              <img src={mailIcon} alt="email-icon" className="mr-2" />
              Louistommo@gmail.com
            </p>
            <p className="flex text-base text-[#9EA0A5] mb-5">
              <img src={instagramLogo} alt="instagram-logo" className="mr-2" />
              @Louist91
            </p>
            <p className="flex text-base text-[#9EA0A5] mb-5">
              <img src={githubLogo} alt="github-logo" className="mr-2" />
              @Louistommo
            </p>
            <p className="flex text-base text-[#9EA0A5] mb-5">
              <img src={gitlabLogo} alt="gitlab-logo" className="mr-2" />
              @Louistommo91
            </p>
          </div>
          <div className="col-span-8 bg-white border-2 rounded-xl p-8 font-open">
            <ul className="flex space-x-6 item">
              <li
                className={`font-semibold text-2xl cursor-pointer ${
                  activeTab === "portofolio"
                    ? "pb-3 border-b-4 border-primary"
                    : "text-[#9EA0A5]"
                }`}
                onClick={() => setactiveTab("portofolio")}
              >
                Portofolio
              </li>
              <li
                className={`font-semibold text-2xl cursor-pointer ${
                  activeTab === "pengalaman-kerja"
                    ? "pb-3 border-b-4 border-primary"
                    : "text-[#9EA0A5]"
                }`}
                onClick={() => setactiveTab("pengalaman-kerja")}
              >
                Pengalaman Kerja
              </li>
            </ul>
            {activeTab === "portofolio" ? (
              <ProfilePortofolio />
            ) : (
              <ProfileExperience />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileJobSeeker;
