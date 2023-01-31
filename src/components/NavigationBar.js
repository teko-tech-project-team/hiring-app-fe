// Imports
import { Link } from "react-router-dom";

const NavigationBar = () => {
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
            <Link to="/login">
              <button className="btn-light">Masuk</button>
            </Link>
            {/* <button className="btn-primary btn-outline-primary">Masuk</button> */}
            <Link to="/register">
              <button className="btn-primary">Daftar</button>
            </Link>
            {/* <button className="btn-primary">Daftar</button> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavigationBar;
