import React from "react";
import mainLogin from "../../assets/images/hero1.jpg";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 mb-12 lg:grid-cols-2">
          <div className="mt-7">
            <img src={mainLogin} className="h-screen hidden md:flex" alt="" />
          </div>

          <div className="mt-12 mx-12">
            <h1 className="text-4xl font-semibold mb-10">Hallo Pekerja!</h1>
            <p className="mb-11">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nobis eum, molestias saepe molestiae sequi!</p>
            <form action="">
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Masukkan alamat email" className="input input-bordered w-full max-w-xl" />
              </div>
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text">Kata Sandi</span>
                </label>
                <input type="password" placeholder="Masukkan kata sandi" className="input input-bordered w-full max-w-xl" />
              </div>
              <div className="float-right my-7">
                <a href="" className="link link-hover text-secondary">
                  Lupa Kata Sandi?
                </a>
              </div>
              <br />
              <div className="gap-x-4">
                <button type="submit" class="btn btn-warning btn-block">
                  Masuk
                </button>
              </div>
              <div className="text-center my-5">
                <span>Anda belum mempunyai akun? </span>
                <a href="" className="link link-hover text-secondary">
                  daftar disini
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
