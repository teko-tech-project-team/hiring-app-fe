import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogin from "../../assets/images/hero1.jpg";

const RegisterJobSeeker = () => {
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = new URLSearchParams(formdata);

    if (password === confirm) {
      axios
        .post(`http://localhost:3001/api/v1/auth/register-jobseeker`, data)
        .then((res) => {
          setError(false);
          setMessage(res.data.Data);
        })
        .catch((err) => {
          setError(err.response.Data);
        });
    } else {
      setError("Konfirmasi kata sandi salah!");
    }
  };

  const showModal = () => {
    if (message) {
      return (
        <>
          <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/60 flex justify-center items-center">
            <div className="w-1/4 rounded-xl bg-white p-6">
              <p>Success Register</p>
              <Link to="/login-job-seeker">
                <button className="btn-primary w-full mt-3">Login</button>
              </Link>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      {showModal()}
      <div className="container">
        <div className="grid grid-cols-1 mb-12 md:grid-cols-2">
          <div className="mt-7">
            <img src={mainLogin} className="h-screen hidden md:flex" alt="" />
          </div>

          <div className="mt-12 mx-12">
            <h1 className="text-4xl font-semibold mb-10">Hallo Pekerja!</h1>
            <p className="mb-11">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              nobis eum, molestias saepe molestiae sequi!
            </p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text">Nama</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan email anda"
                  className="input input-bordered w-full max-w-xl"
                  name="fullname"
                />
              </div>
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xl"
                  name="email"
                />
              </div>
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text">No. Handphone</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xl"
                  name="phone_number"
                />
              </div>
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text">Kata Sandi</span>
                </label>
                <input
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xl"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text">Konfirmasi Kata Sandi</span>
                </label>
                <input
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xl"
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </div>
              <br />
              <p className="text-xl font-open text-red-500 mb-3 form-bold">
                {error}
              </p>
              <div className="gap-x-4">
                <button type="submit" class="btn btn-warning btn-block">
                  Masuk
                </button>
              </div>
              <div className="text-center my-5">
                <span>Anda punyai akun? </span>
                <Link to="login-job-seeker">
                  <button
                    type="submit"
                    href=""
                    className="link link-hover text-secondary"
                  >
                    Masuk disini
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterJobSeeker;
