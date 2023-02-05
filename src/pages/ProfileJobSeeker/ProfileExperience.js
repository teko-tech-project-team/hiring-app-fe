// Imports
import { useSelector } from "react-redux";
import suitCase from "../../assets/icons/suitcase.svg";

const ProfileExperience = () => {
  const { getJobseekerResult, getJobseekerLoading, getJobseekerError } =
    useSelector((state) => state.jobseekerReducer);

  return (
    <>
      {/* <div className="flex items-start mt-6 space-x-8 p-3 border-b-2 border-[#E2E5ED]">
        <img src={suitCase} alt="suitcase" />
        <div className="font-open">
          <p className="text-xl text-[#1F2A36] font-semibold">Engineer</p>
          <p className="text-base text-[#1F2A36]">Tokopedia</p>
          <p className="text-base text-[#9EA0A5]">
            July 2019 - January 2020 6 months
          </p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
            lacus fringilla, vestibulum risus at.
          </p>
        </div>
      </div>
      <div className="flex items-start mt-6 space-x-8 p-3 border-b-2 border-[#E2E5ED]">
        <img src={suitCase} alt="suitcase" />
        <div className="font-open">
          <p className="text-xl text-[#1F2A36] font-semibold">Web Developer</p>
          <p className="text-base text-[#1F2A36]">Tokopedia</p>
          <p className="text-base text-[#9EA0A5]">
            July 2019 - January 2020 6 months
          </p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
            lacus fringilla, vestibulum risus at.
          </p>
        </div>
      </div>
      <div className="flex items-start mt-6 space-x-8 p-3 border-b-2 border-[#E2E5ED]">
        <img src={suitCase} alt="suitcase" />
        <div className="font-open">
          <p className="text-xl text-[#1F2A36] font-semibold">
            Mobile Developer
          </p>
          <p className="text-base text-[#1F2A36]">Tokopedia</p>
          <p className="text-base text-[#9EA0A5]">
            July 2019 - January 2020 6 months
          </p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
            lacus fringilla, vestibulum risus at.
          </p>
        </div>
      </div> */}
      {getJobseekerResult && getJobseekerResult.experience.length !== 0
        ? getJobseekerResult.experience.map((experience) => {
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
                      {experience.date_in} - {experience.date_out}
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
