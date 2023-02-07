import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterRecruiter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      navigate("/");
    }
  });

  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    company_name: "",
    sector: "",
    phone: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    if (registerForm.email === "") {
      return alert("email is required");
    } else if (registerForm.password === "") {
      return alert("password is required");
    } else if (registerForm.phone === "") {
      return alert("phone is required");
    } else {
      axios({
        url: "http://localhost:3001/api/v1/auth/recruiter/register",
        method: "POST",
        data: registerForm,
      })
        .then((res) => {
          console.log(res.data.data);
          navigate("/login-recruiter");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/2 bg-white p-12">
          <img
            src={require("../../assets/images/auth-background.png")}
            className="m-3 h-full"
            alt="img"
          />
        </div>
        <div className="w-1/2 bg-white m-6">
          <form onSubmit={handleRegister} class="flex flex-col">
            <label className="label">
              <span className="label-text text-4xl font-bold">
                Halo, Recruiter
              </span>
            </label>
            <label className="label">
              <span className="label-text text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </span>
            </label>
            <label className="label mt-2">
              <span className="label-text">Nama</span>
            </label>
            <input
              onChange={(e) =>
                setRegisterForm({
                  ...registerForm,
                  name: e.target.value,
                })
              }
              type="text"
              placeholder="Masukan nama panjang"
              className="input input-bordered w-50"
            />
            <label className="label mt-2">
              <span className="label-text">Email</span>
            </label>
            <input
              onChange={(e) =>
                setRegisterForm({
                  ...registerForm,
                  email: e.target.value,
                })
              }
              type="email"
              placeholder="Masukan alamat email"
              className="input input-bordered w-50"
            />
            <label className="label">
              <span className="label-text mt-2">Perusahaan</span>
            </label>
            <input
              onChange={(e) =>
                setRegisterForm({
                  ...registerForm,
                  company_name: e.target.value,
                })
              }
              type="text"
              placeholder="Masukan nama perusahaan"
              className="input input-bordered w-50"
            />
            <label className="label">
              <span className="label-text mt-2">Bidang Perusahaan</span>
            </label>
            <input
              onChange={(e) =>
                setRegisterForm({
                  ...registerForm,
                  sector: e.target.value,
                })
              }
              type="text"
              placeholder="Bidang perusahaan Anda"
              className="input input-bordered w-50"
            />
            <label className="label">
              <span className="label-text mt-2">No Handphone</span>
            </label>
            <input
              onChange={(e) =>
                setRegisterForm({
                  ...registerForm,
                  phone: e.target.value,
                })
              }
              type="tel"
              placeholder="Masukan no handphone"
              className="input input-bordered w-50"
            />
            <label className="label">
              <span className="label-text mt-2">Kata Sandi</span>
            </label>
            <input
              onChange={(e) =>
                setRegisterForm({
                  ...registerForm,
                  password: e.target.value,
                })
              }
              type="password"
              placeholder="Masukan kata sandi"
              className="input input-bordered w-50"
            />
            {/* <label className='label'>
              <span className='label-text mt-2'>Konfirmasi Kata Sandi</span>
            </label>
            <input
              type='text'
              placeholder='Masukan konfirmasi kata sandi'
              className='input input-bordered w-50'
            /> */}
            <button
              type="submit"
              className="bg-secondary text-white text-xl font-bold w-[48vw] h-[8vh] mt-12 rounded-lg"
            >
              Daftar
            </button>
            <label className="label justify-center">
              <div className="flex flex-row">
                <p className="text-dark">Anda sudah punya akun?</p>
                <p className="text-secondary">Click disini</p>
              </div>
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterRecruiter;
