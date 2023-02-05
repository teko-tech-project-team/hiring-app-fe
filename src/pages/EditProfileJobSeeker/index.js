import { Link } from "react-router-dom";
import mapPinIcon from "../../assets/icons/map-pin.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import editIcon from "../../assets/icons/edit-pen-icon.svg";
import { useEffect, useState } from "react";
import { NavigationBarAuth } from "../../components/NavigationBarAuth";
import NavigationBar from "../../components/NavigationBar";
import {
  FormEditJobseeker,
  FormPengalamanKerja,
  FormPortofolio,
  FormSkill,
} from "./FormEditJobseeker";
import { useDispatch, useSelector } from "react-redux";
import suitCase from "../../assets/icons/suitcase.svg";
import {
  getAllExperience,
  getJobseeker,
} from "../../store/actions/actionJobseeker";

const EditProfileJobSeeker = () => {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const {
    allExperienceResult,
    allExperienceLoading,
    allExperienceError,
    getJobseekerResult,
    getJobseekerLoading,
    getJobseekerError,
  } = useSelector((state) => state.jobseekerReducer);

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
    dispatch(
      getAllExperience(JSON.parse(localStorage.getItem("@userLogin")).id)
    );
    dispatch(getJobseeker(JSON.parse(localStorage.getItem("@userLogin")).id));
  }, [dispatch]);

  const handleImageChange = (e) => {
    dispatch({ type: "IMAGE", profile_image: e.target.files[0] });
  };

  return (
    <>
      {checkAuth()}
      <div className="w-full h-[50vh] bg-primary">
        <div className="container grid grid-cols-12 gap-x-20 py-20 px-0 ">
          <div className="col-span-4 font-open">
            {getJobseekerResult ? (
              <>
                <div className="bg-white p-8 rounded-xl border-4">
                  <div
                    className="w-60 h-60 mx-auto rounded-full bg-white bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url("http://localhost:3001/uploads/images/${getJobseekerResult.profile_image}")`,
                    }}
                  ></div>
                  <input
                    type="file"
                    name="profile_image"
                    id="profile_image"
                    className="hidden"
                    onChange={(e) => handleImageChange(e)}
                  />
                  <label
                    htmlFor="profile_image"
                    className="flex text-[#9EA0A5] font-semibold text-2xl mt-6 justify-center cursor-pointer"
                  >
                    <img src={editIcon} alt="edit-icon" className="mr-2" />
                    Edit
                  </label>
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
                    <img src={mapPinIcon} alt="map-pin-icon" className="mr-2" />{" "}
                    {getJobseekerResult.domicile}
                  </p>
                  <p className="flex text-base text-[#9EA0A5] mb-2">
                    <img src={phoneIcon} alt="phone-icon" className="mr-2" />
                    {getJobseekerResult.phone_number}
                  </p>
                  <p className="flex text-base text-[#9EA0A5] mb-2">
                    {getJobseekerResult.description}
                  </p>
                </div>
              </>
            ) : getJobseekerLoading ? (
              <p className="text-center mt-5">Loading ...</p>
            ) : getJobseekerError ? (
              <p className="text-center mt-5">{getJobseekerError}</p>
            ) : (
              <p className="text-center mt-5">Data kosong </p>
            )}
            <button className="btn-primary mt-5 w-full">Ubah Password</button>
            <button className="btn-outline-primary mt-5 w-full">Kembali</button>
            <FormSkill />
            <div className="border-2 bg-white rounded-xl p-6 mt-6">
              <h1 className="text-[30px] card-title mb-3 pt-10 pb-3 pl-10">
                Pengalaman Kerja
              </h1>
              <hr className="border-t border-[#C4C4C4]" />
              {allExperienceResult ? (
                allExperienceResult.map((experience) => {
                  return (
                    <>
                      <div className="flex items-start mt-6 space-x-8 p-3 border-b-2 border-[#E2E5ED]">
                        <img src={suitCase} alt="suitcase" />
                        <div className="font-open">
                          <p className="text-xl text-[#1F2A36] font-semibold">
                            {experience.position}
                          </p>
                          <p className="text-base text-[#1F2A36]">
                            {experience.company_name}
                          </p>
                          <p className="text-base text-[#9EA0A5]">
                            {experience.date_in} - {experience.date_out}
                          </p>
                          <p className="mt-3">{experience.job_description}</p>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : allExperienceLoading ? (
                <>
                  <p className="text-center mt-5">Loading</p>
                </>
              ) : allExperienceError ? (
                <p className="text-center mt-5">{allExperienceError}</p>
              ) : (
                <p className="text-center mt-5">
                  {"Belum memiliki pengalaman kerja"}
                </p>
              )}
            </div>
          </div>
          {/* FORM */}
          <div className="col-span-8">
            <FormEditJobseeker />
            <FormPengalamanKerja />
          </div>
          <div className="col-span-12">
            <FormPortofolio />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfileJobSeeker;
