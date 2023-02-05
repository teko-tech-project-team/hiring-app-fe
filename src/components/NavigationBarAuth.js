// Imports
import { Link } from "react-router-dom";
import bellIcon from "../assets/icons/bell-icon.svg";
import mailIcon from "../assets/icons/mail-icon.svg";

const NavigationBarAuthLanding = () => {
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
              <p className="font-open font-semibold text-xl cursor-pointer hover:text-primary">
                Home
              </p>
            </Link>
            {/* <p className="font-open font-semibold text-xl cursor-pointer hover:text-primary">
              Home
            </p> */}
          </div>
          {/* // <Link to="/register"><button className='btn-primary'>Daftar</button></Link> */}
          <Link
            to={
              JSON.parse(localStorage.getItem("@userLogin")).company_name
                ? "/profile-recruiter"
                : "/profile-job-seeker"
            }
          >
            <button className="btn-primary">Profile</button>
          </Link>
        </nav>
      </header>
    </>
  );
};

const NavigationBarAuth = ({ photo_profile }) => {
  const checkProfile = () => {
    if (photo_profile === undefined) {
      return (
        <>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar w-16 h-16"
            >
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <Link to="/">
                    <img
                      src={require("../assets/images/avatar.webp")}
                      alt="profile"
                    />
                  </Link>
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  to={
                    JSON.parse(localStorage.getItem("@userLogin")).company_name
                      ? "/profile-recruiter"
                      : "/profile-job-seeker"
                  }
                >
                  <p className="justify-between">Profile</p>
                </Link>
              </li>
              <li>
                <Link
                  to={
                    JSON.parse(localStorage.getItem("@userLogin")).company_name
                      ? "/edit-profile-recruiter"
                      : "/edit-profile-job-seeker"
                  }
                >
                  <p className="justify-between">Edit Profile</p>
                </Link>
              </li>
              <li>
                <p>Logout</p>
              </li>
            </ul>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar w-16 h-16"
            >
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={`${photo_profile}`} alt="profile" />
                </div>
              </div>
            </label>
            <div
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <p>Profile</p>
              <p>Logout</p>
            </div>
          </div>
        </>
      );
    }
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
        </div>
        <div className="flex-none space-x-5">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <img src={bellIcon} alt="bell-icon" width="30" height="auto" />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-4 shadow border border-slate-400 bg-base-100 rounded-box w-96"
            >
              <div className="flex justify-between mb-2">
                <p>Notifikasi</p>
                <p>Lihat semua</p>
              </div>
              <div className="flex items-center space-x-2 hover:bg-gray-200 py-2 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-cover bg-center bg-no-repeat bg-[url(./assets/images/avatar.webp)]"></div>
                <div className="">
                  <p className="text-base font-bold">Rehan</p>
                  <p className="text-sm">Baru saja melihat profile anda!</p>
                  <p className="text-sm">09.08</p>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <img src={mailIcon} alt="bell-icon" width="30" height="auto" />
                <span className="badge badge-sm indicator-item">8</span>
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
