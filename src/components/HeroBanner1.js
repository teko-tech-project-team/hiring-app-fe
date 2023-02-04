const HeroBanner1 = () => {
  return (
    <>
      <div className="container">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col-reverse my-10 lg:flex-row">
            <div>
              <h1 className="text-5xl leading-snug font-semibold" data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-duration="1000">
                Talenta terbaik negeri untuk perubahan revolusi 4.0
              </h1>
              <p className="text-base mt-6 mb-12" data-aos="fade-zoom-in" data-aos-duration="2000" data-aos-easing="linear" data-aos-anchor-placement="top-bottom">
                menghubungkan bisnis dengan bakat dan meningkatkan taraf hidup melalui karier yang lebih baik.
              </p>
              <button className="btn btn-primary md:w-1/2" data-aos="fade-zoom-in" data-aos-duration="1300" data-aos-anchor-placement="top-bottom">
                Mulai Dari Sekarang
              </button>
            </div>
            <div>
              <img src={require("../assets/images/banner1.webp")} className="md:h-[35rem] md:w-[70rem]" data-aos="fade-zoom-in" data-aos-duration="2300" alt="hero-banner1" />
            </div>
          </div>
        </div>
      </div>
      {/* <header className="flex flex-between  my-24 container font-open">
        <div className="flex sm:flex-row lg:flex-col justify-center">
          <div>
            <h1 className="text-5xl leading-snug font-semibold">Talenta terbaik negeri untuk perubahan revolusi 4.0</h1>
            <p className="text-base mt-6 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            <button className="btn-primary w-1/2">Mulai Dari Sekarang</button>
          </div>
        </div>
        <img src={require("../assets/images/banner1.webp")} className="h-[32rem]" alt="hero-banner1" />
      </header> */}
    </>
  );
};

export default HeroBanner1;
