import React, {useEffect, useState} from "react";

import propic from "../../assets/images/makmur.jpg";
import location from "../../assets/icons/location.svg";
import btn_edit from "../../assets/icons/btn-edit.jpg";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getRecruiter } from "../../store/actions/actionRecruiter"

const EditProfileRecruiter = () => {
  const { getRecruiterResult, getRecruiterLoading, getRecruiterError } = useSelector((state)=> state.RecruiterReducer )

  const dispatch = useDispatch()


  useEffect(()=> {
    //get profile recruiter

    //panggil action getRecruiter
    console.log("1. use Effect component did mount di Edit Profile Recruiter");
    dispatch(getRecruiter());

  }, [dispatch])

  const [companyName, setCompanyName] = useState("")
  const [sector, setSector] = useState("")
  const [domicile, setDomicile] = useState("")
  const [description, setDescription] = useState("")
  const [email, setEmail] = useState("")
  const [instagram, setInstagram] = useState("")
  const [phone, setPhone] = useState("")
  const [linkedin, setLinkedin] = useState("")

  return (
    <>
      <div className="bg-primary w-full h-[40vh] relative">
        {/* Container */}
        <div className="flex justify-evenly absolute top-[15vh] gap-10">
          {/* Profile Company */}
          {getRecruiterResult ? (
            <form className="flex gap-10">
              <div>
                <div className="card w-[30vw] h-[83vh] shadow-xl ml-[8vw] bg-white">
                  <figure className="px-10 pt-10">
                    <img src={propic} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <button className="mx-auto">
                    <img src={btn_edit} alt="edit" />
                  </button>
                  <div className="card-body">
                    <h2 className="card-title text-2xl">{getRecruiterResult.company_name}</h2>
                    <p className="text-lg">{getRecruiterResult.sector}</p>
                    <div className="flex">
                      <img src={location} alt="location" />
                      <p className="text-neutral-400 ml-3">
                        {getRecruiterResult.domicile}
                      </p>
                    </div>
                    <p className="text-neutral-400">
                      {getRecruiterResult.description}
                    </p>
                  </div>
                </div>
                {/* button save */}
                <div>
                  <button className="bg-primary text-white text-xl font-bold w-[30vw] ml-[8vw] h-[10vh] mt-3 rounded-lg">
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
                      value={getRecruiterResult.company_name}
                      onChange={(e)=> setCompanyName(e.target.value)}
                      type="text"
                      className="w-full border-gray-300 rounded-md"
                      placeholder="Masukkan Nama Perusahaan"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-400 mb-1">Bidang</label>
                    <input
                      value={getRecruiterResult.sector}
                      onChange={(e)=> setSector(e.target.value)}                   
                      type="text"
                      className="w-full border-gray-300 rounded-md"
                      placeholder="Masukan bidang perusahaan ex : Financial"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-400 mb-1">Domisili</label>
                    <input
                      value={getRecruiterResult.domicile}
                      onChange={(e)=> setDomicile(e.target.value)}   
                      type="text"
                      className="w-full border-gray-300 rounded-md"
                      placeholder="Masukan Domisili"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-400 mb-1">
                      Deskripsi Singkat
                    </label>
                    <textarea
                      value={getRecruiterResult.description}
                      onChange={(e)=> setDescription(e.target.value)}  
                      cols="10"
                      rows="5"    
                      className="form-textarea w-full border-gray-300 rounded-md"
                      placeholder="Tuliskan Deskripsi Singkat"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-400 mb-1">Email</label>
                    <input
                      value={getRecruiterResult.email}
                      onChange={(e)=> setEmail(e.target.value)}   
                      type="email"
                      className="w-full border-gray-300 rounded-md"
                      placeholder="Masukkan Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-400 mb-1">Instagram</label>
                    <input
                      value={getRecruiterResult.instagram}
                      onChange={(e)=> setInstagram(e.target.value)}    
                      type="text"
                      className="w-full border-gray-300 rounded-md"
                      placeholder="Masukkan Username IG"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-400 mb-1">
                      Nomor Telepon
                    </label>
                    <input
                      value={getRecruiterResult.phone}
                      onChange={(e)=> setPhone(e.target.value)}    
                      type="text"
                      className="w-full border-gray-300 rounded-md"
                      placeholder="Masukkan Nomor Telepon"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-400 mb-1">Linkedin</label>
                    <input
                      value={getRecruiterResult.linkedin}
                      onChange={(e)=> setLinkedin(e.target.value)}    
                      type="text"
                      className="w-full border-gray-300 rounded-md"
                      placeholder="Masukkan nama Linkedin"
                    />
                  </div>
                </div>
              </div>
            </form>


          ) : getRecruiterLoading ? (
                  <p>Loading ....</p>    
          ) : (
            <p>{getRecruiterError ? getRecruiter : "Data Kosong"}</p>
          )
          
          }

        </div>
      </div>

      <div className="bg-grey h-[150vh]"></div>
    </>
  );
};

export default EditProfileRecruiter;
