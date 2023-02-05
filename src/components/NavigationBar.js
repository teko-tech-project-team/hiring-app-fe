// Imports
import { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [role, setRole] = useState("job-seeker");

  return (
    <>
      <header className="py-8">
        <nav className="container flex justify-between items-center">
          <img
            src={require("../assets/images/logo peworld.webp")}
            alt="logo perworld"
            width="127"
            className="h-[35px]"
          />
          <div className="flex space-x-5">
            <select
              name=""
              id=""
              className="rounded-lg py-3"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="job-seeker" className="py-5">
                Sebagai pekerja
              </option>
              <option value="recruiter" className="py-5">
                Sebagai perekrut
              </option>
            </select>
            <Link to={`/login-${role}`}>
              <button className="btn-outline-primary">Masuk</button>
            </Link>
            <Link to={`/register-${role}`}>
              <button className="btn-primary">Daftar</button>
            </Link>
            {/* <Link to="/login">
              <button className="btn-outline-primary">Masuk</button>
            </Link>
            <Link to="/register">
              <button className="btn-primary">Daftar</button>
            </Link> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavigationBar;
