import React from "react";
import mainLogin from "../../assets/images/hero1.jpg";

const RegisterJobSeeker = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 mb-12 md:grid-cols-2">
          <div className="mt-7">
            <img src={mainLogin} className="h-screen hidden md:flex" alt="" />
          </div>

          <div className="mt-12 mx-12">
            <h1 className="text-4xl font-semibold mb-10">Hallo Pekerja!</h1>
            <p className="mb-11">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nobis eum, molestias saepe molestiae sequi!</p>
            <form action="">
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text">Nama</span>
                </label>
                <input type="text" placeholder="Masukkan email anda" className="input input-bordered w-full max-w-xl" />
              </div>
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xl" />
              </div>
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text">No. Handphone</span>
                </label>
                <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xl" />
              </div>
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text">Kata Sandi</span>
                </label>
                <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xl" />
              </div>
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text">Konfirmasi Kata Sandi</span>
                </label>
                <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xl" />
              </div>
              <br />
              <div className="gap-x-4">
                <button type="submit" class="btn btn-warning btn-block">
                  Masuk
                </button>
              </div>
              <div className="text-center my-5">
                <span>Anda punyai akun? </span>
                <a href="" className="link link-hover text-secondary">
                  Masuk disini
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterJobSeeker;
