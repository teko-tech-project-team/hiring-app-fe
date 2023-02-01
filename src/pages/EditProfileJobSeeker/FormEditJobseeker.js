import { useState } from "react";

const FormEditJobseeker = () => {
  return (
    <>
      <div className="border-2 bg-white rounded-xl">
        <h1 className="text-[30px] card-title mb-3 pt-10 pb-3 pl-10">
          Data Diri
        </h1>
        <hr className="border-t border-[#C4C4C4]" />
        <div className="card-body">
          <div className="mb-4 mt-4">
            <label htmlFor="nama-lengkap" className="block text-slate-400 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-md"
              placeholder="Masukkan Nama Lengkap"
              id="nama-lengkap"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="job-desk" className="block text-slate-400 mb-1">
              Job Desk
            </label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-md"
              placeholder="Masukan job desk"
              id="job-desk"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="domisili" className="block text-slate-400 mb-1">
              Domisili
            </label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-md"
              placeholder="Masukan domisili"
              id="domisili"
            />
          </div>
          <div className="mb-4 flex space-x-5">
            <div>
              <label htmlFor="instagram" className="block text-slate-400 mb-1">
                Instagram
              </label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md"
                placeholder="Masukan username instagram"
                id="instagram"
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
              />
            </div>
          </div>
          <div className="mb-4 mt-4">
            <label htmlFor="deskripsi" className="block text-slate-400 mb-1">
              Deskripsi singkat
            </label>
            <textarea
              name="deskripsi"
              id="deskripsi"
              cols="30"
              rows="10"
              className="w-full border-gray-300 rounded-md"
              placeholder="Tuliskan deskripsi singkat"
            ></textarea>
            <button className="btn-secondary mt-4 w-1/3">Simpan</button>
          </div>
        </div>
      </div>
    </>
  );
};

const FormSkill = () => {
  const [inputSkill, setInputSkill] = useState("");
  const [skills, setSkill] = useState([]);

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
          <button
            className="btn-secondary"
            onClick={() => setSkill([...skills, inputSkill])}
          >
            Simpan
          </button>
        </div>
        <div className="w-full flex flex-wrap pt-4 gap-3">
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
  return (
    <>
      <div className="border-2 bg-white rounded-xl p-6 mt-6">
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
              name="deskripsi_pekerjaan"
              id="deskripsi_pekerjaan"
              cols="30"
              rows="10"
              className="w-full border-gray-300 rounded-md"
              placeholder="Deskripsikan pekerjaan anda"
            ></textarea>
          </div>
          <button className="btn-outline-secondary">
            Tambah pengalaman kerja
          </button>
        </div>
      </div>
    </>
  );
};

const FormPortofolio = () => {
  return (
    <>
      <div className="border-2 bg-white rounded-xl p-6 mt-6">
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
            multiple
          />
        </div>
        <hr className="border-t border-[#C4C4C4] my-8" />
        <button className="btn-outline-secondary w-full">
          Tambah portofolio
        </button>
      </div>
    </>
  );
};

export { FormEditJobseeker, FormSkill, FormPengalamanKerja, FormPortofolio };