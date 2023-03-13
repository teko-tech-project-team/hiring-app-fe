// Imports
import { useSelector } from "react-redux";
import suitCase from "../../assets/icons/suitcase.svg";

const ProfileExperience = () => {
  const { getJobseekerResult, getJobseekerLoading, getJobseekerError } =
    useSelector((state) => state.jobseekerReducer);
  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      {getJobseekerResult
        ? getJobseekerResult.job_experience.map((experience) => {
            return (
              <>
                <div className="flex items-start mt-6 space-x-8 p-3 border-b-2 border-[#E2E5ED]">
                  <img src={suitCase} alt="suitcase" />
                  <div className="font-open">
                    <p className="text-xl text-[#1F2A36] font-semibold">
                      {experience.position}
                    </p>
                    <p className="text-base text-[#1F2A36]">
                      {experience.company_name}
                    </p>
                    <p className="text-base text-[#9EA0A5]">
                      {experience.date_in.split("-")[1]}{" "}
                      {Month[parseInt(experience.date_in.split("-")[2]) - 1]}{" "}
                      {experience.date_in.split("-")[0]} -{" "}
                      {experience.date_out.split("-")[1]}{" "}
                      {Month[parseInt(experience.date_out.split("-")[2]) - 1]}{" "}
                      {experience.date_out.split("-")[0]}
                    </p>
                    <p className="mt-3">{experience.job_description}</p>
                  </div>
                </div>
              </>
            );
          })
        : ""}
    </>
  );
};

export default ProfileExperience;
