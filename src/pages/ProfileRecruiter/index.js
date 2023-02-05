import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import propic from "../../assets/images/makmur.jpg";
import location from "../../assets/icons/location.svg";
import email_icon from "../../assets/icons/email.svg";
import phone_icon from "../../assets/icons/phone-icon.svg";
import ig_icon from "../../assets/icons/ig-icon.svg";
import linkedin_icon from "../../assets/icons/linkedin-icon.svg";

import { useDispatch, useSelector } from "react-redux";
import { getRecruiter } from "../../store/actions/actionRecruiter";
import { NavigationBarAuth } from "../../components/NavigationBarAuth";
import NavigationBar from "../../components/NavigationBar";

const ProfileRecruiter = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { id } = useParams();
  const { getRecruiterResult, getRecruiterLoading, getRecruiterError } =
    useSelector((state) => state.RecruiterReducer);
  const dispatch = useDispatch();

  const checkAuth = () => {
    if (isLogin) {
      return <NavigationBarAuth />;
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

  useEffect(() => {
    //get profile recruiter

    //panggil action getRecruiter
    console.log("1. use Effect component did mount di Profile Recruiter");
    dispatch(getRecruiter(id));
  }, [dispatch, id]);

  return (
    <>
      {checkAuth()}
      <div className="w-full bg-grey pt-[10vh] pb-[10vh]">
        <div className="bg-primary mx-auto w-[80vw] h-[20vh]">
          {/* Container Card */}
          {getRecruiterResult ? (
            <div className="card w-[50vw] h-[110vh] mx-auto">
              <figure className="px-10 pt-10">
                <img src={propic} alt="Shoes" className="rounded-full" />
              </figure>
              <div className="card-body text-center pb-0">
                <h2 className="card-title text-2xl mx-auto">
                  {getRecruiterResult.company_name}
                </h2>
                <p className="text-lg h-[0vh]">{getRecruiterResult.sector}</p>
                <div className="flex mx-auto pb-3">
                  <img src={location} alt="location" />
                  <p className="text-neutral-400 ml-3">
                    {getRecruiterResult.domicile}
                  </p>
                </div>
                <p className="text-neutral-400">
                  {getRecruiterResult.description}
                </p>
              </div>
              <div className="mx-auto">
                <Link to="/edit-profile-recruiter">
                  <button className="bg-primary text-white text-xl font-bold w-[25vw] h-[10vh] rounded-lg">
                    Edit Profile
                  </button>
                </Link>
              </div>
              <div className="mx-auto">
                <ol className="mt-5">
                  <li className="flex justify-start gap-3 mb-5">
                    <img src={email_icon} alt="email-img" />
                    <p className="text-neutral-400">
                      {getRecruiterResult.email}
                    </p>
                  </li>
                  <li className="flex justify-start gap-3 mb-5">
                    <img src={ig_icon} alt="ig-img" />
                    <p className="text-neutral-400">
                      {getRecruiterResult.instagram}
                    </p>
                  </li>
                  <li className="flex justify-start gap-3 mb-5">
                    <img src={phone_icon} alt="phone-img" />
                    <p className="text-neutral-400">
                      {getRecruiterResult.phone}
                    </p>
                  </li>
                  <li className="flex justify-start gap-3 mb-5">
                    <img src={linkedin_icon} alt="linkedin-img" />
                    <p className="text-neutral-400">
                      {getRecruiterResult.linkedin}
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          ) : getRecruiterLoading ? (
            <p>Loading ....</p>
          ) : (
            <p>{getRecruiterError ? getRecruiter : "Data Kosong"}</p>
          )}
        </div>
        <div className="bg-white mx-auto w-[80vw] h-[120vh] "></div>
      </div>
    </>
  );
};

export default ProfileRecruiter;
