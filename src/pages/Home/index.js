import React, { useState } from "react";
import profile from "../../assets/images/avatar.webp";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <div className="container bg-purple-800">
        <div class="navbar text-white">
          <a class="btn btn-ghost normal-case text-xl">Top Jobs</a>
        </div>
      </div>

      <div className="container my-10">
        <form action="">
          <div className="bg-slate-200 p-3 pb-[4.5rem] md:pb-3 rounded-xl">
            <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-2xl " />
            <select className="select select-primary w-full mt-2 md:ml-1 md:mt-0 lg:max-w-none xl:max-w-xs">
              <option disabled selected>
                What is the best TV show?
              </option>
              <option>Game of Thrones</option>
              <option>Lost</option>
              <option>Breaking Bad</option>
              <option>Walking Dead</option>
            </select>
            <button className="btn btn-primary sm:btn-sm md:btn-md mt-2 md:mt-0 float-right" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      {[1, 2, 3, 4].map((item) => {
        return (
          <div className="container">
            <div className="card px-6 py-1 my-5 card-side bg-base-100 shadow-md">
              <div className="card-body">
                <div className="grid grid-rows-1 text-center md:grid-cols-2 md:text-left">
                  <div className="mb-5 flex flex-col md:flex-row md:items-center">
                    <figure>
                      <img src={profile} alt="Movie" />
                    </figure>
                    <div className="items-center">
                      <h2 className="font-semibold text-2xl">Firman Subagja</h2>
                      <p>Web Developer - Freelance</p>
                      <p>Bandung, Indonesian</p>
                      <span className="bg-yellow-600 text-white border-2 border-solid border-yellow-300 px-3 rounded-md">PHP</span>
                      <span className="bg-yellow-600 text-white border-2 border-solid border-yellow-300 px-3 rounded-md ml-3">JavaScript</span>
                      {/* <div className="card-actions justify-end"></div> */}
                    </div>
                  </div>
                  <div className="my-auto">
                    <button className="btn btn-primary md:float-right">Lihat Profile</button>
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

      <Footer />
    </>
  );
};

export default Home;
