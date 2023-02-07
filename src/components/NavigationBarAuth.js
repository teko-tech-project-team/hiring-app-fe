// Imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import bellIcon from "../assets/icons/bell-icon.svg";
import mailIcon from "../assets/icons/mail-icon.svg";
import { editStatus, getOrder } from "../store/actions/actionJobseeker";
import { getOrderRecruiter } from "../store/actions/actionRecruiter";
import notifIcon from "../assets/icons/notif.svg";

const NavigationBarAuthLanding = () => {
  const checkRole = () => {
    if (JSON.parse(localStorage.getItem("@userLogin")).user === undefined) {
      return (
        <>
          <Link
            to={`/profile-job-seeker/${
              JSON.parse(localStorage.getItem("@userLogin")).id
            }`}
          >
            <button className="btn-primary">Profile</button>
          </Link>
        </>
      );
    } else if (
      JSON.parse(localStorage.getItem("@userLogin")).user !== undefined
    ) {
      return (
        <>
          <Link
            to={`/profile-recruiter/${
              JSON.parse(localStorage.getItem("@userLogin")).user.id
            }`}
          >
            <button className="btn-primary">Profile</button>
          </Link>
        </>
      );
    }
  };

  return (
    <>
      <header className="py-8">
        <nav className="container flex justify-between items-center">
          <div className="flex items-center space-x-20">
            <Link to="/">
              <img
                src={require("../assets/images/logo peworld.webp")}
                alt="logo perworld"
                width="127"
                className="h-[35px]"
              />
            </Link>
            <Link to="/home">
              <p className="font-open font-semibold md:ml-0 ml-4 text-xl cursor-pointer hover:text-primary">
                Home
              </p>
            </Link>
            {/* <p className="font-open font-semibold text-xl cursor-pointer hover:text-primary">
              Home
            </p> */}
          </div>
          {/* // <Link to="/register"><button className='btn-primary'>Daftar</button></Link> */}
          {checkRole()}
        </nav>
      </header>
    </>
  );
};

const NavigationBarAuth = ({ photo_profile }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getOrderResult, getOrderLoading, getOrderError } = useSelector(
    (state) => state.jobseekerReducer
  );
  const {
    getOrderRecruiterResult,
    getOrderRecruiterLoading,
    getOrderRecruiterError,
  } = useSelector((state) => state.RecruiterReducer);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("@userLogin")).user === undefined) {
      dispatch(getOrder(JSON.parse(localStorage.getItem("@userLogin")).id));
    } else if (
      JSON.parse(localStorage.getItem("@userLogin")).user !== undefined
    ) {
      dispatch(
        getOrderRecruiter(
          JSON.parse(localStorage.getItem("@userLogin")).user.id
        )
      );
    }
  }, [dispatch]);

  const checkRoleProfile = () => {
    if (JSON.parse(localStorage.getItem("@userLogin")).user === undefined) {
      return (
        <>
          <Link
            to={`/profile-job-seeker/${
              JSON.parse(localStorage.getItem("@userLogin")).id
            }`}
          >
            <p>Profile</p>
          </Link>
        </>
      );
    } else if (
      JSON.parse(localStorage.getItem("@userLogin")).user !== undefined
    ) {
      return (
        <>
          <Link
            to={`/profile-recruiter/${
              JSON.parse(localStorage.getItem("@userLogin")).user.id
            }`}
          >
            <p>Profile</p>
          </Link>
        </>
      );
    }
  };

  const checkRoleEdit = () => {
    if (JSON.parse(localStorage.getItem("@userLogin")).user === undefined) {
      return (
        <>
          <Link to={`/edit-profile-job-seeker`}>
            <p>Edit Profile</p>
          </Link>
        </>
      );
    } else if (
      JSON.parse(localStorage.getItem("@userLogin")).user !== undefined
    ) {
      return (
        <>
          <Link to={`/edit-profile-recruiter`}>
            <p>Edit Profile</p>
          </Link>
        </>
      );
    }
  };

  const showImage = () => {
    if (JSON.parse(localStorage.getItem("@userLogin")).user !== undefined) {
      return `http://localhost:3001/uploads/images/${
        JSON.parse(localStorage.getItem("@userLogin")).user.profile_image
      }`;
    } else if (
      JSON.parse(localStorage.getItem("@userLogin")).user === undefined
    ) {
      return `http://localhost:3001/uploads/images/${
        JSON.parse(localStorage.getItem("@userLogin")).profile_image
      }`;
    } else {
      return require("../assets/images/avatar.webp");
    }
  };

  // const showImge = () => {
  //   if (JSON.parse(localStorage.getItem("@userLogin")).user} {
  //    return `${JSON.parse(localStorage.getItem("@userLogin")).user}`
  //   }
  // }

  const checkProfile = () => {
    return (
      <>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar w-16 h-16"
          >
            <div className="avatar">
              <img
                src={showImage()}
                //         .profile_image
                // localStorage.getItem("@userLogin")
                //   ? `http://localhost:3001/uploads/images/${
                //       JSON.parse(localStorage.getItem("@userLogin")).user
                //         .profile_image
                //     }`
                //   : require("../assets/images/avatar.webp")
                alt="profile"
                className="w-16 object-cover rounded-full"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              {/* <Link
                  to={
                    JSON.parse(localStorage.getItem("@userLogin")).user
                      .company_name
                      ? `/profile-recruiter/${
                          JSON.parse(localStorage.getItem("@userLogin")).user.id
                        }`
                      : "/profile-job-seeker"
                  }
                >
                  <p className="justify-between">Profile</p>
                </Link> */}
              {checkRoleProfile()}
            </li>
            <li>
              {/* <Link
                  to={
                    JSON.parse(localStorage.getItem("@userLogin")).user
                      .company_name
                      ? `/edit-profile-recruiter/${
                          JSON.parse(localStorage.getItem("@userLogin")).user.id
                        }`
                      : "/edit-profile-job-seeker"
                  }
                >
                  <p className="justify-between">Edit Profile</p>
                </Link> */}
              {checkRoleEdit()}
            </li>
            <li>
              <p
                onClick={() => {
                  localStorage.removeItem("@userLogin");
                  navigate("/");
                }}
              >
                Logout
              </p>
            </li>
          </ul>
        </div>
      </>
    );
  };

  const showNotif = () => {
    if (JSON.parse(localStorage.getItem("@userLogin")).user === undefined) {
      if (getOrderResult) {
        return "jobseeker";
      }
    } else if (
      JSON.parse(localStorage.getItem("@userLogin")).user !== undefined
    ) {
      if (getOrderRecruiterResult) {
        return "recruiter";
      }
    }
  };

  const handleSubmit = (id, status) => {
    const data = new URLSearchParams();
    data.append("status", status);
    dispatch(editStatus(id, data));
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <header>
      <div className="navbar container bg-base-100">
        <div className="flex-1">
          <Link to="/">
            <img
              src={require("../assets/images/logo peworld.webp")}
              alt="logo perworld"
              width="127"
              className="h-[35px]"
            />
          </Link>
          <Link to="/home">
            <p className="text-xl ml-6 hover:text-primary">Home</p>
          </Link>
        </div>
        <div className="flex-none space-x-5">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <img src={bellIcon} alt="bell-icon" width="30" height="auto" />
                <span className="badge badge-sm indicator-item"></span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-4 shadow border border-slate-400 bg-base-100 rounded-box w-96"
            >
              <div className="flex justify-between mb-2">
                <p>Notifikasi</p>
                <Link to="/notification">
                  <p>Lihat semua</p>
                </Link>
              </div>
              {showNotif() === "jobseeker" ? (
                getOrderResult.map((item) => {
                  return (
                    <div className="flex items-center space-x-2 hover:bg-gray-200 py-2 rounded-xl">
                      <div className="w-16 h-16 rounded-full bg-cover bg-center bg-no-repeat bg-[url(./assets/images/avatar.webp)]"></div>
                      <div className="">
                        <p className="text-base font-bold">
                          {item.recruiter_name}
                        </p>
                        <p className="text-sm">Mengirim pesan {item.message}</p>
                        <p className="text-xs mt-1">Tujuan : {item.purpose}</p>
                        {item.status === "draft" ? (
                          <div className="flex mt-3">
                            <button
                              className="btn-primary text-xs mr-3"
                              onClick={() => handleSubmit(item.id, "accept")}
                            >
                              Terima
                            </button>
                            <button
                              className="btn-outline-primary text-xs"
                              onClick={() => handleSubmit(item.id, "decline")}
                            >
                              Tolak
                            </button>
                          </div>
                        ) : item.status === "accept" ? (
                          <p>Diterima</p>
                        ) : (
                          <>
                            {console.log(item.status)}
                            <p>Ditolak</p>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : showNotif() === "recruiter" ? (
                getOrderRecruiterResult.map((item) => {
                  return (
                    <div className="flex items-center space-x-2 hover:bg-gray-200 py-2 rounded-xl">
                      <div className="w-16 h-16 rounded-full bg-cover bg-center bg-no-repeat bg-[url(./assets/images/avatar.webp)]"></div>
                      <div className="">
                        <p className="text-base font-bold">
                          {item.jobseeker_name}
                        </p>
                        <p className="text-sm">Menerima pesan {item.message}</p>
                        <p className="text-xs mt-1">Tujuan : {item.purpose}</p>
                        {item.status === "draft" ? (
                          <div className="flex mt-3">
                            <p>Sedang proses</p>
                          </div>
                        ) : item.status === "accept" ? (
                          <p>Diterima</p>
                        ) : (
                          <p>Ditolak</p>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <>
                  <img src={notifIcon} alt="notifImage" className="mt-5" />
                  <p className="text-base font-bold text-center mt-5">
                    Belum ada notifikasi.
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <img src={mailIcon} alt="bell-icon" width="30" height="auto" />
                <span className="badge badge-sm indicator-item"></span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-4 shadow border border-slate-400 bg-base-100 rounded-box w-96"
            >
              <div className="flex justify-between mb-2">
                <p>Mail</p>
                <p>Lihat semua</p>
              </div>
              <div className="flex items-center space-x-2 hover:bg-gray-200 py-2 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-cover bg-center bg-no-repeat bg-[url(./assets/images/avatar.webp)]"></div>
                <div className="">
                  <p className="text-base font-bold">Rehan</p>
                  <p className="text-sm">Selamat Pagi!</p>
                  <p className="text-xs mt-1">09.08</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 hover:bg-gray-200 py-2 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-cover bg-center bg-no-repeat bg-[url(./assets/images/avatar.webp)]"></div>
                <div className="">
                  <p className="text-base font-bold">Thorik</p>
                  <p className="text-sm">Selamat Siang!</p>
                  <p className="text-xs mt-1">12.05</p>
                </div>
              </div>
            </div>
          </div>
          {checkProfile()}
        </div>
      </div>
    </header>
  );
};

export { NavigationBarAuth, NavigationBarAuthLanding };
