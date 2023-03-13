import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  addExperience,
  addPortfolio,
  editProfile,
  getAllPortfolio,
} from "../../store/actions/actionJobseeker";
import PortofolioItem from "../ProfileJobSeeker/PortfolioItem";
import "./edit.css";
// import { readFileSync } from "fs";

const FormEditJobseeker = () => {
  const dispatch = useDispatch();
  const { profile_image, skills } = useSelector(
    (state) => state.jobseekerReducer
  );
  const navigate = useNavigate();
  const { getJobseekerResult, getJobseekerLoading, getJobseekerError } =
    useSelector((state) => state.jobseekerReducer);

  useEffect(() => {
    if (!localStorage.getItem("@userLogin")) {
      navigate("/login-job-seeker");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const id = JSON.parse(localStorage.getItem("@userLogin")).id;
    // console.log(profile_image);
    // console.log(skills);
    formdata.append("profile_image", profile_image);
    formdata.append("skills", skills);

    dispatch(editProfile(id, formdata));
  };

  // const getProvinsi = () => {};

  if (getJobseekerResult) {
    return (
      <>
        <form
          className="border-2 bg-white rounded-xl"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="text-[30px] card-title mb-3 pt-10 pb-3 pl-10">
            Data Diri
          </h1>
          <hr className="border-t border-[#C4C4C4]" />
          <div className="card-body">
            <div className="mb-4 mt-4">
              <label
                htmlFor="nama-lengkap"
                className="block text-slate-400 mb-1"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md"
                placeholder="Masukkan Nama Lengkap"
                id="nama-lengkap"
                name="fullname"
                defaultValue={getJobseekerResult.fullname}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="profession" className="block text-slate-400 mb-1">
                Profesi
              </label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md"
                placeholder="Masukan profesi"
                id="profession"
                name="profession"
                defaultValue={getJobseekerResult.profession}
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="domisili" className="block text-slate-400 mb-1">
                Domisili
              </label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md input-domisili"
                placeholder="Masukan domisili"
                id="domisili"
                name="domicile"
                defaultValue={getJobseekerResult.domicile}
              />
              {/* <div className="bg-white w-full h-96 border-2 rounded-xl p-4 absolute hidden daerah">
              {getProvinsi()}
            </div> */}
            </div>
            <div className="mb-4 flex space-x-5">
              <div>
                <label
                  htmlFor="instagram"
                  className="block text-slate-400 mb-1"
                >
                  Instagram
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md"
                  placeholder="Masukan username instagram"
                  id="instagram"
                  name="instagram"
                  defaultValue={getJobseekerResult.instagram}
                />
              </div>
              <div>
                <label htmlFor="github" className="block text-slate-400 mb-1">
                  Github
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md"
                  placeholder="Masukan username github"
                  id="github"
                  name="github"
                  defaultValue={getJobseekerResult.github}
                />
              </div>
              <div>
                <label htmlFor="gitlab" className="block text-slate-400 mb-1">
                  Gitlab
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md"
                  placeholder="Masukan username gitlab"
                  id="gitlab"
                  name="gitlab"
                  defaultValue={getJobseekerResult.gitlab}
                />
              </div>
            </div>
            <div className="mb-4 mt-4">
              <label htmlFor="deskripsi" className="block text-slate-400 mb-1">
                Deskripsi singkat
              </label>
              <textarea
                name="description"
                id="deskripsi"
                cols="30"
                rows="10"
                className="w-full border-gray-300 rounded-md"
                placeholder="Tuliskan deskripsi singkat"
                defaultValue={getJobseekerResult.description}
              ></textarea>
              <button type="submit" className="btn-secondary mt-4 w-1/3">
                Simpan
              </button>
            </div>
          </div>
        </form>
      </>
    );
  } else if (getJobseekerLoading) {
    return <p className="text-center mt-5">Loading ...</p>;
  } else {
    return <p className="text-center mt-5">{getJobseekerError}</p>;
  }
};

const FormSkill = () => {
  const [inputSkill, setInputSkill] = useState("");
  const [skills, setSkill] = useState([]);
  const dispatch = useDispatch();
  const { getJobseekerResult, getJobseekerLoading, getJobseekerError } =
    useSelector((state) => state.jobseekerReducer);

  const addSkill = () => {
    if (inputSkill !== "") {
      setSkill([...skills, inputSkill]);
      dispatch({ type: "SKILL", skills: [...skills, inputSkill] });
    }
  };

  return (
    <>
      <div className="border-2 bg-white rounded-xl p-6 mt-6 font-open">
        <h1
          htmlFor="skill"
          className="text-[30px] card-title mb-3 pt-10 pb-3 pl-10 font-bold"
        >
          Skill
        </h1>
        <hr className="border-t border-[#C4C4C4]" />
        <div className="flex space-x-4 mt-6">
          <input
            type="text"
            className="w-full border-gray-300 rounded-md"
            placeholder="Masukan skill"
            id="skill"
            onChange={(e) => setInputSkill(e.target.value)}
          />
          <button className="btn-secondary" onClick={() => addSkill()}>
            Simpan
          </button>
        </div>
        <div className="w-full flex flex-wrap pt-4 gap-3">
          {getJobseekerResult && getJobseekerResult.skills !== null
            ? getJobseekerResult.skills.map((skill) => {
                return (
                  <>
                    <p className="p-3 bg-secondary/60 hover:bg-secondary text-white font-semibold rounded-lg text-sm">
                      {skill}
                    </p>
                  </>
                );
              })
            : ""}
          {skills
            ? skills.map((skill) => {
                return (
                  <>
                    <p className="p-3 bg-secondary/60 hover:bg-secondary text-white font-semibold rounded-lg text-sm">
                      {skill}
                    </p>
                  </>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

const FormPengalamanKerja = () => {
  const dispatch = useDispatch();

  const handleAddExperience = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const id = JSON.parse(localStorage.getItem("@userLogin")).id;
    formdata.append("id_jobseeker", id);
    const data = new URLSearchParams(formdata);

    dispatch(addExperience(data));
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <>
      <form
        className="border-2 bg-white rounded-xl p-6 mt-6"
        onSubmit={(e) => handleAddExperience(e)}
      >
        <h1 className="text-[30px] card-title mb-3 pt-10 pb-3 pl-10">
          Pengalaman Kerja
        </h1>
        <hr className="border-t border-[#C4C4C4]" />
        <div className="card-body">
          <div className="mb-4 flex space-x-5">
            <div className="w-1/2">
              <label
                htmlFor="nama_perusahaan"
                className="block text-slate-400 mb-1"
              >
                Nama Perusahaan
              </label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md"
                placeholder="Masukan nama perusahaan"
                id="nama_perusahaan"
                name="company_name"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="posisi" className="block text-slate-400 mb-1">
                Posisi
              </label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md"
                placeholder="Masukan posisi"
                id="posisi"
                name="position"
              />
            </div>
          </div>
          <div className="mb-4 flex space-x-5">
            <div className="w-1/2">
              <label
                htmlFor="tanggal_masuk"
                className="block text-slate-400 mb-1"
              >
                Tanggal Masuk
              </label>
              <input
                type="date"
                className="w-full border-gray-300 rounded-md uppercase"
                id="tanggal_masuk"
                name="date_in"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="tanggal_keluar"
                className="block text-slate-400 mb-1"
              >
                Tanggal Keluar
              </label>
              <input
                type="date"
                className="w-full border-gray-300 rounded-md uppercase"
                id="tanggal_keluar"
                name="date_out"
              />
            </div>
          </div>
          <div className="mb-4 mt-4">
            <label
              htmlFor="deskripsi_pekerjaan"
              className="block text-slate-400 mb-1"
            >
              Deskripsi Pekerjaan
            </label>
            <textarea
              name="job_description"
              id="deskripsi_pekerjaan"
              cols="30"
              rows="10"
              className="w-full border-gray-300 rounded-md"
              placeholder="Deskripsikan pekerjaan anda"
            ></textarea>
          </div>
          <button type="submit" className="btn-outline-secondary">
            Tambah pengalaman kerja
          </button>
        </div>
      </form>
    </>
  );
};

const FormPortofolio = () => {
  const dispatch = useDispatch();
  const { allPortfolioResult, allPortfolioLoading, allPortfolioError } =
    useSelector((state) => state.jobseekerReducer);

  const handleaddPortfolio = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.append(
      "id_jobseeker",
      JSON.parse(localStorage.getItem("@userLogin")).id
    );

    dispatch(addPortfolio(formdata));
  };

  useEffect(() => {
    dispatch(
      getAllPortfolio(JSON.parse(localStorage.getItem("@userLogin")).id)
    );
  }, [dispatch]);

  return (
    <>
      <form
        className="border-2 bg-white rounded-xl p-6 mt-6"
        onSubmit={(e) => handleaddPortfolio(e)}
      >
        <h1 className="text-[30px] card-title mb-3 pt-10 pb-3 pl-10">
          Portfolio
        </h1>
        <hr className="border-t border-[#C4C4C4]" />
        <div className="mb-4 mt-6">
          <label htmlFor="nama-aplikasi" className="block text-slate-400 mb-1">
            Nama Aplikasi
          </label>
          <input
            type="text"
            className="w-full border-gray-300 rounded-md"
            placeholder="Masukkan nama aplikasi"
            id="nama-aplikasi"
            name="app_name"
          />
        </div>
        <div className="mb-4 mt-6">
          <label
            htmlFor="link_repository"
            className="block text-slate-400 mb-1"
          >
            Link Repository
          </label>
          <input
            type="text"
            className="w-full border-gray-300 rounded-md"
            placeholder="Masukkan link repository"
            id="link_repository"
            name="repository"
          />
        </div>
        <div className="mb-4 mt-6">
          <label
            htmlFor="gambar-portofolio"
            className="block text-slate-400 mb-1"
          >
            Upload Gambar
          </label>
          <input
            type="file"
            className="w-full border-gray-300 rounded-md"
            placeholder="Masukkan link repository"
            id="gambar-portofolio"
            name="portfolio_image"
            multiple
          />
        </div>
        <hr className="border-t border-[#C4C4C4] my-8" />
        <button type="submit" className="btn-outline-secondary w-full">
          Tambah portofolio
        </button>
        <hr className="border-t border-[#C4C4C4] my-8" />
        <div className="grid grid-cols-12 gap-x-5 gap-y-8 py-6 font-open">
          {allPortfolioResult ? (
            allPortfolioResult.map((portfolio) => {
              return (
                <>
                  <PortofolioItem
                    name={portfolio.app_name}
                    image={`https://res.cloudinary.com/djc3odcxg/image/upload/v1678631683/${portfolio.portfolio_image[0].filename}.webp`}
                  />
                </>
              );
            })
          ) : allPortfolioLoading ? (
            <p className="text-center mt-5">Loading</p>
          ) : allPortfolioError ? (
            <p className="text-center mt-5 w-max">Belum memiliki portfolio</p>
          ) : (
            <p className="text-center mt-5 w-max">Belum memiliki portfolio</p>
          )}
        </div>
      </form>
    </>
  );
};

export { FormEditJobseeker, FormSkill, FormPengalamanKerja, FormPortofolio };
