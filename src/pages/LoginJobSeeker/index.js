import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mainLogin from "../../assets/images/hero1.jpg";

const Login = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = new URLSearchParams(formdata);

    axios
      .post(`http://localhost:3001/api/v1/auth/login-jobseeker`, data)
      .then((res) => {
        localStorage.setItem("@userLogin", JSON.stringify(res.data.data));
        navigate("/edit-profile-job-seeker");
      })
      .catch((err) => {
        setError(err.response.data.data);
      });
  };

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 mb-12 lg:grid-cols-2">
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
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Masukkan alamat email"
                  className="input input-bordered w-full max-w-xl"
                  name="email"
                />
              </div>
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text">Kata Sandi</span>
                </label>
                <input
                  type="password"
                  placeholder="Masukkan kata sandi"
                  className="input input-bordered w-full max-w-xl"
                  name="password"
                />
              </div>
              <div className="float-right my-7">
                <Link to="/reset-password">
                  <button href="" className="link link-hover text-secondary">
                    Lupa Kata Sandi?
                  </button>
                </Link>
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
                <span>Anda belum mempunyai akun? </span>
                <Link to={"/register-job-seeker"}>
                  <button href="" className="link link-hover text-secondary">
                    daftar disini
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

export default Login;
