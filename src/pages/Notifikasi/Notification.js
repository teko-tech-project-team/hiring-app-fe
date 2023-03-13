import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import { NavigationBarAuth } from "../../components/NavigationBarAuth";
import { getOrder } from "../../store/actions/actionJobseeker";
import { getOrderRecruiter } from "../../store/actions/actionRecruiter";
import notifIcon from "../../assets/icons/notif.svg";

const Notification = () => {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const { getOrderResult, getOrderLoading, getOrderError } = useSelector(
    (state) => state.jobseekerReducer
  );
  const {
    getOrderRecruiterResult,
    getOrderRecruiterLoading,
    getOrderRecruiterError,
  } = useSelector((state) => state.RecruiterReducer);

  const checkAuth = () => {
    if (isLogin) {
      return <NavigationBarAuth />;
    } else {
      return <NavigationBar />;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

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

  return (
    <>
      {checkAuth()}
      <ul className="menu bg-base-100 w-[35vw] flex justify-center items-center rounded-box p-10 mx-auto divide-y divide-slate-300">
        {showNotif() === "jobseeker" ? (
          getOrderResult.map((item) => {
            console.log(item);
            return (
              <>
                <li>
                  <Link to="#">
                    <img
                      src={``}
                      className="rounded-full w-[5vw] h-[10vh]"
                      alt=""
                    />
                    <p>
                      {" "}
                      <span className="font-bold">PT Jaya Abadi</span> mengajak
                      Anda untuk melakukan sesi Interview
                    </p>
                  </Link>
                </li>
              </>
            );
          })
        ) : showNotif() === "recruiter" ? (
          getOrderRecruiterResult.map((item) => {
            return (
              <>
                <li>
                  <Link to="#">
                    <img
                      src={``}
                      className="rounded-full w-[5vw] h-[10vh]"
                      alt=""
                    />
                    <p>
                      {" "}
                      <span className="font-bold">PT Jaya Abadi</span> mengajak
                      Anda untuk melakukan sesi Interview
                    </p>
                  </Link>
                </li>
              </>
            );
          })
        ) : getOrderLoading || getOrderRecruiterLoading ? (
          <p className="text-xl-text center mt-5 text-2xl">Loading ...</p>
        ) : (
          <>
            <img src={notifIcon} alt="notif" className="mt-6 h-52" />
            <p className="text-xl-text center mt-6 text-2xl">
              Belum ada notifikasi.
            </p>
          </>
        )}
      </ul>
      <Footer />
    </>
  );
};

export default Notification;
