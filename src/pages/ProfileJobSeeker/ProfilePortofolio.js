import { useSelector } from "react-redux";
import PortofolioItem from "./PortfolioItem";

const ProfilePortofolio = () => {
  const { getJobseekerResult, getJobseekerLoading, getJobseekerError } =
    useSelector((state) => state.jobseekerReducer);

  return (
    <>
      <div className="grid grid-cols-12 gap-x-5 gap-y-8 py-6 font-open">
        {getJobseekerResult && getJobseekerResult.portfolio.length !== 0
          ? getJobseekerResult.portfolio.map((portfolio) => {
              return (
                <PortofolioItem
                  name={portfolio.app_name}
                  image={`https://res.cloudinary.com/djc3odcxg/image/upload/v1678631683/${portfolio.portfolio_image[0].filename}.webp`}
                />
              );
            })
          : ""}
      </div>
    </>
  );
};

export default ProfilePortofolio;
