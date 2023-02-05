import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import profile from "../../assets/images/avatar.webp";
import Footer from "../../components/Footer";
import { getAllJobseeker } from "../../store/actions/actionJobseeker";
import jobseeker from "../../store/reducers/jobseeker";

const Home = () => {
  const dispatch = useDispatch();
  const { allJobseekerResult, allJobseekerLoading, allJobseekerError } =
    useSelector((state) => state.jobseekerReducer);

  useEffect(() => {
    dispatch(getAllJobseeker());
  }, [dispatch]);

  return (
    <>
      <div className="container bg-primary">
        <div class="navbar text-white">
          <p class="btn btn-ghost normal-case text-xl">Top Jobs</p>
        </div>
      </div>

      <div className="container my-10">
        <form action="">
          <div className="bg-slate-200 p-3 pb-[4.5rem] md:pb-3 rounded-xl">
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered input-primary w-full max-w-2xl "
            />
            <select className="select select-primary w-full mt-2 md:ml-1 md:mt-0 lg:max-w-none xl:max-w-xs">
              <option disabled selected>
                What is the best TV show?
              </option>
              <option>Game of Thrones</option>
              <option>Lost</option>
              <option>Breaking Bad</option>
              <option>Walking Dead</option>
            </select>
            <button
              className="btn btn-primary sm:btn-sm md:btn-md mt-2 md:mt-0 float-right"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {allJobseekerResult ? (
        allJobseekerResult.map((jobseeker) => {
          return (
            <div className="container">
              <div className="card px-6 py-1 my-5 card-side bg-base-100 shadow-md">
                <div className="card-body">
                  <div className="grid grid-rows-1 text-center md:grid-cols-2 md:text-left">
                    <div className="mb-5 flex flex-col md:flex-row md:items-center">
                      <figure>
                        <img
                          src={`http://localhost:3001/uploads/images/${jobseeker.profile_image}`}
                          alt="Movie"
                          className="rounded-full w-32 h-32 mr-5"
                        />
                      </figure>
                      <div className="items-center">
                        <h2 className="font-semibold text-2xl">
                          {jobseeker.fullname}
                        </h2>
                        <p>{jobseeker.profession}</p>
                        <p>{jobseeker.domicile}</p>
                        <div className="flex flex-wrap w-full space-x-3 mt-2 font-open">
                          {jobseeker.skills !== null
                            ? jobseeker.skills.map((skill) => {
                                return (
                                  <>
                                    <p className="p-3 mb-3 w-max bg-secondary text-white font-semibold rounded-lg text-xs">
                                      {skill}
                                    </p>
                                  </>
                                );
                              })
                            : ""}
                        </div>
                        {/* <div className="card-actions justify-end"></div> */}
                      </div>
                    </div>
                    <div className="my-auto">
                      <Link to={`/profile-job-seeker/${jobseeker.id}`}>
                        <button className="btn btn-primary md:float-right">
                          Lihat Profile
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : allJobseekerLoading ? (
        <p className="text-center mt-5">Loading</p>
      ) : allJobseekerError ? (
        <p className="text-center mt-5">{allJobseekerError}</p>
      ) : (
        <p className="text-center mt-5">Gagal menampilkan data</p>
      )}

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
