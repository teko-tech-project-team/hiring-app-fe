// Imports
import { Link, useParams } from "react-router-dom";
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
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getJobseeker } from "../../store/actions/actionJobseeker";

const ProfileJobSeeker = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [activeTab, setactiveTab] = useState("portofolio");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { getJobseekerResult, getJobseekerLoading, getJobseekerError } =
    useSelector((state) => state.jobseekerReducer);

  const checkRole = () => {
    if (localStorage.getItem("@userLogin")) {
      if (JSON.parse(localStorage.getItem("@userLogin")).user.company_name) {
        return (
          <Link to="/hire">
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

  useEffect(() => {
    dispatch(getJobseeker(id));
  }, [dispatch, id]);

  return (
    <>
      {checkAuth()}
      <div className="w-full h-[50vh] bg-primary">
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-x-0 md:gap-x-10 py-20">
          <div className="col-span-4 mb-10 md:mb-0 bg-white border-2 rounded-xl p-8 font-open">
            {getJobseekerResult ? (
              <>
                <div
                  className="w-60 h-60 mx-auto rounded-full bg-white bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url("http://localhost:3001/uploads/images/${getJobseekerResult.profile_image}")`,
                  }}
                ></div>
                <h1 className="mt-8 text-2xl font-semibold text-[#1F2A36]">
                  {getJobseekerResult.fullname}
                </h1>
                <h3 className="text-base my-1">
                  {getJobseekerResult.profession}
                </h3>
                <h3 className="text-base text-[#9EA0A5] mb-4">
                  {getJobseekerResult.job_time}
                </h3>
                <p className="flex text-base text-[#9EA0A5] mb-2">
                  {getJobseekerResult.domicile !== null ? (
                    <>
                      <img
                        src={mapPinIcon}
                        alt="map-pin-icon"
                        className="mr-2"
                      />{" "}
                      {getJobseekerResult.domicile}
                    </>
                  ) : (
                    ""
                  )}
                </p>
                <p className="flex text-base text-[#9EA0A5] mb-2">
                  {getJobseekerResult.phone_number ? (
                    <>
                      <img src={phoneIcon} alt="phone-icon" className="mr-2" />
                      {getJobseekerResult.phone_number}
                    </>
                  ) : (
                    ""
                  )}
                </p>
                <p className="flex text-base text-[#9EA0A5] mb-2">
                  {getJobseekerResult.description}
                </p>
                {checkRole()}
                <h1 className="text-2xl font-semibold text-[#1F2A36]">
                  Skills
                </h1>
                <div className="w-full flex flex-wrap pt-4 gap-3">
                  {getJobseekerResult.skills !== null
                    ? getJobseekerResult.skills.map((skill) => {
                        return (
                          <>
                            <p className="p-3 bg-secondary/60 hover:bg-secondary text-white font-semibold rounded-lg text-sm">
                              {skill}
                            </p>
                          </>
                        );
                      })
                    : ""}
                </div>
                <p className="flex text-base text-[#9EA0A5] mt-20 mb-5">
                  <img src={mailIcon} alt="email-icon" className="mr-2" />
                  {getJobseekerResult.email}
                </p>
                <p className="flex text-base text-[#9EA0A5] mb-5">
                  {getJobseekerResult.instagram !== null ? (
                    <>
                      <img
                        src={instagramLogo}
                        alt="instagram-logo"
                        className="mr-2"
                      />
                      {getJobseekerResult.instagram}
                    </>
                  ) : (
                    ""
                  )}
                </p>
                <p className="flex text-base text-[#9EA0A5] mb-5">
                  {getJobseekerResult.github !== null ? (
                    <>
                      <img
                        src={githubLogo}
                        alt="github-logo"
                        className="mr-2"
                      />

                      {getJobseekerResult.github}
                    </>
                  ) : (
                    ""
                  )}
                </p>
                <p className="flex text-base text-[#9EA0A5] mb-5">
                  {getJobseekerResult.gitlab !== null ? (
                    <>
                      <img
                        src={gitlabLogo}
                        alt="gitlab-logo"
                        className="mr-2"
                      />
                      {getJobseekerResult.gitlab}
                    </>
                  ) : (
                    ""
                  )}
                </p>
              </>
            ) : getJobseekerLoading ? (
              ""
            ) : (
              ""
            )}
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
        <Footer />
      </div>
    </>
  );
};

export default ProfileJobSeeker;
