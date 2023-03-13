import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const NotFound = () => {
  return (
    <>
      {/*<div className="flex flex-row">
        <div className="w-full h-full">
          <img
            src={require("../../assets/images/404-2.jpg")}
            className=""
            alt="img"
          />
        </div>
      </div>
      <div className="flex justify-center mt-[-75px]">
        <button className="bg-secondary text-white text-xl font-bold w-1/4 h-[8vh] rounded-lg">
          Back to Home
        </button>
      </div>{" "}
      */}
      <div className="flex flex-row justify-center md:p-12 p-6">
        <div className="card md:w-1/2 w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src={require("../../assets/images/404-2.jpg")}
              className=""
              alt="img"
            />
          </figure>
          <div className="card-body border">
            <div className="card-actions justify-center">
              {/* <button className='bg-secondary text-white text-xl font-bold w-1/4 h-[8vh] rounded-lg'>
                Back to Home
              </button> */}
              <Link to="/home">
                <button className="bg-secondary border-none btn-secondary">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
