const HeroBanner1 = () => {
  return (
    <>
      <div className="flex flex-between my-8 container font-open space-x-36">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl leading-snug font-semibold">
            Talenta terbaik negeri untuk perubahan revolusi 4.0
          </h1>
          <p className="text-base mt-6 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <button className="btn-primary w-1/2">Mulai Dari Sekarang</button>
        </div>
        <img
          src={require("../assets/images/banner1.webp")}
          alt="hero-banner1"
        />
      </div>
    </>
  );
};

export default HeroBanner1;
