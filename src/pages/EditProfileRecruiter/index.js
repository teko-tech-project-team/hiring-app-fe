import React, { useEffect, useState } from "react";

import propic from "../../assets/images/makmur.jpg";
import location from "../../assets/icons/location.svg";
import btn_edit from "../../assets/icons/btn-edit.jpg";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  getRecruiter,
  editRecruiter,
} from "../../store/actions/actionRecruiter";
import { NavigationBarAuth } from "../../components/NavigationBarAuth";
import NavigationBar from "../../components/NavigationBar";

const EditProfileRecruiter = () => {
  const [isLogin, setIsLogin] = useState(false);
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
    console.log("1. use Effect component did mount di Edit Profile Recruiter");
    dispatch(
      getRecruiter(JSON.parse(localStorage.getItem("@userLogin")).user.id)
    );
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const id = JSON.parse(localStorage.getItem("@userLogin")).user.id;

    dispatch(editRecruiter(id, formdata));
  };

  // const [companyName, setCompanyName] = useState("");
  // const [sector, setSector] = useState("");
  // const [domicile, setDomicile] = useState("");
  // const [description, setDescription] = useState("");
  // const [email, setEmail] = useState("");
  // const [instagram, setInstagram] = useState("");
  // const [phone, setPhone] = useState("");
  // const [linkedin, setLinkedin] = useState("");

  return (
    <>
      {checkAuth()}
      <div className="bg-primary w-full h-[40vh] relative">
        {/* Container */}
        <div className="flex justify-evenly absolute top-[15vh] gap-10">
          {/* Profile Company */}
          {getRecruiterResult ? (
            <form className="flex gap-10" onSubmit={(e) => handleSubmit(e)}>
              <div>
                <div className="card w-[30vw] h-[83vh] pt-8 shadow-xl ml-[8vw] bg-white">
                  <img
                    src={`http://localhost:3001/uploads/images/${getRecruiterResult.profile_image}`}
                    alt="Shoes"
                    className="w-60 h-60 mx-auto rounded-full bg-white object-cover"
                  />
                  <input
                    type="file"
                    name="profile_image"
                    id="profile_image"
                    className="hidden"
                  />
                  <label
                    htmlFor="profile_image"
                    className="mx-auto cursor-pointer"
                  >
                    <img src={btn_edit} alt="edit" />
                  </label>
                  <div className="card-body">
                    <p className="card-title text-2xl">
                      {getRecruiterResult.company_name !== "null" &&
                        getRecruiterResult.company_name}
                    </p>
                    <p className="text-lg">
                      {getRecruiterResult.sector !== "null" &&
                        getRecruiterResult.sector}
                    </p>
                    <div className="flex">
                      {getRecruiterResult.domicile !== "null" && (
                        <>
                          <img src={location} alt="location" />
                          <p className="text-neutral-400 ml-3"></p>
                          {getRecruiterResult.domicile}
                        </>
                      )}
                    </div>
                    <p className="text-neutral-400">
                      {getRecruiterResult.description !== "null" &&
                        getRecruiterResult.description}
                    </p>
                  </div>
                </div>
                {/* button save */}
                <div>
                  <button
                    type="submit"
                    className="bg-primary text-white text-xl font-bold w-[30vw] ml-[8vw] h-[10vh] mt-3 rounded-lg"
                  >
                    Simpan
                  </button>
                </div>

                {/* button back */}
                <Link to="/profile-recruiter">
                  <button className="border-2 border-primary text-primary text-xl font-bold w-[30vw] ml-[8vw] h-[10vh] mt-3 rounded-lg">
                    Kembali
                  </button>
                </Link>
              </div>
              {/* Form */}
              <div className="card w-[50vw] bg-base-100 shadow-xl mx-auto">
                <div className="w-full  ">
                  <h1 className="text-[30px] card-title mb-3 pt-10 pb-3 pl-10">
                    Data Diri
                  </h1>
                  <hr />
                </div>
                <div className="card-body">
                  <div className="mb-4 mt-4">
                    <label className="block  text-slate-400 mb-1">
                      Nama Perusahaan
                    </label>
                    <input
                      defaultValue={
                        getRecruiterResult.company_name !== "null"
                          ? getRecruiterResult.company_name
                          : ""
                      }
                      // onChange={(e) => setCompanyName(e.target.value)}
                      type="text"
                      className="w-full border-gray-300 rounded-md"
                      placeholder="Masukkan Nama Perusahaan"
                      name="company_name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-400 mb-1">Bidang</label>
                    <input
                      defaultValue={
                        getRecruiterResult.sector !== "null"
                          ? getRecruiterResult.sector
                          : ""
                      }
                      // onChange={(e) => setSector(e.target.value)}
                      type="text"
                      className="w-full border-gray-300 rounded-md"
                      placeholder="Masukan bidang perusahaan ex : Financial"
                      name="sector"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-400 mb-1">
                      Domisili
                    </label>
                    <input
                      defaultValue={
                        getRecruiterResult.domicile !== "null"
                          ? getRecruiterResult.domicile
                          : ""
                      }
                      // onChange={(e) => setDomicile(e.target.value)}
                      type="text"
                      className="w-full border-gray-300 rounded-md"
                      placeholder="Masukan Domisili"
                      name="domicile"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-400 mb-1">
                      Deskripsi Singkat
                    </label>
                    <textarea
                      defaultValue={
                        getRecruiterResult.description !== "null"
                          ? getRecruiterResult.description
                          : ""
                      }
                      // onChange={(e) => setDescription(e.target.value)}
                      cols="10"
                      rows="5"
                      className="form-textarea w-full border-gray-300 rounded-md"
                      placeholder="Tuliskan Deskripsi Singkat"
                      name="description"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-400 mb-1">Email</label>
                    <input
                      defaultValue={
                        getRecruiterResult.email !== "null"
                          ? getRecruiterResult.email
                          : ""
                      }
                      // onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="w-full border-gray-300 rounded-md"
                      placeholder="Masukkan Email"
                      name="email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-400 mb-1">
                      Instagram
                    </label>
                    <input
                      defaultValue={
                        getRecruiterResult.instagram !== "null"
                          ? getRecruiterResult.instagram
                          : ""
                      }
                      // onChange={(e) => setInstagram(e.target.value)}
                      type="text"
                      className="w-full border-gray-300 rounded-md"
                      placeholder="Masukkan Username IG"
                      name="instagram"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-400 mb-1">
                      Nomor Telepon
                    </label>
                    <input
                      defaultValue={
                        getRecruiterResult.phone !== "null"
                          ? getRecruiterResult.phone
                          : ""
                      }
                      // onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      className="w-full border-gray-300 rounded-md"
                      placeholder="Masukkan Nomor Telepon"
                      name="phone"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-400 mb-1">
                      Linkedin
                    </label>
                    <input
                      defaultValue={
                        getRecruiterResult.linkedin !== "null"
                          ? getRecruiterResult.linkedin
                          : ""
                      }
                      // onChange={(e) => setLinkedin(e.target.value)}
                      type="text"
                      className="w-full border-gray-300 rounded-md"
                      placeholder="Masukkan nama Linkedin"
                      name="linkedin"
                    />
                  </div>
                </div>
              </div>
            </form>
          ) : getRecruiterLoading ? (
            <p>Loading ....</p>
          ) : (
            <p>{getRecruiterError ? getRecruiter : "Data Kosong"}</p>
          )}
        </div>
      </div>

      <div className="bg-grey h-[150vh]"></div>
    </>
  );
};

export default EditProfileRecruiter;
