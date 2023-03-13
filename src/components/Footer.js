const Footer = () => {
  return (
    <>
      <div className="bg-primary text-white">
        <footer className="container pt-12 ">
          <div className="border-b-[1px] border-solid border-white">
            <img src={require("../assets/images/logoLight.png")} className="h-[3rem] my-5" alt="img" />
            <p className="font-bold mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              In euismod ipsum et dui rhoncus auctor.
            </p>
          </div>
          <div className="pb-10 mt-5">
            <div className="flex flex-col-reverse md:flex-row justify-between ">
              <div className="mt-3">
                <p>2020 Pewworld. All right reserved</p>
              </div>
              <div className="flex flex-col md:flex-row">
                <a className="mr-5">Telephone</a>
                <a>Email</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
