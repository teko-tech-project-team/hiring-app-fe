import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobseeker } from "../../store/actions/actionJobseeker";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Hire = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getJobseekerResult, getJobseekerLoading } = useSelector(
    (state) => state.jobseekerReducer
  );
  const [purpose, setPurpose] = useState("projek");
  const [messsage, setMessage] = useState();

  useEffect(() => {
    dispatch(getJobseeker(id));
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new URLSearchParams();
    data.append("purpose", purpose);
    data.append("message", messsage);
    data.append(
      "id_recruiter",
      JSON.parse(localStorage.getItem("@userLogin")).user.id
    );
    data.append(
      "recruiter_name",
      JSON.parse(localStorage.getItem("@userLogin")).user.company_name
    );
    data.append("id_jobseeker", id);
    data.append(
      "jobseeker_name",
      getJobseekerResult ? getJobseekerResult.fullname : ""
    );
    data.append("status", "draft");

    data.forEach((item) => {
      console.log(item);
    });

    axios
      .post(`http://localhost:3001/api/v1/order`, data)
      .then((res) => {
        alert("Pesan telah dikirim!");
        navigate("/home");
      })
      .catch((err) => {
        alert(err.response.data.data);
      });
  };

  return (
    <>
      <div className="flex flex-row">
        {getJobseekerResult ? (
          <>
            <div className="bg-white w-1/3">
              <div className="p-12 ml-28">
                <div className="card card-compact w-96 bg-base-100 shadow-2xl">
                  <figure>
                    <img
                      src={`http://localhost:3001/uploads/images/${getJobseekerResult.profile_image}`}
                      className="mt-4 align-item-center"
                      alt="img"
                    />
                  </figure>
                  <div className="card-body p-12">
                    <h2 className="card-title">
                      {getJobseekerResult.fullname}
                    </h2>
                    <p>{getJobseekerResult.profession}</p>
                    <p className="text-gray-400">
                      {getJobseekerResult.job_time}
                    </p>
                    <p className="text-gray-400">
                      <FontAwesomeIcon icon={faLocationDot} />{" "}
                      {getJobseekerResult.domicile}
                    </p>
                    <p className="text-gray-400">
                      <FontAwesomeIcon icon={faPhone} />{" "}
                      {getJobseekerResult.phone_number}
                    </p>
                    <p className="text-gray-400">
                      {getJobseekerResult.description}
                    </p>

                    <h2 className="card-title">Skill</h2>
                    <div className="card-actions justify-start">
                      {getJobseekerResult.skills !== null
                        ? getJobseekerResult.skills.map((skill) => {
                            return (
                              <>
                                <button className="btn btn-secondary border-none">
                                  {skill}
                                </button>
                              </>
                            );
                          })
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-2/3 container">
              <div className="bg-white text-center p-12">
                <div class="flex flex-col">
                  <label className="label">
                    <span className="label-text text-4xl font-bold">
                      Hubungi {getJobseekerResult.fullname}
                    </span>
                  </label>
                  <label className="label">
                    <span className="label-text text-2xl text-start">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In euismod ipsum et dui rhoncus auctor.
                    </span>
                  </label>
                  <label className="label">
                    <span className="label-text mb-2">Tujuan pesan ini</span>
                  </label>
                  <div class="w-full px-2 mb-6 md:mb-0">
                    <div class="inline-block relative w-full">
                      <select
                        class="block appearance-none w-full bg-white-200 border border-white-200 text-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        onChange={(e) => setPurpose(e.target.value)}
                      >
                        <option value="projek">Projek</option>
                        <option value="kolaborasi">Kolaborasi</option>
                        <option value="perekrutan">Perekrutan</option>
                      </select>
                    </div>
                  </div>
                  <label className="label">
                    <span className="label-text mt-2">Pesan</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered m-2 h-[200px]"
                    placeholder="Deskripsikan/jelaskan lebih detail"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <input
                    type="file"
                    className="file-input file-input-ghost w-full max-w-xs hidden"
                  />
                </div>
                <button
                  className="btn btn-block btn-secondary border-none mt-2 p-4"
                  onClick={(e) => handleSubmit(e)}
                >
                  Kirim
                </button>
              </div>
            </div>
          </>
        ) : getJobseekerLoading ? (
          <p className="text-center text-xl font-bold mt-5">Loading ...</p>
        ) : (
          <p className="text-center text-xl font-bold mt-5">
            Data tidak ditemukan
          </p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Hire;
