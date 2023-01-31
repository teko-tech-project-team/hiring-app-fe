import PortofolioItem from "./PortfolioItem";

const ProfilePortofolio = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-x-5 gap-y-8 py-6 font-open">
        <PortofolioItem
          name="Reminder App"
          image={require("../../assets/images/portofolio1.webp")}
        />
        <PortofolioItem
          name="Reminder App"
          image={require("../../assets/images/portofolio1.webp")}
        />
        <PortofolioItem
          name="Reminder App"
          image={require("../../assets/images/portofolio1.webp")}
        />
        <PortofolioItem
          name="Reminder App"
          image={require("../../assets/images/portofolio1.webp")}
        />
        <PortofolioItem
          name="Reminder App"
          image={require("../../assets/images/portofolio1.webp")}
        />
      </div>
    </>
  );
};

export default ProfilePortofolio;
