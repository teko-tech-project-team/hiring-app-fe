import React, { useState } from "react";
import profile from "../../assets/images/avatar.webp";

const Home = () => {
  return (
    <>
      <div className="container bg-purple-800">
        <div class="navbar text-white">
          <a class="btn btn-ghost normal-case text-xl">Top Jobs</a>
        </div>
      </div>

      <div className="container my-5">
        <form action="">
          <div className="bg-slate-200 p-3 rounded-xl">
            <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-2xl " />
            <select className="select select-primary w-full ml-1 max-w-xs">
              <option disabled selected>
                What is the best TV show?
              </option>
              <option>Game of Thrones</option>
              <option>Lost</option>
              <option>Breaking Bad</option>
              <option>Walking Dead</option>
            </select>
            <button className="btn btn-primary float-right" type="submit">
              Watch
            </button>
          </div>
        </form>
      </div>
      {[1, 2, 3, 4].map((item) => {
        return (
          <div className="container">
            <div className="card px-6 py-8 my-5 card-side bg-base-100 shadow-md">
              <figure>
                <img src={profile} alt="Movie" />
              </figure>
              <div className="card-body">
                <div className="grid grid-cols-2">
                  <div>
                    <h2 className="card-title">Firman Subagja</h2>
                    <p>Web Developer - Freelance</p>
                    <p>Bandung, Indonesian</p>
                    <span className="bg-yellow-600 text-white border-2 border-solid border-yellow-300 px-3 rounded-md">PHP</span>
                    <span className="bg-yellow-600 text-white border-2 border-solid border-yellow-300 px-3 rounded-md ml-3">JavaScript</span>
                    {/* <div className="card-actions justify-end"></div> */}
                  </div>
                  <div className="my-auto">
                    <button className="btn btn-primary float-right">Lihat Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="container flex flex-col items-center my-10">
        <div className="btn-group">
          <button className="btn mx-2">1</button>
          <button className="btn mx-2 btn-active">2</button>
          <button className="btn mx-2">3</button>
          <button className="btn mx-2">4</button>
        </div>
      </div>
    </>
  );
};

export default Home;
