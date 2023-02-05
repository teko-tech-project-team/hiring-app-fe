import { Link } from "react-router-dom";
import mapPinIcon from "../../assets/icons/map-pin.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import editIcon from "../../assets/icons/edit-pen-icon.svg";
import { useEffect, useState } from "react";
import { NavigationBarAuth } from "../../components/NavigationBarAuth";
import NavigationBar from "../../components/NavigationBar";
import {
  FormEditJobseeker,
  FormPengalamanKerja,
  FormPortofolio,
  FormSkill,
} from "./FormEditJobseeker";
import { useDispatch } from "react-redux";

const EditProfileJobSeeker = () => {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();

  const checkAuth = () => {
    if (isLogin) {
      return <NavigationBarAuth />;
    } else {
      return <NavigationBar />;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      if (localStorage.getItem("@userLogin")) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    }
  }, []);

  const handleImageChange = (e) => {
    dispatch({ type: "IMAGE", profile_image: e.target.files });
  };

  return (
    <>
      {checkAuth()}
      <div className="w-full h-[50vh] bg-primary">
        <div className="container grid grid-cols-12 gap-x-20 py-20 px-0 ">
          <div className="col-span-4 font-open">
            <div className="bg-white p-8 rounded-xl border-4">
              <div className="w-60 h-60 mx-auto rounded-full bg-primary bg-cover bg-center bg-no-repeat bg-[url(./assets/images/avatar.webp)]"></div>
              <input
                type="file"
                name="profile_image"
                id="profile_image"
                className="hidden"
                onChange={(e) => handleImageChange(e)}
              />
              <label
                htmlFor="profile_image"
                className="flex text-[#9EA0A5] font-semibold text-2xl mt-6 justify-center cursor-pointer"
              >
                <img src={editIcon} alt="edit-icon" className="mr-2" />
                Edit
              </label>
              <h1 className="mt-8 text-2xl font-semibold text-[#1F2A36]">
                Louis Tomlinson
              </h1>
              <h3 className="text-base my-1">Web Developer</h3>
              <h3 className="text-base text-[#9EA0A5] mb-4">Freelancer</h3>
              <p className="flex text-base text-[#9EA0A5] mb-2">
                <img src={mapPinIcon} alt="map-pin-icon" className="mr-2" />{" "}
                Purwokerto, Jawa Tengah
              </p>
              <p className="flex text-base text-[#9EA0A5] mb-2">
                <img src={phoneIcon} alt="phone-icon" className="mr-2" />
                0812 - 3456 - 789
              </p>
              <p className="flex text-base text-[#9EA0A5] mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </p>
            </div>
            <button className="btn-primary mt-5 w-full">Ubah Password</button>
            <button className="btn-outline-primary mt-5 w-full">Kembali</button>
            <FormSkill />
            <div className="border-2 bg-white rounded-xl p-6 mt-6">
              <h1 className="text-[30px] card-title mb-3 pt-10 pb-3 pl-10">
                Pengalaman Kerja
              </h1>
              <hr className="border-t border-[#C4C4C4]" />
            </div>
          </div>
          {/* FORM */}
          <div className="col-span-8">
            <FormEditJobseeker />
            <FormPengalamanKerja />
          </div>
          <div className="col-span-12">
            <FormPortofolio />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfileJobSeeker;
